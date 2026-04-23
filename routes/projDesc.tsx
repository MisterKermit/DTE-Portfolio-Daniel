export const projects = [
  {
    id: "pygame-launcher",
    title: "🎮 Pygame Launcher Game",
    cover: "/images/launcher-cover.png",
    summary:
      "A physics-based launcher game where players fire projectiles at moving targets while racing against the clock.",
    gallery: [
      "/images/launcher-1.png",
      "/images/launcher-2.png",
      "/images/launcher-3.png",
    ],
    tidbits: [
      { label: "Tech Stack", value: "Python, Pygame Zero" },
      { label: "Duration", value: "3 weeks" },
      { label: "Role", value: "Solo Developer" },
    ],
    steps: [
      {
        title: "Ideation",
        desc: "Sketched mechanics inspired by Angry Birds. Aimed for tactile physics and rewarding aim precision.",
      },
      {
        title: "Implementation",
        desc: "Used Pygame Zero sprites and lists to manage bullets and targets. Implemented collisions, scoring, and cooldown timing.",
      },
      {
        title: "Polish",
        desc: "Added a countdown timer, dynamic background transitions, and persistent high-score storage.",
      },
    ],
  },
  {
    id: "pgzero-infection",
    title: "🧬 PGZero Infection Simulator",
    cover: "/images/infection-cover.png",
    summary:
      "A dynamic simulation exploring infection spread and clumping behavior among moving particles.",
    gallery: [
      "/images/infection-1.png",
      "/images/infection-2.png",
    ],
    tidbits: [
      { label: "Tech Stack", value: "Python, Pygame Zero" },
      { label: "Duration", value: "4 weeks" },
      { label: "Role", value: "Lead Designer" },
    ],
    steps: [
      {
        title: "Concept",
        desc: "Inspired by epidemic modeling and emergent behavior. Defined transmission only through direct contact.",
      },
      {
        title: "Simulation Logic",
        desc: "Implemented clumping mechanics via vector-based proximity checks. Infection spreads through collision detection.",
      },
      {
        title: "Visualization",
        desc: "Added health state colors, energy decay, and motion smoothing for visual realism.",
      },
    ],
  },
  {
    id: "retro-portfolio",
    title: "🌐 Retro Portfolio",
    cover: "/images/retro-cover.png",
    summary:
      "This very site — designed with a retro CRT aesthetic blending glowing neon, scanlines, and pixel fonts.",
    gallery: [
      "/images/retro-1.png",
      "/images/retro-2.png",
    ],
    tidbits: [
      { label: "Tech Stack", value: "Deno Fresh, Tailwind CSS" },
      { label: "Duration", value: "Ongoing" },
      { label: "Role", value: "Full-Stack Developer" },
    ],
    steps: [
      {
        title: "Design Language",
        desc: "Researched CRT color palettes and 80s tech typography for authentic retro feel.",
      },
      {
        title: "Implementation",
        desc: "Built modular components with Tailwind CSS and Deno Fresh. Used text shadows for the glow effect.",
      },
      {
        title: "Future Plans",
        desc: "Add interactive terminal animations and dynamic project data fetching.",
      },
    ],
  },
];
