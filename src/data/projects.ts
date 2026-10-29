export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: "Research" | "Product" | "Tools" | "Teaching";
  links: { label: string; url: string }[];
  video?: string; // YouTube video id, shown instead of a cover
  download?: { label: string; url: string; note: string; countItem?: string };
  install?: string[];
};

// Every number below is sourced from the project's repo (README / committed results).
export const projects: Project[] = [
  {
    slug: "focus-guard",
    title: "Focus Guard",
    tagline: "A Chrome extension that keeps you on task by looking at what's on your screen.",
    description:
      "Set a goal and a timer. Every few seconds Focus Guard asks a vision AI model whether the page you're on serves that goal, and if you stay off task, it blocks the page and shows you why. Unlike a blocklist, it can tell a coding tutorial on YouTube from a music video.",
    highlights: [
      "Judges what's on the page, not just the URL: a screenshot, the title and your goal go to a vision model every 5 seconds.",
      "Tolerates brief detours: a page is blocked only after 15 seconds judged off task, with a one-click Resume.",
      "Bring your own key: works with OpenAI, OpenRouter or a model you host yourself. Nothing is sent to me.",
    ],
    tech: ["JavaScript", "Chrome Extensions (Manifest V3)", "Vision LLMs", "OpenAI-compatible APIs"],
    category: "Product",
    video: "Sx-BEsisr3E",
    download: {
      label: "Download for Chrome",
      // Counts the download in Supabase (download_counts), then redirects to the latest GitHub release zip.
      url: "https://czcrafferybtstvoensa.supabase.co/functions/v1/download?item=focus-guard",
      note: "Free · v1.1.1 · needs your own OpenAI or OpenRouter API key",
      countItem: "focus-guard",
    },
    install: [
      "Unzip the download.",
      "Open chrome://extensions and turn on Developer mode.",
      "Click Load unpacked and select the focus-guard folder.",
      "Paste your API key on the Settings page that opens.",
    ],
    links: [
      { label: "Watch the demo", url: "https://www.youtube.com/watch?v=Sx-BEsisr3E" },
      { label: "Privacy policy", url: "https://sourabhmadur.github.io/focus-guard-site/privacy-policy.html" },
    ],
  },
  {
    slug: "mcp-servers",
    title: "MCP Servers: Google Maps + Ticketmaster",
    tagline: "Give Claude live maps, places, directions and event search.",
    description:
      "Two Python MCP servers built on the official SDK that let Claude call Google Maps Platform and the Ticketmaster Discovery API. Together they answer questions like \"what's on near me this weekend, and how long to get there?\"",
    highlights: [
      "14 tools: 8 for Google Maps (Places, Geocoding, Directions, Distance Matrix, Geolocation) and 6 for Ticketmaster events, attractions and venues.",
      "Finds your current location through macOS CoreLocation, falling back to IP geolocation, then a configured default.",
      "Trims event payloads to what a model needs: venue and coordinates, performers, genre, sales window, price range.",
    ],
    tech: ["Python", "Model Context Protocol", "FastMCP", "httpx", "Google Maps Platform", "Ticketmaster API"],
    category: "Tools",
    links: [
      { label: "Google Maps MCP", url: "https://github.com/sourabhmadur/google-maps-mcp" },
      { label: "Ticketmaster MCP", url: "https://github.com/sourabhmadur/ticketmaster-mcp" },
    ],
  },
  {
    slug: "agent-sdk-starter",
    title: "Repo Inspector: Claude Agent SDK Starter",
    tagline: "Learn the Claude Agent SDK in five small Python scripts.",
    description:
      "A step-by-step tutorial: each standalone script points an agent at a local code folder and adds one SDK concept. A shared renderer prints every tool call and result, so you can watch the agent loop as it runs.",
    highlights: [
      "Five steps: query(), a multi-turn ClaudeSDKClient REPL, a custom @tool on an in-process MCP server, a PostToolUse audit hook, and a subagent.",
      "Agents stay read-only (Read, Glob, Grep), plus the custom save_finding tool and subagent delegation where those steps add them.",
      "Checked against claude-agent-sdk 0.2.174.",
    ],
    tech: ["Python", "Claude Agent SDK", "MCP", "asyncio"],
    category: "Teaching",
    links: [{ label: "Code", url: "https://github.com/sourabhmadur/claude-agent-sdk-starter" }],
  },
];
