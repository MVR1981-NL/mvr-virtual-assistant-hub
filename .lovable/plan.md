# Google Analytics 4 op alle pagina's

## Wat je krijgt
- Elke pagina van de site stuurt bezoeken naar jouw Google Analytics 4 account, met de Measurement ID die je al veilig hebt opgeslagen (GOOGLE_ANALYTICS_MEASUREMENT_ID).
- Ook als een bezoeker van pagina wisselt (bijv. Home naar Tarieven) wordt dat als nieuwe paginaweergave geteld.
- De bestaande cookiebanner blijft werken; GA laadt alleen als de ID aanwezig is.

## Technische details
- Nieuwe server function `getAnalyticsId` (src/lib/analytics.functions.ts) leest `process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID` en geeft alleen de ID terug (een Measurement ID is publiek, geen geheim risico).
- `src/routes/__root.tsx`: root `loader` haalt de ID op; root `head()` voegt via `scripts` het gtag.js-script (`googletagmanager.com/gtag/js?id=...`) en de init-snippet (`gtag('js')`, `gtag('config', id)`) toe in de `<head>`. Niets toegevoegd als de ID ontbreekt.
- SPA-navigatie: in de root component een effect op routewijziging dat `gtag('event','page_view',{page_path})` stuurt (initiële config met `send_page_view` blijft voor eerste load).
- Controle: HTML van een paar pagina's ophalen en bevestigen dat het gtag-script met de juiste ID in de head staat.
- Let op: op Netlify moet dezelfde variabele ook ingesteld worden.
