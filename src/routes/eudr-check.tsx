import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/eudr-check")({
  head: () => pageHead(
    "EUDR Check - Valt mijn product onder de ontbossingsregels? | MVR",
    "Check in 2 minuten of jouw product onder EUDR valt en wat je moet aanleveren: geolocatie, due diligence en bewijs. Gratis voor importeurs.",
    "/eudr-check",
  ),
  component: EudrCheck,
});

const EUDR_PRODUCTS = ["Koffie", "Cacao", "Soja", "Palmolie", "Hout / Houtproducten", "Rundvee / Rundvlees / Leder", "Rubber / Autobanden"];

function EudrCheck() {
  const [product, setProduct] = useState<string | null>(null);
  const [geolocatie, setGeolocatie] = useState<string | null>(null);

  const valtOnderEudr = product !== null && EUDR_PRODUCTS.includes(product);
  const anderProduct = product === "Ander product";
  const showResult = product !== null && geolocatie !== null;

  const reset = () => { setProduct(null); setGeolocatie(null); };

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tool - Douane</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">EUDR Check</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Valt mijn product onder de ontbossingsregels (EUDR)? Beantwoord 2 vragen en zie direct of je een due diligence verklaring en geolocatie moet aanleveren voordat je je product op de EU-markt mag brengen.</p>

        <div className="mt-10 space-y-6 max-w-3xl">
          <div className="rounded-xl border bg-card p-6">
            <p className="font-semibold">1. Wat importeer je?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...EUDR_PRODUCTS, "Ander product"].map((p) => (
                <button key={p} onClick={() => setProduct(p)} className={`rounded-full border px-4 py-2 text-sm ${product === p ? "bg-primary text-white border-primary" : "bg-white"}`}>{p}</button>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">EUDR geldt voor 7 grondstoffen: koffie, cacao, soja, palmolie, hout, rundvee en rubber - en producten die daarvan gemaakt zijn.</p>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <p className="font-semibold">2. Kan je leverancier de geolocatie van de productie aanleveren?</p>
            <p className="text-sm text-muted-foreground mt-1">Dus de GPS-coördinaten van het perceel waar het product vandaan komt, plus bewijs dat er na 31 december 2020 geen ontbossing heeft plaatsgevonden.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => setGeolocatie("ja")} className={`rounded-full border px-4 py-2 text-sm ${geolocatie === "ja" ? "bg-primary text-white border-primary" : "bg-white"}`}>Ja, kan ik aanleveren</button>
              <button onClick={() => setGeolocatie("nee")} className={`rounded-full border px-4 py-2 text-sm ${geolocatie === "nee" ? "bg-primary text-white border-primary" : "bg-white"}`}>Nee / Weet ik niet</button>
            </div>
          </div>

          {showResult && (
            <>
              {anderProduct && (
                <div className="rounded-xl border bg-green-50 border-green-200 p-7">
                  <p className="font-bold text-xl">Valt waarschijnlijk NIET onder EUDR</p>
                  <p className="mt-2 text-muted-foreground">Je product staat niet in de lijst van 7 EUDR-grondstoffen. Je hoeft waarschijnlijk geen EUDR due diligence te doen. Check wel of je product indirect hout, leder of rubber bevat - dan geldt EUDR alsnog voor dat deel.</p>
                  <Button onClick={reset} variant="outline" className="mt-5">Opnieuw checken</Button>
                </div>
              )}
              {valtOnderEudr && geolocatie === "ja" && (
                <div className="rounded-xl border bg-green-50 border-green-200 p-7">
                  <p className="font-bold text-xl">Valt onder EUDR - maar je kan het aanleveren</p>
                  <p className="mt-2 text-muted-foreground">{product} valt onder EUDR. Je moet voor elke zending een due diligence verklaring indienen in het EU TRACES systeem, met geolocatie + bewijs van geen ontbossing na 31-12-2020.</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>✓ Vraag je leverancier om geolocatie + bewijs</li>
                    <li>✓ Dien je due diligence verklaring in via TRACES</li>
                    <li>✓ Bewaar je bewijs 5 jaar</li>
                  </ul>
                  <Button onClick={reset} variant="outline" className="mt-5">Opnieuw checken</Button>
                </div>
              )}
              {valtOnderEudr && geolocatie === "nee" && (
                <div className="rounded-xl border bg-red-50 border-red-200 p-7">
                  <p className="font-bold text-xl">Actie nodig - je mag dit product zo niet op de markt brengen</p>
                  <p className="mt-2 text-muted-foreground">{product} valt onder EUDR en je kan nu geen geolocatie aanleveren. Zonder geolocatie + due diligence mag je het product niet op de EU-markt brengen. Je riskeert een boete en inbeslagname.</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>→ Vraag NU je leverancier om geolocatie + ontbossingsvrij bewijs</li>
                    <li>→ Bestel pas als je het bewijs hebt</li>
                    <li>→ Leg alles vast in je dossier</li>
                  </ul>
                  <Button onClick={reset} variant="outline" className="mt-5">Opnieuw checken</Button>
                </div>
              )}
            </>
          )}

          <div className="flex flex-wrap gap-3">
            <Button asChild><Link to="/hs-code-check">Check ook je HS-code <ArrowRight /></Link></Button>
            <Button asChild variant="outline"><Link to="/douane-tools">Alle douane tools</Link></Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
