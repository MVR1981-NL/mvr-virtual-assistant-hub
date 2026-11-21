import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/pallet-calculator")({
  head: () => pageHead(
    "Pallet Calculator - Hoeveel pallets passen er in je trailer? | MVR",
    "Bereken hoeveel euro-pallets of blokpallets in je trailer passen en hoeveel laadmeters je lading is. Gratis voor transporteurs en planners.",
    "/pallet-calculator",
  ),
  component: PalletCalculator,
});

const PALLETS = {
  euro: { label: "Euro-pallet 120 x 80 cm", factor: 0.4, trailer: 33, bakwagen: 18, bestel: 8 },
  blok: { label: "Blokpallet 100 x 120 cm", factor: 0.5, trailer: 26, bakwagen: 14, bestel: 6 },
  half: { label: "Halve euro-pallet 80 x 60 cm", factor: 0.2, trailer: 66, bakwagen: 36, bestel: 16 },
};

const TRAILERS = {
  trailer: { label: "Standaard trailer - 13,6 m", ldm: 13.6 },
  bakwagen: { label: "Bakwagen - 7,5 m", ldm: 7.5 },
  bestel: { label: "Bestelbus - 3,5 m", ldm: 3.5 },
};

function PalletCalculator() {
  const [aantal, setAantal] = useState(20);
  const [palletType, setPalletType] = useState<keyof typeof PALLETS>("euro");
  const [trailerType, setTrailerType] = useState<keyof typeof TRAILERS>("trailer");

  const pallet = PALLETS[palletType];
  const trailer = TRAILERS[trailerType];
  const ldm = aantal * pallet.factor;
  const past = ldm <= trailer.ldm;
  const capaciteit = pallet[trailerType];
  const over = capaciteit - aantal;
  const procent = Math.min(100, Math.round((ldm / trailer.ldm) * 100));

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Pallet Calculator</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Hoeveel pallets passen er in je trailer? En hoeveel laadmeters is je lading? Vul je aantal pallets in en je weet het in 30 seconden.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card space-y-5">
            <div>
              <label className="text-sm font-semibold">Aantal pallets</label>
              <input type="number" value={aantal} onChange={(e) => setAantal(Number(e.target.value))} className="mt-2 w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-semibold">Pallet type</label>
              <div className="mt-2 space-y-2">
                {(Object.keys(PALLETS) as (keyof typeof PALLETS)[]).map((k) => (
                  <label key={k} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" checked={palletType === k} onChange={() => setPalletType(k)} /> {PALLETS[k].label} - {PALLETS[k].factor} laadmeter per pallet
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Voertuig</label>
              <div className="mt-2 space-y-2">
                {(Object.keys(TRAILERS) as (keyof typeof TRAILERS)[]).map((k) => (
                  <label key={k} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" checked={trailerType === k} onChange={() => setTrailerType(k)} /> {TRAILERS[k].label}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className={`rounded-xl border p-7 ${past ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              <p className="text-sm font-semibold uppercase tracking-wide">{past ? "Past in je voertuig" : "Past NIET in je voertuig"}</p>
              <p className="mt-3 text-3xl font-bold">{ldm.toFixed(1)} laadmeters</p>
              <p className="mt-2 text-sm text-muted-foreground">{aantal} x {pallet.label} = {ldm.toFixed(1)} van {trailer.ldm} laadmeters ({procent}% vol)</p>
              <p className="mt-3 text-sm font-medium">{past ? `Er passen nog ${over} pallets bij in deze ${trailer.label.toLowerCase()}.` : `Te veel. Je komt ${Math.abs(over)} pallets te kort. Neem een grotere auto of splits je lading.`}</p>
            </div>
            <div className="mt-5 rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Zo rekenen we</h3>
              <p className="mt-2 text-sm text-muted-foreground">1 laadmeter = 1 meter lengte van je laadvloer bij 2,40 m breedte. Euro-pallet: 1,20 x 0,80 / 2,40 = 0,4 laadmeter. Blokpallet: 1,20 x 1,00 / 2,40 = 0,5 laadmeter.</p>
              <p className="mt-3 text-sm text-muted-foreground">Let op: dit is een indicatie. Stapelbare lading, gewicht en laadvolgorde kunnen het in de praktijk anders maken.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><Link to="/transportkosten-calculator">Bereken ook je ritkosten <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/transport-tools">Alle transport tools</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
