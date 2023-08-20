import { ChevronRight, ChevronLeft } from "lucide-react" //o bug do next nao deixa usar a versao atualizada, realizar o downgrade:npm install lucide-react@0.263.1


export function ChevronButton() {
    return(
        <div className="flex items-center gap-2">
        <button className="rounded-full bg-black/40 p-1 mt-3 hover:bg-white/20 transition-colors">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1 mt-3 hover:bg-white/20 transition-colors">
          <ChevronRight />
        </button>
      </div>
    )
}