import React from "react";
import playlistsMeta from "../utils/playlists.json";

const idsArr = [];
playlistsMeta.activePlaylists.forEach((meta) => {
  idsArr.push(meta.id);
});

export default function Playlists() {
  const resPlaylists = playlistsMeta.playlists.filter((item) =>
    idsArr.includes(item.id)
  );

  return (
    <section
      id="playlists"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h3 className="text-center font-semibold text-2xl lg:text-4xl pt-12">
        Tune In 🎧
      </h3>
      <p className="text-center font-medium">
        Uncover the sounds that inspire me and fuel my creativity. Check out my
        curated Spotify playlists.
      </p>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mt-8 font-light container">
        {resPlaylists.map((item) => (
          <a
            href={item.external_urls.spotify}
            target="_blank"
            key={item.id}
            // data-aos="fade-in"
            className="flex items-center border-[1.5px] border-gray-100 dark:border-brownish-purple rounded-md"
          >
            <img
              src={item.images[0].url}
              alt={item.name}
              className="rounded-l-md w-1/3 col-span-4"
            />
            <div className="px-4 py-2 col-span-8">
              <h4 className="text-lg lg:text-2xl font-header font-semibold">
                {item.name}
              </h4>
              <i className="block text-xs lg:text-sm font-light my-2">
                {item.description}
              </i>
              <p className="text-xs lg:text-sm font-normal">
                {item.tracks.total} tracks
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
