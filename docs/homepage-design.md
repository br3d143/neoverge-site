# Homepage & Mandala — Visual + Motion Direction (Session 3)

> Synthesis of the locked design brief (`neoverge-design-brief.md`, Sections 6 & 8) with the
> `taste-design` skill. **The brief is the source of truth.** Where taste-design's defaults
> conflicted with the brief, the brief wins (noted below).

## Resolved conflicts (brief wins)
- **Inter stays** as the body font (taste-design bans it; brief mandates it).
- **Mandala stays centered/radial** (taste-design bans centered heroes; the mandala is a
  validated radial composition — its symmetry is the point).
- **Refined easing, not springs** — `cubic-bezier(0.2, 0.8, 0.2, 1)`; bounce is banned by the brief.

## Adopted from taste-design
- Perpetual, *barely-there* micro-motion (the mandala breathes + the orbit ring drifts).
- Staggered cascade reveals on scroll (the four-world panels arrive one at a time).
- Animate `transform`/`opacity` only; everything pauses under `prefers-reduced-motion`.
- Anti-AI-tells: no emoji, no pure black, no neon/outer-glow, no fabricated statistics
  (the old site's "0%", "100% success rate" are dropped), no broken image links (SVG
  initials for testimonial avatars until real headshots exist).

## The signature moment — the Mandala
- 600px square desktop / ~340px mobile, centered in a near-full-viewport hero.
- Faint dashed orbit ring drifts one revolution per 60s; pauses on hover.
- NEOVERGE wordmark (PNG) at center.
- Four nodes at compass points (per brief §6): **N = NeoVerse/Earth**, **E = Pulse/Fire**,
  **S = Apex/Water**, **W = WorldWise/Air**. Each: a white circle with a thin border, an inline
  SVG element icon, and an eyebrow label ("NEOVERSE · EARTH").
- Idle: each node breathes (3s, ±2% scale), staggered.
- Hover: node scales to 1.08, fills with the world's lightest tint, icon + label recolor to the
  world's text-safe accent, soft radial glow at ~8% opacity.
- Keyboard: Tab cycles N → E → S → W; visible focus ring in the world's color.
- Click/tap: navigates to that world's page. (The full "expand-to-fill" page transition from
  brief §6 is deferred until the world pages + View Transitions exist — Session 4+.)
- A scannable fallback card grid sits directly below — equal priority, no hierarchy.

## Hero typographic hierarchy
- Eyebrow tagline ("ONE UNIVERSE. INFINITE FUTURES.") → the mandala → instruction line
  ("CHOOSE YOUR WORLD TO BEGIN") → fallback cards. One bold move; everything else restrained.

## Section rhythm (per brief §8)
Hero (mandala) → Welcome (≤2 sentences, Body L, ~600px) → Why NeoVerge (three editorial
pillars, no card chrome) → Four-world scroll reveal → Educational philosophy (single column,
Body L) → Mission & Vision (two Display-M pull-quotes) → Testimonials (scroll-snap, one per
screen) → Pre-footer CTA.
