import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section, CtaBand } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => pageHead(
    "Veelgestelde vragen | MVR Logistiek & Douane Ondersteuning",
    "Antwoorden over werkzaamheden, capaciteit, beschikbaarheid, werken in jouw systemen en vertrouwelijkheid bij MVR.", "/faq"),
  component: Faq,
});

const QA: [string, string][] = [
  ["Wat kan ik aan MVR uitbesteden?", "MVR ondersteunt bij afgebakende en planbare werkzaamheden rondom logistiek, documenten, dossiers, import/export, data-entry en administratieve opvolging. Denk aan CMR/AWB-documentatie, dossieropbouw, documentcontrole, oorsprongsdocumentatie, order- en zendinginformatie en voorbereidende werkzaamheden rondom douaneprocessen."],
  ["Voor welke bedrijven is MVR bedoeld?", "Voor importeurs, handelsbedrijven en logistieke ondernemingen die structureel specialistisch werk hebben liggen, maar niet direct een extra fulltime medewerker willen aannemen."],
  ["Werk je ook tijdens kantooruren?", "MVR is geen permanent bemande backoffice of servicedesk. Werkzaamheden worden op afstand en op vooraf afgesproken momenten uitgevoerd. Daarom past MVR vooral bij werk dat goed planbaar is."],
  ["Ben je continu telefonisch of per e-mail bereikbaar?", "Nee. De samenwerking is ingericht rond duidelijke afspraken, overdracht en geplande uitvoering. Voor werk waarbij continu realtime beschikbaarheid nodig is, is MVR minder geschikt."],
  ["Doe je zelf douaneaangiften?", "MVR ondersteunt bij documentatie, gegevensverzameling, controles en voorbereidende werkzaamheden rondom douaneprocessen. Aangiftes doe ik waar mogelijk in het platform van de klant. Welke werkzaamheden precies worden uitgevoerd en waar formele verantwoordelijkheden liggen, spreken we vooraf af."],
  ["Kun je in onze eigen systemen werken?", "Dat kan wanneer toegang technisch mogelijk is en we duidelijke afspraken maken over autorisaties, informatiebeveiliging en welke werkzaamheden MVR binnen het systeem uitvoert."],
  ["Hoe ga je om met vertrouwelijke informatie?", "Bedrijfs- en klantinformatie wordt alleen gebruikt voor de afgesproken werkzaamheden en zorgvuldig behandeld. Toegang tot systemen en gegevens wordt zo beperkt mogelijk ingericht."],
  ["Hoeveel capaciteit kan ik afnemen?", "Voor structurele ondersteuning werken we met FLEX 10, FLEX 20 en FLEX 25. Voor tijdelijke achterstanden of pieken kan een afgebakende Sprint worden afgesproken."],
  ["Wat gebeurt er als ik meer capaciteit nodig heb?", "Opschalen kan in overleg en is afhankelijk van de beschikbare capaciteit van MVR. Extra uren zijn dus niet automatisch gegarandeerd."],
  ["Wat gebeurt er met ongebruikte uren?", "De capaciteit wordt voor jouw organisatie gereserveerd. Niet-gebruikte uren worden daarom niet automatisch onbeperkt meegenomen. Als verschuiven nodig is, bespreken we vooraf wat mogelijk is."],
  ["Moet ik meteen weten hoeveel uur ik nodig heb?", "Nee. Daarvoor is de gratis check. Daarmee brengen we eerst in kaart welke werkzaamheden overdraagbaar zijn en welke capaciteit daarbij logisch lijkt."],
  ["Hoe start een samenwerking?", "Eerst bepalen we of MVR bij je situatie past. Daarna spreken we de werkzaamheden, capaciteit, verantwoordelijkheden, informatieoverdracht en werkwijze af. Pas daarna starten we."],
];

function Faq() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQ" title="Veelgestelde vragen" intro="Alles over werkzaamheden, capaciteit, beschikbaarheid en samenwerken met MVR." />
      <Section>
        <div className="mx-auto max-w-3xl divide-y rounded-xl border bg-card shadow-card">
          {QA.map(([q, a]) => (
            <details key={q} className="p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">{q}</summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand title="Staat jouw vraag er niet tussen?" text="Start met de gratis check, of vertel direct welke capaciteit je nodig hebt." />
    </SiteLayout>
  );
}
