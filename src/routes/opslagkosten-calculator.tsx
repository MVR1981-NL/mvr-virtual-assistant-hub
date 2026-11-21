import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/opslagkosten-calculator")({
  head: () => pageHead(
    "Opslagkosten Calculator - Wat kost je palletplek echt? | MVR",
    "Bereken je totale opslagkosten per maand, per pallet en per jaar. Gratis voor logistieke bedrijven.",
  ),
  component: Opslagkosten,
});

function Opslagkosten() {
  const [pallets, setPallets] = useState(100);
  const [perPallet, setPerPallet] = useState(12.5);
  const [extra, setExtra] = useState(250);

  const opslag = pallets * perPallet;
  const totaal = opslag + extra;
  const perJaar = totaal * 12;
  const perPalletTotaal = pallets > 0 ? totaal / pallets : 0;

  return (
    <SiteLayout>
      <Section>
        <img src="/site-assets/logistiek-magazijn.jpg" alt="Heftruck met pallets in magazijn" className="w-full h-64 object-cover rounded-2xl mb-8" />
        <Eyebrow>Gratis tool - Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Opslagkosten Calculator</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Wat kost je palletplek per maand echt? Vul je aantallen in en zie direct je totale opslagkosten, je kosten per pallet en je kosten per jaar.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card space-y-5">
            <div><label className="font-semibold text-sm">Aantal palletplaatsen in gebruik</label><input type="number" value={pallets} onChange={(e) => setPallets(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="font-semibold text-sm">Huur / kosten per palletplaats per maand (€)</label><input type="number" step="0.5" value={perPallet} onChange={(e) => setPerPallet(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /><p className="mt-1 text-xs text-muted-foreground">Gemiddeld € 8 - € 15 per palletplaats, afhankelijk van regio en type magazijn.</p></div>
            <div><label className="font-semibold text-sm">Extra kosten per maand (€) - handling, verzekering, energie</label><input type="number" value={extra} onChange={(e) => setExtra(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
          </div>
          <div className="rounded-xl border bg-card p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide">Jouw opslagkosten</p>
            <p className="mt-2 text-4xl font-bold">€ {totaal.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-lg font-normal text-muted-foreground">/ maand</span></p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2"><span>Opslag (pallets x prijs)</span><span className="font-bold">€ {opslag.toFixed(2)}</span></div>
              <div className="flex justify-between border-b pb-2"><span>Extra kosten</span><span className="font-bold">€ {extra.toFixed(2)}</span></div>
              <div className="flex justify-between border-b pb-2"><span>Kosten per palletplaats</span><span className="font-bold">€ {perPalletTotaal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Kosten per jaar</span><span className="font-bold">€ {perJaar.toLocaleString("nl-NL", { maximumFractionDigits: 0 })}</span></div>
            </div>
            <p className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">Tip: Zit je boven de € 15 per palletplaats all-in? Dan betaal je waarschijnlijk te veel, of je benut je plaatsen niet goed.</p>
            <Button asChild className="mt-5"><Link to="/logistiek-tools">Alle logistiek tools <ArrowRight /></Link></Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
