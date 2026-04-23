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
  {
    slug: "transformer-shakespearean-text",
    title: "📝 Shakespearean Text Generator",
    desc:
      "A transformer-based large language model trained to generate authentic Shakespearean-style text, capturing the poetic rhythm and archaic language of the Bard.",
    longDesc:
      "A deep learning project implementing a transformer architecture to generate Shakespearean text. The model was trained on a comprehensive corpus of Shakespeare's works, utilizing attention mechanisms to understand context and generate coherent, period-appropriate language. The engineering design process involved data preprocessing, model architecture selection, training optimization, and evaluation of generated text quality.",
    features: [
      "Transformer architecture with multi-head attention",
      "Fine-tuned on Shakespeare corpus for stylistic accuracy",
      "Interactive text generation with customizable prompts",
      "Evaluation metrics for linguistic authenticity",
    ],
    tech: ["Python", "PyTorch", "Transformers", "NLP"],
    images: [],
  },
  {
    slug: "cnn-traffic-detection",
    title: "🚗 Traffic Detection CNN",
    desc:
      "A convolutional neural network designed to detect and classify cars and pedestrians in urban foot traffic scenarios for enhanced safety and traffic management.",
    longDesc:
      "A computer vision project using convolutional neural networks for real-time object detection in traffic environments. The model was trained on diverse datasets of urban scenes to accurately identify and classify vehicles and pedestrians. Following engineering design principles, the project involved dataset curation, model architecture design, training optimization, and performance evaluation in various lighting and weather conditions.",
    features: [
      "Real-time object detection and classification",
      "Robust performance across varying environmental conditions",
      "Integration with camera feeds for live monitoring",
      "High accuracy in pedestrian and vehicle identification",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    images: [],
  },
  {
    slug: "cayden-ai",
    title: "🤖 Cayden.ai",
    desc:
      "A Discord chatbot trained to imitate a friend's personality and communication style. Uses machine learning to learn from conversation patterns and generate contextually appropriate responses.",
    longDesc:
      "A Discord bot project that captures and replicates a friend's unique personality and speaking patterns through machine learning. The engineering design process involved analyzing conversation data, training a language model on interaction patterns, developing a Discord integration layer, and iteratively refining responses to improve authenticity and humor while maintaining ethical guidelines.",
    features: [
      "Natural language processing for personality emulation",
      "Discord API integration for seamless chat participation",
      "Machine learning model trained on conversation patterns",
      "Contextual response generation with custom personality traits",
      "Administrative controls for moderation and customization",
    ],
    tech: ["Python", "Discord.py", "Machine Learning", "NLP"],
    images: [],
  },
];