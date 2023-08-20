import React from "react"
import { SideBar } from "./components/Sidebar"
import { Footer } from "./components/Footeer"
import { Albuns } from "./components/Albuns"
import { ChevronButton } from "./components/ChevronButton"
import { AlbumsSection } from "./components/AlbumsSection"

const allAlbums = [
  { imageSrc: "/joji.png", title: "Joji", description: "Album Joji" },
  { imageSrc: "/pinkguy.png", title: "Pink Guy", description: "Album Pink Guy" },
  { imageSrc: "/racionais.png", title: "Racionais", description: "Album Racionais" },
]

// Duplicando os álbuns para exibi-los duas vezes
const displayedAlbums = [...allAlbums, ...allAlbums]

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-4 md:p-15 overflow-y-auto">
          <ChevronButton />

          <h1 className="font-bold text-3xl mt-3 p-2">Good Afternoon</h1>

          <Albuns albums={displayedAlbums} />

          <h2 className="font-bold text-2xl mt-3 p-2">Feito por João Vitor</h2>

          <AlbumsSection albums={displayedAlbums} />
        </main>
      </div>
      <Footer />
    </div>
  )
}
;``
