/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* Removed on the move to Next 16:
     - next-pwa: last published in 2022 and pinned to the webpack build, so it
       cannot run under Turbopack, which is the default bundler from 16. The
       service worker is gone; public/manifest.json stays, so the site is still
       installable and keeps its icons and theme colour.
     - swcMinify: no longer an option, SWC minification is the only behaviour.
     - images.domains: replaced upstream by images.remotePatterns, and dropped
       entirely here because nothing in this app uses next/image. */
};

module.exports = nextConfig;
