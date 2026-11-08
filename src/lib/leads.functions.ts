import { createServerFn } from "@tanstack/react-start";
import { checklistSchema, leadSchema, enquiryMessage } from "./lead-schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name, email: data.email, company: data.company, phone: data.phone,
      request_type: data.request_type, message: enquiryMessage(data),
    });
    if (error) return { ok: false };
    return { ok: true };
  });

export const submitChecklist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => checklistSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("checklist_requests").insert({ name: data.name, email: data.email, company: data.company });
    return { ok: !error };
  });