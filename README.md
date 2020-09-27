# CreateToDoReact

# Oppgave leksjon 6

## Denne oppgaven har til hensikt å få litt bedre erfaring med React og gjøre om vanilla.js til React. Ta utgangspunkt i vanilla todo oppgave dere leverte i Oblig 2 og gjør den om til React. Ta utgangspunkt i de samme kravene som var på Oblig 2.

## Jeg "scoper" navnene på komponentene nedenfor for å gjøre det mer forståelig hva komponenten skal gjøre. I mange tilfeller så har man generiske komponenter som ikke er så "satt". Eks. CompletedList kunne vært en List komponent som kunne blitt gjennbrukt til mer enn bare å liste ut Completed Todos.

# Krav:

    * Komponenter
        * TodoCardList (1 poeng)
        * TodoCard (1 poeng)
        * TodoButton (1 poeng)
        * Modal (1 poeng)
        * Search (1 poeng)
        * Title (1 poeng)
        * CompletedList (1 poeng)
        * CompletedListItem (1 poeng)
        * Navbar (1 poeng)
    * Hvis ingen TodoCards (1 poeng)
        * Skriv ut "Jippi! Ingen todos i dag"
    * Inputfelter
        * Bruke samme inputfelter som tidligere (2 poeng)
        * Maks 50 char på "beskrivelse" (bruker state til å ha kontroll på antall   bokstaver) (1 poeng)
    * Filter utgår men skal kunne gjøre et enkelt søkt (2 poeng)
        * Enkelt søk i listen av "completed" på tittelen
        * Dette gir øving i å filtrere en liste
        * Lag en enkel søkeboks inne i CompletedList komponenten som du bruker til å søke med
