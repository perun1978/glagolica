import { GLYPH_TO_ID, OPERATOR_MAP, OPERATORS } from "./operators";
import { PROGRAMS } from "./programs";
import type { OperatorId, Program } from "./types";

const LATIN_TO_ID: Record<string, OperatorId> = {};
for (const op of OPERATORS) {
  LATIN_TO_ID[op.latin] = op.id;
  LATIN_TO_ID[op.latin.normalize("NFD").replace(/\p{M}/gu, "")] = op.id;
}

export function parseUtterance(raw: string): OperatorId[] {
  const fromGlyphs: OperatorId[] = [];
  for (const ch of raw) {
    const id = GLYPH_TO_ID[ch];
    if (id) fromGlyphs.push(id);
  }
  if (fromGlyphs.length > 0) return fromGlyphs.slice(0, 24);

  const fromLatin: OperatorId[] = [];
  const tokens = raw
    .toUpperCase()
    .replace(/→/g, " ")
    .split(/[^0-9A-ZŻŹĆŃÓĘĄŚŁ]+/u)
    .filter(Boolean);
  for (const token of tokens) {
    const id =
      LATIN_TO_ID[token] ??
      LATIN_TO_ID[token.normalize("NFD").replace(/\p{M}/gu, "")];
    if (id) fromLatin.push(id);
  }
  return fromLatin.slice(0, 24);
}

export function speak(ops: OperatorId[]): string {
  if (ops.length === 0) return "";
  const parts = ops.map((id, i) => {
    const verb = OPERATOR_MAP[id].verb;
    if (i === 0) return verb.charAt(0).toUpperCase() + verb.slice(1);
    return verb;
  });
  return `${parts.join(", potem")}.`;
}

export function echoGlyphs(ops: OperatorId[]): string {
  return ops.map((id) => OPERATOR_MAP[id].glyph).join("");
}

export function livingTwins(ops: OperatorId[]): Program[] {
  if (ops.length < 2) return [];
  const sig = ops.join("→");
  return PROGRAMS.filter((p) => p.ops.join("→") === sig);
}
