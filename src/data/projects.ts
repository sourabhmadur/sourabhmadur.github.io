export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: "Research" | "Product" | "Tools" | "Teaching";
  links: { label: string; url: string }[];
};

// Every number below is sourced from the project's repo (README / committed results).
export const projects: Project[] = [
  {
    slug: "morality-of-llms",
    title: "How Does Thinking Mode Change LLM Moral Judgments?",
    tagline: "A controlled instant-vs-thinking study of moral judgment in five frontier LLMs.",
    description:
      "100 ethical scenarios run on Claude Sonnet 4.6, GPT-5.5, Gemini 3 Flash, DeepSeek-V3.1 and Qwen3.5-397B, each compared with its own reasoning mode off and on, so the weights stay the same. Paper, benchmark, runner, analysis pipeline and all 2,963 raw responses are open.",
    highlights: [
      "Overall agreement looks unchanged (α 0.78 → 0.79), but on the 21 scenarios models dispute it is near chance: 0.08 instant, 0.23 with thinking.",
      "Thinking changes the stated ethical framework more often than the verdict in all five models: 9–19% framework shifts vs 1–9% verdict flips.",
      "\"Lightweight thinking\" is not one thing: mean reasoning tokens per call range ~80×, from 33 (Claude) to 2,639 (Qwen3.5).",
    ],
    tech: ["Python", "pandas", "SciPy", "Krippendorff's α", "Anthropic, OpenAI, Gemini, Together APIs", "LaTeX"],
    category: "Research",
    links: [
      { label: "Paper", url: "https://github.com/sourabhmadur/morality_of_llms/blob/main/paper/main.pdf" },
      { label: "Code & data", url: "https://github.com/sourabhmadur/morality_of_llms" },
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
