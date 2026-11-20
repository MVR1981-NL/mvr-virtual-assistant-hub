import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/hs-code-check")({
  head: () => pageHead(
    "HS-code Check - Wat is de HS-code van mijn product? | MVR",
    "Check de HS-code, het invoertarief en of EUDR geldt voor jouw product. Gratis voor importeurs.",
  ),
  component: HsCodeCheck,
});

const PRODUCTS = [
  { id: "koffie", label: "Koffie", hs: "0901", omschrijving: "Koffie, ook indien gebrand of cafeïnevrij", tarief: "0%", eudr: true, docs: "EUDR: geolocatie + due diligence nodig" },
  { id: "cacao", label: "Cacao", hs: "1801", omschrijving: "Cacaobonen, heel of gebroken, al dan niet gebrand", tarief: "0%", eudr: true, docs: "EUDR: geolocatie + due diligence nodig" },
  { id: "soja", label: "Soja / Sojabonen", hs: "1201", omschrijving: "Sojabonen, ook indien gebroken", tarief: "0%", eudr: true, docs: "EUDR: geolocatie + due diligence nodig" },
  { id: "palmolie", label: "Palmolie", hs: "1511", omschrijving: "Palmolie en fracties daarvan", tarief: "0% - 3,8% afhankelijk van soort", eudr: true, docs: "EUDR: geolocatie + due diligence nodig" },
  { id: "hout", label: "Hout / Houten meubels", hs: "9403 / 4407", omschrijving: "Meubels van hout of onbewerkt hout", tarief: "0%", eudr: true, docs: "EUDR: geolocatie + due diligence nodig voor hout" },
  { id: "rundvlees", label: "Rundvlees / Rundvee", hs: "0201", omschrijving: "Vlees van runderen, vers of gekoeld", tarief: "12,8% + € 176,80 / 100 kg", eudr: true, docs: "EUDR: geolocatie + due diligence nodig" },
  { id: "rubber", label: "Rubber / Autobanden", hs: "4011", omschrijving: "Nieuwe luchtbanden van rubber", tarief: "4,5%", eudr: true, docs: "EUDR: geldt voor natuurrubber" },
  { id: "kleding", label: "Kleding / Textiel", hs: "6104 / 6204", omschrijving: "Kleding van katoen of synthetisch", tarief: "12%", eudr: false, docs: "Geen EUDR. Wel textieletikettering checken." },
  { id: "schoenen", label: "Schoenen", hs: "6403", omschrijving: "Schoeisel met buitenzool van rubber / leer", tarief: "8%", eudr: false, docs: "Geen EUDR. Check wel REACH voor leer." },
  { id: "elektronica", label: "Elektronica / Laptops", hs: "8471", omschrijving: "Computers, laptops en onderdelen", tarief: "0%", eudr: false, docs: "Geen EUDR. Wel CE + WEEE checken." },
  { id: "speelgoed", label: "Speelgoed", hs: "9503", omschrijving: "Speelgoed, driewielers, scooters", tarief: "0% - 4,7%", eudr: false, docs: "Geen EUDR. Wel CE + veiligheidseisen." },
  { id: "meubels-stof", label: "Meubels - gestoffeerd", hs: "9401", omschrijving: "Stoelen en zitmeubels, gestoffeerd", tarief: "0%", eudr: false, docs: "Geen EUDR als geen hout. Bij houten frame wel EUDR." },
];

function HsCodeCheck() {
  const [selected, setSelected] = useState(PRODUCTS[0].id);
  const product = PRODUCTS.find((p) => p.id === selected)!;

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Douane</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">HS-code Check</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Wat is de HS-code van mijn product? Kies je product en zie direct je HS-code, je invoertarief en of EUDR voor jou geldt. De HS-code is de basis voor je aangifte en je importkosten.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-7 shadow-card">
            <p className="font-semibold">1. Kies je product</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {PRODUCTS.map((p) => (
                <button key={p.id} onClick={() => setSelected(p.id)} className={`rounded-full border px-4 py-2 text-sm ${selected === p.id ? "bg-primary text-white border-primary" : "bg-white"}`}>{p.label}</button>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Staat je product er niet bij? Gebruik dan je Import Roadmap voor een persoonlijk importplan, of vraag je leverancier om de HS-code op de factuur / paklijst.</p>
          </div>

          <div>
            <div className="rounded-xl border bg-card p-7 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wide">Jouw HS-code</p>
              <p className="mt-2 text-4xl font-bold">{product.hs}</p>
              <p className="mt-2 font-semibold">{product.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{product.omschrijving}</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2"><span>Invoertarief (indicatie)</span><span className="font-bold">{product.tarief}</span></div>
                <div className="flex justify-between border-b pb-2"><span>EUDR van toepassing?</span><span className={`font-bold ${product.eudr ? "text-red-600" : "text-green-600"}`}>{product.eudr ? "Ja - check nodig" : "Nee"}</span></div>
              </div>
              <p className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm">{product.docs}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><Link to="/importkosten-calculator">Bereken nu je importkosten <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/eudr-check">Doe de EUDR Check</Link></Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Indicatie op basis van meest gebruikte HS-codes. Voor een bindende HS-code, check altijd je leverancier, je douane-expediteur of het EU TARIC systeem. Dit is geen juridisch advies.</p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
