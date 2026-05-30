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
