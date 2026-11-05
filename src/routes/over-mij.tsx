import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { SiteLayout, Section, Eyebrow, CtaButtons, CtaBand } from "@/components/site/SiteLayout";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/over-mij")({
  head: () => pageHead(
    "Over Marcel van Roosendaal | MVR Logistiek & Douane",
    "29+ jaar ervaring in logistiek en warehouses, 7+ jaar douane-praktijk. Maak kennis met Marcel van Roosendaal, oprichter van MVR.", "/over-mij"),
  component: OverMij,
});

function OverMij() {
  return (
    <SiteLayout>
      <section className="bg-navy px-5 py-20 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <Eyebrow>Achter MVR</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Marcel van Roosendaal</h1>
            <p className="mt-3 text-lg text-primary">29+ jaar logistiek · 7+ jaar douane</p>
            <p className="mt-6 text-navy-muted">Mijn achtergrond ligt niet in algemene administratie, maar in logistiek, warehouses, import/export en douane. Daardoor begrijp ik niet alleen welke administratie gedaan moet worden, maar ook waarom correcte documenten, complete dossiers en goede opvolging belangrijk zijn binnen een goederenstroom.</p>
            <CtaButtons dark />
          </div>
          <img src="/site-assets/81d88307f53a9126.webp" alt="Marcel van Roosendaal" width={886} height={1395} className="w-full max-w-sm rounded-2xl object-cover shadow-card md:col-span-2 md:justify-self-end" />
        </div>
      </section>
      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {[["29+ jaar", "ervaring binnen logistiek & warehouses"], ["7+ jaar", "praktijkervaring binnen douane"], ["100%", "focus op logistiek & douane ondersteuning"]].map(([a, b]) => (
            <div key={a} className="rounded-xl border bg-card p-7 text-center shadow-card"><p className="font-display text-4xl font-bold text-primary">{a}</p><p className="mt-2 text-sm text-muted-foreground">{b}</p></div>
          ))}
        </div>
      </Section>
      <Section className="bg-muted">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Waarom ik MVR ben gestart</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>In logistieke organisaties zie ik vaak hetzelfde gebeuren. Mensen met veel kennis zijn een groot deel van hun tijd bezig met documenten controleren, informatie najagen, dossiers compleet maken en administratieve opvolging.</p>
              <p>Dat werk is noodzakelijk. Maar het hoeft niet altijd door een vaste medewerker of specialist binnen je eigen organisatie te worden uitgevoerd. Tegelijk is een extra fulltime medewerker niet voor iedere organisatie de juiste oplossing.</p>
              <p className="font-medium text-foreground">Precies daar zit MVR tussenin: specialistische extra capaciteit voor werk dat af te bakenen, digitaal over te dragen en op afstand uit te voeren is.</p>
              <p>CMR, AWB, Incoterms, HS-codes, oorsprong en douanedossiers zijn voor mij geen termen uit een cursus. Het is dagelijkse praktijk.</p>
            </div>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"><Linkedin className="h-5 w-5" /> Volg mij op LinkedIn</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/site-assets/1e66d2f08c191b3f.webp" alt="Marcel aan het werk op afstand" loading="lazy" className="h-full w-full rounded-xl object-cover" />
            <img src="/site-assets/af32087001650710.webp" alt="Marcel op kantoor" loading="lazy" className="h-full w-full rounded-xl object-cover" />
          </div>
        </div>
      </Section>
      <CtaBand title="Jij houdt grip op je goederenstroom." text="MVR helpt zorgen dat het werk eromheen niet blijft liggen. Laten we kijken of er een match is." />
    </SiteLayout>
  );
}
