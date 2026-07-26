import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { identity } from "../config";
import { getPosts } from "../lib/supabase";

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${identity.name}'s Blog`,
    description:
      "Essays and notes on software, machine learning, distributed systems, and whatever else I'm thinking about.",
    site: context.site ?? "https://sourabhmadur.github.io",
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.pub_date),
      description: post.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
