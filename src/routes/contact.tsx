import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import { LeadForm } from "@/components/site/forms";
import { pageHead, SITE } from "@/lib/site";

const search = z.object({ type: z.enum(["check", "capaciteit", "vraag"]).optional(), pakket: z.enum(["flex10", "flex20", "flex25", "sprint"]).optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: search,
  head: () => pageHead(
    "Contact & gratis check | MVR Logistiek & Douane",
    "Vraag de gratis check aan of vertel welke logistieke of douane-werkzaamheden blijven liggen. Reactie van Marcel persoonlijk, ook via WhatsApp.", "/contact"),
  component: Contact,
});

const PAKKET_LABELS: Record<string, string> = {
  flex10: "FLEX 10",
  flex20: "FLEX 20",
  flex25: "FLEX 25",
  sprint: "Piek & achterstand Sprint",
};

function Contact() {
  const { type, pakket } = Route.useSearch();
  const pakketLabel = pakket ? PAKKET_LABELS[pakket] : null;
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Vertel wat blijft liggen" intro="Vertel kort welke werkzaamheden blijven liggen. Marcel neemt persoonlijk contact met je op om te kijken of er een match is." />
      <Section className="-mt-12 pt-0 md:pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {pakketLabel && (
              <div className="mb-5 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <p className="font-semibold">Je vraagt naar {pakketLabel}</p>
                <p className="mt-1 text-sm text-muted-foreground">Vertel kort welk werk blijft liggen en wanneer dat vooral speelt. Ik lees je bericht zelf en laat weten welke taken ik kan overnemen en welke informatie ik daarvoor nodig heb.</p>
              </div>
            )}
            <LeadForm key={`${type ?? "check"}-${pakket ?? ""}`} initialType={type ?? "check"} />
          </div>
          <aside className="space-y-4">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-whatsapp p-5 text-whatsapp-foreground shadow-card">
              <MessageCircle className="h-7 w-7" /><span><span className="block font-semibold">WhatsApp</span><span className="text-sm opacity-90">Snel even schakelen</span></span>
            </a>
            <div className="space-y-4 rounded-xl border bg-card p-6 text-sm">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5 text-primary" />{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />{SITE.phoneDisplay}</a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Linkedin className="h-5 w-5 text-primary" />LinkedIn</a>
              <p className="border-t pt-4 text-muted-foreground">Telefonisch contact bij voorkeur op afspraak. Werkzaamheden worden op afgesproken momenten uitgevoerd.</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
