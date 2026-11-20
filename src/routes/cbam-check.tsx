import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";
import { ArrowRight, Check, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/cbam-check")({
  head: () => pageHead(
    "CBAM Check: geldt CBAM voor jouw import? | MVR",
    "Check in 2 minuten of CBAM voor jou geldt. Importeer je staal, aluminium, cement of meststoffen? Zit je boven of onder de 50 ton? Krijg je persoonlijke CBAM check.",
    "/cbam-check"),
  component: CbamCheck,
});

type ProductKey = "staal" | "aluminium" | "cement" | "meststoffen" | "waterstof" | "geen";
type TonnageKey = "minder-50" | "meer-50" | "weet-niet";
type DeclarantKey = "ja" | "nee" | "weet-niet";

const PRODUCTS: Record<ProductKey, string> = {
  staal: "IJzer & Staal",
  aluminium: "Aluminium",
  cement: "Cement",
  meststoffen: "Meststoffen",
  waterstof: "Waterstof / Elektriciteit",
  geen: "Geen van deze / Weet ik niet",
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

function CbamCheck() {
  const [product, setProduct] = useState<ProductKey | "">("");
  const [tonnage, setTonnage] = useState<TonnageKey | "">("");
  const [declarant, setDeclarant] = useState<DeclarantKey | "">("");
  const [showResult, setShowResult] = useState(false);

  const allFilled = product !== "" && tonnage !== "" && declarant !== "";

  function getResult() {
    if (product === "geen") {
      return {
        title: "CBAM geldt waarschijnlijk niet voor jou",
        color: "bg-green-600",
        text: "CBAM geldt alleen voor cement, ijzer & staal, aluminium, meststoffen, waterstof en elektriciteit. Als je geen van deze importeert, heb je nu geen CBAM-verplichtingen. Twijfel je over je product? Stuur me je HS-code, dan check ik het voor je.",
        steps: ["Check je HS-code als je twijfelt of je product eronder valt", "Focus je op je gewone douane-aangifte: EORI, HS-code, ICS2 en DMS"],
      };
    }
    if (product === "waterstof") {
      return {
        title: "Actie nodig - voor waterstof en elektriciteit geldt geen 50 ton vrijstelling",
        color: "bg-red-600",
        text: "Voor waterstof en elektriciteit geldt de 50 ton vrijstelling niet. Je moet altijd een erkende CBAM-aangever zijn, ook bij kleine hoeveelheden.",
        steps: ["Vraag direct je status als erkende CBAM-aangever aan", "Verzamel je emissiegegevens van je leverancier", "Je eerste jaarlijkse aangifte voor je 2026 import moet voor 30 september 2027 binnen zijn"],
      };
    }
    if (tonnage === "minder-50") {
      return {
        title: "Je bent vrijgesteld - je zit onder de 50 ton",
        color: "bg-green-600",
        text: "Je importeert minder dan 50 ton CBAM-goederen per jaar. Dan ben je volledig vrijgesteld van CBAM: geen status, geen aangifte, geen certificaten nodig. Let wel op: zodra je in een jaar boven de 50 ton komt, geldt CBAM meteen voor dat hele jaar.",
        steps: ["Houd je totale tonnage per jaar bij, alle CBAM-producten bij elkaar opgeteld", "Kom je toch boven de 50 ton? Vraag dan meteen je status aan", "Check je normale importkosten met mijn calculator"],
      };
    }
    if (tonnage === "meer-50") {
      if (declarant === "ja") {
        return {
          title: "Geregeld - maar vergeet je aangifte en certificaten niet",
          color: "bg-green-600",
          text: "Je hebt al je status als erkende CBAM-aangever. Goed. Vergeet nu niet je jaarlijkse aangifte en je certificaten. Je koopt je certificaten vanaf 1 februari 2027 voor je 2026 import en levert ze in voor 30 september 2027.",
          steps: ["Verzamel je emissiegegevens per zending van je leverancier", "Doe je jaarlijkse CBAM-aangifte voor 2026 voor 30 september 2027", "Koop en lever je CBAM-certificaten in vanaf 1 februari 2027"],
        };
      }
      return {
        title: "Actie nodig - je moet je nu aanmelden als CBAM-aangever",
        color: "bg-red-600",
        text: "Je importeert meer dan 50 ton CBAM-goederen per jaar en je hebt nog geen status. Sinds 1 januari 2026 mag je CBAM-goederen alleen nog importeren als erkende CBAM-aangever. Zonder status mag je eigenlijk niet meer importeren.",
        steps: ["Vraag nu je status als erkende CBAM-aangever aan bij de bevoegde autoriteit", "Vraag je leverancier om je emissiegegevens per ton", "Je eerste jaarlijkse aangifte voor je 2026 import moet voor 30 september 2027 binnen zijn"],
      };
    }
    // weet-niet tonnage
    return {
      title: "Check eerst je tonnage - dat beslist alles",
      color: "bg-amber-600",
      text: "Of CBAM voor jou geldt, hangt helemaal af van je totale tonnage per jaar. Tel al je CBAM-goederen bij elkaar op: staal + aluminium + cement + meststoffen. Zit je onder de 50 ton, dan ben je vrijgesteld. Zit je erboven, dan moet je je nu aanmelden.",
      steps: ["Tel je totale CBAM-tonnage van 2026 bij elkaar op", "Zit je rond de 50 ton? Ga dan uit van actie nodig, want 1 extra zending kan je erboven duwen", "Stuur me je tonnage en ik check het met je mee"],
    };
  }

  const result = getResult();

  function reset() {
    setProduct(""); setTonnage(""); setDeclarant(""); setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <SiteLayout>
      <PageHero eyebrow="Gratis tool - CBAM 2026" title="CBAM Check: geldt CBAM voor jouw import?" intro="Sinds 1 januari 2026 is CBAM definitief. Importeer je staal, aluminium, cement of meststoffen? Check in 2 minuten of je vrijgesteld bent of nu in actie moet komen." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {!showResult ? (
            <>
              <div className="rounded-xl border bg-card p-6 shadow-card space-y-6">
                <div>
                  <h2 className="font-bold">1. Wat importeer je?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(PRODUCTS) as ProductKey[]).map((k) => (
                      <OptionButton key={k} active={product === k} onClick={() => setProduct(k)}>{PRODUCTS[k]}</OptionButton>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">2. Hoeveel ton CBAM-goederen importeer je per jaar?</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Tel al je CBAM-producten bij elkaar op. Alleen netto gewicht van de goederen zelf.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <OptionButton active={tonnage === "minder-50"} onClick={() => setTonnage("minder-50")}>Minder dan 50 ton</OptionButton>
                    <OptionButton active={tonnage === "meer-50"} onClick={() => setTonnage("meer-50")}>Meer dan 50 ton</OptionButton>
                    <OptionButton active={tonnage === "weet-niet"} onClick={() => setTonnage("weet-niet")}>Weet ik niet</OptionButton>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">3. Heb je al een status als erkende CBAM-aangever?</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <OptionButton active={declarant === "ja"} onClick={() => setDeclarant("ja")}>Ja</OptionButton>
                    <OptionButton active={declarant === "nee"} onClick={() => setDeclarant("nee")}>Nee</OptionButton>
                    <OptionButton active={declarant === "weet-niet"} onClick={() => setDeclarant("weet-niet")}>Weet ik niet</OptionButton>
                  </div>
                </div>
                <Button disabled={!allFilled} onClick={() => { setShowResult(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="w-full">
                  Check mijn CBAM status <ArrowRight />
                </Button>
                {!allFilled && <p className="text-center text-sm text-muted-foreground">Beantwoord alle 3 vragen om je check te zien.</p>}
              </div>
              <p className="text-center text-sm text-muted-foreground">Deze check is een indicatie op basis van je antwoorden. Voor je exacte status check ik je tonnage en product met je mee.</p>
            </>
          ) : (
            <>
              <div className={`rounded-xl p-6 text-white ${result.color}`}>
                <p className="text-sm uppercase tracking-wide opacity-80">Jouw CBAM Check</p>
                <h2 className="mt-2 text-2xl font-bold">{result.title}</h2>
                <p className="mt-2 text-sm opacity-90">{result.text}</p>
              </div>

              <div className="rounded-xl border bg-card p-5 shadow-card">
                <h3 className="font-bold">Wat moet je nu doen?</h3>
                <ul className="mt-3 space-y-3">
                  {result.steps.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold">Belangrijke CBAM deadlines</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li><strong>1 januari 2026:</strong> CBAM definitief, alleen erkende aangevers mogen nog importeren</li>
                  <li><strong>Vanaf 1 februari 2027:</strong> Certificaten kopen voor je 2026 import</li>
                  <li><strong>30 september 2027:</strong> Eerste jaarlijkse aangifte + certificaten inleveren voor 2026</li>
                </ul>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold">Wil je dat ik dit voor je check?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Stuur je product, je tonnage en je HS-code en ik check tot op de officiële bron of je vrijgesteld bent of je moet aanmelden.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild><Link to="/contact" search={{ type: "check" }}>Vraag de gratis check aan <ArrowRight /></Link></Button>
                  <Button asChild variant="outline"><Link to="/import-roadmap">Maak ook je Import Roadmap <ArrowRight /></Link></Button>
                  <Button asChild variant="outline"><Link to="/importkosten-calculator">Bereken je importkosten <ArrowRight /></Link></Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4" /> Check gedaan? Deel hem met je collega die ook staal of aluminium importeert.
                <button onClick={reset} className="ml-auto flex items-center gap-1 font-semibold text-primary"><RotateCcw className="h-4 w-4" /> Opnieuw</button>
              </div>
            </>
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}
