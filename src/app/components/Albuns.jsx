import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function AlbumItem({ imageSrc, title }) {
  return (
    <a
      href="#"
      className="bg-white/10  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
    >
      <Image src={imageSrc} width={80} height={80} alt="capa do album" />
      <strong>{title}</strong>
      <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
        <Play fill="bg-black" />
      </button>
    </a>
  );
}

export function Albuns({ albums }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
      {albums.map((album, index) => (
        <AlbumItem key={index} imageSrc={album.imageSrc} title={album.title} />
      ))}
    </div>
  );
}
