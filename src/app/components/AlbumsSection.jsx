import React from "react";
import Image from "next/image";

export function AlbumItem({ imageSrc, title, description }) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded-md p-3 rounde flex flex-col gap-2 hover:bg-white/10"
    >
      <Image src={imageSrc} className="w-full" width={80} height={80} alt="capa do album" />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sn text-zinc-500">{description}</span>
    </a>
  );
}

export function AlbumsSection({ albums }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
      {albums.map((album, index) => (
        <AlbumItem
          key={index}
          imageSrc={album.imageSrc}
          title={album.title}
          description={album.description}
        />
      ))}
    </div>
  );
}
