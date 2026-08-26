import { CATEGORIES, LIGATURE_TWINS, PROGRAMS } from "@/lib/glag/programs";
import { OPERATOR_MAP } from "@/lib/glag/operators";
import { useRegistry } from "@/lib/glag/store";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import type { ReactNode } from "react";
import { Glyph } from "./Glyph";

export function ProgramList() {
  const selectedN = useRegistry((s) => s.selectedN);
  const select = useRegistry((s) => s.select);
  const search = useRegistry((s) => s.search);
  const setSearch = useRegistry((s) => s.setSearch);
  const category = useRegistry((s) => s.category);
  const setCategory = useRegistry((s) => s.setCategory);
  const filterOp = useRegistry((s) => s.filterOp);
  const setFilterOp = useRegistry((s) => s.setFilterOp);
  const starred = useRegistry((s) => s.starred);

  const q = search.trim().toLowerCase().replace(/^\//, "");

  const list = PROGRAMS.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (filterOp && !p.ops.includes(filterOp)) return false;
    if (!q) return true;
    const hay = `${p.cmd} ${p.n} ${p.movement} ${p.gloss} ${p.ops.map((id) => OPERATOR_MAP[id].latin).join(" ")}`.toLowerCase();
    return hay.includes(q) || p.ops.some((id) => OPERATOR_MAP[id].glyph === search.trim());
  });

  return (
    <section className="flex h-full min-h-0 flex-col">
      <header className="mb-3 flex items-baseline justify-between gap-3 px-1">
        <h2 className="font-display text-xl tracking-tight text-parchment">Rejestr</h2>
        <span className="tabular-nums text-[0.6875rem] uppercase tracking-[0.18em] text-faint">
          {list.length} / 99
        </span>
      </header>

      <label className="sr-only" htmlFor="glag-search">
        Szukaj programu
      </label>
      <input
        id="glag-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Szukaj /komendy, bukwy, ruchu…"
        className="mb-3 h-10 w-full rounded-lg bg-raised px-3 text-sm text-parchment shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      />

      <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1">
        <CatChip active={category === "all"} onClick={() => setCategory("all")}>
          Wszystkie
        </CatChip>
        {CATEGORIES.map((c) => (
          <CatChip
            key={c.id}
            active={category === c.id}
            onClick={() => setCategory(c.id)}
          >
            {c.range}
          </CatChip>
        ))}
      </div>

      {filterOp && (
        <div className="mb-2 flex items-center justify-between rounded-md bg-accent/10 px-2 py-1.5 text-xs text-accent">
          <span>
            Operator {OPERATOR_MAP[filterOp].latin}{" "}
            <Glyph className="ml-1 align-middle text-base">{OPERATOR_MAP[filterOp].glyph}</Glyph>
          </span>
          <button type="button" className="underline-offset-2 hover:underline" onClick={() => setFilterOp(null)}>
            wyczyść
          </button>
        </div>
      )}

      <ul className="min-h-0 flex-1 space-y-0.5 overflow-y-auto pr-1">
        {list.length === 0 && (
          <li className="px-2 py-8 text-center text-sm text-muted">Brak programów dla tego filtra.</li>
        )}
        {list.map((p) => {
          const on = p.n === selectedN;
          const twin = LIGATURE_TWINS.get(p.n);
          const isStar = starred.includes(p.n);
          return (
            <li key={p.n}>
              <button
                type="button"
                onClick={() => select(p.n)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg px-2 py-2.5 text-left transition-[background-color] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                  on ? "bg-raised shadow-[var(--shadow-border)]" : "hover:bg-raised/70",
                )}
              >
                <span className="w-6 shrink-0 pt-0.5 text-right font-mono text-xs tabular-nums text-faint">
                  {String(p.n).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-sm text-parchment">{p.cmd}</span>
                    {isStar && <Star className="size-3 fill-accent text-accent" />}
                    {twin && (
                      <span className="text-[0.625rem] uppercase tracking-wider text-faint">
                        ligatura
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-muted">
                    {p.ops.map((id, i) => (
                      <Glyph key={`${id}-${i}`} className="text-[0.95rem]">
                        {OPERATOR_MAP[id].glyph}
                      </Glyph>
                    ))}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function CatChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem] tracking-wide transition-[background-color,color] duration-[var(--motion-quick)]",
        active ? "bg-parchment text-ink" : "bg-raised text-muted hover:text-parchment",
      )}
    >
      {children}
    </button>
  );
}
