// Build-time reads only. Deliberately avoids @supabase/supabase-js here:
// its client initializes a Realtime/WebSocket connection on construction,
// which hangs the Node build process indefinitely since nothing ever
// closes it. Plain REST calls avoid pulling that in. The admin page
// creates its own full client separately for interactive auth/writes.

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string;

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

async function restQuery<T>(query: string): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${query}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Supabase REST error (${res.status}): ${await res.text()}`);
  }
  return res.json();
}

export async function getPosts(): Promise<SitePost[]> {
  return restQuery<SitePost[]>("site_posts?select=*&draft=eq.false&order=pub_date.desc");
}

export async function getBooks(): Promise<SiteBook[]> {
  return restQuery<SiteBook[]>("site_books?select=*&order=sort.desc");
}
