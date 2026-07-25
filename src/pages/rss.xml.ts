import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { identity } from "../config";

export async function GET(context: APIContext) {
  let posts = await getCollection("posts");
  posts = posts.filter((p) => !p.data?.draft);
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });

  return rss({
    title: `${identity.name}'s Blog`,
    description:
      "Essays and notes on software, machine learning, distributed systems, and whatever else I'm thinking about.",
    site: context.site ?? "https://sourabhmadur.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/\.md$/, "")}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
