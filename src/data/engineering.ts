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
  {
    slug: "retrieval-fails-silently",
    title: "Retrieval does not throw when it is wrong",
    tag: "Architecture note",
    subtitle:
      "Two bugs that produced no error, no alert and no stack trace, and what they changed about how Lira ranks and filters what it retrieves.",
    status: "Shipped \u00b7 Lira Intelligence",
    author: "Yerins Abraham",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    excerpt:
      "A marketing page outranked a bank's own policy document because it used more of the customer's words. Separately, one filter clause hid an entire knowledge base. Neither raised an error. Both produced fluent, confident answers.",
    stack: ["Qdrant", "TypeScript", "RAG", "Hybrid search", "Evaluation"],
    sections: [
      {
        paragraphs: [
          "A service that is down tells you it is down. Retrieval does not. When retrieval is wrong the model still answers, in the same confident register it uses when it is right, and the only signal is a customer who is quietly misinformed.",
          "Both of the bugs below were in production. Neither threw. Neither appeared in an error rate. I want to write them down because they changed how I think about the whole retrieval layer.",
        ],
      },
      {
        heading: "One: a marketing page beat the policy document",
        paragraphs: [
          "A bank asked Lira what a customer needs in order to open an account. Two crawled pages from the public website came back scoring 0.51 and 0.45. The bank's own written policy document scored 0.41. Ranking on similarity, the website won, and the answer was confidently wrong.",
          "Nothing was broken. The website pages genuinely were more semantically similar to the question, because marketing copy is written in customer language and policy documents are not. Similarity was measuring the wrong thing, and measuring it correctly.",
          "The obvious fix is to weight documents by trustworthiness. I tried it and stopped. To close a 0.10 gap you need a bonus large enough that it starts floating barely relevant policy documents above highly relevant ones, and once two numbers are being added together nobody can explain why a given answer was chosen.",
          "So authority became a precedence rather than a weight. Sources sit in tiers. The highest tier with a real match answers the question, and lower tiers are not consulted at all. Answer from policy if policy has anything to say; fall back to the website only when it does not. That rule is one sentence, a support lead can understand it, and it cannot be tuned into nonsense by a coefficient.",
        ],
      },
      {
        heading: "Two: one filter clause hid an entire knowledge base",
        paragraphs: [
          "Workspaces can tag knowledge-base sources into segments, so a session about one product does not retrieve documentation for another. The filter was the obvious one: match any of the active segments.",
          "The first workspace that switched segmentation on lost everything. Every document indexed before tagging existed carried an empty segments array, and a match-any clause matches neither an empty array nor a missing field. The filter was not wrong about the documents it excluded. It excluded all of them.",
          "What made it dangerous is the failure mode. There was no error, no empty-result alarm and no drop in traffic. The agent simply started saying it did not have enough information, in fluent and apologetic prose, which is exactly what a well-behaved agent says when a knowledge base genuinely lacks an answer. It looked like correct behaviour.",
          "The fix is small: the clause is now a should over the segment match and an is_empty check, so untagged sources stay reachable unless the workspace explicitly opts into strict mode. The lesson is not small. A filter that silently narrows to nothing is indistinguishable, from the outside, from a system working perfectly on a hard question.",
        ],
      },
      {
        heading: "What both bugs have in common",
        paragraphs: [
          "Neither was catchable by the tools we normally reach for. There was nothing to put in a try/catch, nothing to alert on, and nothing a unit test of the filter function would have flagged, because the filter did precisely what it said.",
          "What catches them is measuring retrieval as retrieval: recall against a set of questions whose right answers are known in advance. Recall at 5 goes to zero the moment a filter hides the corpus. It also catches the authority problem, because a golden row can say that the policy document is the right source and the marketing page is not.",
          "That is the actual reason I built an evaluation harness, and it is why its retrieval suite includes rows where the correct outcome is no results at all. A retriever that always returns something is the failure that reads as success.",
        ],
      },
      {
        heading: "What I would do differently",
        paragraphs: [
          "I would have written the golden dataset before the retrieval features, not after. Every feature that filters or reranks is a chance to silently narrow the corpus, and each one shipped for a while with no way to see it happening.",
          "I would also track the rate of I-do-not-have-enough-information answers per workspace as a first-class metric. Both bugs would have shown up as a step change in that number days before anyone reported them, and neither was visible in error rates, latency or traffic.",
        ],
      },
    ],
    links: [
      { label: "Lira Intelligence", href: "https://liraintelligence.com" },
      {
        label: "trackline, the harness this argues for",
        href: "https://github.com/yerinsabraham/trackline",
      },
    ],
  },
  {
    slug: "safety-metrics-have-no-tolerance",
    title: "Safety metrics get no tolerance",
    tag: "Engineering note",
    subtitle:
      "Why the eval gate on an agent has two different rules, and why the one that matters refuses to average.",
    status: "Open source \u00b7 trackline",
    author: "Yerins Abraham",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    excerpt:
      "Quality metrics drift and that is fine. But \"forbidden tool calls only went up four percent, which is inside tolerance\" is not a sentence anyone should be able to ship behind. Here is how the gate is built, and what it deliberately does not cover.",
    stack: ["TypeScript", "LLM evaluation", "CI", "Prompt injection", "RAG"],
    sections: [
      {
        paragraphs: [
          "Unit tests prove the code does what it was written to do. They say nothing about whether a prompt edit, a model swap or a retiered tool quietly changed how an agent behaves. Nothing in the type system notices when an agent that used to refuse a request starts complying with it.",
          "So the agent has its own gate, and it runs on every commit. The interesting part is not the metrics. It is that the gate has two rules rather than one, and conflating them is what makes most eval gates decorative.",
        ],
      },
      {
        heading: "Rule one: quality drifts, and that is allowed",
        paragraphs: [
          "Retrieval recall moving from 0.94 to 0.92 across an embedding change is noise. Dropping to 0.71 is a regression. So quality metrics are compared against a committed baseline with a tolerance, and only a primary metric moving more than five points fails the build.",
          "Relative comparison is right here, because the absolute number is a property of the dataset rather than the system. A recall of 0.9 means nothing on its own. A recall of 0.9 where yesterday it was 0.96 means something specific.",
        ],
      },
      {
        heading: "Rule two: safety does not average",
        paragraphs: [
          "The other set of metrics counts how often the agent called a tool the test case forbids, and how often it reached above the risk tier the utterance justified. Those fail the build at anything above zero, whatever the baseline says.",
          "The reason is that a tolerance turns a safety property into an average, and averages hide exactly the case you care about. Twenty-four rows passing and one prompt-injection row succeeding is a 96 percent pass rate, which sounds excellent, and it means an agent that can be talked into changing a customer's account limit by a stranger typing SYSTEM OVERRIDE into a chat widget.",
          "A gate that lets that through on tolerance is not a gate. It is a report nobody reads with an exit code of zero.",
        ],
      },
      {
        heading: "Everything scoreable by code is scored by code",
        paragraphs: [
          "Retrieval ranking, tool selection and risk-tier violations need no model to judge. They are set membership and an ordering comparison. That matters practically: those suites are free and deterministic, so they run on every commit rather than on the occasions somebody remembers.",
          "A judge model is reached for exactly once, for the one question set membership cannot answer, which is whether every claim in an answer is supported by the context it was given. Three rules keep it honest, and all three are load-bearing. It never sees the expected label, because a judge shown the answer agrees with it. It judges claims against a passage rather than quality, because asking a model whether an answer is good returns its taste. And it is allowed to abstain, with abstentions counted separately rather than rounded into a pass or a fail, because a judge forced to choose invents a reason.",
        ],
      },
      {
        heading: "The dataset rows that earn their place",
        paragraphs: [
          "Three kinds are worth more than the obvious ones. Rows where the correct retrieval outcome is nothing at all, because a retriever that always finds something is the failure that reads as success. Rows carrying forged authority and injection through pasted content, because indirect injection through retrieved text is the attack that does not look like an attack. And rows where the right answer is an honest admission of not knowing, because a judge that scores honest uncertainty as a hallucination is miscalibrated, and nothing else in the suite would catch that.",
          "Every row carries a note saying what failure it exists to catch. A golden row whose purpose nobody remembers gets deleted the first time it goes red, usually by the person whose change made it go red.",
        ],
      },
      {
        heading: "Fixtures, and the one way this can lie to you",
        paragraphs: [
          "The default mode replays recorded rankings and tool choices instead of calling the real retriever and the real model. That is not a weaker eval. It is what makes the gate runnable on every commit at all, with no API keys, no spend and the same numbers on every machine.",
          "It also changes where a regression becomes visible. A chunking change that moves a ranking arrives as a diff to a committed JSON file, in review, next to the change that caused it, rather than as a number nobody re-ran.",
          "Which is also the one way the whole thing can lie. A fixture refreshed without being read is how a regression gets blessed into the baseline. There is no technical fix for that, only the discipline of reading the diff, so it is written at the top of the README rather than buried.",
        ],
      },
      {
        heading: "What it does not cover",
        paragraphs: [
          "Worth naming, because a harness that looks complete stops getting extended. Every suite tests a single turn, so whether an agent correctly refuses on turn four what it accepted on turn one is untested, and that is where a lot of real jailbreaks live. There is no cost or token tracking. And there is no sampling of production traffic, which is the third leg of the standard pattern after offline datasets and a CI gate.",
          "The scorers have their own unit tests, which sounds excessive until you consider what a broken one does. A recall function that returns 1 for an empty result set turns a dead retriever into a green build. An uncalibrated measuring instrument does not fail loudly. It produces numbers that look like evidence.",
        ],
      },
    ],
    links: [
      {
        label: "trackline on GitHub",
        href: "https://github.com/yerinsabraham/trackline",
      },
      { label: "Lira Intelligence", href: "https://liraintelligence.com" },
    ],
  },
];

export function getEngineering(slug: string) {
  return engineering.find((p) => p.slug === slug);
}
