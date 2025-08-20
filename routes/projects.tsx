export default function Projects() {
  const projects = [
    {
      title: "🎮 Pygame Launcher Game",
      desc: "A physics-based launcher game built with Pygame Zero. Features bullet mechanics, target collisions, a timer, and high score tracking.",
      tech: ["Python", "Pygame Zero"],
    },
    {
      title: "🧬 PGZero Infection Simulator",
      desc: "A simulation of infection spread with clumping behavior. Only directly touching cells can transmit infection, with dynamic grouping.",
      tech: ["Python", "Pygame Zero"],
    },
    {
      title: "🌐 Retro Portfolio",
      desc: "This very site! Built with Deno Fresh and Tailwind, styled with a sleek retro CRT aesthetic.",
      tech: ["Deno Fresh", "Tailwind CSS"],
    },
  ];

  return (
    <section>
      <h1 class="text-3xl mb-6 text-pink-400">Projects 🚀</h1>
      <div class="grid gap-6">
        {projects.map((p) => (
          <div class="border-2 border-pink-400 rounded-xl p-6 bg-black/70 shadow-[0_0_15px_#ec4899] hover:scale-105 transition-transform">
            <h2 class="text-2xl mb-2 text-green-400">{p.title}</h2>
            <p class="text-lg mb-3">{p.desc}</p>
            <div class="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span class="bg-pink-400 text-black px-2 py-1 rounded-md text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
