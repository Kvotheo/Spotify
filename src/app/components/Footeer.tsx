import React from "react"
import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-zinc-800 border-t border-zinc-700 p-1 md:p-2 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/joji.png" className="w-full" width={40} height={40} alt="capa do album" />
        <div className="flex flex-col gap-1">
          <strong className="font-normal text-sm">Teste</strong>
          <span className="text-xs text-zinc-400">Joji</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-3">
          <Shuffle size={16} />
          <SkipBack size={16} />
          <button className="w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-white text-black">
            <Play size={16} fill="bg-black" />
          </button>
          <SkipForward size={16} />
          <Repeat size={16} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-0.5 rounded-full w-16 md:w-40 bg-zinc-600">
            <div className="bg-zinc-200 w-5 h-0.5 rounded"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Mic2 size={16} />
        <LayoutList size={16} />
        <Laptop2 size={16} />
        <div className="flex items-center gap-1">
          <Volume size={16} />
          <div className="h-0.5 rounded-full w-10 md:w-16 bg-zinc-600">
            <div className="bg-zinc-200 w-4 h-0.5 rounded"></div>
          </div>
        </div>
        <Maximize2 size={16} />
      </div>
    </footer>
  )
}
