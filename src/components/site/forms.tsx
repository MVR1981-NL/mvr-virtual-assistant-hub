import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SITE } from "@/lib/site";

export type RequestType = "check" | "capaciteit" | "vraag";

const leadSchema = z.object({
  request_type: z.enum(["check", "capaciteit", "vraag"]),
  name: z.string().trim().min(1, "Vul je naam in").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  company: z.string().trim().max(150).nullable(),
  phone: z.string().trim().max(30).nullable(),
  message: z.string().trim().min(1, "Vertel kort waar je hulp bij zoekt").max(2000),
});

const checklistSchema = z.object({
  name: z.string().trim().min(1, "Vul je naam in").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  company: z.string().trim().max(150).nullable(),
});

const input = "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";
const label = "mb-1.5 block text-sm font-medium";

const TYPES: { value: RequestType; label: string; hint: string }[] = [
  { value: "check", label: "Gratis check", hint: "Ontdek welke werkzaamheden je kunt uitbesteden." },
  { value: "capaciteit", label: "Ik heb capaciteit nodig", hint: "Je weet al welk werk blijft liggen." },
  { value: "vraag", label: "Andere vraag", hint: "Samenwerking of algemene vraag." },
];

const PLACEHOLDER: Record<RequestType, string> = {
  check: "Bijv. we zijn veel tijd kwijt aan CMR-controles en ontbrekende documenten najagen…",
  capaciteit: "Welke werkzaamheden, hoeveel uur per maand ongeveer, en vanaf wanneer?",
  vraag: "Waar kan ik je mee helpen?",
};

export function LeadForm({ initialType = "check" }: { initialType?: RequestType }) {
  const [type, setType] = useState<RequestType>(initialType);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      request_type: type,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? "") || null,
      phone: String(fd.get("phone") ?? "") || null,
      message: String(fd.get("message") ?? ""),
    };
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_submissions").insert(parsed.data);
    setStatus(error ? "error" : "done");
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-2xl font-bold">Bedankt, je aanvraag is binnen</h3>
        <p className="mt-2 text-muted-foreground">Ik neem persoonlijk contact met je op. Liever direct schakelen? Stuur een WhatsApp-bericht.</p>
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground">WhatsApp Marcel</a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border bg-card p-6 shadow-card md:p-8">
      <fieldset>
        <legend className={label}>Waar gaat het over?</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {TYPES.map((t) => (
            <button type="button" key={t.value} onClick={() => setType(t.value)} aria-pressed={type === t.value}
              className={`rounded-md border p-3 text-left text-sm transition ${type === t.value ? "border-primary bg-accent text-accent-foreground" : "hover:bg-muted"}`}>
              <span className="block font-semibold">{t.label}</span>
              <span className="mt-0.5 block text-xs opacity-80">{t.hint}</span>
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div><label className={label} htmlFor="name">Naam *</label><input id="name" name="name" className={input} maxLength={100} autoComplete="name" />{errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}</div>
        <div><label className={label} htmlFor="email">E-mailadres *</label><input id="email" name="email" type="email" className={input} maxLength={255} autoComplete="email" />{errors["email"] && <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>}</div>
        <div><label className={label} htmlFor="company">Bedrijf</label><input id="company" name="company" className={input} maxLength={150} autoComplete="organization" /></div>
        <div><label className={label} htmlFor="phone">Telefoon</label><input id="phone" name="phone" type="tel" className={input} maxLength={30} autoComplete="tel" /></div>
      </div>
      <div className="mt-4">
        <label className={label} htmlFor="message">Waar kan ik je mee helpen? *</label>
        <textarea id="message" name="message" rows={5} className={input} maxLength={2000} placeholder={PLACEHOLDER[type]} />
        {errors["message"] && <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>}
      </div>
      {status === "error" && <p className="mt-4 text-sm text-destructive">Versturen lukte niet. Probeer het opnieuw of mail naar {SITE.email}.</p>}
      <button type="submit" disabled={status === "sending"} className="mt-6 w-full rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60">
        {status === "sending" ? "Versturen…" : type === "check" ? "Vraag de gratis check aan" : "Verstuur aanvraag"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Vrijblijvend. Je gegevens worden alleen gebruikt om contact met je op te nemen.</p>
    </form>
  );
}

export function ChecklistForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = checklistSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? "") || null,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("checklist_requests").insert(parsed.data);
    setStatus(error ? "error" : "done");
  }

  if (status === "done") {
    return (
      <div className="rounded-xl bg-card p-6 text-card-foreground shadow-card">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="mt-3 text-xl font-bold">Je checklist staat klaar</h3>
        <a href={SITE.checklistUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground">
          <Download className="h-4 w-4" /> Download de checklist
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl bg-card p-6 text-card-foreground shadow-card">
      <div className="space-y-3">
        <div><input name="name" placeholder="Naam *" aria-label="Naam" className={input} maxLength={100} />{errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}</div>
        <div><input name="email" type="email" placeholder="Zakelijk e-mailadres *" aria-label="E-mailadres" className={input} maxLength={255} />{errors["email"] && <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>}</div>
        <input name="company" placeholder="Bedrijf" aria-label="Bedrijf" className={input} maxLength={150} />
      </div>
      {status === "error" && <p className="mt-3 text-sm text-destructive">Er ging iets mis. Probeer het opnieuw.</p>}
      <button type="submit" disabled={status === "sending"} className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60">
        <Download className="h-4 w-4" /> {status === "sending" ? "Even geduld…" : "Ontvang de gratis checklist"}
      </button>
    </form>
  );
}
