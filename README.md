PWA Prestandaoptimering
1. Introduktion

Detta projekt fokuserar på att utöka vår blogg-PWA med prestandaoptimeringar, cache-strategier och förbättrad tillgänglighet.

2. Cache-strategi

Vi implementerade cache-headerar och ETag-validering för att förbättra prestandan vid återbesök och minska onödig dataöverföring.

3. Lazy Loading

Bilder i inläggslistor och sekundära sidor laddas lazy för att förbättra initial laddningstid och scrollprestanda. Hero-bilder är undantagna för att optimera Largest Contentful Paint (LCP).

4. Code Splitting

JavaScript har delats upp i moduler och laddas endast där det behövs, vilket minskar den initiala bundle-storleken och förbättrar laddningsprestandan.

5. Responsiva bilder & redaktionellt arbetsflöde

För närvarande använder alla inlägg en gemensam basbild. Applikationen är strukturerad så att responsiva bilder kan genereras från en enda originalbild, vilket ger olika upplösningar för olika skärmstorlekar.

6. Prestandaanalys

Vi utförde Lighthouse-audits på både mobila enheter och desktop. Prestandan på mobila enheter var lägre på grund av CPU- och nätverksbegränsningar. Optimeringar som lazy loading och caching förbättrade de totala resultaten.

7. Tillgänglighet

Applikationen följer grundläggande tillgänglighetskrav, inklusive semantisk HTML, alt-attribut för bilder och tillgänglig navigering.

8. Slutsats

Genom dessa optimeringar uppnådde PWA:n förbättrad prestanda, underhållbarhet och tillgänglighet.