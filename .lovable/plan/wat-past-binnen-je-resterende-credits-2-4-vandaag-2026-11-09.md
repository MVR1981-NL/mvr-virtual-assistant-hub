# Wat past binnen je resterende credits (2,4 vandaag)

Je hebt vandaag nog 2,4 credits. Morgen om 01:00 komen er weer 5 bij. Kleine aanpassingen lukken nog, grote ombouwwerken niet.

## Voorstel: Google Analytics 4 toevoegen (klein, past nu)
- Op elke pagina komt Google Analytics in de kop van de pagina, met je opgeslagen Measurement ID.
- Ook als een bezoeker naar een andere pagina gaat, telt dat als een nieuwe paginaweergave.
- Zo zie je in Google Analytics welke bezoekers via LinkedIn binnenkomen.

## Andere kleine opties (één per keer, morgen of later)
- Klikbare LinkedIn-links met herkenningscode, zodat je LinkedIn-bezoekers in je cijfers terugziet. Dit gebeurt alleen in de chat, de site verandert niet.
- 3 extra veelgestelde vragen toevoegen, zoals "Wat is een HS-code?".
- Eén nieuwe dienstpagina, bijvoorbeeld "Douane-administratie uitbesteden".

## Technische details
- Een server function leest `GOOGLE_ANALYTICS_MEASUREMENT_ID` en geeft alleen de publieke ID terug.
- De root loader en `head()` voegen het gtag.js-script en de config toe. Er wordt niets toegevoegd als de ID ontbreekt.
- Een effect in de root component stuurt bij elke routewijziging een `page_view`.
- Controle: in de opgehaalde HTML bevestigen dat het script in de head staat.
