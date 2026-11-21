import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/transportkosten-calculator")({
  head: () => pageHead(
    "Transportkosten Calculator - Wat kost deze rit echt? | MVR",
    "Bereken je kostprijs per km, per pallet en per rit. Diesel, tol, chauffeur en afschrijving. Gratis voor transporteurs.",
    "/transportkosten-calculator",
  ),
  component: TransportkostenCalculator,
});

function Field({ label, value, set, suffix }: { label: string; value: number; set: (v: number) => void; suffix: string }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        <input type="number" step="0.01" value={value} onChange={(e) => set(Number(e.target.value))} className="w-full rounded-md border px-3 py-2" />
        <span className="text-sm text-muted-foreground shrink-0">{suffix}</span>
      </div>
    </div>
  );
}

function TransportkostenCalculator() {
  const [afstand, setAfstand] = useState(500);
  const [verbruik, setVerbruik] = useState(28);
  const [dieselprijs, setDieselprijs] = useState(1.75);
  const [tol, setTol] = useState(45);
  const [uren, setUren] = useState(7);
  const [uurtarief, setUurtarief] = useState(28);
  const [overig, setOverig] = useState(30);
  const [pallets, setPallets] = useState(26);
  const [marge, setMarge] = useState(10);

  const dieselLiters = (afstand / 100) * verbruik;
  const dieselKosten = dieselLiters * dieselprijs;
  const chauffeurKosten = uren * uurtarief;
  const totaal = dieselKosten + tol + chauffeurKosten + overig;
  const perKm = afstand > 0 ? totaal / afstand : 0;
  const perPallet = pallets > 0 ? totaal / pallets : 0;
  const verkoop = totaal * (1 + marge / 100);
  const verkoopPerPallet = pallets > 0 ? verkoop / pallets : 0;

  const eur = (n: number) => n.toLocaleString("nl-NL", { style: "currency", currency: "EUR" });

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Transportkosten Calculator</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Wat kost deze rit echt? Vul diesel, tol, chauffeur en overige kosten in en zie direct je kostprijs per km en per pallet.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card space-y-4">
            <Field label="Afstand (heen + terug)" value={afstand} set={setAfstand} suffix="km" />
            <Field label="Verbruik" value={verbruik} set={setVerbruik} suffix="L / 100 km" />
            <Field label="Dieselprijs" value={dieselprijs} set={setDieselprijs} suffix="€ / L" />
            <Field label="Tol / Maut" value={tol} set={setTol} suffix="€" />
            <Field label="Chauffeursuren" value={uren} set={setUren} suffix="uur" />
            <Field label="Chauffeurstarief (incl. werkgeverlasten)" value={uurtarief} set={setUurtarief} suffix="€ / uur" />
            <Field label="Overig (afschrijving, verzekering, onderhoud)" value={overig} set={setOverig} suffix="€" />
            <Field label="Aantal pallets" value={pallets} set={setPallets} suffix="pallets" />
            <Field label="Gewenste marge" value={marge} set={setMarge} suffix="%" />
          </div>
          <div>
            <div className="rounded-xl border bg-card p-7 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide">Je kostprijs voor deze rit</p>
              <p className="mt-3 text-3xl font-bold">{eur(totaal)}</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2"><span>Diesel: {dieselLiters.toFixed(0)} liter</span><span className="font-semibold">{eur(dieselKosten)}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Tol / Maut</span><span className="font-semibold">{eur(tol)}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Chauffeur: {uren} uur x {eur(uurtarief)}</span><span className="font-semibold">{eur(chauffeurKosten)}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Overig</span><span className="font-semibold">{eur(overig)}</span></div>
                <div className="flex justify-between pt-1"><span>Kostprijs per km</span><span className="font-bold">{eur(perKm)} / km</span></div>
                <div className="flex justify-between"><span>Kostprijs per pallet</span><span className="font-bold">{eur(perPallet)} / pallet</span></div>
              </div>
            </div>
            <div className="mt-5 rounded-xl bg-navy p-6 text-navy-foreground">
              <p className="text-sm uppercase tracking-wide text-navy-muted">Verkoopprijs met {marge}% marge</p>
              <p className="mt-2 text-3xl font-bold">{eur(verkoop)}</p>
              <p className="mt-1 text-sm text-navy-muted">{eur(verkoopPerPallet)} per pallet - dit moet je minimaal vragen om je marge te halen.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><Link to="/pallet-calculator">Bereken ook je pallets <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/wachttijd-calculator">Bereken wachttijd</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
