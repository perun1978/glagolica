import type { CategoryId, OperatorId, Program } from "./types";

export const CATEGORIES: { id: CategoryId; range: string; label: string }[] = [
  { id: "role", range: "1–11", label: "Role i tryby" },
  { id: "research", range: "12–22", label: "Badanie" },
  { id: "decision", range: "23–33", label: "Decyzja i plan" },
  { id: "human", range: "34–44", label: "Człowiek i redakcja" },
  { id: "tone", range: "45–55", label: "Ton i narracja" },
  { id: "media", range: "56–66", label: "Media i rynek" },
  { id: "business", range: "67–77", label: "Biznes i twórczość" },
  { id: "audit", range: "78–88", label: "Audyt i rozwiązania" },
  { id: "format", range: "89–99", label: "Format wyniku" },
];

export const PROGRAMS: Program[] = [
  { n: 1, cmd: "/human", ops: ["AZ", "LUDZIE", "GLAGOLI"], movement: "Podmiot mówi do ludzi jak człowiek.", category: "role", gloss: "ŹRÓDŁO → LUDZIE → WYPOWIEDŹ" },
  { n: 2, cmd: "/expert", ops: ["WEDI", "MYSLCIE", "RCY"], movement: "Rozpoznaj, przemyśl, wydaj specjalistyczne rozstrzygnięcie.", category: "role", gloss: "ROZPOZNANIE → NAMYSŁ → ORZECZENIE" },
  { n: 3, cmd: "/ceo", ops: ["AZ", "BUKI", "MYSLCIE", "TWERDO"], movement: "Wejdź jako sprawczy podmiot, wybierz ramę i ustabilizuj kierunek.", category: "role", gloss: "PODMIOT → RAMA → NAMYSŁ → STABILNOŚĆ" },
  { n: 4, cmd: "/viral", ops: ["SLOWO", "ZIELO", "LUDZIE", "OT"], movement: "Wzmocnij komunikat i wypuść go do ludzi.", category: "role", gloss: "SŁOWO → GĘSTOŚĆ → LUDZIE → WYJŚCIE" },
  { n: 5, cmd: "/seo", ops: ["WEDI", "KAKO", "SLOWO", "OT"], movement: "Rozpoznaj sposób, w jaki treść ma zostać odnaleziona.", category: "role", gloss: "ROZPOZNANIE → METODA → SŁOWO → WYJŚCIE" },
  { n: 6, cmd: "/critic", ops: ["WEDI", "CY", "CHIER", "GLAGOLI"], movement: "Rozpoznaj, ostro rozdziel słabe i mocne elementy, nazwij wynik.", category: "role", gloss: "ROZPOZNANIE → ROZRÓŻNIENIE → CIĘCIE → WYPOWIEDŹ" },
  { n: 7, cmd: "/teacher", ops: ["WEDI", "UK", "GLAGOLI"], movement: "Wiedzę przekształć w przekazywalną naukę.", category: "role", gloss: "WIEDZA → FORMA → WYPOWIEDŹ" },
  { n: 8, cmd: "/eli5", ops: ["WEDI", "CHIER", "UK", "DOBRO"], movement: "Odetnij złożoność i pozostaw użyteczną formę nauki.", category: "role", gloss: "WIEDZA → CIĘCIE → FORMA → UŻYTECZNOŚĆ" },
  { n: 9, cmd: "/brief", ops: ["CHIER", "SLOWO", "POKOJ"], movement: "Odetnij nadmiar, pozostaw spokojny rdzeń komunikatu.", category: "role", gloss: "CIĘCIE → SŁOWO → PASS" },
  { n: 10, cmd: "/strategy", ops: ["MYSLCIE", "BUKI", "KAKO", "TWERDO"], movement: "Namysł wybiera ramę, sposób i stabilny kierunek.", category: "role", gloss: "NAMYSŁ → RAMA → METODA → STABILNOŚĆ" },
  { n: 11, cmd: "/copywriter", ops: ["SLOWO", "DOBRO", "LUDZIE", "GLAGOLI"], movement: "Uformuj słowo służące odbiorcy i wyraź je przekonująco.", category: "role", gloss: "SŁOWO → UŻYTECZNOŚĆ → LUDZIE → WYPOWIEDŹ" },

  { n: 12, cmd: "/research", ops: ["AZ", "WEDI", "CZERW", "JEST"], movement: "Wprowadź źródła, rozpoznaj je, drąż i ustal stan roboczy.", category: "research", gloss: "ŹRÓDŁO → ROZPOZNANIE → DRĄŻENIE → STAN" },
  { n: 13, cmd: "/brainstorm", ops: ["MYSLCIE", "JAC", "FERT", "GLAGOLI"], movement: "Myśl, rozwidlaj, dopuszczaj obce idee, następnie je wyraź.", category: "research", gloss: "NAMYSŁ → GAŁĘZIE → OBCE → WYPOWIEDŹ" },
  { n: 14, cmd: "/promptengineer", ops: ["WEDI", "BUKI", "KAKO", "TWERDO"], movement: "Rozpoznaj zamiar, przebuduj ramę i ustabilizuj metodę polecenia.", category: "research", gloss: "ROZPOZNANIE → RAMA → METODA → STABILNOŚĆ" },
  { n: 15, cmd: "/summarize", ops: ["WEDI", "CHIER", "SLOWO", "POKOJ"], movement: "Rozpoznaj materiał, odetnij nadmiar, zachowaj rdzeń sensu.", category: "research", gloss: "ROZPOZNANIE → CIĘCIE → SŁOWO → PASS" },
  { n: 16, cmd: "/simplify", ops: ["CZERW", "CHIER", "UK", "DOBRO"], movement: "Dotrzyj do wnętrza, usuń komplikacje, nadaj użyteczną formę.", category: "research", gloss: "RDZEŃ → CIĘCIE → FORMA → UŻYTECZNOŚĆ" },
  { n: 17, cmd: "/detailed", ops: ["WEDI", "CZERW", "DJERVI", "GLAGOLI"], movement: "Rozpoznaj i rozwiń temat wzdłuż uporządkowanej osi.", category: "research", gloss: "ROZPOZNANIE → RDZEŃ → OŚ → WYPOWIEDŹ" },
  { n: 18, cmd: "/stepbystep", ops: ["BUKI", "IZE", "KAKO", "UK"], movement: "Ustaw strukturę, połącz kroki, pokaż sposób wykonania.", category: "research", gloss: "RAMA → POŁĄCZENIE → METODA → FORMA" },
  { n: 19, cmd: "/examples", ops: ["WEDI", "ZIEMIA", "SLOWO", "GLAGOLI"], movement: "Sprowadź wiedzę do konkretnych, komunikowalnych przypadków.", category: "research", gloss: "WIEDZA → PRAKTYKA → SŁOWO → WYPOWIEDŹ" },
  { n: 20, cmd: "/analyst", ops: ["WEDI", "CY", "MYSLCIE", "RCY"], movement: "Rozpoznaj dane, rozróżnij elementy, przemyśl i orzeknij.", category: "research", gloss: "ROZPOZNANIE → ROZRÓŻNIENIE → NAMYSŁ → ORZECZENIE" },
  { n: 21, cmd: "/compare", ops: ["WEDI", "JAC", "CY", "RCY"], movement: "Zbuduj gałęzie możliwości i wykonaj precyzyjne porównanie.", category: "research", gloss: "ROZPOZNANIE → GAŁĘZIE → ROZRÓŻNIENIE → ORZECZENIE" },
  { n: 22, cmd: "/proscons", ops: ["JAC", "DOBRO", "CHIER", "RCY"], movement: "Rozdziel warianty według pożytku, szkody i granic.", category: "research", gloss: "GAŁĘZIE → UŻYTECZNOŚĆ → GRANICA → ORZECZENIE" },

  { n: 23, cmd: "/decision", ops: ["WEDI", "JAC", "CY", "RCY"], movement: "Rozpoznaj warianty, rozdziel je i wydaj decyzję.", category: "decision", gloss: "ROZPOZNANIE → GAŁĘZIE → ROZRÓŻNIENIE → ORZECZENIE" },
  { n: 24, cmd: "/planner", ops: ["AZ", "BUKI", "KAKO", "ZIEMIA"], movement: "Od celu przejdź przez strukturę i metodę do działania.", category: "decision", gloss: "CEL → RAMA → METODA → PRAKTYKA" },
  { n: 25, cmd: "/roadmap", ops: ["AZ", "DJERVI", "IZE", "OT"], movement: "Zbuduj oś drogi, połącz etapy i skieruj ku rezultatowi.", category: "decision", gloss: "CEL → OŚ → POŁĄCZENIE → WYJŚCIE" },
  { n: 26, cmd: "/action", ops: ["MYSLCIE", "KAKO", "ZIEMIA"], movement: "Namysł zamień na sposób, a sposób na czynność.", category: "decision", gloss: "NAMYSŁ → METODA → PRAKTYKA" },
  { n: 27, cmd: "/prioritize", ops: ["WEDI", "DJERVI", "CY", "TWERDO"], movement: "Rozpoznaj zadania, ustaw oś ważności i ustabilizuj kolejność.", category: "decision", gloss: "ROZPOZNANIE → OŚ → ROZRÓŻNIENIE → STABILNOŚĆ" },
  { n: 28, cmd: "/productivity", ops: ["KAKO", "CHIER", "ZYWITE", "DOBRO"], movement: "Usuń zbędne ruchy, zachowując trwały i użyteczny proces.", category: "decision", gloss: "METODA → CIĘCIE → TRWANIE → UŻYTECZNOŚĆ" },
  { n: 29, cmd: "/focus", ops: ["CHIER", "CY", "TWERDO"], movement: "Odetnij rozproszenie i utwardź jeden wybrany kierunek.", category: "decision", gloss: "CIĘCIE → ROZRÓŻNIENIE → STABILNOŚĆ" },
  { n: 30, cmd: "/time", ops: ["BUKI", "DJERVI", "ZYWITE", "TWERDO"], movement: "Nadaj czasowi ramę, kolejność i trwały rytm.", category: "decision", gloss: "RAMA → OŚ → TRWANIE → STABILNOŚĆ" },
  { n: 31, cmd: "/learn", ops: ["AZ", "WEDI", "UK", "ZYWITE"], movement: "Podmiot zdobywa wiedzę, przenosi ją i utrwala proces.", category: "decision", gloss: "PODMIOT → WIEDZA → FORMA → TRWANIE" },
  { n: 32, cmd: "/study", ops: ["BUKI", "WEDI", "UK", "TWERDO"], movement: "Ustaw reguły uczenia, zbieraj wiedzę i ją stabilizuj.", category: "decision", gloss: "RAMA → WIEDZA → FORMA → STABILNOŚĆ" },
  { n: 33, cmd: "/quiz", ops: ["WEDI", "JAC", "RCY", "JEST"], movement: "Rozgałęź pytania, wymuś odpowiedzi i sprawdź faktyczny stan wiedzy.", category: "decision", gloss: "WIEDZA → GAŁĘZIE → ORZECZENIE → STAN" },

  { n: 34, cmd: "/flashcards", ops: ["WEDI", "SLOWO", "UK", "ZYWITE"], movement: "Wiedzę podziel na przenośne jednostki do powtarzania.", category: "human", gloss: "WIEDZA → SŁOWO → FORMA → TRWANIE" },
  { n: 35, cmd: "/interview", ops: ["LUDZIE", "JAC", "GLAGOLI", "RCY"], movement: "Zasymuluj pytania człowieka, wypowiedzi i rozstrzygnięcia.", category: "human", gloss: "LUDZIE → GAŁĘZIE → WYPOWIEDŹ → ORZECZENIE" },
  { n: 36, cmd: "/resume", ops: ["AZ", "WEDI", "CHIER", "SLOWO"], movement: "Rozpoznaj doświadczenie podmiotu i skondensuj je w komunikat.", category: "human", gloss: "PODMIOT → ROZPOZNANIE → CIĘCIE → SŁOWO" },
  { n: 37, cmd: "/career", ops: ["AZ", "JAC", "KAKO", "OT"], movement: "Rozwiń możliwe drogi podmiotu i wskaż kierunek wyjścia.", category: "human", gloss: "PODMIOT → GAŁĘZIE → METODA → WYJŚCIE" },
  { n: 38, cmd: "/mentor", ops: ["WEDI", "LUDZIE", "DOBRO", "GLAGOLI"], movement: "Zrozum człowieka i przekaż mu służącą radę.", category: "human", gloss: "ROZPOZNANIE → LUDZIE → UŻYTECZNOŚĆ → WYPOWIEDŹ" },
  { n: 39, cmd: "/coach", ops: ["AZ", "KAKO", "ZIEMIA", "ZYWITE"], movement: "Pomóż podmiotowi przejść od metody do trwałej praktyki.", category: "human", gloss: "PODMIOT → METODA → PRAKTYKA → TRWANIE" },
  { n: 40, cmd: "/consultant", ops: ["WEDI", "MYSLCIE", "DOBRO", "RCY"], movement: "Zbierz wiedzę, rozważ ją i wydaj użyteczną rekomendację.", category: "human", gloss: "ROZPOZNANIE → NAMYSŁ → UŻYTECZNOŚĆ → ORZECZENIE" },
  { n: 41, cmd: "/editor", ops: ["WEDI", "CY", "SLOWO", "TWERDO"], movement: "Rozpoznaj tekst, doprecyzuj go i ustabilizuj jego formę.", category: "human", gloss: "ROZPOZNANIE → ROZRÓŻNIENIE → SŁOWO → STABILNOŚĆ" },
  { n: 42, cmd: "/proofread", ops: ["WEDI", "CY", "CHIER", "JEST"], movement: "Znajdź błędy, oddziel je od poprawnych elementów i potwierdź stan.", category: "human", gloss: "ROZPOZNANIE → ROZRÓŻNIENIE → CIĘCIE → STAN" },
  { n: 43, cmd: "/rewrite", ops: ["WEDI", "CHIER", "BUKI", "GLAGOLI"], movement: "Zachowaj sens, odetnij starą formę i wypowiedz w nowej ramie.", category: "human", gloss: "ROZPOZNANIE → CIĘCIE → RAMA → WYPOWIEDŹ" },
  { n: 44, cmd: "/professional", ops: ["BUKI", "SLOWO", "TWERDO", "GLAGOLI"], movement: "Nadaj komunikatowi uporządkowaną, stabilną formę zawodową.", category: "human", gloss: "RAMA → SŁOWO → STABILNOŚĆ → WYPOWIEDŹ" },

  { n: 45, cmd: "/casual", ops: ["SLOWO", "JER", "LUDZIE", "GLAGOLI"], movement: "Zmiękcz komunikat i skieruj go ku zwykłej rozmowie.", category: "tone", gloss: "SŁOWO → MIĘKKOŚĆ → LUDZIE → WYPOWIEDŹ" },
  { n: 46, cmd: "/friendly", ops: ["SLOWO", "DOBRO", "JER", "LUDZIE"], movement: "Nadaj słowom życzliwy, miękki kierunek ku ludziom.", category: "tone", gloss: "SŁOWO → UŻYTECZNOŚĆ → MIĘKKOŚĆ → LUDZIE" },
  { n: 47, cmd: "/persuasive", ops: ["WEDI", "DOBRO", "ZIELO", "GLAGOLI"], movement: "Rozpoznaj korzyść, wzmocnij ją i wyraź przekonująco.", category: "tone", gloss: "ROZPOZNANIE → UŻYTECZNOŚĆ → GĘSTOŚĆ → WYPOWIEDŹ" },
  { n: 48, cmd: "/concise", ops: ["CHIER", "CY", "SLOWO", "POKOJ"], movement: "Odetnij nadmiar i zachowaj precyzyjny rdzeń.", category: "tone", gloss: "CIĘCIE → ROZRÓŻNIENIE → SŁOWO → PASS" },
  { n: 49, cmd: "/polish", ops: ["WEDI", "CY", "JER", "TWERDO"], movement: "Doprecyzuj, wygładź i ustabilizuj wersję końcową.", category: "tone", gloss: "ROZPOZNANIE → ROZRÓŻNIENIE → MIĘKKOŚĆ → STABILNOŚĆ" },
  { n: 50, cmd: "/tone", ops: ["WEDI", "BUKI", "JER", "GLAGOLI"], movement: "Rozpoznaj odbiorcę, wybierz ramę tonu i dostosuj wypowiedź.", category: "tone", gloss: "ROZPOZNANIE → RAMA → MIĘKKOŚĆ → WYPOWIEDŹ" },
  { n: 51, cmd: "/storyteller", ops: ["AZ", "DJERVI", "ZYWITE", "GLAGOLI"], movement: "Przeprowadź podmiot wzdłuż osi zdarzeń i opowiedz przebieg.", category: "tone", gloss: "PODMIOT → OŚ → TRWANIE → WYPOWIEDŹ" },
  { n: 52, cmd: "/hook", ops: ["SLOWO", "ZIELO", "CHIER", "OT"], movement: "Zagęść sens, odetnij do najmocniejszego wejścia i wypuść.", category: "tone", gloss: "SŁOWO → GĘSTOŚĆ → CIĘCIE → WYJŚCIE" },
  { n: 53, cmd: "/headline", ops: ["CZERW", "CHIER", "SLOWO", "ZIELO"], movement: "Wydobądź rdzeń, skondensuj go i wzmocnij.", category: "tone", gloss: "RDZEŃ → CIĘCIE → SŁOWO → GĘSTOŚĆ" },
  { n: 54, cmd: "/caption", ops: ["WEDI", "SLOWO", "LUDZIE", "OT"], movement: "Powiąż treść z krótkim komunikatem przeznaczonym dla ludzi.", category: "tone", gloss: "ROZPOZNANIE → SŁOWO → LUDZIE → WYJŚCIE" },
  { n: 55, cmd: "/linkedin", ops: ["BUKI", "SLOWO", "LUDZIE", "OT"], movement: "Nadaj słowu zawodową ramę i wyślij je do sieci ludzi.", category: "tone", gloss: "RAMA → SŁOWO → LUDZIE → WYJŚCIE" },

  { n: 56, cmd: "/instagram", ops: ["WEDI", "SLOWO", "ZIELO", "OT"], movement: "Rozpoznaj motyw wizualny, wzmocnij komunikat i opublikuj.", category: "media", gloss: "ROZPOZNANIE → SŁOWO → GĘSTOŚĆ → WYJŚCIE" },
  { n: 57, cmd: "/youtube", ops: ["WEDI", "DJERVI", "GLAGOLI", "OT"], movement: "Zbuduj oś materiału, rozwiń wypowiedź i skieruj ją na zewnątrz.", category: "media", gloss: "ROZPOZNANIE → OŚ → WYPOWIEDŹ → WYJŚCIE" },
  { n: 58, cmd: "/reels", ops: ["MYSLCIE", "JAC", "CHIER", "ZIELO"], movement: "Wygeneruj gałęzie pomysłów, skróć je i wzmocnij najlepsze.", category: "media", gloss: "NAMYSŁ → GAŁĘZIE → CIĘCIE → GĘSTOŚĆ" },
  { n: 59, cmd: "/script", ops: ["BUKI", "DJERVI", "SLOWO", "GLAGOLI"], movement: "Nadaj wypowiedzi strukturę, kolejność i tekst wykonawczy.", category: "media", gloss: "RAMA → OŚ → SŁOWO → WYPOWIEDŹ" },
  { n: 60, cmd: "/email", ops: ["AZ", "SLOWO", "JU", "GLAGOLI"], movement: "Podmiot tworzy słowo, adresuje je i wysyła.", category: "media", gloss: "PODMIOT → SŁOWO → ADRESAT → WYPOWIEDŹ" },
  { n: 61, cmd: "/sales", ops: ["WEDI", "DOBRO", "LUDZIE", "GLAGOLI"], movement: "Rozpoznaj potrzebę człowieka i zakomunikuj wartość.", category: "media", gloss: "ROZPOZNANIE → UŻYTECZNOŚĆ → LUDZIE → WYPOWIEDŹ" },
  { n: 62, cmd: "/offer", ops: ["WEDI", "DOBRO", "SLOWO", "TWERDO"], movement: "Rozpoznaj wartość, ubierz ją w słowa i ustabilizuj ofertę.", category: "media", gloss: "ROZPOZNANIE → UŻYTECZNOŚĆ → SŁOWO → STABILNOŚĆ" },
  { n: 63, cmd: "/brand", ops: ["AZ", "BUKI", "SLOWO", "ZYWITE"], movement: "Tożsamość otrzymuje ramę, język i ciągłość.", category: "media", gloss: "PODMIOT → RAMA → SŁOWO → TRWANIE" },
  { n: 64, cmd: "/customer", ops: ["LUDZIE", "WEDI", "MYSLCIE", "GLAGOLI"], movement: "Wejdź w pole odbiorcy, rozpoznaj jego perspektywę i ją wyraź.", category: "media", gloss: "LUDZIE → ROZPOZNANIE → NAMYSŁ → WYPOWIEDŹ" },
  { n: 65, cmd: "/audience", ops: ["LUDZIE", "WEDI", "CY", "RCY"], movement: "Zbadaj ludzi, rozróżnij grupy i opisz wynik.", category: "media", gloss: "LUDZIE → ROZPOZNANIE → ROZRÓŻNIENIE → ORZECZENIE" },
  { n: 66, cmd: "/competitor", ops: ["ON", "WEDI", "CY", "RCY"], movement: "Zbadaj trzeci biegun, odróżnij jego cechy i wydaj ocenę.", category: "media", gloss: "BIEGUN → ROZPOZNANIE → ROZRÓŻNIENIE → ORZECZENIE" },

  { n: 67, cmd: "/market", ops: ["LUDZIE", "ON", "WEDI", "JAC"], movement: "Zbadaj ludzi i system zewnętrzny, a następnie rozwiń możliwości.", category: "business", gloss: "LUDZIE → BIEGUN → ROZPOZNANIE → GAŁĘZIE" },
  { n: 68, cmd: "/startup", ops: ["AZ", "BUKI", "JAC", "ZIEMIA"], movement: "Utwórz podmiot, ramę eksperymentu, warianty i praktyczny start.", category: "business", gloss: "PODMIOT → RAMA → GAŁĘZIE → PRAKTYKA" },
  { n: 69, cmd: "/business", ops: ["MYSLCIE", "DOBRO", "KAKO", "ZIEMIA"], movement: "Znajdź ideę przynoszącą wartość i sprowadź ją do wykonania.", category: "business", gloss: "NAMYSŁ → UŻYTECZNOŚĆ → METODA → PRAKTYKA" },
  { n: 70, cmd: "/pricing", ops: ["WEDI", "DOBRO", "CY", "RCY"], movement: "Rozpoznaj wartość, rozróżnij poziomy i ustal cenę.", category: "business", gloss: "ROZPOZNANIE → UŻYTECZNOŚĆ → ROZRÓŻNIENIE → ORZECZENIE" },
  { n: 71, cmd: "/funnel", ops: ["LUDZIE", "DJERVI", "IZE", "DOBRO"], movement: "Poprowadź ludzi przez kolejne etapy ku wartości.", category: "business", gloss: "LUDZIE → OŚ → POŁĄCZENIE → UŻYTECZNOŚĆ" },
  { n: 72, cmd: "/growth", ops: ["WEDI", "JAC", "ZYWITE", "OT"], movement: "Rozpoznaj odnogi wzrostu i skieruj trwały proces na zewnątrz.", category: "business", gloss: "ROZPOZNANIE → GAŁĘZIE → TRWANIE → WYJŚCIE" },
  { n: 73, cmd: "/content", ops: ["WEDI", "BUKI", "SLOWO", "ZYWITE"], movement: "Wiedzy nadaj ramę, język i ciągłość publikacji.", category: "business", gloss: "WIEDZA → RAMA → SŁOWO → TRWANIE" },
  { n: 74, cmd: "/calendar", ops: ["BUKI", "DJERVI", "ZYWITE", "TWERDO"], movement: "Uporządkuj treści na osi czasu i utrwal rytm.", category: "business", gloss: "RAMA → OŚ → TRWANIE → STABILNOŚĆ" },
  { n: 75, cmd: "/ideas", ops: ["MYSLCIE", "JAC", "FERT", "SLOWO"], movement: "Rozgałęź myślenie, wpuść obce impulsy i uformuj pomysły.", category: "business", gloss: "NAMYSŁ → GAŁĘZIE → OBCE → SŁOWO" },
  { n: 76, cmd: "/creative", ops: ["FERT", "JAC", "ZIELO", "GLAGOLI"], movement: "Wpuść nieoczywiste wejścia, rozwiń je i wzmocnij ekspresję.", category: "business", gloss: "OBCE → GAŁĘZIE → GĘSTOŚĆ → WYPOWIEDŹ" },
  { n: 77, cmd: "/unpopular", ops: ["ON", "CHIER", "JAC", "GLAGOLI"], movement: "Oddziel się od dominującej ramy i wypowiedz alternatywę.", category: "business", gloss: "BIEGUN → CIĘCIE → GAŁĘZIE → WYPOWIEDŹ" },

  { n: 78, cmd: "/devilsadvocate", ops: ["ON", "JAC", "CHIER", "RCY"], movement: "Zbuduj przeciwny biegun, oddziel jego argumenty i wydaj kontrorzeczenie.", category: "audit", gloss: "BIEGUN → GAŁĘZIE → CIĘCIE → ORZECZENIE" },
  { n: 79, cmd: "/contrarian", ops: ["FERT", "JAC", "WEDI", "GLAGOLI"], movement: "Dopuść obce perspektywy, rozwiń je, zbadaj i przedstaw.", category: "audit", gloss: "OBCE → GAŁĘZIE → ROZPOZNANIE → WYPOWIEDŹ" },
  { n: 80, cmd: "/assumptions", ops: ["SZA", "WEDI", "CY", "JEST"], movement: "Przejrzyj pokrycie i szum, ujawniając ukryte założenia.", category: "audit", gloss: "SZUM → ROZPOZNANIE → ROZRÓŻNIENIE → STAN" },
  { n: 81, cmd: "/risks", ops: ["WEDI", "JAC", "CHIER", "RCY"], movement: "Rozpoznaj możliwe gałęzie zagrożeń i ich granice.", category: "audit", gloss: "ROZPOZNANIE → GAŁĘZIE → GRANICA → ORZECZENIE" },
  { n: 82, cmd: "/factcheck", ops: ["SLOWO", "WEDI", "CY", "JEST"], movement: "Weź twierdzenie, sprawdź źródła, oddziel i potwierdź fakty.", category: "audit", gloss: "SŁOWO → ROZPOZNANIE → ROZRÓŻNIENIE → STAN" },
  { n: 83, cmd: "/verify", ops: ["AZ", "WEDI", "JEST", "RCY"], movement: "Wskaż źródło, wykonaj rozpoznanie i zwróć kwit stanu.", category: "audit", gloss: "ŹRÓDŁO → ROZPOZNANIE → STAN → RECEIPT" },
  { n: 84, cmd: "/logic", ops: ["BUKI", "IZE", "CY", "RCY"], movement: "Sprawdź ramę, połączenia i rozróżnienia prowadzące do wniosku.", category: "audit", gloss: "RAMA → POŁĄCZENIE → ROZRÓŻNIENIE → ORZECZENIE" },
  { n: 85, cmd: "/rootcause", ops: ["WEDI", "CZERW", "CHIER", "RCY"], movement: "Drąż od środka, odcinaj objawy i nazwij przyczynę.", category: "audit", gloss: "ROZPOZNANIE → RDZEŃ → CIĘCIE → ORZECZENIE" },
  { n: 86, cmd: "/debug", ops: ["WEDI", "CY", "CHIER", "ZIEMIA"], movement: "Znajdź odchylenie, odizoluj je i sprowadź poprawkę do praktyki.", category: "audit", gloss: "ROZPOZNANIE → ROZRÓŻNIENIE → CIĘCIE → PRAKTYKA" },
  { n: 87, cmd: "/solution", ops: ["WEDI", "KAKO", "DOBRO", "ZIEMIA"], movement: "Rozpoznaj problem, znajdź sposób i wykonaj użyteczne rozwiązanie.", category: "audit", gloss: "ROZPOZNANIE → METODA → UŻYTECZNOŚĆ → PRAKTYKA" },
  { n: 88, cmd: "/alternative", ops: ["WEDI", "JAC", "DOBRO", "RCY"], movement: "Rozwiń warianty i wybierz korzystniejszą drogę.", category: "audit", gloss: "ROZPOZNANIE → GAŁĘZIE → UŻYTECZNOŚĆ → ORZECZENIE" },

  { n: 89, cmd: "/optimize", ops: ["WEDI", "CHIER", "KAKO", "TWERDO"], movement: "Rozpoznaj przebieg, usuń zbędne ruchy i ustabilizuj lepszą metodę.", category: "format", gloss: "ROZPOZNANIE → CIĘCIE → METODA → STABILNOŚĆ" },
  { n: 90, cmd: "/automate", ops: ["WEDI", "BUKI", "ZYWITE", "TWERDO"], movement: "Rozpoznany proces zamień w trwałą, powtarzalną regułę.", category: "format", gloss: "ROZPOZNANIE → RAMA → TRWANIE → STABILNOŚĆ" },
  { n: 91, cmd: "/template", ops: ["BUKI", "UK", "ZYWITE", "TWERDO"], movement: "Utwórz ramę możliwą do kopiowania i wielokrotnego użycia.", category: "format", gloss: "RAMA → FORMA → TRWANIE → STABILNOŚĆ" },
  { n: 92, cmd: "/checklist", ops: ["BUKI", "IZE", "CY", "JEST"], movement: "Podziel procedurę na sprawdzalne, połączone warunki.", category: "format", gloss: "RAMA → POŁĄCZENIE → ROZRÓŻNIENIE → STAN" },
  { n: 93, cmd: "/framework", ops: ["BUKI", "DJERVI", "IZE", "TWERDO"], movement: "Zbuduj stabilny kręgosłup relacji i zasad.", category: "format", gloss: "RAMA → OŚ → POŁĄCZENIE → STABILNOŚĆ" },
  { n: 94, cmd: "/matrix", ops: ["BUKI", "JAC", "CY", "RCY"], movement: "Rozłóż warianty w ramie i wykonaj rozstrzygające porównanie.", category: "format", gloss: "RAMA → GAŁĘZIE → ROZRÓŻNIENIE → ORZECZENIE" },
  { n: 95, cmd: "/table", ops: ["BUKI", "DJERVI", "SLOWO", "TWERDO"], movement: "Uporządkuj jednostki informacji w stabilnej strukturze.", category: "format", gloss: "RAMA → OŚ → SŁOWO → STABILNOŚĆ" },
  { n: 96, cmd: "/json", ops: ["BUKI", "CY", "UK", "TWERDO"], movement: "Nadaj informacji precyzyjną, przenośną strukturę maszynową.", category: "format", gloss: "RAMA → ROZRÓŻNIENIE → FORMA → STABILNOŚĆ" },
  { n: 97, cmd: "/roleplay", ops: ["AZ", "ON", "LUDZIE", "GLAGOLI"], movement: "Ustaw podmiot, drugi biegun i relację ludzi, następnie zasymuluj dialog.", category: "format", gloss: "PODMIOT → BIEGUN → LUDZIE → WYPOWIEDŹ" },
  { n: 98, cmd: "/reverse", ops: ["OT", "DJERVI", "KAKO", "AZ"], movement: "Zacznij od wyjścia i wróć osią zależności do punktu początkowego.", category: "format", gloss: "WYJŚCIE → OŚ → METODA → ŹRÓDŁO" },
  { n: 99, cmd: "/ultimate", ops: ["AZ", "BUKI", "WEDI", "MYSLCIE", "GLAGOLI", "CY", "TWERDO", "IZYCA"], movement: "Ustal podmiot i ramę, zbierz wiedzę, przemyśl, wyraź, sprawdź, ustabilizuj i domknij.", category: "format", gloss: "PODMIOT → RAMA → WIEDZA → NAMYSŁ → WYPOWIEDŹ → ROZRÓŻNIENIE → STABILNOŚĆ → DOMKNIĘCIE" },
];

export const PROGRAM_BY_N = new Map(PROGRAMS.map((p) => [p.n, p]));
export const PROGRAM_BY_CMD = new Map(PROGRAMS.map((p) => [p.cmd, p]));

function sig(ops: OperatorId[]) {
  return ops.join("→");
}

export const LIGATURE_TWINS = (() => {
  const bySig = new Map<string, Program[]>();
  for (const p of PROGRAMS) {
    const s = sig(p.ops);
    const list = bySig.get(s) ?? [];
    list.push(p);
    bySig.set(s, list);
  }
  const twins = new Map<number, Program[]>();
  for (const group of bySig.values()) {
    if (group.length < 2) continue;
    for (const p of group) {
      twins.set(
        p.n,
        group.filter((g) => g.n !== p.n),
      );
    }
  }
  return twins;
})();

export function programsUsing(op: OperatorId): Program[] {
  return PROGRAMS.filter((p) => p.ops.includes(op));
}
