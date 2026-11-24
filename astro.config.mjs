import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sourabhmadur.github.io",
  integrations: [icon({ iconDir: "src/icons" }), sitemap()],
  output: "static",
});
