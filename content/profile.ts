export type TimelineEntry = {
  company: string;
  title: string;
  location: string;
  period: string;
  summary?: string;
  details?: string[];
  positions?: {
    title: string;
    period: string;
    summary: string;
  }[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
};

export const introLead =
  "I lead product at TheFork, after senior roles at Klarna, Subito, and Wise. Over the past decade, I’ve worked across consumer and marketplace products in Europe and the US, building product organisations that stay clear, focused, and effective as they grow.";

export const professionalIntroduction = [
  "I care about building products that stay clear as they grow — for customers, for teams, and for the business behind them. As my scope has expanded, I’ve kept coming back to the same things: sharp judgment, clear priorities, and teams that know where to focus.",
  "I’ve worked across Italy, Switzerland, and Estonia, and I’ve led products serving multiple markets at once, often in environments where scale, complexity, and coordination all mattered at the same time."
] as const;

export const principles = [
  {
    title: "I lead with clarity",
    body: "I want priorities to be legible, tradeoffs to be explicit, and teams to know what matters most."
  },
  {
    title: "I start with the core experience",
    body: "I grow products by making the core experience simpler, stronger, and easier to trust."
  },
  {
    title: "I use discovery to sharpen judgment",
    body: "I use research and experimentation to improve my decisions and challenge my assumptions."
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
    ]
  },
  {
    company: "Klarna",
    title: "Senior Product Manager",
    location: "Milan, Italy",
    period: "2022 - 2023",
    summary:
      "I led the pre-purchase experience in the Klarna app, spanning discovery, navigation, account, wishlist, and onboarding."
  },
  {
    company: "Subito",
    title: "Product Team Lead / Senior Product Manager",
    location: "Milan, Italy",
    period: "2019 - 2022",
    positions: [
      {
        title: "Product Team Lead",
        period: "2020 - 2022",
        summary:
          "I led a product tribe focused on growth, safety, and monetisation in one of Italy's leading consumer marketplaces."
      },
      {
        title: "Senior Product Manager",
        period: "2019 - 2020",
        summary:
          "I led acquisition, retention, and referral, with a strong focus on experimentation."
      }
    ]
  },
  {
    company: "Jobtome",
    title: "Product Manager",
    location: "Stabio, Switzerland",
    period: "2017 - 2019",
    summary:
      "I led product discovery and delivery across web and mobile for a high-volume job marketplace."
  },
  {
    company: "Wise",
    title: "Project Manager",
    location: "Tallinn, Estonia",
    period: "2015 - 2017",
    summary:
      "I worked on localisation, operational systems, and market-specific product adaptations to support expansion across European markets."
  }
];

export const education: EducationItem[] = [
  {
    school: "University of Milano-Bicocca",
    degree: "MSc in Business Administration and Management",
    period: "2013",
    location: "Milan, Italy"
  },
  {
    school: "Tallinn University of Technology",
    degree: "Erasmus exchange in International Business",
    period: "2012",
    location: "Tallinn, Estonia"
  },
  {
    school: "University of Milano-Bicocca",
    degree: "BSc in Business and Managerial Economics",
    period: "2011",
    location: "Milan, Italy"
  }
];
