import SpotifyWebApi from "spotify-web-api-node";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
});

export default async function handler(req, res) {
  try {
    await spotifyApi.clientCredentialsGrant().then((data) => {
      spotifyApi.setAccessToken(data.body.access_token);
    });

    const { body } = await spotifyApi.getUserPlaylists(
      "zw88cjekc0mhq36xvt929pr1v"
    );

    res.status(200).json(body);
  } catch (error) {
    console.error("Error fetching playlists:", error);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
}
