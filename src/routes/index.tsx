import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Globe2, PackageSearch, TrendingUp, Check, X, ArrowRight, Briefcase, Clock, Target, Quote } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import { SiteLayout, Section, Eyebrow, CtaButtons, CtaBand } from "@/components/site/SiteLayout";
import { ChecklistForm } from "@/components/site/forms";
import { pageHead, BUSINESS_JSONLD } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead(
    "Logistiek & Douane Ondersteuning op afstand | MVR",
    "Extra logistieke en douanecapaciteit zonder extra FTE. Documenten, dossiers, import/export-administratie en data-entry door een specialist met 29+ jaar logistiek-ervaring.",
  ), scripts: [
    { type: "application/ld+json", children: JSON.stringify(BUSINESS_JSONLD) },
    { type: "application/ld+json", children: JSON.stringify(REVIEW_JSONLD) },
  ] }),
  component: Index,
});

const SERVICES = [
  { icon: FileText, title: "Documenten & dossiers", text: "CMR, AWB, dossieropbouw, controles en ontbrekende documentatie najagen." },
  { icon: Globe2, title: "Import & export", text: "Import-/exportadministratie, oorsprongsdocumentatie en voorbereiding van douaneprocessen." },
  { icon: PackageSearch, title: "Orders, zendingen & data-entry", text: "Order- en zendinginformatie verwerken en opvolgen, direct in jouw eigen systemen." },
  { icon: TrendingUp, title: "Pieken & achterstand", text: "Tijdelijke specialistische capaciteit wanneer het werk zich opstapelt." },
];

const STEPS = [
  { n: "01", title: "We kijken waar tijd verdwijnt", text: "Via de gratis check brengen we in kaart welke werkzaamheden tijd kosten en welke taken geschikt zijn om uit te besteden." },
  { n: "02", title: "We bakenen het werk af", text: "We spreken vooraf af wat MVR overneemt, wat intern blijft, hoeveel capaciteit nodig is en hoe de overdracht verloopt." },
  { n: "03", title: "MVR gaat aan de slag", text: "De werkzaamheden worden op afstand en op afgesproken momenten uitgevoerd. Jij houdt overzicht en regie." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={heroPort} alt="Containerterminal in de haven bij zonsondergang" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Eyebrow>Specialistische logistiek & douane ondersteuning</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] md:text-6xl">
            Extra logistieke & douanecapaciteit. <span className="text-primary">Zonder extra FTE.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-muted">
            Voor importeurs, handelsbedrijven en expediteurs die structureel tijd verliezen aan documenten, dossiers, import/export-administratie en data-entry. Uitgevoerd door een specialist, op afstand en in jouw eigen systemen.
          </p>
          <CtaButtons dark />
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-navy-foreground/15 pt-8">
            <div><dt className="font-display text-3xl font-bold">29+ jaar</dt><dd className="mt-1 text-sm text-navy-muted">logistiek & warehouses</dd></div>
            <div><dt className="font-display text-3xl font-bold">7+ jaar</dt><dd className="mt-1 text-sm text-navy-muted">douane-praktijk</dd></div>
            <div><dt className="font-display text-3xl font-bold">10–25u</dt><dd className="mt-1 text-sm text-navy-muted">flexibel per maand</dd></div>
          </dl>
        </div>
      </section>

      {/* Problem */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Herkenbaar?</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Je hebt niet altijd een extra medewerker nodig. Soms vooral extra capaciteit.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>Je logistieke operatie draait door. Maar ondertussen stapelt het werk eromheen zich op.</p>
            <p>Documenten moeten gecontroleerd worden. Dossiers moeten compleet. Ontbrekende informatie moet worden nagejaagd. Import- en exportadministratie blijft liggen.</p>
            <p className="font-medium text-foreground">En jouw specialisten zijn kostbare tijd kwijt aan werk dat goed planbaar en uitbesteedbaar is.</p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-muted">
        <Eyebrow>Wat MVR overneemt</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Afgebakend, planbaar werk rondom je goederenstroom</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-xl border bg-card p-6 shadow-card">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <Link to="/diensten" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          Bekijk alle werkzaamheden <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* Why */}
      <Section>
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2">
            <img src="/site-assets/af32087001650710.webp" alt="Marcel van Roosendaal aan het werk" loading="lazy" width={586} height={783} className="w-full rounded-2xl object-cover shadow-card" />
          </div>
          <div className="md:col-span-3">
            <Eyebrow>Waarom MVR</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Geen algemene VA die eerst moet leren hoe logistiek werkt</h2>
            <p className="mt-5 text-muted-foreground">
              CMR, AWB, Incoterms, HS-codes, oorsprong en douanedossiers zijn voor mij dagelijkse praktijk. Jij hoeft niet vanaf nul uit te leggen hoe een logistiek proces werkt. Ik werk het liefst direct in jouw eigen platform of systeem, zodat alles bij jou blijft.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[{ i: Briefcase, t: "Praktijkkennis", d: "Logistiek en douane zijn mijn vak." }, { i: Clock, t: "Flexibel", d: "Capaciteit die past bij je werklast." }, { i: Target, t: "Duidelijke scope", d: "Vooraf helder wat MVR doet." }].map((x) => (
                <div key={x.t}><x.i className="h-6 w-6 text-primary" /><h3 className="mt-2 font-semibold">{x.t}</h3><p className="text-sm text-muted-foreground">{x.d}</p></div>
              ))}
            </div>
            <p className="mt-8 border-l-4 border-primary pl-4 font-medium">Jij houdt grip op je goederenstroom. MVR zorgt dat het werk eromheen niet blijft liggen.</p>
          </div>
        </div>
      </Section>

      {/* Steps */}
      <Section className="bg-muted">
        <Eyebrow>Zo werkt het</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Geen ingewikkeld traject. In drie stappen aan de slag.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl bg-card p-7 shadow-card">
              <span className="font-display text-4xl font-bold text-primary">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Checklist lead magnet */}
      <section className="bg-navy px-5 py-20 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Gratis checklist</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Welke logistieke werkzaamheden kun jij uitbesteden?</h2>
            <p className="mt-4 text-navy-muted">Een praktische checklist voor importeurs, handelsbedrijven en logistieke ondernemingen. Ontdek welke terugkerende taken je kunt overdragen, zonder direct een extra medewerker aan te nemen.</p>
          </div>
          <ChecklistForm />
        </div>
      </section>

      {/* Fit */}
      <Section>
        <h2 className="text-3xl font-bold md:text-4xl">Past MVR bij jouw situatie?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7">
            <h3 className="font-semibold">MVR past goed als je:</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {["structureel werk hebt rondom documenten, dossiers, import/export of logistieke administratie", "extra capaciteit nodig hebt zonder direct een extra FTE aan te nemen", "werkzaamheden goed kunt afbakenen en op afstand kunt laten uitvoeren", "ongeveer 10–25 uur specialistische ondersteuning per maand zoekt", "waarde hecht aan iemand die logistieke terminologie en processen al kent"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-7">
            <h3 className="font-semibold">MVR past minder goed als je:</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["permanent iemand tijdens kantooruren beschikbaar moet hebben", "continu telefoon, inbox of spoedmeldingen wilt laten bewaken", "dagelijks fysieke aanwezigheid op locatie nodig hebt", "vooral de goedkoopste administratieve ondersteuning zoekt"].map((t) => (
                <li key={t} className="flex gap-3"><X className="mt-0.5 h-4 w-4 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
