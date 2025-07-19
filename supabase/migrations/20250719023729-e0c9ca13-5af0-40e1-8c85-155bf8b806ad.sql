-- Create table for storing click events
CREATE TABLE public.click_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  element_type TEXT,
  element_text TEXT,
  element_id TEXT,
  element_class TEXT,
  page_url TEXT NOT NULL,
  session_id TEXT NOT NULL,
  user_agent TEXT,
  viewport_width INTEGER,
  viewport_height INTEGER,
  click_x INTEGER,
  click_y INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (for future user-specific filtering if needed)
ALTER TABLE public.click_events ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert clicks (public analytics)
CREATE POLICY "Anyone can insert click events" 
ON public.click_events 
FOR INSERT 
WITH CHECK (true);

-- Create a policy for viewing clicks (you can restrict this later)
CREATE POLICY "Anyone can view click events" 
ON public.click_events 
FOR SELECT 
USING (true);

-- Create index for better query performance
CREATE INDEX idx_click_events_created_at ON public.click_events(created_at);
CREATE INDEX idx_click_events_session_id ON public.click_events(session_id);
CREATE INDEX idx_click_events_page_url ON public.click_events(page_url);