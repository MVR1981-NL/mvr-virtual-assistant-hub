import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/cmr-checklist")({
  head: () => pageHead(
    "CMR Checklist - Staat alles op je CMR? | MVR",
    "Vink in 1 minuut af of je CMR compleet is voor vertrek. Verplichte velden, handtekeningen en wachttijd log. Gratis voor transporteurs.",
    "/cmr-checklist",
  ),
  component: CmrChecklist,
});

const ITEMS = [
  { id: "afzender", label: "Afzender (naam + adres) staat erop", tip: "Volledige naam en adres van de afzender." },
  { id: "geadresseerde", label: "Geadresseerde / ontvanger staat erop", tip: "Naam en losadres van de ontvanger." },
  { id: "datum", label: "Plaats en datum van opmaak staan erop", tip: "Waar en wanneer de CMR is opgemaakt." },
  { id: "goederen", label: "Omschrijving goederen staat erop", tip: "Wat vervoer je precies? Omschrijving moet kloppen met je lading." },
  { id: "colli", label: "Aantal colli / pallets staat erop", tip: "Aantal pallets of colli, moet kloppen met wat er geladen is." },
  { id: "gewicht", label: "Bruto gewicht staat erop", tip: "Gewicht in kg, inclusief verpakking." },
  { id: "kenteken", label: "Kenteken trekker + oplegger staat erop", tip: "Kentekens van beide, niet alleen de trekker." },
  { id: "handtekening_afzender", label: "Handtekening afzender staat erop", tip: "Afzender heeft getekend bij laden." },
  { id: "handtekening_vervoerder", label: "Handtekening vervoerder / chauffeur staat erop", tip: "Jij als vervoerder tekent ook." },
  { id: "voorbehoud", label: "Voorbehoud / schade direct genoteerd", tip: "Zie je schade of ontbreekt er iets? Schrijf het er direct bij, anders ben je later aansprakelijk." },
  { id: "foto", label: "Foto van CMR gemaakt", tip: "Maak een foto voor je eigen administratie, voor je wegrijdt." },
  { id: "wachttijd", label: "Wachttijd gelogd (aankomst + start laden)", tip: "Log tijd + kenteken + GPS, anders kan je je wachttijd niet factureren." },
];

function CmrChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const done = Object.values(checked).filter(Boolean).length;
  const total = ITEMS.length;
  const allDone = done === total;
  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <SiteLayout>
      <Section>
        <img src="/site-assets/Package.jpg" alt="Pakket met CMR document" className="w-full h-64 object-cover rounded-2xl mb-8" />
        <Eyebrow>Gratis tool - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">CMR Checklist</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Staat alles op je CMR wat er op moet staan? Vink af voor je vertrekt. 1 fout of ontbrekende handtekening kan je later een schadeclaim of niet-betaalde wachttijd kosten.</p>
        <div className="mt-8 rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{done} van {total} afgevinkt</p>
            <p className="text-sm text-muted-foreground">{Math.round((done / total) * 100)}% compleet</p>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-muted overflow-hidden">
            <div className={`h-full transition-all ${allDone ? "bg-green-500" : "bg-primary"}`} style={{ width: `${(done / total) * 100}%` }} />
          </div>
        </div>
        <div className={`mt-6 rounded-xl border p-6 ${allDone ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
          {allDone ? (
            <p className="font-semibold flex gap-2"><Check className="h-5 w-5 text-green-600" /> CMR is compleet - je kan vertrekken. Bewaar je foto goed.</p>
          ) : (
            <p className="font-semibold flex gap-2"><AlertTriangle className="h-5 w-5 text-amber-600" /> Nog {total - done} punt(en) open - check ze voor je vertrekt.</p>
          )}
        </div>
        <div className="mt-6 space-y-3">
          {ITEMS.map((item) => (
            <label key={item.id} className={`flex cursor-pointer gap-3 rounded-xl border bg-card p-5 ${checked[item.id] ? "border-green-200 bg-green-50/50" : ""}`}>
              <input type="checkbox" checked={!!checked[item.id]} onChange={() => toggle(item.id)} className="mt-1 h-5 w-5 accent-green-600" />
              <span>
                <span className="font-semibold block">{item.label}</span>
                <span className="text-sm text-muted-foreground">{item.tip}</span>
              </span>
            </label>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link to="/wachttijd-calculator">Bereken je wachttijd <ArrowRight /></Link></Button>
          <Button asChild variant="outline"><Link to="/transport-tools">Alle transport tools</Link></Button>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 shadow-card">
          <h2 className="text-lg font-bold">Blijft dit soort documentwerk liggen?</h2>
          <p className="mt-1 text-sm text-muted-foreground">MVR neemt planbare document- en dossieradministratie over — van CMR-controle tot complete dossiers. Zo hoef jij dit niet na elke rit zelf na te jagen.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild><Link to="/diensten">Bekijk wat ik overneem <ArrowRight /></Link></Button>
            <Button asChild variant="outline"><Link to="/contact" search={{ type: "check" }}>Vertel wat blijft liggen</Link></Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
