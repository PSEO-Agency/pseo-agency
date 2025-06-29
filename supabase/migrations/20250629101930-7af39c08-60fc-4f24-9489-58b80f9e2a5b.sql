
-- First, we need to create the user in the auth.users table via a direct insert
-- Note: In production, you should use Supabase Auth API, but for setup we can do this directly

-- Insert the admin user directly (this will create the auth user)
-- The password will be hashed automatically by Supabase
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'bas@programmaticseo.agency',
  crypt('Huub5390!032010', gen_salt('bf')),
  NOW(),
  NULL,
  NULL,
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Add the user to admin_users table to grant admin privileges
INSERT INTO public.admin_users (user_id, role)
SELECT id, 'admin'
FROM auth.users 
WHERE email = 'bas@programmaticseo.agency';
