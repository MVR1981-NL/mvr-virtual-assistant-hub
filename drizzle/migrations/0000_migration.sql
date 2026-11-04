CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  request_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT TO anon, authenticated
WITH CHECK (char_length(name) BETWEEN 1 AND 100 AND char_length(email) BETWEEN 3 AND 255 AND char_length(message) BETWEEN 1 AND 2000 AND request_type IN ('check','capaciteit','vraag') AND coalesce(char_length(company),0) <= 150 AND coalesce(char_length(phone),0) <= 30);

CREATE TABLE public.checklist_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text
);
GRANT INSERT ON public.checklist_requests TO anon, authenticated;
GRANT ALL ON public.checklist_requests TO service_role;
ALTER TABLE public.checklist_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request checklist" ON public.checklist_requests FOR INSERT TO anon, authenticated
WITH CHECK (char_length(name) BETWEEN 1 AND 100 AND char_length(email) BETWEEN 3 AND 255 AND coalesce(char_length(company),0) <= 150);