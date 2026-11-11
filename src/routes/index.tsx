import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Globe2, PackageSearch, TrendingUp, Check, X, ArrowRight, Briefcase, Clock, Target, Quote } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import { SiteLayout, Section, Eyebrow, CtaButtons, CtaBand } from "@/components/site/SiteLayout";
import { ChecklistForm } from "@/components/site/forms";
import { Button } from "@/components/ui/button";
import { pageHead, BUSINESS_JSONLD } from "@/lib/site";

const REVIEW = {
  quote: "Marcel heeft ons uitstekend geholpen bij alle nieuwe douaneveranderingen (EUDR, €3/€2 heffingen, product identifiers). Hij verifieert alles tot op de officiële bron, maakt complexe materie begrijpelijk voor B2B vs B2C en neemt veel uitzoekwerk en broker-communicatie uit handen. Erg fijn om zijn expertise aan boord te hebben – scheelt ons enorm veel tijd en voorkomt vertragingen.",
  name: "Kevin Bakx",
  role: "Head of Supply Chain @ Honeybalm",
};

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead(
    "Logistieke administratie & douane uitbesteden | MVR",
    "Marcel van Roosendaal ondersteunt importeurs en logistieke bedrijven met douane-administratie, documenten en data-entry in jouw systemen. Vraag een gratis check aan.",
  ), scripts: [
    { type: "application/ld+json", children: JSON.stringify(BUSINESS_JSONLD) },
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
        <div className="relative mx-auto max-w-6xl px-5 py-8 md:py-20">
          <Eyebrow>Specialistische logistiek & douane ondersteuning</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-6xl">
            MVR Logistiek & Douane Ondersteuning
          </h1>
          <p className="mt-6 max-w-2xl text-base text-navy-muted md:text-lg">
            Blijven douanedossiers, documenten of ordergegevens liggen? Ik ben Marcel van Roosendaal. Ik neem planbare administratie over voor importeurs, handelsbedrijven en expediteurs — op afstand, waar mogelijk in jouw eigen systemen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-auto whitespace-normal px-6 py-3.5"><Link to="/contact" search={{ type: "check" }}>Bespreek mijn administratieve knelpunt <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg" className="h-auto whitespace-normal border-navy-foreground/30 bg-transparent px-6 py-3.5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"><Link to="/diensten">Bekijk wat ik overneem</Link></Button>
          </div>
          <p className="mt-4 text-sm text-navy-muted">Gratis check · Vrijblijvend · Persoonlijk contact met Marcel</p>
          <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-3 border-t border-navy-foreground/15 pt-6">
            <div><dt className="font-display text-2xl font-bold sm:text-3xl">29+ jaar</dt><dd className="mt-1 text-sm text-navy-muted">logistiek & warehouses</dd></div>
            <div><dt className="font-display text-2xl font-bold sm:text-3xl">7+ jaar</dt><dd className="mt-1 text-sm text-navy-muted">douane-praktijk</dd></div>
            <div><dt className="font-display text-2xl font-bold sm:text-3xl">10–25u</dt><dd className="mt-1 text-sm text-navy-muted">flexibel per maand</dd></div>
          </dl>
        </div>
      </section>

      <Section className="bg-muted">
        <figure className="mx-auto max-w-3xl">
          <Eyebrow>Klantervaring · Honeybalm</Eyebrow>
          <Quote className="mt-5 h-8 w-8 text-primary" aria-hidden="true" />
          <blockquote className="mt-4 text-lg font-medium leading-relaxed md:text-xl">“{REVIEW.quote}”</blockquote>
          <figcaption className="mt-5"><p className="font-semibold">{REVIEW.name}</p><p className="text-sm text-muted-foreground">{REVIEW.role}</p></figcaption>
          <Button asChild variant="link" className="mt-5 h-auto whitespace-normal px-0 text-left"><Link to="/douane-administratie">Bekijk de ondersteuning bij douane-administratie <ArrowRight /></Link></Button>
        </figure>
      </Section>

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
        <div className="mt-10 border-t pt-8">
          <h3 className="text-xl font-semibold">Wat levert de gratis check je op?</h3>
          <p className="mt-3 max-w-2xl text-muted-foreground">We bespreken jouw knelpunt, welke taken je kunt overdragen en welke informatie daarvoor nodig is. Daarna bepalen we samen of ondersteuning past. Je zit nergens aan vast.</p>
          <Button asChild className="mt-5 h-auto whitespace-normal py-3"><Link to="/contact" search={{ type: "check" }}>Vraag mijn gratis check aan <ArrowRight /></Link></Button>
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
