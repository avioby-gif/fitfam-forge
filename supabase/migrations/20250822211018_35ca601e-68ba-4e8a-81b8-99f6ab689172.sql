-- Create profiles table for member details
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  signup_code TEXT NOT NULL,
  membership_type TEXT DEFAULT 'basic',
  joined_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create workouts table for tracking exercises
CREATE TABLE public.workouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_name TEXT NOT NULL,
  duration_minutes INTEGER,
  calories_burned INTEGER,
  date DATE DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create trainers table
CREATE TABLE public.trainers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  experience_years INTEGER,
  rating DECIMAL(3,2),
  price_per_session INTEGER,
  image_url TEXT,
  bio TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create food_tracking table
CREATE TABLE public.food_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  food_item TEXT NOT NULL,
  calories INTEGER,
  protein_grams DECIMAL(5,2),
  meal_type TEXT CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  message_type TEXT CHECK (message_type IN ('query', 'feedback', 'response')),
  is_from_user BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create protein_products table
CREATE TABLE public.protein_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
  price_daily INTEGER,
  price_monthly INTEGER,
  protein_per_serving DECIMAL(5,2),
  flavors TEXT[],
  image_url TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create orders table for purchases
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.protein_products(id),
  quantity INTEGER DEFAULT 1,
  order_type TEXT CHECK (order_type IN ('daily', 'monthly')),
  total_amount INTEGER,
  stripe_session_id TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create gym_partners table for partner matching
CREATE TABLE public.gym_partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INTEGER,
  fitness_level TEXT,
  interests TEXT[],
  bio TEXT,
  image_url TEXT,
  location TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create custom_shakes table for customized orders
CREATE TABLE public.custom_shakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  base_protein TEXT NOT NULL,
  flavors TEXT[],
  additives TEXT[],
  price INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trainers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.food_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.protein_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gym_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_shakes ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for workouts
CREATE POLICY "Users can view their own workouts" ON public.workouts
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own workouts" ON public.workouts
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own workouts" ON public.workouts
FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for food tracking
CREATE POLICY "Users can view their own food tracking" ON public.food_tracking
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own food tracking" ON public.food_tracking
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for chat messages
CREATE POLICY "Users can view their own chat messages" ON public.chat_messages
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own chat messages" ON public.chat_messages
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for orders
CREATE POLICY "Users can view their own orders" ON public.orders
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders" ON public.orders
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for custom shakes
CREATE POLICY "Users can view their own custom shakes" ON public.custom_shakes
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own custom shakes" ON public.custom_shakes
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Public read policies for reference tables
CREATE POLICY "Everyone can view trainers" ON public.trainers
FOR SELECT USING (true);

CREATE POLICY "Everyone can view protein products" ON public.protein_products
FOR SELECT USING (true);

CREATE POLICY "Everyone can view gym partners" ON public.gym_partners
FOR SELECT USING (true);

-- Insert sample trainers
INSERT INTO public.trainers (name, specialty, experience_years, rating, price_per_session, bio, image_url) VALUES
('Arjun Sharma', 'Strength Training', 5, 4.8, 1500, 'Certified strength coach specializing in powerlifting and muscle building.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'),
('Priya Patel', 'Yoga & Flexibility', 8, 4.9, 1200, 'Experienced yoga instructor focusing on flexibility and mindfulness.', 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop'),
('Rahul Singh', 'Cardio & Weight Loss', 6, 4.7, 1300, 'High-intensity cardio specialist for rapid weight loss results.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'),
('Sneha Gupta', 'CrossFit', 4, 4.6, 1400, 'Dynamic CrossFit trainer for functional fitness and endurance.', 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop');

-- Insert sample protein products
INSERT INTO public.protein_products (name, type, description, price_daily, price_monthly, protein_per_serving, flavors, image_url) VALUES
('Whey Concentrate Pro', 'Whey Concentrate', 'Fast-absorbing whey protein with 60-80% protein content, perfect for post-workout recovery.', 250, 6000, 25.0, ARRAY['Chocolate', 'Vanilla', 'Strawberry'], 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop'),
('Whey Isolate Elite', 'Whey Isolate', 'Ultra-pure whey isolate with 90-95% protein, lactose-free and fast-absorbing.', 300, 7200, 30.0, ARRAY['Chocolate', 'Vanilla', 'Cookies & Cream'], 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'),
('Plant Power Blend', 'Plant-Based', 'Complete amino acid profile from pea and rice protein blend, vegan-friendly.', 280, 6720, 22.0, ARRAY['Vanilla', 'Chocolate', 'Berry'], 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop'),
('Casein Night Formula', 'Casein', 'Slow-digesting protein for sustained amino acid release, perfect for bedtime.', 320, 7680, 24.0, ARRAY['Vanilla', 'Chocolate'], 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'),
('Collagen Beauty', 'Collagen', 'Supports healthy skin, hair, nails, and joints with premium collagen peptides.', 400, 9600, 18.0, ARRAY['Unflavored', 'Berry'], 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop'),
('Soy Complete', 'Soy Protein', 'Complete protein with soy isoflavones for additional health benefits.', 240, 5760, 20.0, ARRAY['Vanilla', 'Chocolate'], 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop');

-- Insert sample gym partners
INSERT INTO public.gym_partners (name, age, fitness_level, interests, bio, image_url, location) VALUES
('Vikash Kumar', 25, 'Intermediate', ARRAY['Weight Training', 'Cardio'], 'Passionate about fitness and looking for workout partners to stay motivated.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', 'Delhi'),
('Anjali Sharma', 28, 'Advanced', ARRAY['Yoga', 'Pilates', 'Strength Training'], 'Yoga enthusiast seeking like-minded fitness partners for morning sessions.', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop', 'Mumbai'),
('Karan Mehta', 24, 'Beginner', ARRAY['Cardio', 'Swimming'], 'New to fitness journey, looking for supportive partners to learn together.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', 'Bangalore'),
('Deepika Joshi', 26, 'Intermediate', ARRAY['CrossFit', 'Running'], 'CrossFit athlete looking for training partners for evening workouts.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', 'Pune'),
('Rohit Agarwal', 29, 'Advanced', ARRAY['Powerlifting', 'Bodybuilding'], 'Experienced lifter seeking serious training partners for strength goals.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', 'Chennai'),
('Neha Kapoor', 23, 'Beginner', ARRAY['Dance Fitness', 'Zumba'], 'Love dancing and fitness, looking for fun workout partners.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', 'Hyderabad');

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();