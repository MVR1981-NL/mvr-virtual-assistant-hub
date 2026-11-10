import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, FileCheck2, Search, MessagesSquare, AlertTriangle, ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow, PageHero, CtaButtons, CtaBand } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/douane-administratie")({
  head: () => pageHead(
    "Douane-administratie uitbesteden | MVR Logistiek & Douane Ondersteuning",
    "Douane-administratie uitbesteden: voorbereiding van aangiftes, HS-codes, EUDR, heffingen en broker-communicatie. Uitvoering in jouw eigen platform, waar mogelijk.", "/douane-administratie"),
  component: DouaneAdministratie,
});

const TAKEN = [
  { i: FileCheck2, t: "Voorbereiding van douane-aangiftes", d: "Alle benodigde informatie verzamelen, controleren en compleet maken: goederenwaarde, oorsprong, HS-codes en documenten. Waar mogelijk werk ik de aangifte direct uit in het platform van jouw organisatie." },
  { i: Search, t: "HS-codes en goedereninformatie", d: "Juiste tariefclassificatie is de basis van elke aangifte. Ik controleer en verzamel HS-codes, productomschrijvingen en oorsprongsgegevens, en leg twijfelgevallen voor ter beslissing." },
  { i: AlertTriangle, t: "Nieuwe regelgeving vertaald naar de praktijk", d: "Denk aan EUDR, lage-waarde-heffingen en product identifiers. Ik verifieer wat er verandert aan de hand van officiële bronnen en leg uit wat het voor jouw goederenstroom betekent." },
  { i: MessagesSquare, t: "Communicatie met brokers en douane", d: "Vragen van je expediteur of customs broker beantwoorden, ontbrekende gegevens aanleveren en vertragingen voorkomen door tijdig en volledig te reageren." },
];

const VOORBEELDEN = [
  "Aangiftes voorbereiden en invoeren in jullie eigen systeem",
  "HS-codes en oorsprongsdocumentatie controleren vóór verzending",
  "EUDR-verplichtingen in kaart brengen en dossiers opbouwen",
  "Ontbrekende documenten najagen bij leveranciers en brokers",
  "Douanedossiers structureren voor controles en audits",
  "Achterstand in aangiftes en dossiers wegwerken",
];

const FAQ = [
  { q: "Doet MVR ook de aangifte zelf?", a: "Waar mogelijk werk ik aangiftes direct uit in het platform van jouw organisatie. De formele verantwoordelijkheid en vergunningen blijven bij jou of je broker; ik zorg dat de inhoud klopt, compleet is en op tijd klaarligt." },
  { q: "Wat als de regelgeving verandert, zoals EUDR?", a: "Ik volgen de officiële bronnen en vertaal wat er verandert naar jouw situatie: welke producten, welke gegevens en welke dossiers je nodig hebt. Geen algemene nieuwsberichten, maar concreet wat jij moet regelen." },
  { q: "Werkt MVR ook samen met onze bestaande broker?", a: "Juist. Ik neem de communicatie en het uitzoekwerk richting je broker of expediteur over, zodat jij daar geen tijd meer aan kwijt bent en vertragingen worden voorkomen." },
  { q: "Hoe snel kan MVR starten?", a: "Na een gratis check bepalen we samen welke werkzaamheden geschikt zijn om over te nemen. Daarna kan ik vaak al binnen enkele dagen starten, volledig op afstand." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function DouaneAdministratie() {
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero eyebrow="Douane-administratie" title="Douane-administratie uitbesteden aan een specialist" intro="Aangiftes, HS-codes, EUDR en broker-communicatie kosten veel tijd en fouten zijn duur. MVR neemt het voorbereidende en administratieve werk over — waar mogelijk direct in jouw eigen platform — zodat jouw goederenstroom niet stilvalt.">
        <CtaButtons dark />
      </PageHero>

      <Section>
        <Eyebrow>Wat ik overneem</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Van voorbereiding tot opvolging</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {TAKEN.map((x) => (
            <div key={x.t} className="rounded-xl border bg-card p-8 shadow-card">
              <x.i className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>Concreet</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Voorbeelden van werkzaamheden</h2>
            <p className="mt-4 text-muted-foreground">Elke samenwerking begint met een afgebakend werkpakket. Dit zijn typische taken die ik voor importeurs en handelsbedrijven overneem:</p>
            <ul className="mt-6 space-y-3 text-sm">
              {VOORBEELDEN.map((v) => <li key={v} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{v}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-8 shadow-card">
            <h3 className="text-xl font-semibold">Wat klanten zeggen</h3>
            <blockquote className="mt-4 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
              “Marcel heeft ons uitstekend geholpen bij alle nieuwe douaneveranderingen (EUDR, €3/€2 heffingen, product identifiers). Hij verifieert alles tot op de officiële bron, maakt complexe materie begrijpelijk en neemt veel uitzoekwerk en broker-communicatie uit handen.”
            </blockquote>
            <p className="mt-4 text-sm font-semibold">Kevin Bakx</p>
            <p className="text-xs text-muted-foreground">Head of Supply Chain @ Honeybalm</p>
            <Link to="/contact" search={{ type: "check" }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Vraag de gratis check aan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Veelgestelde vragen</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Vragen over douane-administratie uitbesteden</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-xl border bg-card p-7 shadow-card">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Wil jij douane-administratie over kunnen dragen?" />
    </SiteLayout>
  );
}
