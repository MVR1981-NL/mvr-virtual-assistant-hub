import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, Section, Eyebrow, PageHero, CtaBand } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/tarieven")({
  head: () => pageHead(
    "Tarieven logistiek & douane ondersteuning | MVR",
    "Transparante capaciteitsblokken: FLEX 10 (€850), FLEX 20 (€1.650) en FLEX 25 (€2.000) per maand, of een Sprint voor pieken en achterstanden.",
  ),
  component: Tarieven,
});

const PLANS = [
  { name: "FLEX 10", hours: "10 uur per maand", price: "€850", text: "Voor een beperkt aantal terugkerende werkzaamheden, zoals documentcontroles, dossierwerk en administratieve opvolging.", featured: false },
  { name: "FLEX 20", hours: "20 uur per maand", price: "€1.650", text: "Voor bedrijven waar structureel meer specialistisch werk blijft liggen en meerdere werkzaamheden kunnen worden overgedragen.", featured: true },
  { name: "FLEX 25", hours: "25 uur per maand", price: "€2.000", text: "Voor bedrijven die MVR structureel inzetten als extra logistieke capaciteit voor dossiers, documentatie en import/export-administratie.", featured: false },
];

const FAQ = [
  ["Wat gebeurt er met ongebruikte uren?", "De capaciteit wordt maandelijks voor jouw organisatie gereserveerd. Niet-gebruikte uren worden daarom niet automatisch onbeperkt meegenomen. Als verschuiven nodig is, bespreken we vooraf wat mogelijk is."],
  ["Kan ik mijn pakket aanpassen?", "Ja, in overleg. Opschalen of afbouwen is afhankelijk van de beschikbare capaciteit van MVR en wordt vooraf afgestemd."],
  ["Wat als er meer werk is dan afgesproken?", "Werk buiten de afgesproken scope wordt eerst besproken. Extra werkzaamheden worden pas uitgevoerd nadat duidelijk is wat daarvoor nodig is."],
  ["Wanneer worden de werkzaamheden uitgevoerd?", "MVR werkt op afstand en op vooraf afgesproken momenten. Een capaciteitsblok is geen permanent bemande backoffice."],
  ["Hoe werkt een Sprint?", "Voor tijdelijke pieken of achterstanden bepalen we vooraf welke werkzaamheden worden uitgevoerd, hoeveel capaciteit nodig is, wat de gewenste oplevering is en welke prijs daarbij hoort."],
];

function Tarieven() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Tarieven" title="Transparante tarieven voor specialistische capaciteit" intro="Geen algemene VA-uren, maar specialistische ondersteuning rondom logistiek, import/export, documenten en dossiers. Je weet vooraf waar je aan toe bent." />
      <Section className="-mt-12 pt-0 md:pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-xl border bg-card p-8 shadow-card ${p.featured ? "border-primary ring-2 ring-primary" : ""}`}>
              {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Meest gekozen</span>}
              <h2 className="font-display text-xl font-bold">{p.name}</h2>
              <p className="text-sm text-muted-foreground">{p.hours}</p>
              <p className="mt-6"><span className="font-display text-4xl font-bold">{p.price}</span><span className="text-muted-foreground"> / maand</span></p>
              <p className="mt-1 text-xs text-muted-foreground">excl. btw</p>
              <p className="mt-6 flex-1 text-sm text-muted-foreground">{p.text}</p>
              <Link to="/contact" search={{ type: "capaciteit" }} className={`mt-8 rounded-md px-5 py-3 text-center font-semibold transition ${p.featured ? "bg-primary text-primary-foreground hover:brightness-110" : "border hover:bg-secondary"}`}>Kies {p.name}</Link>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-4 rounded-xl border bg-muted p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold">Piek & achterstand Sprint</h2>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">Tijdelijke capaciteit voor achterstanden, pieken of een afgebakend project. Prijs op basis van afgesproken scope en benodigde capaciteit.</p>
          </div>
          <Link to="/contact" search={{ type: "capaciteit" }} className="shrink-0 rounded-md bg-navy px-5 py-3 text-center font-semibold text-navy-foreground">Vraag een Sprint aan</Link>
        </div>
      </Section>
      <Section className="bg-muted">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Wat koop je eigenlijk?</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold">Gereserveerde specialistische capaciteit</h2>
            <p className="mt-4 text-muted-foreground">Je koopt geen beschikbaarheid van 09:00 tot 17:00 en geen onbeperkte ondersteuning. Je reserveert capaciteit voor vooraf afgesproken werkzaamheden.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Vooraf duidelijk hoeveel uren beschikbaar zijn", "Geen onduidelijkheid over wat wel en niet onder de samenwerking valt", "Flexibel en op afstand, zonder extra medewerker aan te nemen"].map((t) => <li key={t} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-primary" />{t}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Veelgestelde vragen over tarieven</h2>
            <div className="mt-6 divide-y rounded-xl border bg-card">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold marker:hidden">{q}</summary>
                  <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CtaBand title="Niet zeker of je 10, 20 of 25 uur nodig hebt?" text="Dat hoef je vooraf ook niet te weten. Met de gratis check brengen we eerst in kaart welke werkzaamheden overdraagbaar zijn en hoeveel capaciteit daarbij past." />
    </SiteLayout>
  );
}
