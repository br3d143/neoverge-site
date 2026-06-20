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
    "Igniting curiosity. Empowering leaders. Shaping the future, one student at a time.",
  email: "info@neovergedreamschool.com",
  phone: "(310) 817-0494",
  phoneHref: "tel:+13108170494",
  location: "Covina, CA",
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
  menuLabel: string;
  emphasizeLabel?: boolean; // bold the menu label (Apex "Enroll now", Pulse date)
}[] = [
  { name: "NeoVerse", element: "Earth", world: "earth", href: "/worlds/neoverse", status: "Coming soon", menuLabel: "Coming soon" },
  { name: "Apex", element: "Water", world: "water", href: "/worlds/apex", status: "Active", menuLabel: "Enroll now", emphasizeLabel: true },
  { name: "Pulse Collective", element: "Fire", world: "fire", href: "/worlds/pulse", status: "Coming soon", menuLabel: "Coming Fall 2026", emphasizeLabel: true },
  { name: "WorldWise", element: "Air", world: "air", href: "/worlds/worldwise", status: "Coming soon", menuLabel: "Coming soon" },
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

// Parent NeoVerge has no dedicated IG account; using the active Apex account as a
// stand-in for the footer. No Facebook/YouTube accounts yet, so they're omitted.
export const social = [
  { label: "Instagram", href: "https://www.instagram.com/apexinnersystemathletics/" },
];

// Real, verified per-world Instagram accounts.
export const worldInstagram: Record<WorldKey, string> = {
  earth: "https://www.instagram.com/neoverseearth/",
  water: "https://www.instagram.com/apexinnersystemathletics/",
  fire: "https://www.instagram.com/pulsecollectivefire/",
  air: "https://www.instagram.com/worldwiseair/",
};

// External forms & scheduling links (from the content master).
export const forms = {
  apexInterest: "https://form.jotform.com/250895493963171",
  pulseInterest:
    "https://docs.google.com/forms/d/e/1FAIpQLSe94Ie2-cjWIHqQMasufqxDmo9FtfV3ho4rf3M3ADsXdH8kTw/viewform",
  shadowDay:
    "https://docs.google.com/forms/d/e/1FAIpQLSfGauVN5dYJCbFCggb8L2m96QORtqd5JY0Ow_GtE5BYOt-XLQ/viewform?usp=header",
  scholarship:
    "https://docs.google.com/forms/d/e/1FAIpQLSfImvDYIZCuKZoe7JBYtaxqei_mF_WvAT80QRAWGm7UALGNtg/viewform?usp=header",
  mindsetConsent:
    "https://docs.google.com/document/d/1fY6pFxncexn_AoYSbQuirrc_Om2Vzn6MM0yU1bXBRkU/copy",
  zenithBooking: "https://calendly.com/drm-zenithmindset",
  cortezBooking: "https://calendly.com/cortes-barcelona10/30min",
};

export const partners = {
  zenith: "https://www.zenithmindset.com",
  apexISA: "https://www.apexisa.com",
};

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
      "Where curiosity takes root and intellect flourishes. NeoVerse is our K–8 general education track, offering rigorous academics and rich enrichment, from garden science and project-based learning to languages, music, and wellness.",
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
      "Where grit meets greatness. Apex develops mentally strong, academically focused student-athletes through elite sports training, mindset coaching, and NCAA-aligned academics, preparing them to lead in competition and in life.",
    blurb: "Elite training, mindset coaching, and NCAA-aligned academics for student-athletes.",
    mission:
      "To build mentally tough, academically driven, and athletically elite student-athletes who lead with character on and off the court.",
    vision:
      "To be the nation's premier athletic-academic hybrid, preparing students to compete at the next level in sport and in life.",
    offers: [
      "Strength & conditioning",
      "Individual basketball skills development",
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
      "Where passion takes center stage. Pulse is a bold performing-arts track where young artists shine in dance, musical theatre, and acting, all while receiving personalized academic support.",
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
      "For learners who chart their own course. WorldWise blends the flexibility of homeschooling with the community of in-person learning, empowering independent K–12 students through collaborative drop-off days, global studies, and hands-on exploration.",
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

// Optional decorative figure silhouettes shown in a world's hero (e.g. Pulse dancers).
export const worldFigures: Partial<Record<WorldKey, string[]>> = {
  fire: [
    "/images/pulse-dancer-1.webp",
    "/images/pulse-dancer-2.webp",
    "/images/pulse-dancer-3.webp",
  ],
};

// Photography shown on each world page. Stock placeholders for now (self-hosted,
// license-free), swap for real NeoVerge photos as they arrive. Apex has its own
// page with real photos, so it's not listed here.
export const worldPhotos: Partial<
  Record<WorldKey, { src: string; alt: string; portrait?: boolean }[]>
> = {
  // Illustrative, license-free stock; swap for real photography as it arrives.
  // The first photo is featured beside the world's "offers" list; the rest fill the band below.
  earth: [
    { src: "/images/stock/art-class.webp", alt: "Students painting at easels in art class" },
    { src: "/images/stock/meadow-explore.webp", alt: "Young explorers discovering nature in a meadow" },
    { src: "/images/stock/kids-clay.webp", alt: "Children learning through hands-on play" },
  ],
  fire: [
    { src: "/images/stock/ballerina-pointe.webp", alt: "A young ballerina dancing en pointe", portrait: true },
    { src: "/images/stock/theatre-kids.webp", alt: "Young performers acting out a play on stage" },
    { src: "/images/stock/pulse-1.webp", alt: "Young dancers performing on stage" },
  ],
};

// Apex program sub-pages (full builds come in a later session; titles use the Apex voice).
export const apexPages = [
  { title: "Meet the Staff", href: "/worlds/apex/staff", blurb: "Pro careers, D1 pedigrees, and a USC doctorate, all on one staff." },
  { title: "Athletics", href: "/worlds/apex/athletics", blurb: "Where killers are crafted and leaders are born." },
  { title: "Programming", href: "/worlds/apex/programming", blurb: "Whole-athlete development, every single day." },
  { title: "Academics", href: "/worlds/apex/academics", blurb: "Brains. Buckets. Balance." },
  { title: "Mindset Training", href: "/worlds/apex/mindset", blurb: "Because the game starts in your head." },
  { title: "Life Beyond the Court", href: "/worlds/apex/life-beyond-court", blurb: "Basketball's the hook. Life is the mission." },
];
