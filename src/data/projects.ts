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
