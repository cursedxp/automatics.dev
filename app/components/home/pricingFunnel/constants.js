export const PLANS_DATA = [
  {
    id: "audit",
    name: "Systems Audit",
    tagline: "€3,500–6,000 · Delivered in 2 weeks",
    subtitle: "We trace the full workflow across people and tools, identify bottlenecks and failure points, and turn them into a clear, prioritized execution plan.",
    priceNote: "Price varies by number of systems, team size, and briefings needed.",
    description: "Deliverables:",
    features: [
      "Workflow map",
      "Data/tool audit (CRM, billing, support, sheets)",
      "Single source of truth plan",
      "ROI-prioritized backlog and sequencing",
      "Execution roadmap",
    ],
    cta: "Start with an Audit",
    popular: false,
  },
  {
    id: "build",
    name: "Build Sprint",
    tagline: "€9,000–20,000 · Sprint duration: 4 weeks",
    subtitle: "We implement the highest-impact items from the audit: workflows, automations, integrations, and the internal or customer-facing apps that make the process actually run.",
    priceNote: "Final price based on integrations, workflows, and features.",
    description: "Typical output:",
    features: [
      "Workflows and lifecycle stages",
      "Portals/internal tools with roles & permissions",
      "Integrations/automations with monitoring",
      "Reporting foundation: clean metrics and dashboards",
      "Documentation and changelog",
    ],
    cta: "Discuss a Build Sprint",
    popular: false,
  },
  {
    id: "operate",
    name: "Operate",
    tagline: "€4,000–5,000/month · Monthly subscription",
    subtitle: "Continuous improvements within agreed capacity. We reprioritize weekly, you can submit tasks through a dedicated platform. We scope larger tasks to Build Sprints.",
    priceNote: "Price based on response time (SLA), monthly task capacity, and support level.",
    description: "Includes:",
    features: [
      "Managed queue with weekly prioritization",
      "Bugfixes, adjustments, small builds within capacity",
      "Integration monitoring and incident response",
      "Data hygiene and reporting upkeep",
      "Adoption support and documentation updates",
    ],
    cta: "Start Operating",
    popular: false,
  },
];

// Kept for backward compatibility with unused funnel components
export const FUNNEL_QUESTIONS = [];