import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next/pages";

/* The repository name, not the full endpoint. @prismicio/client v7 builds the
   endpoint itself, so sm.json is no longer needed just to hold a URL — the
   Slice Machine scaffolding that owned it was unused template code and is
   gone. This value is public: it is already in the client bundle. */
export const repositoryName = "ejeiokekeemmanuel";

/* Kept for whenever previews get wired up properly — there is no preview API
   route in pages/api yet, so nothing calls this today. */
export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/";
    case "post":
      return `/blog/${doc.uid}`;
    case "page":
      return `/${doc.uid}`;
    default:
      return null;
  }
}

export function createClient({ previewData, req, ...config } = {}) {
  const client = prismic.createClient(repositoryName, config);

  enableAutoPreviews({ client, previewData, req });

  return client;
}
