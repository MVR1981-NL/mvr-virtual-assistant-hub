import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/importkosten-calculator")({
  head: () => pageHead(
    "Importkosten Calculator - Bereken invoerrechten en BTW | MVR Virtual Assistant",
    "Bereken direct je invoerrechten, BTW bij import en totale landed cost voor import van buiten de EU. Gratis, zonder account.",
    "/importkosten-calculator"),
  component: ImportkostenCalculator,
});

function formatEUR(value: number) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
}

function toNumber(value: string) {
  const n = parseFloat(value.replace(",", "."));
  return isNaN(n) ? 0 : n;
}

const TARIEVEN = [
  { value: "elektronica", label: "Elektronica / computers - 0%", tarief: 0 },
  { value: "machines", label: "Machines / onderdelen - 2%", tarief: 2 },
  { value: "kleding", label: "Kleding / textiel - 12%", tarief: 12 },
  { value: "schoenen", label: "Schoenen - 10%", tarief: 10 },
  { value: "meubels", label: "Meubels - 0%", tarief: 0 },
  { value: "speelgoed", label: "Speelgoed - 4,7%", tarief: 4.7 },
  { value: "huishoudelijk", label: "Huishoudelijke artikelen - 5%", tarief: 5 },
  { value: "anders", label: "Anders / zelf invullen", tarief: null },
];

function ImportkostenCalculator() {
  const [goederen, setGoederen] = useState("10000");
  const [transport, setTransport] = useState("1200");
  const [verzekering, setVerzekering] = useState("100");
  const [categorie, setCategorie] = useState("kleding");
  const [tarief, setTarief] = useState("6");
  const [artikel23, setArtikel23] = useState(false);

  const goederenNum = toNumber(goederen);
  const transportNum = toNumber(transport);
  const verzekeringNum = toNumber(verzekering);
  const tariefNum = toNumber(tarief);

  const douanewaarde = goederenNum + transportNum + verzekeringNum;
  const invoerrechten = douanewaarde * (tariefNum / 100);
  const btwBasis = douanewaarde + invoerrechten;
  const btw = artikel23 ? 0 : btwBasis * 0.21;
  const totaal = douanewaarde + invoerrechten + btw;

  const handleCategorie = (value: string) => {
    setCategorie(value);
    const gevonden = TARIEVEN.find((t) => t.value === value);
    if (gevonden && gevonden.tarief !== null) {
      setTarief(String(gevonden.tarief));
    }
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Calculator" title="Wat kost import uit buiten de EU nou echt?" intro="Vul je goederenwaarde, transport en verzekering in en zie direct je invoerrechten, BTW bij import en totale landed cost." />
      <Section>
        <img src="/site-assets/Customs.jpg" alt="Customs declaration document" className="w-full h-64 object-cover rounded-2xl mb-8" />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <label className="block text-sm font-semibold">Goederenwaarde in euro</label>
            <input value={goederen} onChange={(e) => setGoederen(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="10000" />

            <label className="mt-4 block text-sm font-semibold">Transportkosten tot aan de EU-grens in euro</label>
            <input value={transport} onChange={(e) => setTransport(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="1200" />

            <label className="mt-4 block text-sm font-semibold">Verzekering in euro - mag 0 zijn</label>
            <input value={verzekering} onChange={(e) => setVerzekering(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="100" />

            <label className="mt-4 block text-sm font-semibold">Categorie goederen</label>
            <select value={categorie} onChange={(e) => handleCategorie(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2">
              {TARIEVEN.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-semibold">Invoerrecht %</label>
            <input value={tarief} onChange={(e) => setTarief(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="6" />
            <p className="mt-1 text-xs text-muted-foreground">Controleer je exacte tarief altijd in TARIC op basis van je HS-code.</p>

            <label className="mt-5 flex items-start gap-2 rounded-lg bg-muted p-3">
              <input type="checkbox" checked={artikel23} onChange={(e) => setArtikel23(e.target.checked)} className="mt-1" />
              <span className="text-sm"><strong>Ik heb een artikel 23 vergunning (BTW verlegd)</strong><br />Dan betaal je geen BTW bij invoer, maar verleg je hem naar je BTW-aangifte.</span>
            </label>
          </div>

          <div className="mt-5 rounded-xl bg-slate-900 p-5 text-white">
            <h2 className="text-lg font-bold">Jouw berekening</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Douanewaarde</span><strong>{formatEUR(douanewaarde)}</strong></div>
              <div className="flex justify-between"><span>Invoerrechten ({tariefNum}%)</span><strong>{formatEUR(invoerrechten)}</strong></div>
              <div className="flex justify-between"><span>BTW bij import {artikel23 ? "(verlegd)" : "(21%)"}</span><strong>{formatEUR(btw)}</strong></div>
              <div className="flex justify-between border-t border-white/20 pt-3 text-base"><span>Totale landed cost</span><strong>{formatEUR(totaal)}</strong></div>
            </div>
            {artikel23 && <p className="mt-3 text-xs text-slate-300">BTW is verlegd naar je BTW-aangifte en staat daarom op 0 euro bij invoer.</p>}
            <p className="mt-3 text-xs text-slate-300">Formule: Douanewaarde = Goederen + Transport + Verzekering. Invoerrechten = Douanewaarde x tarief. BTW = (Douanewaarde + Invoerrechten) x 21%.</p>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">Dit is een indicatie op basis van de door jou ingevulde gegevens, zonder accijns en zonder antidumpingrechten. Voor een exacte berekening op basis van je HS-code, vraag een gratis check aan.</p>

          <div className="mt-6 rounded-xl border bg-card p-5 shadow-card">
            <h2 className="text-lg font-bold">Wil je dat ik dit voor jouw zending check?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Stuur je HS-code, factuurwaarde en transportkosten en ik check je berekening, je artikel 23 en je DMS 4.1 aangifte.</p>
            <a href="/" className="mt-3 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Vraag de gratis check aan</a>
            <a href="/dms-ics2-checklist.pdf" className="ml-3 inline-block text-sm font-semibold underline">Download de DMS 4.1 en ICS2 Checklist</a>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Veelgestelde vragen</h2>
            <h3 className="mt-4 font-semibold">Hoe bereken je invoerrechten?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Invoerrechten = Douanewaarde x invoerrecht %. Je douanewaarde is je goederenwaarde plus transport en verzekering tot aan de EU-grens.</p>
            <h3 className="mt-4 font-semibold">Wat is douanewaarde?</h3>
            <p className="mt-1 text-sm text-muted-foreground">De waarde waarop de Douane je invoerrechten berekent. Meestal je factuurwaarde plus transport en verzekering tot aan de EU-grens.</p>
            <h3 className="mt-4 font-semibold">Wat is artikel 23?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Met een vergunning artikel 23 betaal je geen BTW bij invoer. Je verlegt de BTW naar je BTW-aangifte. Dat scheelt cashflow.</p>
            <h3 className="mt-4 font-semibold">Waar vind ik mijn exacte invoerrecht?</h3>
            <p className="mt-1 text-sm text-muted-foreground">In TARIC op basis van je HS-code. De percentages in deze calculator zijn veelvoorkomende tarieven als indicatie.</p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
