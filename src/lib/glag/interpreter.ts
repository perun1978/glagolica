import { OPERATOR_MAP } from "./operators";
import type { FieldState, OperatorId } from "./types";

export function emptyField(): FieldState {
  return {
    marks: [],
    paused: false,
    closed: false,
    forked: false,
    released: false,
    log: [],
  };
}

export function applyOperator(state: FieldState, id: OperatorId): FieldState {
  const op = OPERATOR_MAP[id];
  const next: FieldState = {
    marks: state.marks.map((m) => ({ ...m })),
    paused: state.paused,
    closed: state.closed,
    forked: state.forked,
    released: state.released,
    log: [...state.log],
  };

  if (next.closed) {
    next.log.push(`${op.latin} nie wchodzi — przebieg jest domknięty.`);
    return next;
  }

  switch (op.action) {
    case "cut": {
      for (const m of next.marks) {
        if (m.op !== id) m.cut = true;
      }
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: odcina nadmiar. Pole zostawia ${op.slot}.`);
      break;
    }
    case "intensify": {
      const last = next.marks.at(-1);
      if (last) last.intensity += 1;
      upsertMark(next, id, op.slot, 2, false);
      next.log.push(`${op.latin}: zagęszcza ostatni ślad i wzmacnia pole.`);
      break;
    }
    case "pause": {
      next.paused = true;
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: PASS — pole uspokojone, rdzeń zachowany.`);
      break;
    }
    case "close": {
      next.closed = true;
      next.paused = true;
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: przebieg domknięty. Bez kanonizacji.`);
      break;
    }
    case "fork": {
      next.forked = true;
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: otwiera gałęzie. Pole rozdwaja się.`);
      break;
    }
    case "release": {
      next.released = true;
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: wynik opuszcza pole.`);
      break;
    }
    case "connect": {
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: spina poprzednie kroki w ciąg.`);
      break;
    }
    default: {
      upsertMark(next, id, op.slot, 1, false);
      next.log.push(`${op.latin}: ${op.verb}.`);
    }
  }

  return next;
}

function upsertMark(
  state: FieldState,
  op: OperatorId,
  slot: string,
  intensity: number,
  cut: boolean,
) {
  const existing = state.marks.find((m) => m.op === op);
  if (existing) {
    existing.intensity = Math.max(existing.intensity, intensity);
    existing.cut = cut;
    existing.slot = slot;
  } else {
    state.marks.push({ op, slot, intensity, cut });
  }
}

export function runPrefix(ops: OperatorId[], steps: number): FieldState {
  let field = emptyField();
  const limit = Math.min(steps, ops.length);
  for (let i = 0; i < limit; i++) {
    const id = ops[i];
    if (!id) continue;
    field = applyOperator(field, id);
  }
  return field;
}
