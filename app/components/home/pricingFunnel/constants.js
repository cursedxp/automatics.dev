import { sub } from "framer-motion/client";

export const PLANS_DATA = [
  {
    id: "audit",
    name: "Systems Audit",
    tagline: "Fixed-scope, outcome-focused",
    subtitle: "We trace the full workflow across people and tools, identify bottlenecks and failure points, and translate them into a practical, prioritized execution plan.",
    description: "Deliverables:",
    features: [
      "workflow map",
      "data/tool audit (CRM, billing, support, sheets)",
      "single source of truth plan" ,
      "ROI-prioritized backlog and sequencing",
      "execution roadmap",
    ],
    popular: false,
  },
  {
    id: "build",
    name: "Build Sprint",
    tagline: "Weekly releases, rapid impact",
    subtitle: "We implement the highest-impact items from the audit: workflows, automations, integrations, and the internal or customer-facing apps that make the process actually run.",
    description: "Typical output:",
    features: [
      "workflows and lifecycle stages",
      "portals/internal tools with roles & permissions",
      "integrations/automations with monitoring",
      "reporting foundation: clean metrics and dashboards",
      "documentation and changelog",
    ],
    popular: true,
  },
  {
    id: "operate",
    name: "Operate",
    tagline: "Ongoing delivery & reliability",
    subtitle: "Continuous improvements within agreed capacity. We run a managed queue, reprioritize weekly, and you can submit as many ideas, improvements, or bug fixes as you want.",
    description: "Includes:",
    features: [
      "managed queue with weekly prioritization",
      "bugfixes, adjustments, small builds within capacity",
      "integration monitoring and incident response",
      "data hygiene and reporting upkeep",
      "adoption support and documentation updates",
    ],
    highlights: ["Enterprise grade", "Fully customizable", "Dedicated support"],
    popular: false,
  },
];

export const FUNNEL_QUESTIONS = [
  {
    id: "team_size",
    question: "What's the size of your team?",
    type: "slider",
    min: 1,
    max: 50,
    step: 1,
    labels: ["1", "10", "20", "30", "40", "50+"],
  },
  {
    id: "project_complexity",
    question: "How would you describe your project?",
    options: [
      {
        value: "validation",
        label: "Concept validation & testing",
        icon: "HiMiniViewfinderCircle",
        description: "Test your idea with core features and user feedback",
      },
      {
        value: "development",
        label: "Full development & launch",
        icon: "HiOutlineRocketLaunch",
        description: "Build and launch a complete solution ready for market",
      },
      {
        value: "enterprise",
        label: "Enterprise-scale solution",
        icon: "HiOutlineBuildingOffice",
        description: "Complex system with custom integrations and enterprise features",
      },
    ],
  },
  {
    id: "budget",
    question: "What's your budget range?",
    options: [
      {
        value: "essential",
        label: "Under $3,000",
        icon: "HiOutlineCurrencyDollar",
        description: "Perfect for validating concepts and essential features",
      },
      {
        value: "growth",
        label: "$3,000 - $6,000",
        icon: "HiOutlineBanknotes",
        description: "Comprehensive development with faster execution",
      },
      {
        value: "premium",
        label: "$6,000 - $15,000",
        icon: "HiOutlineCreditCard",
        description: "Advanced features with priority support",
      },
      {
        value: "enterprise",
        label: "$15,000+",
        icon: "HiOutlineBuildingLibrary",
        description: "Custom solutions with dedicated project management",
      },
    ],
  },
  {
    id: "timeline",
    question: "What's your preferred timeline?",
    options: [
      {
        value: "urgent",
        label: "ASAP (< 4 weeks)",
        icon: "HiOutlineBolt",
        description: "Need quick validation or immediate results",
      },
      {
        value: "standard",
        label: "1-3 months",
        icon: "HiOutlineCalendar",
        description: "Standard development timeline for most projects",
      },
      {
        value: "planned",
        label: "3+ months",
        icon: "HiOutlineCalendarDays",
        description: "Long-term project with comprehensive planning",
      },
      {
        value: "flexible",
        label: "Flexible timeline",
        icon: "HiOutlineArrowPath",
        description: "No strict deadlines, quality over speed",
      },
    ],
  },
  {
    id: "support_level",
    question: "What level of support do you need?",
    options: [
      {
        value: "basic",
        label: "Basic documentation & guidance",
        icon: "HiOutlineDocument",
        description: "Essential documentation and basic guidance",
      },
      {
        value: "standard",
        label: "Regular check-ins & support",
        icon: "HiOutlineChatBubbleLeft",
        description: "Regular communication and standard support",
      },
      {
        value: "premium",
        label: "Priority support & maintenance",
        icon: "HiOutlineStar",
        description: "Fast response times and ongoing maintenance",
      },
      {
        value: "dedicated",
        label: "Dedicated project manager",
        icon: "HiOutlineHandThumbUp",
        description: "Personal project manager for enterprise needs",
      },
    ],
  },
];