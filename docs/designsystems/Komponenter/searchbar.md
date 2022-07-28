---
id: searchbarID
title: (!)Søkefelt
description: Søkefelt som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/søkefelt
displayed_sidebar: designsystemSidebar
---
***OBS! Under konstruksjon:***
- *** Ikke design for dette i Figma-KVIB ***
- ***Nåværende komponent er bygget opp av inputfelt fra KVIB, med en søkeknapp (utgangspunkt i kartverket.no) inni feltet ***
- ***Ikke tatt høyde for fokus og hover-funksjoner på hverken knapp eller inputfelt ***
- ***Kartverket.no har enda ikke et felles design for søkefelt, men dette kommer etterhvert ***

***

For å endre lengden til søkefeltet, må det legges inn i et <code><div\></code>-element, slik som gjort i kodeeksempelet under.
Deretter kan størrelsen endres ved å sette bredde på det ytterste <code><div\></code>-elementet.


<div>
    <div class="input-container">
        <input class="input" type="text" placeholder="Søk..."/>
        <button class="button button__searchbar">
            <span class="material-symbols-outlined">search</span>
        </button>
    </div>
</div>

<br/>

```markup
<div>
    <div class="input-container">
        <input class="input" type="text" placeholder="Søk..."/>
        <button class="button button__searchbar">
            <span class="material-symbols-outlined">search</span>
        </button>
    </div>
</div>
```