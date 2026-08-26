export type OperatorId =
  | "AZ"
  | "BUKI"
  | "WEDI"
  | "GLAGOLI"
  | "DOBRO"
  | "JEST"
  | "ZYWITE"
  | "ZIELO"
  | "ZIEMIA"
  | "IZE"
  | "DJERVI"
  | "KAKO"
  | "LUDZIE"
  | "MYSLCIE"
  | "ON"
  | "POKOJ"
  | "RCY"
  | "SLOWO"
  | "TWERDO"
  | "UK"
  | "FERT"
  | "CHIER"
  | "OT"
  | "CY"
  | "CZERW"
  | "SZA"
  | "JER"
  | "JAC"
  | "JU"
  | "IZYCA";

export type CategoryId =
  | "role"
  | "research"
  | "decision"
  | "human"
  | "tone"
  | "media"
  | "business"
  | "audit"
  | "format";

export type Operator = {
  id: OperatorId;
  glyph: string;
  name: string;
  latin: string;
  verb: string;
  field: string;
  slot: string;
  action: "set" | "cut" | "intensify" | "pause" | "close" | "fork" | "release" | "connect";
  conflict?: string;
};

export type Program = {
  n: number;
  cmd: string;
  ops: OperatorId[];
  movement: string;
  category: CategoryId;
  gloss: string;
};

export type FieldMark = {
  op: OperatorId;
  slot: string;
  intensity: number;
  cut: boolean;
};

export type FieldState = {
  marks: FieldMark[];
  paused: boolean;
  closed: boolean;
  forked: boolean;
  released: boolean;
  log: string[];
};
