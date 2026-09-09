/*
  Engineering write-ups.
  Rendered on /engineering and /engineering/[slug]. Data-driven so this stays a
  living document: edit the copy here, no components to touch. Em dashes avoided
  to match the rest of the site.
*/

export type EngineeringSection = {
  heading?: string;
  paragraphs: string[];
};

export type EngineeringLink = {
  label: string;
  href: string;
};

export type EngineeringPiece = {
  slug: string;
  title: string;
  tag: string; // small eyebrow label
  subtitle: string;
  status: string;
  author: string;
  datePublished: string; // ISO 8601
  dateModified: string; // ISO 8601
  excerpt: string; // teaser for cards and meta description
  // Short technology list shown under the header.
  stack: string[];
  sections: EngineeringSection[];
  links?: EngineeringLink[];
};

export const engineering: EngineeringPiece[] = [
  {
    slug: "mcp-gateway",
    title: "Letting a customer plug their own tools into an AI agent",
    tag: "Architecture note",
    subtitle:
      "How Lira exposes a customer's own MCP server to a support agent without handing the model the keys to their systems.",
    status: "Shipped · Lira Intelligence",
    author: "Yerins Abraham",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    excerpt:
      "A customer wants the AI agent to do things inside their systems, not just answer questions about them. That means running their code paths from our process, which is a security problem before it is an AI problem. This is the design that resulted.",
    stack: [
      "TypeScript",
      "Fastify",
      "MCP 2025-11-25",
      "AWS KMS",
      "DynamoDB",
      "OAuth 2.0",
    ],
    sections: [
      {
        paragraphs: [
          "Lira is an AI support agent. It answers from a company's own knowledge base, and it takes action: freezing a card, checking a transaction, opening a dispute. The knowledge half is retrieval. The action half is tool calling, and for a long time every tool was one we had written ourselves.",
          "That does not scale past the tools we happened to think of. A bank wants the agent to reach into their card system. A logistics company wants it to look up a shipment. Neither is going to wait for us to build an integration, and we cannot build one per customer forever.",
          "The Model Context Protocol is the obvious answer: the customer runs their own MCP server, and the agent calls it. The hard part is not the protocol. It is that we are now making outbound network calls, with the customer's credentials, to an address the customer supplied, driven by a language model that a stranger is typing at.",
        ],
      },
      {
        heading: "The shape it settled into",
        paragraphs: [
          "One customer-owned remote MCP endpoint per organisation. Disabled by default. Nothing reaches the model until an administrator has explicitly mapped a tool into our policy model and given it a risk tier.",
          "That last clause is the whole design. Discovering a tool on a remote server and offering it to the agent are two separate acts, separated by a human decision. A server that adds a delete_everything tool tomorrow does not silently gain the ability to call it.",
        ],
      },
      {
        heading: "The network boundary",
        paragraphs: [
          "The endpoint URL comes from the customer, which makes this a server-side request forgery problem in the classic shape. An attacker who can set that URL can point it at our own metadata service or at anything else reachable from inside the network.",
          "So the gateway resolves the hostname itself and checks the resolved addresses against private and link-local ranges before connecting, rather than trusting the hostname to look external. Checking the string is not enough. A public name can resolve to a private address, and it can resolve to a different address on the second lookup than it did on the first.",
        ],
      },
      {
        heading: "Credentials",
        paragraphs: [
          "Customer credentials go through the same KMS-backed path the rest of the integration credentials use, so there is one place where secrets live and one place to audit. Access tokens are refreshed ahead of expiry with a deliberate skew, because a token that expires between the check and the call fails in the middle of a customer conversation, which is the worst possible place to discover it.",
        ],
      },
      {
        heading: "Rate limits and audit",
        paragraphs: [
          "Per tool and per server, with conservative defaults that an administrator can raise. A language model in a retry loop is a denial of service against your customer's own infrastructure, and they will experience it as your product attacking them.",
          "Every configuration change is written to an audit trail: which tool was mapped, by whom, at what risk tier. When someone asks six months later why the agent was able to do something, the answer needs to be a row, not a recollection.",
        ],
      },
      {
        heading: "The bug worth writing down",
        paragraphs: [
          "Tool names are handed to the model as function names, and both OpenAI and Anthropic require them to match a restricted pattern with no dots in it. Our internal naming produced names like mcp_card.freeze.",
          "A single dotted name does not degrade that one tool. It returns a 400 for the entire request, which kills the whole agent turn, which means the customer gets no reply at all. One badly named tool silently broke every conversation in that workspace.",
          "The fix is a sanitiser and a regular expression pinned next to it, with a comment explaining why they must stay in lockstep. The lesson is more general: when you hand user-controlled names to a model API, the blast radius of a malformed one is the entire request, not the one field.",
        ],
      },
      {
        heading: "What I would do differently",
        paragraphs: [
          "The risk tier is assigned by an administrator at mapping time, which assumes they understand what the tool does. For a tool on someone else's server, that is an assumption resting on a description string written by whoever built it. A tier proposed from the tool's own schema, then confirmed by a human, would be honest about where the knowledge actually comes from.",
          "I would also have built the evaluation harness first. The policy engine stops a dangerous call at runtime, but nothing was measuring how often the model reached for one unprompted until I went back and built golden datasets for tool selection, including rows for forged authority and injection through pasted content. Knowing the rate is what tells you whether a prompt change made the agent safer or just quieter.",
        ],
      },
    ],
    links: [
      { label: "Lira Intelligence", href: "https://liraintelligence.com" },
      {
        label: "Model Context Protocol specification",
        href: "https://modelcontextprotocol.io",
      },
    ],
  },
];

export function getEngineering(slug: string) {
  return engineering.find((p) => p.slug === slug);
}
