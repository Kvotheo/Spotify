import React from "react"
import { Home as HomeIcon, Search, Library } from "lucide-react"

export function SideBar() {
  return (
    <aside className="w-48 bg-zinc-950 p-4 mr-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-8">
        <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
          <HomeIcon size={18} />
          Home
        </a>
        <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
          <Search size={18} />
          Search
        </a>
        <a href="#" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
          <Library size={18} />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Musicas curtidas
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist
        </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top 10
        </a>
      </nav>
    </aside>
  )
}
