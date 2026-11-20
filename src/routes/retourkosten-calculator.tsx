import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/retourkosten-calculator")({
  head: () => pageHead(
    "Retourkosten Calculator - Wat kost die retour je echt? | MVR",
    "Bereken je echte retourkosten per maand en per retour: verzending, arbeid, inspectie en herverpakking.",
  ),
  component: Retourkosten,
});

function Retourkosten() {
  const [retouren, setRetouren] = useState(20);
  const [verzend, setVerzend] = useState(6.95);
  const [minuten, setMinuten] = useState(10);
  const [uurtarief, setUurtarief] = useState(22);
  const [herverpak, setHerverpak] = useState(3.5);

  const verzendTotaal = retouren * verzend;
  const arbeid = retouren * (minuten / 60) * uurtarief;
  const herverpakTotaal = retouren * herverpak;
  const totaal = verzendTotaal + arbeid + herverpakTotaal;
  const perRetour = retouren > 0 ? totaal / retouren : 0;
  const perJaar = totaal * 12;

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Retourkosten Calculator</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Wat kost die retour je echt? Niet alleen de verzending, maar ook de tijd, inspectie en herverpakking. Vul je cijfers in en zie je echte kosten per retour.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card space-y-5">
            <div><label className="font-semibold text-sm">Aantal retouren per maand</label><input type="number" value={retouren} onChange={(e) => setRetouren(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="font-semibold text-sm">Verzendkosten per retour (€)</label><input type="number" step="0.1" value={verzend} onChange={(e) => setVerzend(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="font-semibold text-sm">Tijd per retour (minuten) - uitpakken, controleren, verwerken</label><input type="number" value={minuten} onChange={(e) => setMinuten(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="font-semibold text-sm">Uurtarief medewerker (€)</label><input type="number" value={uurtarief} onChange={(e) => setUurtarief(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
            <div><label className="font-semibold text-sm">Inspectie + herverpakking per retour (€)</label><input type="number" step="0.5" value={herverpak} onChange={(e) => setHerverpak(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" /></div>
          </div>
          <div className="rounded-xl border bg-card p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide">Jouw retourkosten</p>
            <p className="mt-2 text-4xl font-bold">€ {totaal.toFixed(2)} <span className="text-lg font-normal text-muted-foreground">/ maand</span></p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2"><span>Verzending</span><span className="font-bold">€ {verzendTotaal.toFixed(2)}</span></div>
              <div className="flex justify-between border-b pb-2"><span>Arbeid ({minuten} min x {retouren} retouren)</span><span className="font-bold">€ {arbeid.toFixed(2)}</span></div>
              <div className="flex justify-between border-b pb-2"><span>Inspectie + herverpakking</span><span className="font-bold">€ {herverpakTotaal.toFixed(2)}</span></div>
              <div className="flex justify-between border-b pb-2"><span>Kosten per retour</span><span className="font-bold">€ {perRetour.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Kosten per jaar</span><span className="font-bold">€ {perJaar.toLocaleString("nl-NL", { maximumFractionDigits: 0 })}</span></div>
            </div>
            <p className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">Tip: Als je retourpercentage boven de 8% zit, loont het om je Orderpick Checklist strakker te gebruiken. Elke voorkomen retour scheelt je € {perRetour.toFixed(2)}.</p>
            <Button asChild className="mt-5"><Link to="/orderpick-checklist">Gebruik de Orderpick Checklist <ArrowRight /></Link></Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
