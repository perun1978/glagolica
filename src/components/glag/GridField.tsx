import { OPERATOR_MAP, OPERATORS } from "@/lib/glag/operators";
import type { OperatorId } from "@/lib/glag/types";
import { cn } from "@/lib/utils";
import { Glyph, GlyphMark } from "./Glyph";

const SIZE = 640;
const CX = 320;
const CY = 320;
const R_NODE = 248;

type Node = { id: OperatorId; x: number; y: number; a: number };

function round(n: number) {
  return Math.round(n * 100) / 100;
}

const NODES: Node[] = OPERATORS.map((op, i) => {
  const a = -Math.PI / 2 + (i / OPERATORS.length) * Math.PI * 2;
  return {
    id: op.id,
    x: round(CX + R_NODE * Math.cos(a)),
    y: round(CY + R_NODE * Math.sin(a)),
    a: round(a * 10000) / 10000,
  };
});

const NODE_BY_ID = new Map(NODES.map((n) => [n.id, n]));

function pathD(ops: OperatorId[]) {
  const pts = ops
    .map((id) => NODE_BY_ID.get(id))
    .filter((n): n is Node => Boolean(n));
  if (pts.length === 0) return "";
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1]!;
    const cur = pts[i]!;
    const c1x = CX + (prev.x - CX) * 0.42;
    const c1y = CY + (prev.y - CY) * 0.42;
    const c2x = CX + (cur.x - CX) * 0.42;
    const c2y = CY + (cur.y - CY) * 0.42;
    d += ` C ${round(c1x)} ${round(c1y)}, ${round(c2x)} ${round(c2y)}, ${cur.x} ${cur.y}`;
  }
  return d;
}

export function GridField({
  sequence,
  step,
  onPick,
}: {
  sequence: OperatorId[];
  step: number;
  onPick: (id: OperatorId) => void;
}) {
  const used = new Set(sequence);
  const current = sequence[Math.max(0, step - 1)];
  const visible = sequence.slice(0, Math.max(step, 0));
  const preview = pathD(sequence);
  const live = pathD(visible);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[28rem] lg:max-w-[32rem]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full"
        role="img"
        aria-label="GLAG_GRID — koło operatorów"
      >
        <circle
          cx={CX}
          cy={CY}
          r={292}
          fill="none"
          className="stroke-parchment/10"
          strokeWidth={1}
        />
        <circle
          cx={CX}
          cy={CY}
          r={186}
          fill="none"
          className="stroke-parchment/6"
          strokeWidth={1}
          strokeDasharray="2 6"
        />
        <circle
          cx={CX}
          cy={CY}
          r={96}
          fill="none"
          className="stroke-accent/25"
          strokeWidth={1}
        />
        <circle cx={CX} cy={CY} r={88} className="fill-raised" />

        {preview && (
          <path
            d={preview}
            fill="none"
            className="stroke-parchment/15"
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}
        {live && (
          <path
            d={live}
            fill="none"
            className="stroke-accent"
            strokeWidth={2.25}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}

        {NODES.map((node) => {
          const op = OPERATOR_MAP[node.id];
          const idx = visible.lastIndexOf(node.id);
          const isCurrent = current === node.id && step > 0;
          const isUsed = used.has(node.id);
          const isDone = idx !== -1;
          return (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={isCurrent ? 22 : 18}
                className={cn(
                  "transition-[fill,stroke] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
                  isCurrent
                    ? "fill-accent stroke-accent"
                    : isDone
                      ? "fill-surface stroke-accent/70"
                      : isUsed
                        ? "fill-surface stroke-parchment/40"
                        : "fill-ink stroke-parchment/15",
                )}
                strokeWidth={1.25}
              />
              <g
                transform={`translate(${node.x} ${node.y})`}
                className={cn(
                  isCurrent ? "text-ink" : isDone || isUsed ? "text-parchment" : "text-faint",
                )}
              >
                <GlyphMark char={op.glyph} size={isCurrent ? 16 : 13} />
              </g>
              {isDone && (
                <text
                  x={node.x + 16}
                  y={node.y - 14}
                  className="fill-accent font-sans"
                  fontSize={9}
                  fontWeight={600}
                >
                  {idx + 1}
                </text>
              )}
              <title>{`${op.latin} — ${op.verb}`}</title>
              <circle
                cx={node.x}
                cy={node.y}
                r={22}
                className="fill-transparent cursor-pointer"
                onClick={() => onPick(node.id)}
                role="button"
                aria-label={op.latin}
              />
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="text-[0.625rem] uppercase tracking-[0.28em] text-faint">
            GLAG_GRID
          </span>
          {current && step > 0 ? (
            <>
              <Glyph className="text-4xl text-parchment sm:text-5xl">
                {OPERATOR_MAP[current].glyph}
              </Glyph>
              <span className="font-display text-sm tracking-wide text-muted">
                {OPERATOR_MAP[current].latin}
              </span>
            </>
          ) : (
            <span className="font-display text-lg text-muted">pole</span>
          )}
        </div>
      </div>
    </div>
  );
}
