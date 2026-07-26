import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type SitePost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  pub_date: string;
  draft: boolean;
};

export type SiteBook = {
  id: string;
  title: string;
  author: string;
  country: string | null;
  sort: number;
};

export async function getPosts(): Promise<SitePost[]> {
  const { data, error } = await supabase
    .from("site_posts")
    .select("*")
    .eq("draft", false)
    .order("pub_date", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function getBooks(): Promise<SiteBook[]> {
  const { data, error } = await supabase
    .from("site_books")
    .select("*")
    .order("sort", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
