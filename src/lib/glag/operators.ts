import type { Operator, OperatorId } from "./types";

export const OPERATORS: Operator[] = [
  { id: "AZ", glyph: "Ⰰ", name: "Az", latin: "AZ", verb: "wprowadź podmiot lub źródło", field: "podmiot / źródło", slot: "podmiot", action: "set" },
  { id: "BUKI", glyph: "Ⰱ", name: "Buki", latin: "BUKI", verb: "wybierz ramę i reguły", field: "rama", slot: "rama", action: "set" },
  { id: "WEDI", glyph: "Ⰲ", name: "Wedi", latin: "WEDI", verb: "zobacz, rozpoznaj, zbierz wiedzę", field: "rozpoznanie", slot: "wiedza", action: "set" },
  { id: "GLAGOLI", glyph: "Ⰳ", name: "Glagoli", latin: "GLAGOLI", verb: "wyraź lub wyemituj rezultat", field: "wypowiedź", slot: "wypowiedź", action: "set" },
  { id: "DOBRO", glyph: "Ⰴ", name: "Dobro", latin: "DOBRO", verb: "skieruj ku użyteczności", field: "użyteczność", slot: "użyteczność", action: "set" },
  { id: "JEST", glyph: "Ⰵ", name: "Jest", latin: "JEST", verb: "sprawdź, co rzeczywiście zachodzi", field: "stan roboczy", slot: "stan", action: "set" },
  { id: "ZYWITE", glyph: "Ⰶ", name: "Żywite", latin: "ŻYWITE", verb: "utrzymuj proces w czasie", field: "trwanie", slot: "proces", action: "set" },
  { id: "ZIELO", glyph: "Ⰷ", name: "Zieło", latin: "ZIELO", verb: "wzmocnij lub zagęść", field: "gęstość", slot: "gęstość", action: "intensify" },
  { id: "ZIEMIA", glyph: "Ⰸ", name: "Ziemia", latin: "ZIEMIA", verb: "sprowadź do praktyki", field: "praktyka", slot: "praktyka", action: "set" },
  { id: "IZE", glyph: "Ⰻ", name: "Iże", latin: "IŻE", verb: "połącz kroki w ciąg", field: "połączenie", slot: "połączenie", action: "connect" },
  { id: "DJERVI", glyph: "Ⰼ", name: "Djervi", latin: "DJERVI", verb: "zbuduj oś i kolejność", field: "oś", slot: "oś", action: "set" },
  { id: "KAKO", glyph: "Ⰽ", name: "Kako", latin: "KAKO", verb: "znajdź sposób wykonania", field: "metoda", slot: "metoda", action: "set" },
  { id: "LUDZIE", glyph: "Ⰾ", name: "Ludzie", latin: "LUDZIE", verb: "uwzględnij ludzi lub odbiorców", field: "odbiorcy", slot: "ludzie", action: "set" },
  { id: "MYSLCIE", glyph: "Ⰿ", name: "Myślcie", latin: "MYŚLCIE", verb: "uruchom namysł", field: "namysł", slot: "namysł", action: "set" },
  { id: "ON", glyph: "Ⱁ", name: "On", latin: "ON", verb: "wprowadź drugi lub trzeci biegun", field: "biegun", slot: "biegun", action: "set" },
  { id: "POKOJ", glyph: "Ⱂ", name: "Pokój", latin: "POKÓJ", verb: "zatrzymaj, uprość, PASS", field: "spokój", slot: "spokój", action: "pause" },
  { id: "RCY", glyph: "Ⱃ", name: "Rcy", latin: "RCY", verb: "wydaj rozstrzygnięcie", field: "orzeczenie", slot: "rozstrzygnięcie", action: "set" },
  { id: "SLOWO", glyph: "Ⱄ", name: "Słowo", latin: "SŁOWO", verb: "uformuj jednostkę komunikacji", field: "komunikat", slot: "słowo", action: "set" },
  { id: "TWERDO", glyph: "Ⱅ", name: "Twerdo", latin: "TWERDO", verb: "ustabilizuj wynik, bez kanonizowania", field: "stabilność", slot: "stabilność", action: "set" },
  { id: "UK", glyph: "Ⱆ", name: "Uk", latin: "UK", verb: "nadaj formę do nauczenia lub przeniesienia", field: "forma przenośna", slot: "forma", action: "set" },
  {
    id: "FERT",
    glyph: "Ⱇ",
    name: "Fert",
    latin: "FERT",
    verb: "dopuść element obcy",
    field: "wejście obce",
    slot: "obce",
    action: "set",
    conflict: "W GLAG_OPS: wejście obce. W GRID: obrót wokół centrum. Tu: FOREIGN_ENTRY. SPIN_AROUND_CENTER zostaje osobnym trybem do testów.",
  },
  { id: "CHIER", glyph: "Ⱈ", name: "Chier", latin: "CHIER", verb: "odetnij lub wyznacz granicę", field: "cięcie", slot: "granica", action: "cut" },
  { id: "OT", glyph: "Ⱉ", name: "Ot", latin: "OT", verb: "wypuść wynik na zewnątrz", field: "wyjście", slot: "wyjście", action: "release" },
  { id: "CY", glyph: "Ⱌ", name: "Cy", latin: "CY", verb: "wykonaj precyzyjne rozróżnienie", field: "rozróżnienie", slot: "rozróżnienie", action: "set" },
  { id: "CZERW", glyph: "Ⱍ", name: "Czerw", latin: "CZERW", verb: "drąż od środka", field: "rdzeń", slot: "rdzeń", action: "set" },
  { id: "SZA", glyph: "Ⱎ", name: "Sza", latin: "SZA", verb: "wykryj szum lub pokrycie", field: "szum", slot: "szum", action: "set" },
  { id: "JER", glyph: "Ⱐ", name: "Jer", latin: "JER", verb: "zmiękcz formę", field: "miękkość", slot: "miękkość", action: "set" },
  { id: "JAC", glyph: "Ⱑ", name: "Jać", latin: "JAĆ", verb: "utwórz alternatywne rozwidlenia", field: "gałęzie", slot: "gałęzie", action: "fork" },
  { id: "JU", glyph: "Ⱓ", name: "Ju", latin: "JU", verb: "skieruj wynik do określonego adresata", field: "adresat", slot: "adresat", action: "set" },
  { id: "IZYCA", glyph: "Ⱛ", name: "Iżyca", latin: "IŻYCA", verb: "domknij przebieg", field: "domknięcie", slot: "domknięcie", action: "close" },
];

export const OPERATOR_MAP: Record<OperatorId, Operator> = Object.fromEntries(
  OPERATORS.map((op) => [op.id, op]),
) as Record<OperatorId, Operator>;

export const GLYPH_TO_ID: Record<string, OperatorId> = Object.fromEntries(
  OPERATORS.map((op) => [op.glyph, op.id]),
) as Record<string, OperatorId>;
