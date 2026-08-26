import { OPERATORS } from "@/lib/glag/operators";
import { programsUsing } from "@/lib/glag/programs";
import { useRegistry } from "@/lib/glag/store";
import type { OperatorId } from "@/lib/glag/types";
import { cn } from "@/lib/utils";
import { Glyph } from "./Glyph";

export function Alphabet({
  active,
  onCompose,
}: {
  active: OperatorId[];
  onCompose: (id: OperatorId) => void;
}) {
  const filterOp = useRegistry((s) => s.filterOp);
  const setFilterOp = useRegistry((s) => s.setFilterOp);
  const mode = useRegistry((s) => s.mode);

  return (
    <section className="flex h-full min-h-0 flex-col">
      <header className="mb-3 flex items-baseline justify-between gap-3 px-1">
        <h2 className="font-display text-xl tracking-tight text-parchment">Bukwy</h2>
        <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-faint">
          {OPERATORS.length} operatorów
        </span>
      </header>
      <p className="mb-3 px-1 text-xs leading-relaxed text-muted">
        Bukwa zmienia pole. Ciąg bukw jest wypowiedzią.{" "}
        {mode === "speak"
          ? "Dotknij, aby mówić — każda bukwa to ruch, nie litera."
          : "Dotknij, aby filtrować rejestr, albo przejdź do Mów."}
      </p>
      <ul className="min-h-0 flex-1 space-y-0.5 overflow-y-auto pr-1">
        {OPERATORS.map((op) => {
          const on = active.includes(op.id);
          const filtered = filterOp === op.id;
          const count = programsUsing(op.id).length;
          return (
            <li key={op.id}>
              <button
                type="button"
                onClick={() => {
                  if (mode === "speak") {
                    onCompose(op.id);
                    return;
                  }
                  setFilterOp(filtered ? null : op.id);
                }}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left transition-[background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                  filtered
                    ? "bg-accent/15 shadow-[var(--shadow-border-hover)]"
                    : on
                      ? "bg-raised"
                      : "hover:bg-raised/70",
                )}
              >
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-md",
                    on || filtered ? "bg-accent/20 text-parchment" : "bg-ink text-muted",
                  )}
                >
                  <Glyph className="text-xl">{op.glyph}</Glyph>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-medium tracking-wide text-parchment">
                      {op.latin}
                    </span>
                    <span className="tabular-nums text-[0.6875rem] text-faint">{count}</span>
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{op.verb}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
