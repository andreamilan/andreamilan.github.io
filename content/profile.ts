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
  "I lead product at TheFork, after senior roles at Klarna, Subito and Wise. Over the past decade, I've worked across consumer and marketplace products in Europe and the US, with a focus on product quality, team clarity, and execution.";

export const professionalIntroduction = [
  "I care about building products that feel clear to use and clear to work on. As my scope has grown, that has stayed constant: better judgment, better prioritisation, and teams that know what matters.",
  "I've worked across Italy, Switzerland, and Estonia, and I've led products serving multiple markets at once."
] as const;

export const principles = [
  {
    title: "I use clarity to raise the bar",
    body: "I want priorities to be legible, tradeoffs to be explicit, and teams to know what good looks like."
  },
  {
    title: "I start with the core experience",
    body: "When the product gets clearer, growth, trust, and retention usually follow."
  },
  {
    title: "I want discovery to change decisions",
    body: "Research and experiments matter when they sharpen judgment."
  }
] as const;

export const timeline: TimelineEntry[] = [
  {
    company: "TheFork",
    title: "Head of Product",
    location: "Milan, Italy",
    period: "2023 - Present",
    summary:
      "I lead the consumer product organisation across discovery, search, booking, loyalty, and engagement for a business operating in 12 countries.",
    details: [
      "I define long-term consumer direction with design, engineering, data, marketing, and executive partners.",
      "I coach Product Managers and Group Product Managers while raising product quality, prioritisation, and execution discipline."
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
      "Led a product tribe focused on growth, safety, and monetisation in one of Italy's most established marketplaces.",
    emphasis: "supporting"
  },
  {
    company: "Subito",
    title: "Senior Product Manager",
    location: "Milan, Italy",
    period: "2019 - 2020",
    summary:
      "Led acquisition, retention, and referral scopes, with a strong focus on experimentation.",
    emphasis: "supporting"
  },
  {
    company: "Jobtome",
    title: "Product Manager",
    location: "Stabio, Switzerland",
    period: "2017 - 2019",
    summary:
      "Led discovery and delivery across web and mobile for a high-volume job marketplace.",
    emphasis: "supporting"
  },
  {
    company: "Wise",
    title: "Project Manager",
    location: "Tallinn, Estonia",
    period: "2015 - 2017",
    summary:
      "Worked on localisation, operational systems, and market-specific product adaptations across European markets.",
    emphasis: "supporting"
  },
  {
    company: "DEMnet",
    title: "Web Marketing Specialist",
    location: "Tallinn, Estonia",
    period: "2014 - 2015",
    summary:
      "Managed SEO and SEM activity for e-commerce clients.",
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
    school: "Universita degli Studi di Milano-Bicocca",
    degree: "Master's degree in Business Administration and Management",
    period: "2011 - 2013"
  },
  {
    school: "Tallinna Tehnikaulikool",
    degree: "Erasmus Programme in International Business",
    period: "2012 - 2013"
  },
  {
    school: "Universita degli Studi di Milano-Bicocca",
    degree: "Bachelor's degree in Business and Managerial Economics",
    period: "2007 - 2011"
  }
];
