import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";
import { ArrowRight, Check, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/import-roadmap")({
  head: () => pageHead(
    "Persoonlijke Import Roadmap | MVR",
    "Beantwoord 5 vragen en krijg je persoonlijke import roadmap: HS-code, tarief, EUDR, EORI, artikel 23 en ICS2 in 1 plan.",
    "/import-roadmap"),
  component: ImportRoadmap,
});

type ProductKey = "koffie" | "kleding" | "elektronica" | "hout" | "overig";
type OriginKey = "china" | "brazilie" | "uk" | "vs" | "india" | "overig-buiten-eu" | "binnen-eu";

const PRODUCTS: Record<ProductKey, { label: string; hs: string; tarief: string; eudr: boolean; eudrText: string }> = {
  koffie: { label: "Koffie / Cacao", hs: "0901", tarief: "0%", eudr: true, eudrText: "Koffie en cacao vallen onder EUDR. Je moet een due diligence verklaring en geolocatie van de plantage van je leverancier hebben." },
  kleding: { label: "Kleding / Textiel", hs: "61 / 62", tarief: "12%", eudr: false, eudrText: "Voor kleding geldt geen EUDR. Wel moet je HS-code per product kloppen, anders betaal je te veel of te weinig." },
  elektronica: { label: "Elektronica", hs: "85", tarief: "0% - 14% afhankelijk van product", eudr: false, eudrText: "Voor elektronica geldt geen EUDR. Wel moet je letten op CE-markering en juiste HS-code." },
  hout: { label: "Hout / Meubels", hs: "44 / 94", tarief: "0% - 6% afhankelijk van product", eudr: true, eudrText: "Hout valt onder EUDR. Je moet aantonen dat het niet uit ontbost gebied komt." },
  overig: { label: "Overig / Algemeen", hs: "Afhankelijk van product", tarief: "Afhankelijk van HS-code", eudr: false, eudrText: "Of EUDR voor jouw product geldt, hangt af van je exacte product. Ik check dit voor je in de gratis check." },
};

const ORIGINS: Record<OriginKey, string> = {
  china: "China",
  brazilie: "Brazilië",
  uk: "Verenigd Koninkrijk (UK)",
  vs: "Verenigde Staten (VS)",
  india: "India",
  "overig-buiten-eu": "Ander land buiten de EU",
  "binnen-eu": "Binnen de EU",
};

function OptionButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white" : "rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted"}
    >
      {children}
    </button>
  );
}

function ImportRoadmap() {
  const [product, setProduct] = useState<ProductKey | "">("");
  const [origin, setOrigin] = useState<OriginKey | "">("");
  const [frequency, setFrequency] = useState("");
  const [hasEori, setHasEori] = useState("");
  const [hasArtikel23, setHasArtikel23] = useState("");
  const [showResult, setShowResult] = useState(false);

  const allFilled = product !== "" && origin !== "" && frequency !== "" && hasEori !== "" && hasArtikel23 !== "";
  const info = product ? PRODUCTS[product] : null;
  const isBinnenEU = origin === "binnen-eu";

  function reset() {
    setProduct(""); setOrigin(""); setFrequency(""); setHasEori(""); setHasArtikel23(""); setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <SiteLayout>
      <PageHero eyebrow="Gratis tool - Uniek bij MVR" title="Jouw Persoonlijke Import Roadmap" intro="Beantwoord 5 vragen en krijg je eigen importplan: HS-code, tarief, EUDR, EORI, artikel 23 en ICS2 in 1 overzicht. Geen algemene checklist, maar jouw plan." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {!showResult ? (
            <>
              <div className="rounded-xl border bg-card p-6 shadow-card space-y-6">
                <div>
                  <h2 className="font-bold">1. Wat importeer je?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(PRODUCTS) as ProductKey[]).map((k) => (
                      <OptionButton key={k} active={product === k} onClick={() => setProduct(k)}>{PRODUCTS[k].label}</OptionButton>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">2. Waar vandaan?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(ORIGINS) as OriginKey[]).map((k) => (
                      <OptionButton key={k} active={origin === k} onClick={() => setOrigin(k)}>{ORIGINS[k]}</OptionButton>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">3. Hoe vaak importeer je?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <OptionButton active={frequency === "incidenteel"} onClick={() => setFrequency("incidenteel")}>Incidenteel</OptionButton>
                    <OptionButton active={frequency === "maandelijks"} onClick={() => setFrequency("maandelijks")}>1x per maand</OptionButton>
                    <OptionButton active={frequency === "wekelijks"} onClick={() => setFrequency("wekelijks")}>1x per week of vaker</OptionButton>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">4. Heb je al een EORI-nummer?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <OptionButton active={hasEori === "ja"} onClick={() => setHasEori("ja")}>Ja</OptionButton>
                    <OptionButton active={hasEori === "nee"} onClick={() => setHasEori("nee")}>Nee / Weet ik niet</OptionButton>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">5. Heb je een artikel 23 vergunning?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <OptionButton active={hasArtikel23 === "ja"} onClick={() => setHasArtikel23("ja")}>Ja</OptionButton>
                    <OptionButton active={hasArtikel23 === "nee"} onClick={() => setHasArtikel23("nee")}>Nee / Weet ik niet</OptionButton>
                  </div>
                </div>
                <Button disabled={!allFilled} onClick={() => { setShowResult(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="w-full">
                  Maak mijn Import Roadmap <ArrowRight />
                </Button>
                {!allFilled && <p className="text-center text-sm text-muted-foreground">Beantwoord alle 5 vragen om je roadmap te zien.</p>}
              </div>
              <p className="text-center text-sm text-muted-foreground">Deze roadmap is een indicatie op basis van je antwoorden. Voor je exacte HS-code en tarief check ik je product in de gratis check.</p>
            </>
          ) : (
            <>
              <div className="rounded-xl bg-navy p-6 text-navy-foreground">
                <p className="text-sm uppercase tracking-wide text-navy-muted">Jouw Import Roadmap</p>
                <h2 className="mt-2 text-2xl font-bold">{info?.label} uit {origin ? ORIGINS[origin] : ""}</h2>
                <p className="mt-2 text-sm text-navy-muted">Frequentie: {frequency === "wekelijks" ? "1x per week of vaker" : frequency === "maandelijks" ? "1x per maand" : "Incidenteel"}</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border bg-card p-5 shadow-card">
                  <h3 className="font-bold">Stap 1 - EORI-nummer</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{hasEori === "ja" ? "Geregeld. Je hebt al een EORI. Check wel of hij nog actief is." : "Actie nodig. Zonder EORI kun je niet importeren. Vraag hem aan bij de Douane voordat je zending vertrekt."}</p>
                </div>
                <div className="rounded-xl border bg-card p-5 shadow-card">
                  <h3 className="font-bold">Stap 2 - HS-code &amp; Tarief</h3>
                  <p className="mt-2 text-sm text-muted-foreground"><strong>HS-code range:</strong> {info?.hs} | <strong>Tarief:</strong> {info?.tarief}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{isBinnenEU ? "Omdat je binnen de EU importeert, betaal je geen invoerrechten en geen BTW bij invoer. Je moet wel je Intrastat en BTW-aangifte regelen." : "Dit is je tarief op basis van je productgroep. Je exacte tarief hangt af van je exacte HS-code. Ik check die voor je."}</p>
                </div>
                <div className="rounded-xl border bg-card p-5 shadow-card">
                  <h3 className="font-bold">Stap 3 - EUDR</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{info?.eudrText}</p>
                </div>
                <div className="rounded-xl border bg-card p-5 shadow-card">
                  <h3 className="font-bold">Stap 4 - Artikel 23</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{hasArtikel23 === "ja" ? "Geregeld. Je verlegt je BTW al. Goed voor je cashflow." : "Actie nodig. Zonder artikel 23 betaal je BTW bij invoer en moet je hem later terugvragen. Met artikel 23 verleg je hem en bespaar je bij €10.000 import al €2.515 aan BTW die je nu direct moet betalen."}</p>
                </div>
                <div className="rounded-xl border bg-card p-5 shadow-card">
                  <h3 className="font-bold">Stap 5 - ICS2 / ENS + DMS</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{isBinnenEU ? "Voor vervoer binnen de EU heb je geen ENS en geen DMS aangifte nodig." : "Voor je zending de EU binnenkomt, moet er een ENS zijn ingediend. Daarna doe je je DMS invoeraangifte. Check beide met mijn checklist, dan voorkom je afkeuring en vertraging."}</p>
                  {frequency === "wekelijks" && <p className="mt-2 text-sm font-semibold">Omdat je wekelijks importeert: laat dit proces eenmalig goed inrichten. Dan bespaar je elke week tijd en fouten.</p>}
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold">Volgende stap</h3>
                <p className="mt-2 text-sm text-muted-foreground">Wil je dat ik je exacte HS-code, tarief en EUDR check voor je echte zending? Stuur je product en factuurwaarde en ik check het tot op de officiële bron.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild><Link to="/contact" search={{ type: "check" }}>Vraag de gratis check aan <ArrowRight /></Link></Button>
                  <Button asChild variant="outline"><Link to="/importkosten-calculator">Bereken je importkosten <ArrowRight /></Link></Button>
                  <Button asChild variant="outline"><a href="/dms-ics2-checklist.pdf" target="_blank" rel="noreferrer">Download checklist</a></Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4" /> Roadmap gemaakt? Deel hem met je collega: stuur deze pagina door.
                <button onClick={reset} className="ml-auto flex items-center gap-1 font-semibold text-primary"><RotateCcw className="h-4 w-4" /> Opnieuw</button>
              </div>
            </>
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}
