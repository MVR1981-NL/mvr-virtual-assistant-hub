import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/incoterms-kiezer")({
  head: () => pageHead(
    "Incoterms Kiezer - Welke Incoterm past bij jouw zending? | MVR",
    "EXW, FOB, DAP of DDP? Beantwoord 3 vragen en zie wie betaalt, wie regelt en waar het risico overgaat. Gratis voor importeurs en exporteurs.",
    "/incoterms-kiezer",
  ),
  component: IncotermsKiezer,
});

type Vervoer = "zee" | "weg" | "lucht";
type Wie = "koper" | "verkoper";

function IncotermsKiezer() {
  const [vervoer, setVervoer] = useState<Vervoer | null>(null);
  const [transport, setTransport] = useState<Wie | null>(null);
  const [douane, setDouane] = useState<Wie | null>(null);

  const reset = () => { setVervoer(null); setTransport(null); setDouane(null); };

  let result = null as null | { term: string; titel: string; uitleg: string; kosten: string; risico: string; douaneTxt: string; tip: string };

  if (vervoer && transport && douane) {
    if (transport === "koper" && douane === "koper") {
      result = {
        term: "EXW",
        titel: "Ex Works - Af Fabriek",
        uitleg: "Jij als koper regelt en betaalt alles vanaf de fabriek van de verkoper. De verkoper hoeft alleen de goederen klaar te zetten.",
        kosten: "Koper betaalt alles: transport, verzekering, douane en invoerrechten.",
        risico: "Risico gaat over zodra de goederen bij de verkoper klaarstaan. Vanaf daar is alles voor jou.",
        douaneTxt: "Jij doet de uitvoer- én invoerdouane.",
        tip: "Alleen slim als je zelf alles goed kan regelen. Anders is FCA vaak veiliger, dan doet de verkoper de uitvoerdouane.",
      };
    } else if (transport === "verkoper" && douane === "verkoper") {
      result = {
        term: "DDP",
        titel: "Delivered Duty Paid - Geleverd Inclusief Rechten",
        uitleg: "De verkoper regelt alles tot aan jouw deur, inclusief invoerdouane en invoerrechten. Jij hoeft alleen te lossen.",
        kosten: "Verkoper betaalt alles: transport, verzekering, douane en invoerrechten.",
        risico: "Risico blijft bij de verkoper tot de goederen bij jou zijn afgeleverd.",
        douaneTxt: "Verkoper doet de invoerdouane en betaalt de invoerrechten.",
        tip: "Makkelijkste voor jou, maar check wel of de verkoper echt invoerrechten in Nederland mag / kan betalen. Anders kies DAP.",
      };
    } else if (transport === "verkoper" && douane === "koper" && vervoer === "zee") {
      result = {
        term: "FOB",
        titel: "Free On Board - Vrij Aan Boord",
        uitleg: "De verkoper levert de goederen aan boord van het schip in de haven van vertrek. Vanaf daar regel jij het verder.",
        kosten: "Verkoper betaalt tot aan boord. Jij betaalt zeevracht, verzekering, invoerdouane en invoerrechten.",
        risico: "Risico gaat over zodra de goederen aan boord staan.",
        douaneTxt: "Jij doet de invoerdouane en betaalt de invoerrechten. Verkoper doet uitvoerdouane.",
        tip: "Klassieker voor zeevracht. Wil je dat de verkoper ook de zeevracht betaalt? Kijk dan naar CFR of CIF.",
      };
    } else {
      result = {
        term: "DAP",
        titel: "Delivered At Place - Geleverd Ter Plaatse",
        uitleg: "De verkoper brengt de goederen tot aan jouw afgesproken plaats, maar zonder invoerdouane. Jij doet de invoer.",
        kosten: "Verkoper betaalt transport tot bestemming. Jij betaalt invoerdouane, invoerrechten en eventueel lossen.",
        risico: "Risico blijft bij de verkoper tot de goederen bij jou aankomen, maar nog niet zijn ingeklaard.",
        douaneTxt: "Jij doet de invoerdouane en betaalt de invoerrechten.",
        tip: "Meest gebruikt voor weg- en luchtvracht. Duidelijk afspreken: wat is de exacte leverplaats?",
      };
    }
  }

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Incoterms Kiezer</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">EXW, FOB, DAP of DDP? Beantwoord 3 vragen en zie direct welke Incoterm bij jouw zending past, wie betaalt en waar het risico overgaat.</p>

        <div className="mt-10 space-y-6 max-w-3xl">
          <div className="rounded-xl border bg-card p-6">
            <p className="font-semibold">1. Hoe gaat je zending?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {([["zee", "Zeevracht - container / schip"], ["weg", "Wegvervoer - truck"], ["lucht", "Luchtvracht - vliegtuig"]] as [Vervoer, string][]).map(([v, label]) => (
                <button key={v} onClick={() => setVervoer(v)} className={`rounded-full border px-4 py-2 text-sm ${vervoer === v ? "bg-primary text-white border-primary" : "bg-white"}`}>{label}</button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <p className="font-semibold">2. Wie regelt het hoofdtransport?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => setTransport("koper")} className={`rounded-full border px-4 py-2 text-sm ${transport === "koper" ? "bg-primary text-white border-primary" : "bg-white"}`}>Ik als koper regel het</button>
              <button onClick={() => setTransport("verkoper")} className={`rounded-full border px-4 py-2 text-sm ${transport === "verkoper" ? "bg-primary text-white border-primary" : "bg-white"}`}>Verkoper regelt het</button>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <p className="font-semibold">3. Wie doet de invoerdouane en betaalt de invoerrechten?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => setDouane("koper")} className={`rounded-full border px-4 py-2 text-sm ${douane === "koper" ? "bg-primary text-white border-primary" : "bg-white"}`}>Ik als koper</button>
              <button onClick={() => setDouane("verkoper")} className={`rounded-full border px-4 py-2 text-sm ${douane === "verkoper" ? "bg-primary text-white border-primary" : "bg-white"}`}>Verkoper</button>
            </div>
          </div>

          {result && (
            <div className="rounded-xl border bg-green-50 border-green-200 p-7">
              <p className="text-sm font-semibold uppercase tracking-wide">Jouw Incoterm</p>
              <p className="mt-2 text-3xl font-bold">{result.term} - {result.titel}</p>
              <p className="mt-3 text-muted-foreground">{result.uitleg}</p>
              <ul className="mt-5 space-y-2 text-sm">
                <li><strong>Kosten:</strong> {result.kosten}</li>
                <li><strong>Risico:</strong> {result.risico}</li>
                <li><strong>Douane:</strong> {result.douaneTxt}</li>
              </ul>
              <p className="mt-5 rounded-lg bg-white p-4 text-sm border"><strong>Tip van Marcel:</strong> {result.tip}</p>
              <Button onClick={reset} variant="outline" className="mt-5">Opnieuw kiezen</Button>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <Button asChild><Link to="/import-roadmap">Maak ook je Import Roadmap <ArrowRight /></Link></Button>
            <Button asChild variant="outline"><Link to="/transport-tools">Alle transport tools</Link></Button>
          </div>
          <p className="text-xs text-muted-foreground">Dit is een vereenvoudigde kiezer op basis van Incoterms 2020. Voor een volledige juridische uitleg, check altijd je koopcontract en je verzekering.</p>
        </div>
      </Section>
    </SiteLayout>
  );
}
