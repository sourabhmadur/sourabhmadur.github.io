import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://sourabhmadur.github.io",
  integrations: [tailwind(), icon({ iconDir: "src/icons" }), sitemap()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
