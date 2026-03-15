export type TimelineEntry = {
  company: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  details?: string[];
  emphasis?: "major" | "supporting";
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const introLead =
  "I lead product at TheFork, after senior roles at Klarna, Subito, and Wise. Over the past decade, I’ve worked across consumer and marketplace products in Europe and the US, building product organisations that stay clear, focused, and effective as they grow.";

export const professionalIntroduction = [
  "I care about building products that stay clear as they grow — for customers, for teams, and for the business behind them. As my scope has expanded, I’ve kept coming back to the same things: sharp judgment, clear priorities, and teams that know where to focus.",
  "I’ve worked across Italy, Switzerland, and Estonia, and I’ve led products serving multiple markets at once, often in environments where scale, complexity, and coordination all mattered at the same time."
] as const;

export const principles = [
  {
    title: "Clarity is a leadership tool",
    body: "I want priorities to be legible, tradeoffs to be explicit, and teams to know what matters most."
  },
  {
    title: "Product quality starts at the core",
    body: "The fastest way to grow a product is often to make the core experience simpler, stronger, and easier to trust."
  },
  {
    title: "Discovery should sharpen judgment",
    body: "Research and experimentation matter when they improve decisions, not when they become a substitute for them."
  }
] as const;

export const timeline: TimelineEntry[] = [
  {
    company: "TheFork",
    title: "Head of Product",
    location: "Milan, Italy",
    period: "2023 - Present",
    summary:
      "I lead the consumer product organisation at TheFork across discovery, search, booking, loyalty, and engagement, for a business operating in 12 countries.",
    details: [
      "I shape long-term consumer direction and align cross-functional leaders around the most important product bets.",
      "I coach Product Managers and Group Product Managers while raising the bar on product quality, prioritisation, and execution."
    ],
    emphasis: "major"
  },
  {
    company: "Klarna",
    title: "Senior Product Manager",
    location: "Milan, Italy",
    period: "2022 - 2023",
    summary:
      "Led the pre-purchase experience in the Klarna app, spanning discovery, navigation, account, wishlist, and onboarding.",
    emphasis: "supporting"
  },
  {
    company: "Subito",
    title: "Product Team Lead",
    location: "Milan, Italy",
    period: "2020 - 2022",
    summary:
      "Led a product tribe focused on growth, safety, and monetisation in one of Italy's leading consumer marketplaces.",
    emphasis: "supporting"
  },
  {
    company: "Subito",
    title: "Senior Product Manager",
    location: "Milan, Italy",
    period: "2019 - 2020",
    summary:
      "Led acquisition, retention, and referral, with a strong focus on experimentation.",
    emphasis: "supporting"
  },
  {
    company: "Jobtome",
    title: "Product Manager",
    location: "Stabio, Switzerland",
    period: "2017 - 2019",
    summary:
      "Led product discovery and delivery across web and mobile for a high-volume job marketplace.",
    emphasis: "supporting"
  },
  {
    company: "Wise",
    title: "Project Manager",
    location: "Tallinn, Estonia",
    period: "2015 - 2017",
    summary:
      "Worked on localisation, operational systems, and market-specific product adaptations to support expansion across European markets.",
    emphasis: "supporting"
  },
  {
    company: "DEMnet",
    title: "Web Marketing Specialist",
    location: "Tallinn, Estonia",
    period: "2014 - 2015",
    summary:
      "Managed SEO and SEM for e-commerce clients.",
    emphasis: "supporting"
  },
  {
    company: "Arrow Electronics",
    title: "Junior Project Manager",
    location: "Milan, Italy",
    period: "2014",
    summary:
      "Supported an international ERP implementation across Europe, Asia, and the United States.",
    emphasis: "supporting"
  }
];

export const education: EducationItem[] = [
  {
    school: "University of Milano-Bicocca",
    degree: "MSc in Business Administration and Management",
    period: "2013"
  },
  {
    school: "Tallinn University of Technology",
    degree: "Erasmus exchange in International Business",
    period: "2012"
  },
  {
    school: "University of Milano-Bicocca",
    degree: "BSc in Business and Managerial Economics",
    period: "2011"
  }
];
