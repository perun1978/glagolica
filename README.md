# Głagolica

Ⰰ → Ⰾ → Ⰳ

**Bukwa nie jest literą do transkrypcji. Bukwa jest operatorem zmiany pola. Ciąg bukw jest wypowiedzią.**

To nie jest tłumaczenie angielskich komend na pojedyncze znaki. To mały język: około 30 operatorów, z których składa się ruch.

```
status: hypothesis
layer: GLAG_FUNCTION_REGISTRY
canon: false
```

Nie kanon. Dlatego wolno się nie zgodzić. Dlatego wolno mówić inaczej.

---

## Mów. Nie tłumacz.

Najprostszy sposób użycia Głagolicy nie wymaga rejestru, aplikacji ani angielskiego.

Weź bukwy i ułóż przebieg:

| Chcesz | Ligatura | Ruch |
| --- | --- | --- |
| powiedzieć coś ludziom jak człowiek | ⰀⰎⰃ | podmiot → ludzie → wypowiedź |
| sprawdzić, co naprawdę zachodzi | ⰀⰂⰅⰓ | źródło → rozpoznanie → stan → orzeczenie |
| odciąć nadmiar | ⰘⰔⰒ | cięcie → słowo → PASS |
| wpuścić myśl obcą | ⰏⰡⰗⰃ | namysł → gałęzie → obce → wypowiedź |

To nie są komendy. To zdania.

Napisz je w notatce, w issue, w liście, na ścianie.  
Kliknij **Mów** w instrumencie i wklej ⰀⰎⰃ.  
Albo złóż własną ligaturę, której nie ma w żadnej tabeli.

**99 programów to przykłady powierzchni. Twoja ligatura jest ważniejsza.**

Jeśli otwierasz issue albo PR — spróbuj najpierw wypowiedzieć się bukwami. Polski i angielski mogą iść obok, jako glosa, nie jako oryginał.

> ⰀⰂⰃ — *wprowadzam źródło, rozpoznaję, wypowiadam.*

---

## Instrument

Aplikacja jest rejestrem i kołem pola (GLAG_GRID).

1. **Rejestr** — 99 przykładów (`/research`, `/verify`, `/critic`…). Kliknij, uruchom, zobacz ruch pola.
2. **Bukwy** — 30 operatorów. W rejestrze filtrują. W trybie Mów — wchodzą do wypowiedzi.
3. **Mów** — klikaj bukwy albo wklej ciąg (`ⰀⰎⰃ` albo `AZ LUDZIE GLAGOLI`). Pole czyta to jako przebieg, nie jako slash-komendę.
4. **GRID** — koło operatorów. Przebieg rysuje ligaturę.

Angielskie `/research` znaczy tylko tyle, ile Ⰰ→Ⰲ→Ⱍ→Ⰵ. Dwie różne nazwy mogą mieć tę samą ligaturę, bo pod spodem wykonują ten sam ruch (`/compare` = `/decision`).

### Inne sposoby (zachęcamy)

- **Mówić głagolicą poza aplikacją.** Ligatura jest przenośna. Wystarczy Unicode (blok *Glagolitic*, U+2C00–U+2C5F).
- **Pisać dziennik przebiegów.** Dzień jako Ⰰ→Ⰲ→Ⰸ, spór jako Ⱁ→Ⱑ→Ⱈ→Ⱃ.
- **Nie zgadzać się z rejestrem.** Zamień kolejność. Odrzuć bukwę. Dodaj Iżycę tam, gdzie rejestr jej nie stawia.
- **Traktować FERT Ⱇ jako otwarty.** W tej mapie: wejście obce. W GRID: obrót wokół centrum. Nie rozstrzygamy tego za ciebie — wypowiedz się.
- **Użyć kanonu bez UI.** Operatory, 99 przykładów i interpreter są w `src/lib/glag/`. To jest język, nie ekran.

---

## Klucz operatorów

| Bukwa | Łacińska | Ruch pola |
| --- | --- | --- |
| Ⰰ | AZ | wprowadź podmiot lub źródło |
| Ⰱ | BUKI | wybierz ramę i reguły |
| Ⰲ | WEDI | zobacz, rozpoznaj, zbierz wiedzę |
| Ⰳ | GLAGOLI | wyraź lub wyemituj rezultat |
| Ⰴ | DOBRO | skieruj ku użyteczności |
| Ⰵ | JEST | sprawdź, co rzeczywiście zachodzi |
| Ⰶ | ŻYWITE | utrzymuj proces w czasie |
| Ⰷ | ZIELO | wzmocnij lub zagęść |
| Ⱈ | CHIER | odetnij lub wyznacz granicę |
| Ⰽ | KAKO | znajdź sposób wykonania |
| Ⰾ | LUDZIE | uwzględnij ludzi |
| Ⰿ | MYŚLCIE | uruchom namysł |
| Ⱂ | POKÓJ | zatrzymaj, uprość, PASS |
| Ⱃ | RCY | wydaj rozstrzygnięcie |
| Ⱄ | SŁOWO | uformuj jednostkę komunikacji |
| Ⱅ | TWERDO | ustabilizuj, bez kanonizowania |
| Ⱇ | FERT | dopuść element obcy |
| Ⱉ | OT | wypuść wynik na zewnątrz |
| Ⱑ | JAĆ | utwórz rozwidlenia |
| Ⱛ | IŻYCA | domknij przebieg |

Pełna trzydziestka — w tym IŻE, DJERVI, ON, JER, CY, CZERW, SZA, UK, JU — jest w instrumencie i w `src/lib/glag/operators.ts`.

---

## Uruchomienie kodu

To warstwa hipotezy z żywym GRID-em. Żeby odpalić instrument lokalnie:

```bash
npm install
npm run dev
```

Kanon (operatory, 99 przykładów, interpreter, parser wypowiedzi) nie potrzebuje UI:

- `src/lib/glag/operators.ts`
- `src/lib/glag/programs.ts`
- `src/lib/glag/interpreter.ts`
- `src/lib/glag/speech.ts`

---

## Zasada

Nie pytaj „jak powiedzieć to po angielsku głagolicą”.  
Pytaj: **jaki ruch pola chcę wykonać?**  
Potem ułóż bukwy.

Jeśli coś tu jest złe — nie koryguj angielskiego. Napisz inną ligaturę.
