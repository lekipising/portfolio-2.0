export type Work = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  url: string;
  stack: string[];
  intro: string;
  decisions: { title: string; text: string }[];
  engineering: string[];
  reflection: string;
};
export const work: Work[] = [
  {
    slug: "timi",
    name: "Timi",
    category: "Independent SaaS · Active",
    headline: "Connecting WhatsApp conversations with sales.",
    summary:
      "A WhatsApp sales platform for Kenyan businesses, with ad attribution, customer management, and AI replies that hand over to the seller.",
    url: "https://timi.co.ke",
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis / BullMQ",
      "Gemini",
      "Meta APIs",
      "Railway / Cloudflare",
    ],
    intro:
      "For businesses selling through WhatsApp, customer conversations drive the sale. I built Timi to connect that experience with customer management and a clearer view of which ads lead to customers and seller-confirmed sales. AI replies support the workflow, but sellers stay in control.",
    decisions: [
      {
        title: "Focus on WhatsApp.",
        text: "There was a choice between expanding across platforms and going deeper on WhatsApp. I chose WhatsApp: understanding one seller workflow well mattered more than collecting integrations. Becoming a Meta Tech Provider and requesting additional permissions required patience, repeated submissions, and careful attention to platform requirements.",
      },
      {
        title: "Get the seller’s tone right.",
        text: "Getting the AI to sound natural for Kenyan sellers took iteration. English, Swahili, and Sheng needed to feel like a conversation, not a translated script. Tone was only part of the problem: replies also needed to respect the catalog, know their limits, and hand the conversation back to a person.",
      },
      {
        title: "Draw a boundary around money.",
        text: "Collecting buyer payments initially felt like a natural extension. It also introduced a different set of operational challenges. I removed buyer checkout and kept payment collection with the seller. Timi shares payment details or the seller’s website; its own subscription billing remains separate.",
      },
      {
        title: "Adapt the strategy to platform costs.",
        text: "Changes to Meta’s pricing prompted another look at the strategy, audience, and business model. The focus became product businesses already running ads to WhatsApp. Attribution distinguishes chat origin, seller-confirmed outcomes, and campaign credit rather than treating them as interchangeable.",
      },
    ],
    engineering: [
      "Railway app and database hosting, with Cloudflare infrastructure and email integration",
      "WhatsApp Embedded Signup, coexistence, and encrypted integration tokens",
      "Live conversations with Socket.IO, reply-scope controls, and human handoff",
      "Background processing with Redis and BullMQ, plus duplicate-reply safeguards",
      "Subscription lifecycle, usage metering, grace periods, and grandfathered plans",
      "Conversation evaluation tools, customer management, and catalog-grounded AI replies",
    ],
    reflection:
      "The important work was deciding how much the product should do. I narrowed the scope to give sellers a clearer, more dependable workflow. Search foundations and weekly performance reviews are part of the ongoing work; I’ve also started seeing referrals from ChatGPT, an early discovery signal I’m watching.",
  },
  {
    slug: "yield",
    name: "Yield",
    category: "Independent product · Active",
    headline: "Compare funds with clearer data.",
    summary:
      "A comparison tool for Kenyan money market funds and Saccos, with scheduled data collection and transparent return calculations.",
    url: "https://www.yield.co.ke",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Cloudflare",
      "Recharts",
    ],
    intro:
      "Comparing investment products meant visiting different sources and untangling how rates, fees, and taxes were presented. I built Yield to bring that information into a more understandable experience. The comparison interface is only one part of the work: useful results depend on reliable inputs.",
    decisions: [
      {
        title: "Start with the source.",
        text: "Each fund and Sacco needed an accurate, reliable source. Different publishers use different pages, formats, and fact sheets, so a single extraction approach was not enough. The pipeline supports HTML and PDF extraction with browser-rendering fallbacks.",
      },
      {
        title: "Make updates repeatable.",
        text: "Scraping runs through a scheduled cron entrypoint. Per-source timings and outcomes make failures easier to investigate. Yield-change validation flags suspicious updates, and administrative overrides allow corrections.",
      },
      {
        title: "Make the comparison understandable.",
        text: "The experience brings filtering, comparisons, and return calculations together. The calculator presents gross returns, fees, and tax separately so users can understand the calculation rather than just seeing a final number.",
      },
    ],
    engineering: [
      "Source-specific extraction from fund websites and PDF fact sheets",
      "Cloudflare browser rendering for sources that need JavaScript",
      "Scheduled collection with source diagnostics and change validation",
      "PostgreSQL and Prisma for product data and historical yields",
      "Search foundations, comparison pages, and interactive return calculations",
    ],
    reflection:
      "A polished comparison is only as useful as the data behind it. Source reliability and a clear experience have to be designed together.",
  },
  {
    slug: "gaiavie",
    name: "GaiaVie",
    category: "Client platform · Live",
    headline: "The booking experience, and everything behind it.",
    summary:
      "A villa and group-trip platform connecting discovery and booking with the workflows hosts, guides, and staff need.",
    url: "https://gaiavie.com",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Paystack",
      "Lodgify",
    ],
    intro:
      "I independently built GaiaVie as a client platform for villa stays and group trips. The public experience helps guests discover and book. Behind it are separate operational workflows for hosts, guides, and administrators, with payments and availability connecting the two sides.",
    decisions: [
      {
        title: "Design beyond the booking button.",
        text: "A booking has a lifecycle. The implementation connects payments with booking records and includes cancellation, refund, and payout workflows. That gives the platform a foundation for the work that happens after checkout.",
      },
      {
        title: "Connect external availability.",
        text: "The Lodgify integration maps external properties to platform records and synchronizes blocked dates. Stored integration credentials are encrypted, and sync results record successful and failed updates.",
      },
      {
        title: "Treat each role as its own experience.",
        text: "Guests, hosts, guides, and administrators have different jobs to do. The platform provides dedicated workflows for listings, trips, verification, bookings, and payouts rather than asking every role to navigate the same interface.",
      },
    ],
    engineering: [
      "Property and group-trip booking workflows",
      "Signed payment webhooks, refund handling, and host / guide payouts",
      "Lodgify property mapping and availability synchronization",
      "Identity-verification integration and role-specific dashboards",
      "Media delivery, caching, and search-friendly public pages",
    ],
    reflection:
      "Marketplace engineering connects the visible product to the less visible operations. Both deserve the same attention to detail.",
  },
  {
    slug: "ssf",
    name: "Sofie Saitet Foundation",
    category: "Client website + operations · Live",
    headline: "A foundation website with the tools to run it.",
    summary:
      "A foundation website with saved enquiries, verified giving workflows, and a private staff inbox.",
    url: "https://sofiesaitetfoundation.org",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Paystack",
    ],
    intro:
      "I independently built the foundation’s website and operational tooling. The public identity needed to communicate its direction thoughtfully, while the underlying workflows needed to help staff manage enquiries and giving with clear records and controlled access.",
    decisions: [
      {
        title: "Save the enquiry before sending the email.",
        text: "Enquiries are stored before notification is attempted. If email delivery fails, the message is still available to staff in the private inbox. The enquiry stays accessible even when its notification fails.",
      },
      {
        title: "Verify before acknowledging.",
        text: "Giving infrastructure verifies payments before recording success and sending acknowledgements. Transactional updates and duplicate-event handling support repeated webhook delivery; staff can retry failed or stalled acknowledgement emails.",
      },
      {
        title: "Make readiness explicit.",
        text: "Public forms, giving, recurring gifts, and event intake have separate readiness controls. Private staff access, consent records, and retention tooling are part of the implementation, with features activated according to the foundation’s readiness.",
      },
    ],
    engineering: [
      "Typed content and an editorial, responsive public experience",
      "Database-first enquiries with a private staff inbox",
      "Magic-link staff authentication with allowlisted access",
      "Verified giving workflows and retryable acknowledgement delivery",
      "Consent, retention tooling, and controlled feature activation",
    ],
    reflection:
      "Thoughtful delivery includes the quiet details: what happens when an email fails, who can access a record, and when a feature is ready to go live.",
  },
];
