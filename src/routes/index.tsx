import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Globe2, PackageSearch, TrendingUp, Check, X, ArrowRight, Briefcase, Clock, Target, Quote, Calculator, Package, Fuel, ClipboardCheck, Scale, Timer, Search, TreePine, Warehouse, RotateCcw } from "lucide-react";
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
    "Logistieke en douane-administratie uitbesteden | MVR",
    "Ik ben Marcel van Roosendaal. Ik neem planbare logistieke en douane-administratie over voor importeurs, handelsbedrijven en expediteurs. Vertel wat blijft liggen.",
  ), scripts: [
    { type: "application/ld+json", children: JSON.stringify(BUSINESS_JSONLD) },
  ] }),
  component: Index,
});

const SERVICES = [
  { icon: FileText, title: "Documenten & dossiers", text: "Ontbrekende CMR's nabellen bij vervoerders, ritstatus bijwerken in jouw systeem, AWB's controleren en dossiers compleet maken." },
  { icon: Globe2, title: "Import & export", text: "Import-/exportadministratie, oorsprongsdocumentatie en voorbereiding van douaneprocessen." },
  { icon: PackageSearch, title: "Orders, zendingen & data-entry", text: "Order- en zendinginformatie verwerken en opvolgen, direct in jouw eigen systemen." },
  { icon: TrendingUp, title: "Pieken & achterstand", text: "Tijdelijke specialistische capaciteit wanneer het werk zich opstapelt." },
];

const STEPS = [
  { n: "01", title: "We kijken waar tijd verdwijnt", text: "Via de gratis check brengen we in kaart welke werkzaamheden tijd kosten en welke taken geschikt zijn om uit te besteden." },
  { n: "02", title: "We bakenen het werk af", text: "We spreken vooraf af wat MVR overneemt, wat intern blijft, hoeveel capaciteit nodig is en hoe de overdracht verloopt." },
  { n: "03", title: "MVR gaat aan de slag", text: "De werkzaamheden worden op afstand en op afgesproken momenten uitgevoerd. Jij houdt overzicht en regie." },
];

const TOOL_GROUPS = [
  {
    icon: FileText,
    title: "Douane Tools",
    text: "Voor importeurs en handelsbedrijven. Bereken, check en plan je import.",
    tools: [
      { to: "/importkosten-calculator", label: "Importkosten Calculator" },
      { to: "/import-roadmap", label: "Persoonlijke Import Roadmap" },
      { to: "/cbam-check", label: "CBAM Check" },
      { to: "/hs-code-check", label: "HS-code Check" },
      { to: "/eudr-check", label: "EUDR Check" },
    ],
    overview: "/douane-tools",
    overviewLabel: "Alle douanetools",
  },
  {
    icon: Package,
    title: "Transport Tools",
    text: "Voor planners, chauffeurs en transportbedrijven. Direct te gebruiken.",
    tools: [
      { to: "/pallet-calculator", label: "Pallet Calculator" },
      { to: "/transportkosten-calculator", label: "Transportkosten Calculator" },
      { to: "/cmr-checklist", label: "CMR Checklist" },
      { to: "/incoterms-kiezer", label: "Incoterms Kiezer" },
      { to: "/rij-rusttijden-check", label: "Rij- en Rusttijden Check" },
      { to: "/wachttijd-calculator", label: "Wachttijd Calculator" },
    ],
    overview: "/transport-tools",
    overviewLabel: "Alle transporttools",
  },
  {
    icon: Warehouse,
    title: "Logistiek Tools",
    text: "Voor magazijn, orderpickers en logistieke bedrijven.",
    tools: [
      { to: "/opslagkosten-calculator", label: "Opslagkosten Calculator" },
      { to: "/orderpick-checklist", label: "Orderpick Checklist" },
      { to: "/retourkosten-calculator", label: "Retourkosten Calculator" },
    ],
    overview: "/logistiek-tools",
    overviewLabel: "Alle logistieke tools",
  },
];

const DEMO = {
  cmr: {
    label: "Openstaande CMR's",
    delivers: "Een overzicht met ritten waarvoor nog documenten ontbreken.",
    takesOver: "Ik zoek uit welke CMR's ontbreken, volg ze op bij vervoerders en werk de ritstatus bij in jouw systeem.",
    returns: "Een bijgewerkt overzicht met wat binnen is, wat uitstaat en wie de volgende actie heeft.",
    rows: [
      { id: "Rit 214 · Rotterdam > München", status: "Opgevraagd" },
      { id: "Rit 218 · Roosendaal > Antwerpen", status: "Ontvangen" },
      { id: "Rit 221 · Venlo > Duisburg", status: "Actie nodig" },
    ],
  },
  import: {
    label: "Importdossiers",
    delivers: "Een overzicht van open zendingen en de documenten die al binnen zijn.",
    takesOver: "Ik breng ontbrekende stukken in kaart, volg ze op bij de afgesproken contactpersonen en werk de dossiers bij.",
    returns: "Een overzicht per zending met de dossierstatus, open acties en eventuele vragen aan de broker.",
    rows: [
      { id: "Zending HB-1042 · Shanghai > Rotterdam", status: "Ontvangen" },
      { id: "Zending HB-1047 · Istanbul > Roosendaal", status: "Opgevraagd" },
      { id: "Zending HB-1051 · Mumbai > Antwerpen", status: "Actie nodig" },
    ],
  },
} as const;

function statusClass(status: string) {
  if (status === "Ontvangen") return "bg-green-100 text-green-800";
  if (status === "Opgevraagd") return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
}

function Index() {
  const [activeTab, setActiveTab] = useState<"cmr" | "import">("cmr");
  const demo = DEMO[activeTab];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={heroPort} alt="Containerterminal in de haven bij zonsondergang" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-8 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <Eyebrow>Specialistische logistiek & douane ondersteuning</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-6xl">
              Logistieke en douane-administratie uitbesteden
            </h1>
            <p className="mt-6 max-w-2xl text-base text-navy-muted md:text-lg">
              Ik ben Marcel van Roosendaal. Blijven douanedossiers, documenten of ordergegevens liggen? Ik neem planbare administratie over voor importeurs, transportbedrijven, handelsbedrijven en expediteurs — op afstand, in jouw eigen systemen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-auto whitespace-normal px-6 py-3.5"><Link to="/contact" search={{ type: "check" }}>Vertel wat blijft liggen <ArrowRight /></Link></Button>
              <Button asChild variant="outline" size="lg" className="h-auto whitespace-normal border-navy-foreground/30 bg-transparent px-6 py-3.5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"><Link to="/diensten">Bekijk wat ik overneem</Link></Button>
            </div>
            <p className="mt-4 text-sm text-navy-muted">Gratis check · Vrijblijvend · Persoonlijk contact met Marcel</p>
            <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-3 border-t border-navy-foreground/15 pt-6">
              <div><dt className="font-display text-2xl font-bold sm:text-3xl">29+ jaar</dt><dd className="mt-1 text-sm text-navy-muted">logistiek & warehouses</dd></div>
              <div><dt className="font-display text-2xl font-bold sm:text-3xl">7+ jaar</dt><dd className="mt-1 text-sm text-navy-muted">douane-praktijk</dd></div>
              <div><dt className="font-display text-2xl font-bold sm:text-3xl">10–25u</dt><dd className="mt-1 text-sm text-navy-muted">flexibel per maand</dd></div>
            </dl>
          </div>
          <div className="hidden md:block">
            <img src="/site-assets/af32087001650710.webp" alt="Marcel van Roosendaal aan het werk" loading="eager" width={586} height={783} className="w-full rounded-2xl object-cover shadow-card" />
            <p className="mt-3 text-center text-sm text-navy-muted">Marcel van Roosendaal · MVR Virtual Assistant</p>
          </div>
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

      {/* Demo - Zo ziet de overdracht eruit */}
      <Section>
        <Eyebrow>Zo ziet de overdracht eruit</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Jij levert aan, ik werk bij, jij houdt overzicht</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Klik op een tabblad en zie wat je aanlevert, wat ik overneem en wat je terugkrijgt. Zo werkt het ook in jouw bedrijf.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          <button type="button" onClick={() => setActiveTab("cmr")} className={`rounded-full px-5 py-2.5 text-sm font-semibold ${activeTab === "cmr" ? "bg-primary text-primary-foreground" : "border bg-card hover:bg-muted"}`}>Openstaande CMR's</button>
          <button type="button" onClick={() => setActiveTab("import")} className={`rounded-full px-5 py-2.5 text-sm font-semibold ${activeTab === "import" ? "bg-primary text-primary-foreground" : "border bg-card hover:bg-muted"}`}>Importdossiers</button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <p className="text-sm font-semibold text-primary">1 · Wat jij aanlevert</p>
            <p className="mt-3 text-sm text-muted-foreground">{demo.delivers}</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <p className="text-sm font-semibold text-primary">2 · Wat ik overneem</p>
            <p className="mt-3 text-sm text-muted-foreground">{demo.takesOver}</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <p className="text-sm font-semibold text-primary">3 · Wat jij terugkrijgt</p>
            <p className="mt-3 text-sm text-muted-foreground">{demo.returns}</p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border bg-card shadow-card">
          <div className="border-b px-6 py-4">
            <h3 className="font-semibold">{demo.label}</h3>
            <p className="mt-1 text-xs text-muted-foreground">Voorbeeld met fictieve gegevens</p>
          </div>
          <div className="divide-y">
            {demo.rows.map((r) => (
              <div key={r.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <span className="text-sm font-medium">{r.id}</span>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusClass(r.status)}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Voorbeeld met fictieve gegevens, om te laten zien hoe je overzicht eruit ziet na de overdracht.</p>

        <Button asChild className="mt-6 h-auto whitespace-normal py-3"><Link to="/contact" search={{ type: "check" }}>Vertel wat blijft liggen <ArrowRight /></Link></Button>
      </Section>

      {/* Why */}
      <Section className="bg-muted">
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
      <Section>
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
          <Button asChild className="mt-5 h-auto whitespace-normal py-3"><Link to="/contact" search={{ type: "check" }}>Vertel wat blijft liggen <ArrowRight /></Link></Button>
        </div>
      </Section>

      {/* Featured tools */}
      <Section className="bg-muted">
        <Eyebrow>Uitgelicht · Gratis tools</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Start met 1 tool, zie direct waar je staat</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Eén voor importeurs, één voor transportbedrijven. In 2 minuten klaar, zonder account.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card">
            <Calculator className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Importkosten berekenen</h3>
            <p className="mt-2 text-sm text-muted-foreground">Importeer je goederen van buiten de EU? Bereken in 2 minuten je totale importkosten: douanerechten, btw, inklaring en transport.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Douanerechten + btw in 1 overzicht</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Inclusief inklaring en transport</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Direct weten wat je product echt kost</li>
            </ul>
            <Button asChild className="mt-5"><Link to="/importkosten-calculator">Bereken mijn importkosten <ArrowRight /></Link></Button>
          </div>
          <div className="rounded-xl border bg-card p-7 shadow-card">
            <ClipboardCheck className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">CMR controleren</h3>
            <p className="mt-2 text-sm text-muted-foreground">Vervoer je goederen over de weg? Controleer in 2 minuten of je CMR compleet en kloppend is, voordat je onderweg problemen krijgt.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Alle verplichte velden checken</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Ontbrekende gegevens direct zien</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Voorkom discussie bij levering</li>
            </ul>
            <Button asChild className="mt-5"><Link to="/cmr-checklist">Controleer mijn CMR <ArrowRight /></Link></Button>
          </div>
        </div>
      </Section>

      {/* All tools - compact */}
      <Section>
        <Eyebrow>Gratis tools</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Alle 15 tools, per vakgebied</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Direct te gebruiken, zonder account. Kies je vakgebied en je ziet alle tools die daarbij horen.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TOOL_GROUPS.map((g) => (
            <Button key={g.title} asChild variant="outline" className="h-auto justify-between whitespace-normal px-6 py-4"><Link to={g.overview}>{g.title} <ArrowRight /></Link></Button>
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
