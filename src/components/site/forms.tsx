import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { leadSchema, checklistSchema, interestOptions, type RequestType } from "@/lib/lead-schema";
import { submitLead, submitChecklist } from "@/lib/leads.functions";

export type { RequestType } from "@/lib/lead-schema";
const input = "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";
const label = "mb-1.5 block text-sm font-medium";
const TYPES: { value: RequestType; label: string }[] = [
  { value: "check", label: "Gratis check" },
  { value: "capaciteit", label: "Extra capaciteit" },
  { value: "vraag", label: "Andere vraag" },
];
const PLACEHOLDER: Record<RequestType, string> = {
  check: "Bijvoorbeeld: onze dossiers blijven liggen en we zijn veel tijd kwijt aan ontbrekende documenten.",
  capaciteit: "Welke werkzaamheden blijven liggen? Hoeveel werk is het ongeveer?",
  vraag: "Waar kan ik je mee helpen?",
};
function PrivacyNote() {
  return <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Je gegevens worden gebruikt voor deze aanvraag, niet voor een nieuwsbrief. <Link to="/privacy-verklaring" className="underline underline-offset-2">Privacyverklaring</Link></p>;
}
function SpamTrap() {
  return <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>;
}
export function LeadForm({ initialType = "check", initialInterest }: { initialType?: RequestType; initialInterest?: typeof interestOptions[number] }) {
  const [type, setType] = useState<RequestType>(initialType);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const send = useServerFn(submitLead);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      request_type: type, name: String(fd.get("name") ?? ""), email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? "") || null, phone: String(fd.get("phone") ?? "") || null,
      message: String(fd.get("message") ?? ""), interest: fd.get("interest") || undefined,
      timing: fd.get("timing") || undefined, website: String(fd.get("website") ?? ""),
    };
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const i of parsed.error.issues) next[String(i.path[0])] = i.message;
      setErrors(next);
      const first = form.elements.namedItem(Object.keys(next)[0] ?? "");
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({}); setStatus("sending");
    try { const result = await send({ data: parsed.data }); setStatus(result.ok ? "done" : "error"); }
    catch { setStatus("error"); }
  }
  if (status === "done") return (
    <div role="status" className="rounded-lg border bg-card p-8 shadow-card">
      <CheckCircle2 className="h-10 w-10 text-primary" />
      <h3 className="mt-4 text-2xl font-bold">Bedankt, je aanvraag is opgeslagen</h3>
      <p className="mt-3 text-muted-foreground">Marcel neemt persoonlijk contact met je op om de werkzaamheden en mogelijkheden te bespreken. Je hebt nog niets geboekt of vastgelegd.</p>
      <Button asChild className="mt-6 h-auto whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground"><a href={SITE.whatsapp} target="_blank" rel="noreferrer">Liever direct contact? WhatsApp Marcel</a></Button>
    </div>
  );
  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === "sending"} className="rounded-lg border bg-card p-6 shadow-card md:p-8">
      <h2 className="text-2xl font-bold">{type === "check" ? "Vraag jouw gratis check aan" : type === "capaciteit" ? "Bespreek jouw capaciteitsvraag" : "Stel je vraag aan Marcel"}</h2>
      <p className="mt-2 text-sm text-muted-foreground">Vertel kort wat er blijft liggen. Samen bepalen we welke taken overdraagbaar zijn, wat intern blijft en welke capaciteit past.</p>
      <fieldset className="mt-6" disabled={status === "sending"}>
        <legend className={label}>Waar gaat het over?</legend>
        <div className="grid grid-cols-3 gap-2">
          {TYPES.map(t => <Button variant="outline" type="button" key={t.value} onClick={() => setType(t.value)} aria-pressed={type === t.value} className={`h-auto min-h-12 whitespace-normal px-2 py-3 ${type === t.value ? "border-primary bg-accent text-accent-foreground" : ""}`}>{t.label}</Button>)}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div><label className={label} htmlFor="name">Naam *</label><input id="name" name="name" required className={input} maxLength={100} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="mt-1 text-xs text-destructive">{errors.name}</p>}</div>
          <div><label className={label} htmlFor="email">E-mailadres *</label><input id="email" name="email" type="email" required className={input} maxLength={255} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}</div>
          <div><label className={label} htmlFor="company">Bedrijf</label><input id="company" name="company" className={input} maxLength={150} autoComplete="organization" /></div>
          <div><label className={label} htmlFor="phone">Telefoon (optioneel)</label><input id="phone" name="phone" type="tel" className={input} maxLength={30} autoComplete="tel" /></div>
          <div><label className={label} htmlFor="interest">Waar zoek je hulp bij?</label><select id="interest" name="interest" defaultValue={initialInterest ?? ""} className={input}><option value="">Nog niet zeker</option>{interestOptions.map(i => <option key={i}>{i}</option>)}</select></div>
          <div><label className={label} htmlFor="timing">Gewenste start</label><select id="timing" name="timing" defaultValue="In overleg" className={input}>{["In overleg", "Zo snel mogelijk", "Binnen een maand", "Later / oriënterend"].map(t => <option key={t}>{t}</option>)}</select></div>
        </div>
        <div className="mt-4"><label className={label} htmlFor="message">Welke werkzaamheden blijven liggen? *</label><textarea id="message" name="message" required rows={4} className={input} maxLength={2000} placeholder={PLACEHOLDER[type]} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <p id="message-error" className="mt-1 text-xs text-destructive">{errors.message}</p>}</div>
        <SpamTrap />
      </fieldset>
      {Object.keys(errors).length > 0 && <p role="alert" className="mt-3 text-sm text-destructive">Controleer de gemarkeerde velden.</p>}
      {status === "error" && <p role="alert" className="mt-4 text-sm text-destructive">Je aanvraag is niet opgeslagen. Probeer het opnieuw of mail naar <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>}
      <Button type="submit" disabled={status === "sending"} className="mt-6 h-auto w-full whitespace-normal py-3.5">{status === "sending" ? "Versturen…" : type === "check" ? "Vraag de gratis check aan" : "Verstuur mijn aanvraag"}<ArrowRight /></Button>
      <p className="mt-3 text-sm font-medium">Vrijblijvend · Persoonlijk contact met Marcel</p><PrivacyNote />
    </form>
  );
}
export function ChecklistForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const send = useServerFn(submitChecklist);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(e.currentTarget);
    const parsed = checklistSchema.safeParse({ name: String(fd.get("name") ?? ""), email: String(fd.get("email") ?? ""), company: String(fd.get("company") ?? "") || null, website: String(fd.get("website") ?? "") });
    if (!parsed.success) { const next: Record<string, string> = {}; for (const i of parsed.error.issues) next[String(i.path[0])] = i.message; setErrors(next); return; }
    setErrors({}); setStatus("sending");
    try { const result = await send({ data: parsed.data }); setStatus(result.ok ? "done" : "error"); } catch { setStatus("error"); }
  }
  if (status === "done") return <div role="status" className="rounded-lg bg-card p-6 text-card-foreground shadow-card"><CheckCircle2 className="h-10 w-10 text-primary" /><h3 className="mt-3 text-xl font-bold">Je checklist staat klaar</h3><p className="mt-2 text-sm text-muted-foreground">Open de checklist en bekijk welke werkzaamheden je kunt overdragen.</p><Button asChild className="mt-4 h-auto whitespace-normal py-3"><a href={SITE.checklistUrl} target="_blank" rel="noreferrer"><Download />Open de checklist</a></Button><PrivacyNote /></div>;
  return <form onSubmit={onSubmit} noValidate aria-busy={status === "sending"} className="rounded-lg bg-card p-6 text-card-foreground shadow-card">
    <h3 className="mb-5 text-xl font-semibold">Breng je werk in kaart</h3>
    <div className="space-y-3">
      <div><label className={label} htmlFor="checklist-name">Naam *</label><input id="checklist-name" name="name" autoComplete="name" className={input} maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "checklist-name-error" : undefined} />{errors.name && <p id="checklist-name-error" className="mt-1 text-xs text-destructive">{errors.name}</p>}</div>
      <div><label className={label} htmlFor="checklist-email">E-mailadres *</label><input id="checklist-email" name="email" type="email" autoComplete="email" className={input} maxLength={255} aria-invalid={!!errors.email} aria-describedby={errors.email ? "checklist-email-error" : undefined} />{errors.email && <p id="checklist-email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}</div>
      <div><label className={label} htmlFor="checklist-company">Bedrijf (optioneel)</label><input id="checklist-company" name="company" autoComplete="organization" className={input} maxLength={150} /></div>
    </div><SpamTrap />
    {Object.keys(errors).length > 0 && <p role="alert" className="mt-3 text-sm text-destructive">Controleer je naam en e-mailadres.</p>}
    {status === "error" && <p role="alert" className="mt-3 text-sm text-destructive">Je gegevens zijn niet opgeslagen. Probeer het opnieuw. Je kunt de <a href={SITE.checklistUrl} target="_blank" rel="noreferrer" className="underline">checklist ook direct openen</a>.</p>}
    <Button type="submit" disabled={status === "sending"} className="mt-4 h-auto w-full whitespace-normal py-3"><Download />{status === "sending" ? "Even geduld…" : "Bekijk de gratis checklist"}</Button>
    <PrivacyNote />
  </form>;
}
