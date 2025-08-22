-- Fix security warning: Add search_path to function
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email, signup_code)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', 'New Member'), NEW.email, 'WELCOME2025');
  RETURN NEW;
END;
$$;