import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://sdcqqirvufuktvrqfacz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkY3FxaXJ2dWZ1a3R2cnFmYWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4Mjc4MDAsImV4cCI6MjA1NjQwMzgwMH0.RpkRUu4smq0ydBnTqC_Q3EkFqRlSC2WQwuv843piGTs')