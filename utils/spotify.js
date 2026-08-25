import snapshot from "./playlists.json";

/* Spotify playlists for the homepage "Tune In" section.

   Server-only. SPOTIFY_CLIENT_SECRET must never reach the browser, so this is
   imported from getStaticProps and nowhere else — never from a component.

   Client Credentials, not Authorization Code: an app-level token, no user
   consent, nothing that expires permanently and no refresh token to babysit.
   The trade is that it reads PUBLIC playlists only, which is what this section
   shows. A playlist set to private does not error — it simply is not returned,
   and the carousel comes back one card shorter.

   No SDK. spotify-web-api-node was last published in 2021 and wrapped exactly
   the two calls below; Node 20+ has global fetch. */

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API = "https://api.spotify.com/v1";

/* Only the fields a card needs. Asking for these keeps each response small
   and, more usefully, makes it obvious what the card is allowed to render. */
const FIELDS = "id,name,description,images,external_urls,tracks(total)";

/* Curated order. Spotify returns playlists in its own order, which shifts as
   you edit them — this pins both which playlists appear and their sequence. */
const ORDER = snapshot.activePlaylists.map((entry) => entry.id);

/* Only the fields the card renders. Whatever getStaticProps returns is
   serialised into the page, so shipping raw Spotify objects would put a few
   hundred KB of href/uri/snapshot_id noise in the HTML for no reason. Same
   discipline as toCard() in data/case-studies.js. */
function toCard(playlist) {
  const image = playlist.images && playlist.images[0];
  return {
    id: playlist.id,
    name: playlist.name,
    url: playlist.external_urls ? playlist.external_urls.spotify : null,
    image: image ? image.url : null,
    tracks: playlist.tracks ? playlist.tracks.total : null,
    // Empty on 7 of 10 today, so the card treats it as optional
    description: playlist.description || "",
  };
}

/* Sort into ORDER and drop anything not on the list. Only used for the
   committed snapshot now; the live path fetches ORDER directly. */
function curate(playlists) {
  const byId = new Map(playlists.map((item) => [item.id, item]));
  return ORDER.map((id) => byId.get(id))
    .filter(Boolean)
    .map(toCard);
}

async function getAccessToken() {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!id || !secret) {
    throw new Error(
      "SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET are not set — see .env.example"
    );
  }

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString(
        "base64"
      )}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error(
      `token request failed: ${response.status} ${response.statusText}`
    );
  }

  const { access_token: token } = await response.json();
  if (!token) throw new Error("token request returned no access_token");
  return token;
}

/* Always resolves. On any failure it returns the committed snapshot rather
   than an empty list: the section then shows slightly stale track counts
   instead of vanishing, and ISR picks up live data on the next revalidation.

   This differs on purpose from components/Writing.jsx, which renders nothing
   when Prismic is unreachable — there we genuinely have no data, here we have
   a real one on disk. */
export async function getPlaylists() {
  try {
    const token = await getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    /* Fetched one by one rather than from /users/{id}/playlists, which pages
       at 50 and is ordered by Spotify. The account has 81 playlists and none
       of the ten curated ones were in the first page, so the profile listing
       returned a full 50 items and matched zero of them. Ten requests, run
       together, are cheap at build time and cannot drift as the account grows
       — and they also pick up a playlist that is public but not added to the
       profile, which the listing endpoint silently omits. */
    const settled = await Promise.all(
      ORDER.map(async (id) => {
        const response = await fetch(
          `${API}/playlists/${id}?fields=${encodeURIComponent(FIELDS)}`,
          { headers }
        );
        if (!response.ok) {
          console.warn(
            `[spotify] playlist ${id}: ${response.status} ${response.statusText}`
          );
          return null;
        }
        return toCard(await response.json());
      })
    );

    // Order is preserved by Promise.all, so ORDER still drives the sequence.
    const live = settled.filter(Boolean);

    // Zero here means every single request failed — a credential or network
    // problem rather than a real state, so prefer the snapshot.
    if (!live.length) throw new Error("every playlist request failed");

    return live;
  } catch (error) {
    console.warn(
      `[spotify] falling back to utils/playlists.json: ${error.message}`
    );
    return curate(snapshot.playlists);
  }
}
