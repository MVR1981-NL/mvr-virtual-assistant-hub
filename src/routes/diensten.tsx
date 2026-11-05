import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Layers, Workflow } from "lucide-react";
import { SiteLayout, Section, Eyebrow, PageHero, CtaButtons, CtaBand } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/diensten")({
  head: () => pageHead(
    "Logistieke & douane-administratie uitbesteden | Diensten MVR",
    "CMR/AWB-documentatie, dossiers, import/export-administratie, data-entry en orderopvolging uitbesteden aan een logistiek specialist. Op afstand, in jouw systemen.", "/diensten"),
  component: Diensten,
});

const GROUPS = [
  { n: "01", title: "Documenten & dossiers", intro: "Voorbereiden, controleren en compleet maken van logistieke documentatie en dossiers.", items: ["CMR- en AWB-documentatie", "dossieropbouw en dossiercontrole", "ontbrekende documenten/informatie opvolgen", "paklijsten en transportdocumenten", "administratieve documentcontrole"] },
  { n: "02", title: "Import & export", intro: "Administratieve ondersteuning rondom internationale goederenstromen en voorbereiding van douaneprocessen.", items: ["oorsprongsdocumentatie en certificaten", "HS-code- en goedereninformatie verzamelen/controleren", "informatie voorbereiden voor douaneprocessen", "aangiftes in het platform van de klant, waar mogelijk", "administratieve opvolging rondom import/export"] },
  { n: "03", title: "Orders, zendingen & data-entry", intro: "Planbare ondersteuning rondom orders, zendingen en logistieke informatiestromen.", items: ["orderadministratie en data-entry", "zendinginformatie verwerken", "documentstatus opvolgen", "ontbrekende informatie najagen", "afstemming met betrokken partijen"] },
  { n: "04", title: "Pieken & achterstand", intro: "Tijdelijke specialistische capaciteit wanneer het werk zich opstapelt.", items: ["achterstallige dossiers wegwerken", "documentatie structureren", "tijdelijke projectondersteuning", "extra capaciteit tijdens drukke perioden", "afgebakende werkpakketten tijdelijk overnemen"] },
];

function Diensten() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Diensten" title="Logistieke administratie uitbesteden: dit kan MVR overnemen" intro="MVR ondersteunt importeurs, handelsbedrijven en logistieke ondernemingen bij afgebakende en planbare werkzaamheden rondom logistiek, import/export en douane-administratie. Flexibel, op afstand en met praktijkkennis.">
        <CtaButtons dark />
      </PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.n} className="rounded-xl border bg-card p-8 shadow-card">
              <span className="font-display text-sm font-bold text-primary">{g.n}</span>
              <h2 className="mt-2 text-2xl font-bold">{g.title}</h2>
              <p className="mt-2 text-muted-foreground">{g.intro}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {g.items.map((i) => <li key={i} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-muted">
        <Eyebrow>Wat blijft bij jouw organisatie?</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">MVR neemt niet zomaar een volledig logistiek proces over</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Vooraf bepalen we welke werkzaamheden geschikt zijn om extern uit te voeren, welke verantwoordelijkheden bij jou blijven en hoe documenten en informatie worden overgedragen.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{ i: ShieldCheck, t: "Jij houdt de regie", d: "Beslissingen, eindverantwoordelijkheid en interne bevoegdheden blijven binnen jouw organisatie." }, { i: Layers, t: "Afgebakend werk", d: "Vooraf spreken we duidelijk af welke werkzaamheden MVR uitvoert en wat intern blijft." }, { i: Workflow, t: "Duidelijke werkwijze", d: "Digitale overdracht, heldere afspraken en uitvoering op vooraf afgesproken momenten." }].map((x) => (
            <div key={x.t} className="rounded-xl bg-card p-7 shadow-card"><x.i className="h-7 w-7 text-primary" /><h3 className="mt-4 font-semibold">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></div>
          ))}
        </div>
      </Section>
      <CtaBand title="Benieuwd wat jij kunt uitbesteden?" />
    </SiteLayout>
  );
}
