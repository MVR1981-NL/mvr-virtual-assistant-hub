import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/orderpick-checklist")({
  head: () => pageHead(
    "Orderpick Checklist - Staat je order compleet voor verzending? | MVR",
    "Vink af voor verzending en voorkom fouten, retouren en discussie. Gratis checklist voor magazijn en orderpickers.",
  ),
  component: Orderpick,
});

const ITEMS = [
  "Order / picklijst gecontroleerd",
  "Juiste product gepakt (EAN / artikelnummer klopt)",
  "Aantal klopt met de order",
  "Houdbaarheid / batch gecontroleerd",
  "Verpakking is intact en schoon",
  "Juiste doos / pallet gebruikt",
  "Label / adres klopt met de order",
  "Foto van de order gemaakt",
];

function Orderpick() {
  const [checked, setChecked] = useState<boolean[]>(Array(ITEMS.length).fill(false));
  const done = checked.filter(Boolean).length;
  const pct = Math.round((done / ITEMS.length) * 100);

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Orderpick Checklist</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Staat je order compleet voor verzending? Vink af voor je hem dichtplakt. Zo voorkom je fouten, retouren en discussie met je klant.</p>
        <div className="mt-10 max-w-3xl">
          <div className="rounded-xl border bg-card p-7 shadow-card">
            <div className="flex justify-between font-semibold"><span>{done} van {ITEMS.length} afgevinkt</span><span>{pct}%</span></div>
            <div className="mt-3 h-3 w-full rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} /></div>
            <div className="mt-6 space-y-3">
              {ITEMS.map((item, i) => (
                <button key={item} onClick={() => toggle(i)} className="flex w-full items-start gap-3 rounded-lg border p-4 text-left hover:bg-muted/50">
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checked[i] ? "bg-primary text-white border-primary" : "bg-white"}`}>{checked[i] && <Check className="h-4 w-4" />}</span>
                  <span className={checked[i] ? "line-through text-muted-foreground" : ""}>{item}</span>
                </button>
              ))}
            </div>
            {pct === 100 ? (
              <p className="mt-6 rounded-lg bg-green-50 border border-green-200 p-4 font-semibold text-green-800">✅ Order compleet - klaar voor verzending!</p>
            ) : (
              <p className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">Nog {ITEMS.length - done} punt(en) te gaan. Verstuur pas als alles afgevinkt is.</p>
            )}
            <Button onClick={() => setChecked(Array(ITEMS.length).fill(false))} variant="outline" className="mt-5">Opnieuw beginnen</Button>
          </div>
          <Button asChild className="mt-5"><Link to="/logistiek-tools">Alle logistiek tools <ArrowRight /></Link></Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
