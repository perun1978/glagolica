import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex shrink-0 flex-wrap items-end justify-between gap-4 border-b border-line px-4 py-4 sm:px-6">
      <div className="flex items-baseline gap-4">
        <p className="font-display text-2xl tracking-tight text-parchment sm:text-3xl">
          Głagolica
        </p>
        <p className="hidden text-sm text-muted sm:block">Mów bukwami — rejestr jest tylko przykładem</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="line">hypothesis</Badge>
        <Badge variant="mute">GLAG_FUNCTION_REGISTRY</Badge>
        <Badge variant="mute">canon: false</Badge>
      </div>
    </header>
  );
}
