import { OPERATOR_MAP } from "@/lib/glag/operators";
import type { OperatorId } from "@/lib/glag/types";
import { cn } from "@/lib/utils";
import { Glyph } from "./Glyph";

export function Ligature({
  ops,
  step,
  onStep,
}: {
  ops: OperatorId[];
  step: number;
  onStep: (i: number) => void;
}) {
  if (ops.length === 0) {
    return (
      <p className="rounded-xl bg-raised px-4 py-6 text-center text-sm text-muted">
        Wybierz program albo złóż własny ciąg bukw.
      </p>
    );
  }

  return (
    <ol className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {ops.map((id, i) => {
        const op = OPERATOR_MAP[id];
        const reached = i < step;
        const current = i === step - 1;
        return (
          <li key={`${id}-${i}`} className="flex items-center gap-1 sm:gap-2">
            {i > 0 && (
              <span
                aria-hidden
                className={cn("text-xs", i < step ? "text-accent" : "text-faint")}
              >
                →
              </span>
            )}
            <button
              type="button"
              onClick={() => onStep(i + 1)}
              className={cn(
                "flex min-w-11 flex-col items-center gap-1 rounded-lg px-2 py-2 transition-[background-color,color] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                current
                  ? "bg-accent text-ink"
                  : reached
                    ? "bg-raised text-parchment"
                    : "text-muted hover:bg-raised",
              )}
            >
              <Glyph className="text-2xl sm:text-3xl">{op.glyph}</Glyph>
              <span className="text-[0.625rem] uppercase tracking-[0.14em]">{op.latin}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
