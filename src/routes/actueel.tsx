import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section, CtaBand } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/actueel")({
  head: () => pageHead(
    "Actueel in logistiek & douane | MVR",
    "Praktische inzichten over DMS 4.1, ICS2 en nieuwe EU-regels voor import, geschreven vanuit de dagelijkse douanepraktijk.",
  ),
  component: Actueel,
});

const POSTS = [
  { date: "15 aug 2026", title: "DMS 4.1 sinds oktober 2025: dit gaat mis bij aangiftes en zo voorkom je holds in Rotterdam", text: "Sinds 1 oktober 2025 draait alleen nog DMS 4.1. AGS en DMS 4.0 zijn uit. Elke aangifte zonder juiste nieuwe data-elementen krijgt direct een error en je container blijft staan met status AFGEKEURD. De 3 fouten die ik dagelijks zie: verkeerde aanvullende regeling C07/C08 voor e-commerce <€150, een 4-cijferige in plaats van 6-cijferige HS-code, en Buyer en Seller leeg terwijl EORI er wel staat. Gevolg: 2-3 dagen vertraging en €250+ opslag per dag." },
  { date: "15 aug 2026", title: "ICS2 sinds juni 2026: complete ENS-aangifte verplicht voor alle zendingen", text: "Sinds juni 2026 is ICS2 Release 3 live voor weg, spoor en zee. Elke zending naar de EU heeft nu een complete Entry Summary Declaration (ENS) nodig vóór het laden. Zonder complete ENS geen MRN, en mag de vervoerder niet vertrekken. In Rotterdam en Antwerpen staan dagelijks zendingen met een hold door incomplete ENS." },
  { date: "15 aug 2026", title: "EU nieuwe regel 1 juli 2026: €3 per item onder €150, zo bereken je het door", text: "Per 1 juli 2026 vervalt de €150-vrijstelling definitief. De EU voert een vaste heffing in van €3 per item met een waarde onder €150. Voorbeeld: 3 items van €40 = €120 totaal. Voorheen geen douane, nu €9 extra douanerecht + btw. Zonder de juiste HS-code en berekening per item loop je structureel geld mis." },
];

function Actueel() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Kennis" title="Actueel in logistiek & douane" intro="Praktische inzichten over import/export, documenten en douane, geschreven vanuit de dagelijkse praktijk." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {POSTS.map((p) => (
            <article key={p.title} className="rounded-xl border bg-card p-8 shadow-card">
              <time className="text-xs font-semibold uppercase tracking-wider text-primary">{p.date}</time>
              <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.text}</p>
            </article>
          ))}
          <p className="rounded-lg bg-accent p-4 text-sm text-accent-foreground"><strong>Let op:</strong> regelgeving en systemen veranderen regelmatig. Controleer bij actuele douane- en importvraagstukken altijd de meest recente officiële informatie.</p>
        </div>
      </Section>
      <CtaBand title="Blijft het werk liggen terwijl de regels doorgaan?" text="Nieuwe regelgeving is één ding. Documenten, dossiers en opvolging op tijd geregeld krijgen is vaak de grotere uitdaging. MVR helpt met specialistische extra capaciteit." />
    </SiteLayout>
  );
}
