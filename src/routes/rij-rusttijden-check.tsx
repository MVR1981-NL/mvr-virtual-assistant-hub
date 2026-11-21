import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/rij-rusttijden-check")({
  head: () => pageHead(
    "Rij- en Rusttijden Check - Mag je chauffeur nog doorrijden? | MVR",
    "Check dagelijkse rijtijd, wekelijkse rijtijd en verplichte rust volgens EU 561/2006. Gratis voor transporteurs en planners.",
    "/rij-rusttijden-check",
  ),
  component: RijRustCheck,
});

function RijRustCheck() {
  const [vandaag, setVandaag] = useState(6.5);
  const [week, setWeek] = useState(32);
  const [rust, setRust] = useState(11);
  const [wilNog, setWilNog] = useState(2.5);

  const magVandaagNog = 9 - vandaag;
  const magVandaagMetVerlenging = 10 - vandaag;
  const magWeekNog = 56 - week;
  const magNog = Math.min(magVandaagMetVerlenging, magWeekNog);

  const magDoorrijden = wilNog <= magVandaagNog && wilNog <= magWeekNog;
  const magMetVerlenging = !magDoorrijden && wilNog <= magVandaagMetVerlenging && wilNog <= magWeekNog;
  const moetStoppen = !magDoorrijden && !magMetVerlenging;

  const rustOk = rust >= 11;
  const rustVerkort = rust >= 9 && rust < 11;

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Rij- en Rusttijden Check</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Mag je chauffeur nog doorrijden? Vul in wat hij vandaag en deze week al gereden heeft en hoe lang zijn laatste rust was. Je ziet direct of hij nog mag, of hij moet stoppen.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card space-y-4">
            <div><label className="text-sm font-semibold">Vandaag al gereden</label><input type="number" step="0.5" value={vandaag} onChange={(e) => setVandaag(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /><p className="text-xs text-muted-foreground mt-1">In uren, bijv. 6.5</p></div>
            <div><label className="text-sm font-semibold">Deze week al gereden (ma t/m nu)</label><input type="number" step="0.5" value={week} onChange={(e) => setWeek(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /><p className="text-xs text-muted-foreground mt-1">Max 56 uur per week</p></div>
            <div><label className="text-sm font-semibold">Laatste dagelijkse rust</label><input type="number" step="0.5" value={rust} onChange={(e) => setRust(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /><p className="text-xs text-muted-foreground mt-1">Normaal 11 uur, verkort minimaal 9 uur (max 3x per week)</p></div>
            <div><label className="text-sm font-semibold">Wil nog rijden</label><input type="number" step="0.5" value={wilNog} onChange={(e) => setWilNog(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /><p className="text-xs text-muted-foreground mt-1">Hoeveel uur moet hij nog rijden tot bestemming?</p></div>
          </div>

          <div>
            <div className={`rounded-xl border p-7 ${magDoorrijden ? "bg-green-50 border-green-200" : magMetVerlenging ? "bg-amber-50 border-amber-200" : "bg-red-50 border-red-200"}`}>
              {magDoorrijden && <><p className="font-bold text-xl">Mag doorrijden</p><p className="mt-2 text-sm">Hij mag nog {magVandaagNog.toFixed(1)} uur vandaag en {magWeekNog.toFixed(1)} uur deze week. Die {wilNog} uur die hij nog moet, past er gewoon in.</p></>}
              {magMetVerlenging && <><p className="font-bold text-xl">Alleen met verlenging tot 10 uur</p><p className="mt-2 text-sm">Normaal mag hij nog maar {magVandaagNog.toFixed(1)} uur vandaag. Met 1x verlenging naar 10 uur mag hij nog {magVandaagMetVerlenging.toFixed(1)} uur. Let op: max 2x per week 10 uur rijden.</p></>}
              {moetStoppen && <><p className="font-bold text-xl">Moet stoppen - mag niet meer doorrijden</p><p className="mt-2 text-sm">Hij mag vandaag nog max {Math.max(0, magNog).toFixed(1)} uur rijden, maar hij moet nog {wilNog} uur. Laat hem stoppen en zijn rust nemen, anders riskeer je een boete bij controle.</p></>}
            </div>

            <div className="mt-5 rounded-xl border bg-card p-6 space-y-3 text-sm">
              <p><strong>Rust check:</strong> {rustOk ? "Rust is goed - 11 uur of meer, volledig hersteld." : rustVerkort ? "Verkorte rust - 9 tot 11 uur. Mag max 3x per week, moet later gecompenseerd worden." : "Rust te kort - minder dan 9 uur. Dit telt niet als dagelijkse rust, hij moet alsnog 11 uur rusten."}</p>
              <p><strong>45 min pauze:</strong> Na max 4,5 uur rijden moet je chauffeur minimaal 45 min pauze nemen (of 15 + 30 min gesplitst).</p>
              <p><strong>Wekelijkse rust:</strong> Minimaal 45 uur per week, verkort 24 uur mag, maar moet binnen 3 weken gecompenseerd worden.</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><Link to="/wachttijd-calculator">Bereken wachttijd <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/transport-tools">Alle transport tools</Link></Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Indicatie op basis van EU Verordening 561/2006. Voor exacte controle, check altijd de tachograaf. Dit is geen juridisch advies.</p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
