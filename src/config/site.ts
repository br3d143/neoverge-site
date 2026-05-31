/**
 * Site-wide configuration: brand strings, navigation, worlds, contact, social.
 * Content sourced from neoverge-content-master.md (Global Elements).
 * Note: in a later session this can move into Decap/CMS site_settings; for now
 * it lives in code so Header/Footer/pages share one source of truth.
 */

export const site = {
  name: "NeoVerge Dream School",
  tagline: "One Universe. Infinite Futures.",
  subTagline:
    "Igniting curiosity. Empowering leaders. Shaping the future—one student at a time.",
  email: "info@neovergedreamschool.com",
  phone: "(310) 817-0494",
  phoneHref: "tel:+13108170494",
  location: "La Puente, CA",
  hours: "Monday–Thursday, 7:00 AM – 4:00 PM",
  newsletterLabel: "Stay connected with the future of learning.",
} as const;

export type WorldKey = "earth" | "water" | "fire" | "air";

export const worlds: {
  name: string;
  element: string;
  world: WorldKey;
  href: string;
  status: "Active" | "Coming soon";
}[] = [
  { name: "NeoVerse", element: "Earth", world: "earth", href: "/worlds/neoverse", status: "Coming soon" },
  { name: "Apex", element: "Water", world: "water", href: "/worlds/apex", status: "Active" },
  { name: "Pulse Collective", element: "Fire", world: "fire", href: "/worlds/pulse", status: "Coming soon" },
  { name: "WorldWise", element: "Air", world: "air", href: "/worlds/worldwise", status: "Coming soon" },
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Worlds", href: "/worlds", children: worlds },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Worlds", href: "/worlds" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

// Social handles are placeholders — real handles are an open question in the brief.
export const social = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

// Rich per-world content (content sourced verbatim-ish from neoverge-content-master.md).
// Shared by the homepage, the Worlds overview, and each world page.
export const worldsContent = {
  earth: {
    name: "NeoVerse",
    element: "Earth",
    grades: "K–8 General Education",
    href: "/worlds/neoverse",
    status: "Coming soon",
    logo: "/brand/neoverse.png",
    tagline: "Grounded in purpose. Growing with power.",
    heroHeading: "Exploration. Expression. Excellence.",
    intro:
      "Where curiosity takes root and intellect flourishes. NeoVerse is our K–8 general education track, offering rigorous academics and rich enrichment — from garden science and project-based learning to languages, music, and wellness.",
    blurb: "Rigorous academics and rich enrichment for K–8 explorers.",
    mission:
      "To nurture rooted, resilient learners through strong academics, integrated enrichment, and compassionate community.",
    vision:
      "To cultivate a generation of grounded thinkers and innovative doers who rise with both intellect and integrity.",
    offers: [
      "Core academics: math, language arts, science, social studies",
      "Project-based and design-thinking learning",
      "Garden science and outdoor exploration",
      "Music, art, and global studies",
      "French and Spanish language",
      "Meditation and wellness",
    ],
    contact: "info@neovergedreamschool.com",
  },
  water: {
    name: "Apex Inner System Athletics",
    element: "Water",
    grades: "Grades 6–12 + Post-Grad",
    href: "/worlds/apex",
    status: "Active",
    logo: "/brand/apex.png",
    tagline: "Flow with focus. Train with heart.",
    heroHeading: "Elite Training, Focused Futures.",
    intro:
      "Where grit meets greatness. Apex develops mentally strong, academically focused student-athletes through elite sports training, mindset coaching, and NCAA-aligned academics — preparing them to lead in competition and in life.",
    blurb: "Elite training, mindset coaching, and NCAA-aligned academics for student-athletes.",
    mission:
      "To build mentally tough, academically driven, and athletically elite student-athletes who lead with character on and off the court.",
    vision:
      "To be the nation's premier athletic-academic hybrid, preparing students to compete at the next level in sport and in life.",
    offers: [
      "Strength & conditioning",
      "Basketball skills development",
      "Daily team practices",
      "NCAA-accredited academic curriculum",
      "Mindset, breathwork & character education",
    ],
    contact: "apex@neovergedreamschool.com",
  },
  fire: {
    name: "Pulse Collective",
    element: "Fire",
    grades: "Performing Arts (K–12)",
    href: "/worlds/pulse",
    status: "Coming soon",
    logo: "/brand/pulse.png",
    tagline: "Ignite your spark. Move with meaning.",
    heroHeading: "Where Creativity Meets Excellence.",
    intro:
      "Where passion takes center stage. Pulse is a bold performing-arts track where young artists shine in dance, musical theatre, and acting — all while receiving personalized academic support.",
    blurb: "A bold performing-arts world where young artists take center stage.",
    mission:
      "To cultivate young artists who express boldly, train passionately, and perform with heart while receiving rigorous, personalized academic instruction.",
    vision:
      "To become a performing-arts incubator where creativity, discipline, and academic excellence fuel lifelong confidence and cultural awareness.",
    offers: [
      "Dance: ballet, jazz, lyrical, contemporary, hip hop, tap",
      "Musical theatre",
      "Acting, storytelling, and monologues",
      "Performance showcases and cross-disciplinary projects",
      "Personalized academics on an artist's schedule",
    ],
    contact: "info@neovergedreamschool.com",
  },
  air: {
    name: "WorldWise Hybrid Academy",
    element: "Air",
    grades: "K–12 Hybrid Homeschool",
    href: "/worlds/worldwise",
    status: "Coming soon",
    logo: "/brand/worldwise.png",
    tagline: "Freedom to learn. Space to soar.",
    heroHeading: "Freedom to Learn, Power to Grow.",
    intro:
      "For learners who chart their own course. WorldWise blends the flexibility of homeschooling with the community of in-person learning — empowering independent K–12 students through collaborative drop-off days, global studies, and hands-on exploration.",
    blurb: "Flexible, global learning for independent homeschool families.",
    mission:
      "To empower homeschoolers and independent learners with flexible structure, social connection, and meaningful enrichment.",
    vision:
      "To lead the way in hybrid education by building a globally conscious community of adaptable, curious, and collaborative students.",
    offers: [
      "Twice-weekly collaborative drop-off days",
      "Hands-on, project-based learning",
      "Global studies and cultural literacy",
      "Community-building and social connection",
      "Personalized learning that continues at home",
    ],
    contact: "info@neovergedreamschool.com",
  },
} as const;

export const worldOrder = ["earth", "water", "fire", "air"] as const;

// Apex program sub-pages (full builds come in a later session; titles use the Apex voice).
export const apexPages = [
  { title: "Athletics", href: "/worlds/apex/athletics", blurb: "Where killers are crafted and leaders are born." },
  { title: "Programming", href: "/worlds/apex/programming", blurb: "Whole-athlete development, every single day." },
  { title: "Academics", href: "/worlds/apex/academics", blurb: "Brains. Buckets. Balance." },
  { title: "Mindset Training", href: "/worlds/apex/mindset", blurb: "Because the game starts in your head." },
  { title: "Life Beyond the Court", href: "/worlds/apex/life-beyond-court", blurb: "Basketball's the hook — life is the mission." },
];
