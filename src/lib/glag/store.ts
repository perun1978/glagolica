import { create } from "zustand";
import { PROGRAMS } from "./programs";
import type { CategoryId, OperatorId } from "./types";

type Mode = "run" | "speak";

type RegistryState = {
  selectedN: number;
  step: number;
  playing: boolean;
  search: string;
  category: CategoryId | "all";
  filterOp: OperatorId | null;
  mode: Mode;
  draft: OperatorId[];
  starred: number[];
  hydrated: boolean;
  paste: string;
  select: (n: number) => void;
  setStep: (step: number) => void;
  setPlaying: (playing: boolean) => void;
  setSearch: (q: string) => void;
  setCategory: (c: CategoryId | "all") => void;
  setFilterOp: (op: OperatorId | null) => void;
  setMode: (m: Mode) => void;
  pushDraft: (op: OperatorId) => void;
  popDraft: () => void;
  clearDraft: () => void;
  setDraft: (draft: OperatorId[], paste?: string) => void;
  setPaste: (paste: string) => void;
  toggleStar: (n: number) => void;
  hydrate: (starred: number[], selectedN: number) => void;
};

export const useRegistry = create<RegistryState>()((set, get) => ({
  selectedN: 12,
  step: 0,
  playing: false,
  search: "",
  category: "all",
  filterOp: null,
  mode: "run",
  draft: [],
  starred: [],
  hydrated: false,
  paste: "",
  select: (n) => set({ selectedN: n, step: 0, playing: false, mode: "run" }),
  setStep: (step) => set({ step }),
  setPlaying: (playing) => set({ playing }),
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setFilterOp: (filterOp) => set({ filterOp }),
  setMode: (mode) => set({ mode, step: 0, playing: false }),
  pushDraft: (op) => {
    const draft = get().draft;
    if (draft.length >= 24) return;
    set({ draft: [...draft, op], step: 0, playing: false, mode: "speak", paste: "" });
  },
  popDraft: () => set({ draft: get().draft.slice(0, -1), step: 0, playing: false, paste: "" }),
  clearDraft: () => set({ draft: [], step: 0, playing: false, paste: "" }),
  setDraft: (draft, paste) =>
    set({
      draft: draft.slice(0, 24),
      step: 0,
      playing: false,
      mode: "speak",
      paste: paste ?? get().paste,
    }),
  setPaste: (paste) => set({ paste }),
  toggleStar: (n) => {
    const starred = get().starred;
    set({
      starred: starred.includes(n) ? starred.filter((x) => x !== n) : [...starred, n],
    });
  },
  hydrate: (starred, selectedN) => {
    const exists = PROGRAMS.some((p) => p.n === selectedN);
    set({
      starred,
      selectedN: exists ? selectedN : 12,
      hydrated: true,
    });
  },
}));
