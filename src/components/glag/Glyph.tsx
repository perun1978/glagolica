import { GLYPH_OUTLINES } from "@/lib/glag/outlines";
import { cn } from "@/lib/utils";

export function Glyph({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const outline = GLYPH_OUTLINES[children];
  if (!outline) {
    return <span className={className}>{children}</span>;
  }
  const pad = 48;
  const x = outline.xmin - pad;
  const y = -(outline.ymax + pad);
  const w = outline.xmax - outline.xmin + pad * 2;
  const h = outline.ymax - outline.ymin + pad * 2;
  return (
    <svg
      viewBox={`${x} ${y} ${w} ${h}`}
      className={cn("inline-block h-[1em] w-[1em] overflow-visible", className)}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="scale(1,-1)">
        <path d={outline.d} fill="currentColor" />
      </g>
    </svg>
  );
}

export function GlyphMark({
  char,
  size,
}: {
  char: string;
  size: number;
}) {
  const outline = GLYPH_OUTLINES[char];
  if (!outline) return null;
  const gw = Math.max(outline.xmax - outline.xmin, 1);
  const gh = Math.max(outline.ymax - outline.ymin, 1);
  const s = size / Math.max(gw, gh);
  const cx = (outline.xmin + outline.xmax) / 2;
  const cy = (outline.ymin + outline.ymax) / 2;
  const r = (n: number) => Math.round(n * 1000) / 1000;
  return (
    <path
      d={outline.d}
      fill="currentColor"
      transform={`matrix(${r(s)} 0 0 ${r(-s)} ${r(-s * cx)} ${r(s * cy)})`}
    />
  );
}
