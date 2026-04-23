export interface Project {
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
  tech: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "pygame-launcher",
    title: "🎮 Pygame Launcher Game",
    desc:
      "A physics-based launcher game built with Pygame Zero. Features bullet mechanics, target collisions, a timer, and high score tracking.",
    longDesc:
      "A physics-based launcher game built with Pygame Zero, inspired by classic arcade shooters. The development followed the engineering design process: defining the core gameplay goals, researching projectile physics, brainstorming control schemes, prototyping mechanics, testing collisions and timing, and refining based on playtesting feedback.",
    features: [
      "Custom bullet physics and projectile motion",
      "Hit detection with multiple target types",
      "Scoreboard and timer-driven challenge mode",
      "Retro-style visual polish and responsive controls",
    ],
    tech: ["Python", "Pygame Zero"],
    images: [],
  },
  {
    slug: "pgzero-infection-simulator",
    title: "🧬 PGZero Infection Simulator",
    desc:
      "A simulation of infection spread with clumping behavior. Only directly touching cells can transmit infection, with dynamic grouping.",
    longDesc:
      "An infection spread simulation built with Pygame Zero that models agent interactions and emergent clustering. The process mirrored engineering design: identifying the simulation objective, researching contagion models, ideating transmission rules, prototyping agent behavior, testing interactions, and iterating on visuals and performance.",
    features: [
      "Cellular infection model with proximity-based transmission",
      "Visual clump detection and group behavior",
      "Real-time simulation controls and state tracking",
      "Interactive display of infection spread over time",
    ],
    tech: ["Python", "Pygame Zero"],
    images: [],
  },
  {
    slug: "retro-portfolio",
    title: "🌐 Retro Portfolio",
    desc:
      "This very site! Built with Deno Fresh and Tailwind, styled with a sleek retro CRT aesthetic.",
    longDesc:
      "A retro-inspired portfolio site built using Deno Fresh and Tailwind CSS. The project followed the engineering design process by defining audience and aesthetic goals, researching retro UI patterns, ideating layout and navigation, prototyping the structure, testing responsiveness, and refining content for clarity and visual impact.",
    features: [
      "Deno Fresh routing and SSR rendering",
      "Tailwind CSS retro design system",
      "Responsive layout with custom animations",
      "Project pages and modular content sections",
    ],
    tech: ["Deno Fresh", "Tailwind CSS"],
    images: [],
  },
  {
    slug: "ftc-frc-robotics",
    title: "🤖 FTC/FRC Robotics",
    desc:
      "A competitive robotics program spanning FTC and FRC. Includes design, fabrication, control systems, and iterative testing on the field.",
    longDesc:
      "A robotics engineering project covering both FTC and FRC seasons. The development process reflected the engineering design cycle: identifying game challenges, researching mechanisms and materials, brainstorming drive trains and manipulators, building prototypes, testing on the field, analyzing performance, and refining the robot for consistent competition results.",
    features: [
      "Mechanical design for drivetrain and manipulators",
      "Control system integration with sensors and motors",
      "Iterative prototyping, testing, and tuning",
      "Team collaboration and game strategy development",
    ],
    tech: ["CAD", "C++", "Java", "Motor Controllers", "Sensors"],
    images: [],
  },
  {
    slug: "ke-kilohana-conservation",
    title: "🌿 Ke Kilohana Conservation Project",
    desc:
      "A conservation initiative to support native habitat restoration. Includes data collection, community outreach, and environmental impact tracking.",
    longDesc:
      "A conservation project centered on restoring native ecosystems. The engineering design process guided the work: defining ecological goals, researching native species and threats, generating restoration strategies, prototyping planting and monitoring systems, testing with field data, and refining the approach based on environmental feedback and community input.",
    features: [
      "Habitat assessment and restoration planning",
      "Data-driven environmental monitoring",
      "Community engagement and volunteer coordination",
      "Iterative evaluation of conservation outcomes",
    ],
    tech: ["GIS", "Data Analysis", "Field Research", "Community Outreach"],
    images: [],
  },
  {
    slug: "enehana-carnival-app",
    title: "🎡 Enehana Carnival App",
    desc:
      "An event app for carnival planning, scheduling, and participant engagement. Designed to streamline logistics and improve attendee experience.",
    longDesc:
      "An event management app built for carnival coordination. The project followed engineering design steps: identifying organizer and attendee needs, researching event workflows, ideating app features, prototyping the UI, conducting usability tests during events, and refining the experience based on real-time feedback.",
    features: [
      "Event scheduling and activity tracking",
      "Attendee notifications and map integration",
      "Volunteer coordination and task management",
      "Feedback-driven UI improvements",
    ],
    tech: ["React", "TypeScript", "Firebase", "UI/UX Design"],
    images: [],
  },
  {
    slug: "motorized-wheelchair-trainer",
    title: "🦽 Motorized Wheelchair Trainer",
    desc:
      "A training tool for motorized wheelchair operation. Focused on safety, control practice, and adaptive user interaction.",
    longDesc:
      "A training system designed to teach safe motorized wheelchair operation. The engineering process involved defining user needs, researching accessibility and control interfaces, ideating training scenarios, prototyping the simulator, testing with users, and iterating the design to improve comfort, safety, and learning outcomes.",
    features: [
      "Safety-focused control training exercises",
      "Adaptive interface for different skill levels",
      "Realistic simulation of motorized wheelchair behavior",
      "Iterative testing with target users",
    ],
    tech: ["Embedded Systems", "Simulation", "Accessibility Design"],
    images: [],
  },
  {
    slug: "conways-game-of-life",
    title: "🧩 Conway's Game of Life",
    desc:
      "A cellular automaton simulation of Conway's Game of Life. Includes pattern creation, evolution rules, and interactive experimentation.",
    longDesc:
      "A Game of Life simulation created to explore emergent behavior in cellular automata. The engineering design process was applied by defining the problem, researching game rules and patterns, ideating the UI and interaction flow, prototyping the simulation engine, testing with sample configurations, and refining the interface for easier experimentation.",
    features: [
      "Interactive grid and pattern setup",
      "Rule-based cell evolution simulation",
      "Performance optimization for large grids",
      "Visual feedback for emerging behaviors",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Simulation"],
    images: [],
  },
  {
    slug: "online-canvas",
    title: "🖌️ Online Canvas",
    desc:
      "A collaborative drawing tool for remote brainstorming and creative sessions. Supports real-time sketching and shared visual collaboration.",
    longDesc:
      "An online canvas tool built for collaborative creativity. The development reflected engineering design principles: identifying collaboration challenges, researching real-time drawing tools, brainstorming shared interaction models, prototyping the canvas interface, conducting user tests, and refining the experience to support intuitive multi-user sketching.",
    features: [
      "Real-time collaborative drawing",
      "Layer and brush tool support",
      "Session persistence and sharing",
      "User-tested interaction design",
    ],
    tech: ["WebSockets", "Canvas API", "React", "Real-time Collaboration"],
    images: [],
  },
];