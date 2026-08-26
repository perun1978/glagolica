import { OPERATOR_MAP } from "@/lib/glag/operators";
import { CATEGORIES, LIGATURE_TWINS, PROGRAM_BY_N } from "@/lib/glag/programs";
import { runPrefix } from "@/lib/glag/interpreter";
import { livingTwins, parseUtterance, speak } from "@/lib/glag/speech";
import { useRegistry } from "@/lib/glag/store";
import type { OperatorId } from "@/lib/glag/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw, Star, StepForward, Trash2, Undo2 } from "lucide-react";
import { GridField } from "./GridField";
import { Glyph } from "./Glyph";
import { Ligature } from "./Ligature";

export function ProgramView({
  sequence,
}: {
  sequence: OperatorId[];
}) {
  const selectedN = useRegistry((s) => s.selectedN);
  const step = useRegistry((s) => s.step);
  const playing = useRegistry((s) => s.playing);
  const setStep = useRegistry((s) => s.setStep);
  const setPlaying = useRegistry((s) => s.setPlaying);
  const mode = useRegistry((s) => s.mode);
  const setMode = useRegistry((s) => s.setMode);
  const pushDraft = useRegistry((s) => s.pushDraft);
  const popDraft = useRegistry((s) => s.popDraft);
  const clearDraft = useRegistry((s) => s.clearDraft);
  const setDraft = useRegistry((s) => s.setDraft);
  const paste = useRegistry((s) => s.paste);
  const setPaste = useRegistry((s) => s.setPaste);
  const starred = useRegistry((s) => s.starred);
  const toggleStar = useRegistry((s) => s.toggleStar);
  const select = useRegistry((s) => s.select);
  const setFilterOp = useRegistry((s) => s.setFilterOp);

  const program = PROGRAM_BY_N.get(selectedN);
  const field = runPrefix(sequence, step);
  const twins = program ? LIGATURE_TWINS.get(program.n) : undefined;
  const spoken = mode === "speak" ? speak(sequence) : "";
  const echo = livingTwins(sequence);
  const cat = program ? CATEGORIES.find((c) => c.id === program.category) : undefined;
  const hasFert = sequence.includes("FERT");
  const done = sequence.length > 0 && step >= sequence.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          {mode === "speak" ? (
            <>
              <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-faint">
                Wypowiedź · nie komenda
              </p>
              <h1 className="font-display text-3xl tracking-tight text-parchment sm:text-4xl">
                Mów
              </h1>
            </>
          ) : program ? (
            <>
              <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-faint">
                {cat?.label} · {String(program.n).padStart(2, "0")} / 99
              </p>
              <h1 className="font-display text-3xl tracking-tight text-parchment sm:text-4xl">
                {program.cmd}
              </h1>
            </>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={mode === "speak" ? "sage" : "outline"}
            size="sm"
            onClick={() => setMode(mode === "speak" ? "run" : "speak")}
          >
            {mode === "speak" ? "Rejestr" : "Mów"}
          </Button>
          {mode === "run" && program && (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={starred.includes(program.n) ? "Usuń z zaznaczonych" : "Zaznacz"}
              onClick={() => toggleStar(program.n)}
            >
              <Star
                className={
                  starred.includes(program.n) ? "fill-accent text-accent" : "text-muted"
                }
              />
            </Button>
          )}
        </div>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        {mode === "speak"
          ? "Nie tłumacz z angielskiego. Klikaj bukwy albo wklej ciąg. To twoja wypowiedź — rejestr 99 jest tylko zbiorem przykładów."
          : program?.movement}
      </p>

      {mode === "run" && program && (
        <p className="font-mono text-xs tracking-wide text-accent/90">{program.gloss}</p>
      )}

      {mode === "speak" && (
        <label className="block">
          <span className="sr-only">Wklej wypowiedź głagoliczną</span>
          <textarea
            value={paste}
            onChange={(e) => {
              const value = e.target.value;
              setPaste(value);
              const parsed = parseUtterance(value);
              if (parsed.length > 0 || value.trim() === "") setDraft(parsed, value);
            }}
            rows={2}
            spellCheck={false}
            placeholder="Wklej ⰀⰎⰃ albo AZ LUDZIE GLAGOLI — i mów dalej"
            className="w-full resize-y rounded-xl bg-raised px-3 py-2.5 text-sm text-parchment shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          />
        </label>
      )}

      <Ligature
        ops={sequence}
        step={step}
        onStep={(i) => {
          setPlaying(false);
          setStep(i);
        }}
      />

      {mode === "speak" && spoken && (
        <blockquote className="rounded-xl bg-raised px-4 py-3 font-display text-lg leading-snug text-parchment shadow-[var(--shadow-border)]">
          {spoken}
        </blockquote>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          onClick={() => {
            if (sequence.length === 0) return;
            if (done) {
              setStep(0);
              setPlaying(true);
              return;
            }
            setPlaying(!playing);
          }}
          disabled={sequence.length === 0}
        >
          {playing ? <Pause /> : <Play />}
          {playing ? "Pauza" : done ? "Od nowa" : "Uruchom"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setPlaying(false);
            setStep(Math.min(step + 1, sequence.length));
          }}
          disabled={sequence.length === 0 || done}
        >
          <StepForward />
          Krok
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setPlaying(false);
            setStep(0);
          }}
          disabled={step === 0}
        >
          <RotateCcw />
          Zeruj
        </Button>
        {mode === "speak" && (
          <>
            <Button variant="ghost" size="sm" onClick={popDraft} disabled={sequence.length === 0}>
              <Undo2 />
              Cofnij
            </Button>
            <Button variant="ghost" size="sm" onClick={clearDraft} disabled={sequence.length === 0}>
              <Trash2 />
              Wyczyść
            </Button>
          </>
        )}
      </div>

      <GridField
        sequence={sequence}
        step={step}
        onPick={(id) => {
          if (mode === "speak") pushDraft(id);
          else setFilterOp(id);
        }}
      />

      <FieldPanel field={field} />

      {hasFert && (
        <aside className="rounded-xl bg-raised px-4 py-3 text-xs leading-relaxed text-muted shadow-[var(--shadow-border)]">
          <span className="mr-2 inline-flex items-center gap-1.5 font-medium tracking-wide text-parchment">
            FERT <Glyph className="text-base">Ⱇ</Glyph>
          </span>
          Otwarty konflikt: w GLAG_OPS oznacza wejście obce, w GRID — obrót wokół centrum. Ta
          mapa używa FOREIGN_ENTRY. SPIN_AROUND_CENTER zostaje osobnym trybem.
        </aside>
      )}

      {mode === "speak" && echo.length > 0 && (
        <p className="text-xs text-muted">
          Ta ligatura już żyje w rejestrze jako{" "}
          {echo.map((t) => (
            <button
              key={t.n}
              type="button"
              className="mx-1 font-mono text-parchment underline-offset-2 hover:underline"
              onClick={() => select(t.n)}
            >
              {t.cmd}
            </button>
          ))}
          — możesz mówić dalej, nie musisz jej używać.
        </p>
      )}

      {twins && twins.length > 0 && mode === "run" && (
        <p className="text-xs text-muted">
          Ta sama ligatura:{" "}
          {twins.map((t) => (
            <button
              key={t.n}
              type="button"
              className="mx-1 font-mono text-parchment underline-offset-2 hover:underline"
              onClick={() => select(t.n)}
            >
              {t.cmd}
            </button>
          ))}
          — dwa polecenia, jeden ruch wykonawczy.
        </p>
      )}
    </div>
  );
}

function FieldPanel({ field }: { field: ReturnType<typeof runPrefix> }) {
  if (field.marks.length === 0) {
    return (
      <div className="rounded-xl bg-raised px-4 py-4 text-sm text-muted shadow-[var(--shadow-border)]">
        Pole puste. Uruchom przebieg albo wypowiedz się bukwami.
      </div>
    );
  }

  const last = field.log.at(-1);

  return (
    <div className="rounded-xl bg-raised px-4 py-4 shadow-[var(--shadow-border)]">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-faint">Stan pola</span>
        {field.forked && <Badge variant="sage">gałęzie</Badge>}
        {field.paused && <Badge variant="line">PASS</Badge>}
        {field.released && <Badge variant="parchment">na zewnątrz</Badge>}
        {field.closed && <Badge variant="mute">domknięte</Badge>}
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {field.marks.map((m) => {
          const op = OPERATOR_MAP[m.op];
          return (
            <li
              key={m.op}
              className={
                m.cut
                  ? "inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-xs text-faint line-through"
                  : "inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-xs text-parchment"
              }
            >
              <Glyph className="text-[0.9rem]">{op.glyph}</Glyph>
              {m.slot}
              {m.intensity > 1 ? ` ×${m.intensity}` : ""}
            </li>
          );
        })}
      </ul>
      {last && <p className="mt-3 text-xs leading-relaxed text-muted">{last}</p>}
    </div>
  );
}
