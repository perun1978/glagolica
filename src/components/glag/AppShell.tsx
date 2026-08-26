import { PROGRAMS } from "@/lib/glag/programs";
import { useRegistry } from "@/lib/glag/store";
import type { OperatorId } from "@/lib/glag/types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Alphabet } from "./Alphabet";
import { Header } from "./Header";
import { ProgramList } from "./ProgramList";
import { ProgramView } from "./ProgramView";

const STORAGE = "glagolica-registry-v1";

export function AppShell() {
  const selectedN = useRegistry((s) => s.selectedN);
  const step = useRegistry((s) => s.step);
  const playing = useRegistry((s) => s.playing);
  const setStep = useRegistry((s) => s.setStep);
  const setPlaying = useRegistry((s) => s.setPlaying);
  const mode = useRegistry((s) => s.mode);
  const draft = useRegistry((s) => s.draft);
  const pushDraft = useRegistry((s) => s.pushDraft);
  const starred = useRegistry((s) => s.starred);
  const hydrate = useRegistry((s) => s.hydrate);
  const hydrated = useRegistry((s) => s.hydrated);

  const program = PROGRAMS.find((p) => p.n === selectedN);
  const sequence: OperatorId[] = mode === "speak" ? draft : (program?.ops ?? []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (!raw) {
        hydrate([], 12);
        return;
      }
      const parsed = JSON.parse(raw) as { starred?: number[]; selectedN?: number };
      hydrate(parsed.starred ?? [], parsed.selectedN ?? 12);
    } catch {
      hydrate([], 12);
    }
  }, [hydrate]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE, JSON.stringify({ starred, selectedN }));
  }, [hydrated, starred, selectedN]);

  useEffect(() => {
    if (!playing) return;
    if (sequence.length === 0) {
      setPlaying(false);
      return;
    }
    if (step >= sequence.length) {
      setPlaying(false);
      return;
    }
    const t = window.setTimeout(() => setStep(step + 1), 720);
    return () => window.clearTimeout(t);
  }, [playing, step, sequence.length, setPlaying, setStep]);

  return (
    <TooltipProvider delayDuration={180}>
      <div className="flex min-h-dvh flex-col bg-ink text-parchment lg:h-dvh lg:overflow-hidden">
        <Header />
        <main className="mx-auto grid w-full max-w-[92rem] min-h-0 flex-1 grid-cols-1 gap-6 overflow-y-auto px-4 py-5 sm:px-6 lg:grid-cols-[minmax(16rem,20rem)_minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-8 lg:overflow-hidden lg:py-6">
          <aside className="hidden min-h-0 lg:flex lg:flex-col lg:overflow-hidden">
            <Alphabet active={sequence} onCompose={pushDraft} />
          </aside>
          <div className="min-h-0 lg:overflow-y-auto lg:pr-1">
            <ProgramView sequence={sequence} />
          </div>
          <aside className="flex min-h-[22rem] flex-col lg:min-h-0 lg:overflow-hidden">
            <ProgramList />
          </aside>
          <div className="lg:hidden">
            <Alphabet active={sequence} onCompose={pushDraft} />
          </div>
        </main>
        <footer className="shrink-0 border-t border-line px-4 py-3 text-[0.6875rem] tracking-wide text-faint sm:px-6">
          Warstwa GLAG_FUNCTION_REGISTRY · 30 operatorów, 99 przykładów · nie kanon · mów głagolicą
        </footer>
      </div>
    </TooltipProvider>
  );
}
