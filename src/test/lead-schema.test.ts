import { describe, expect, it } from "vitest";
import { contactSearchSchema, enquiryMessage, leadSchema } from "@/lib/lead-schema";

const lead = { name: "Voorbeeld", email: "test@example.com", company: null, phone: null, request_type: "check", message: "Documenten controleren" };
describe("Enquiry validation", () => {
  it("rejects invalid contact details on the server boundary", () => {
    expect(leadSchema.safeParse({ ...lead, email: "invalid" }).success).toBe(false);
    expect(leadSchema.safeParse(lead).success).toBe(true);
  });
  it("rejects populated spam trap fields", () => {
    expect(leadSchema.safeParse({ ...lead, website: "spam" }).success).toBe(false);
  });
  it("preserves the selected enquiry subject and start preference", () => {
    const parsed = leadSchema.parse({ ...lead, interest: "FLEX 20", timing: "Binnen een maand" });
    expect(enquiryMessage(parsed)).toBe("Interesse: FLEX 20\n\nGewenste start: Binnen een maand\n\nDocumenten controleren");
    expect(contactSearchSchema.parse({ type: "capaciteit", interest: "FLEX 20" }).interest).toBe("FLEX 20");
  });
});