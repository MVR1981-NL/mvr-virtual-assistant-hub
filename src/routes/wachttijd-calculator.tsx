import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/wachttijd-calculator")({
  head: () => pageHead(
    "Wachttijd Calculator - Hoeveel wachttijd kan je factureren? | MVR",
    "Log aankomst, start laden en vertrek en bereken direct hoeveel wachttijd je kan factureren. Gratis voor transporteurs.",
  ),
  component: WachttijdCalculator,
});

function toMinutes(t: string) {
  if (!t) return 0;
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function WachttijdCalculator() {
  const [aankomst, setAankomst] = useState("08:00");
  const [startLaden, setStartLaden] = useState("10:30");
  const [vertrek, setVertrek] = useState("11:15");
  const [vrijeTijd, setVrijeTijd] = useState(120);
  const [tarief, setTarief] = useState(65);
  const [kenteken, setKenteken] = useState("");
  const [locatie, setLocatie] = useState("");

  const wachtenTotLaden = Math.max(0, toMinutes(startLaden) - toMinutes(aankomst));
  const ladenDuur = Math.max(0, toMinutes(vertrek) - toMinutes(startLaden));
  const totaleTijd = Math.max(0, toMinutes(vertrek) - toMinutes(aankomst));
  const factureerbaarMin = Math.max(0, wachtenTotLaden - vrijeTijd);
  const bedrag = (factureerbaarMin / 60) * tarief;
  const eur = (n: number) => n.toLocaleString("nl-NL", { style: "currency", currency: "EUR" });
  const fmt = (min: number) => `${Math.floor(min / 60)}u ${String(min % 60).padStart(2, "0")}min`;

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Wachttijd Calculator</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Hoeveel wachttijd kan je factureren? Log aankomst, start laden en vertrek. Je ziet direct hoeveel je kan factureren en wat je kan doorberekenen aan je klant.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-sm font-semibold">Kenteken (optioneel)</label><input value={kenteken} onChange={(e) => setKenteken(e.target.value)} placeholder="Bijv. XX-123-X" className="mt-1 w-full rounded-md border px-3 py-2" /></div>
              <div><label className="text-sm font-semibold">Locatie (optioneel)</label><input value={locatie} onChange={(e) => setLocatie(e.target.value)} placeholder="Bijv. Renault, Douai" className="mt-1 w-full rounded-md border px-3 py-2" /></div>
            </div>
            <div><label className="text-sm font-semibold">Aankomst bij klant</label><input type="time" value={aankomst} onChange={(e) => setAankomst(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="text-sm font-semibold">Start laden / lossen</label><input type="time" value={startLaden} onChange={(e) => setStartLaden(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="text-sm font-semibold">Vertrek bij klant</label><input type="time" value={vertrek} onChange={(e) => setVertrek(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="text-sm font-semibold">Vrije wachttijd (afgesproken)</label><input type="number" value={vrijeTijd} onChange={(e) => setVrijeTijd(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /><p className="text-xs text-muted-foreground mt-1">In minuten. Vaak 120 min (2 uur) vrij, check je contract.</p></div>
            <div><label className="text-sm font-semibold">Uurtarief wachttijd</label><input type="number" value={tarief} onChange={(e) => setTarief(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /><p className="text-xs text-muted-foreground mt-1">In € per uur. Vaak € 60 - € 75.</p></div>
          </div>

          <div>
            <div className="rounded-xl border bg-card p-7 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide">Je wachttijd {kenteken && ` - ${kenteken}`} {locatie && ` - ${locatie}`}</p>
              <p className="mt-3 text-3xl font-bold">{eur(bedrag)}</p>
              <p className="mt-1 text-sm text-muted-foreground">Te factureren voor {fmt(factureerbaarMin)} wachttijd</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2"><span>Wachten tot laden: {aankomst} → {startLaden}</span><span className="font-semibold">{fmt(wachtenTotLaden)}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Laden / lossen: {startLaden} → {vertrek}</span><span className="font-semibold">{fmt(ladenDuur)}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Totale tijd bij klant</span><span className="font-semibold">{fmt(totaleTijd)}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Min vrije wachttijd</span><span className="font-semibold">- {fmt(vrijeTijd)}</span></div>
                <div className="flex justify-between pt-1"><span>Factureerbaar</span><span className="font-bold">{fmt(factureerbaarMin)} x {eur(tarief)} / uur</span></div>
              </div>
              {factureerbaarMin === 0 ? (
                <p className="mt-4 rounded-lg bg-green-50 border border-green-200 p-4 text-sm">Je wachttijd zit nog binnen je vrije tijd van {fmt(vrijeTijd)}. Nog geen bedrag te factureren, maar log het wel, want het telt wel mee voor je chauffeursuren.</p>
              ) : (
                <p className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">Tip: Maak een foto van je CMR met tijd + kenteken + GPS log als bewijs. Zonder bewijs betaalt je klant je wachttijd vaak niet.</p>
              )}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><Link to="/cmr-checklist">Check je CMR <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/transport-tools">Alle transport tools</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
