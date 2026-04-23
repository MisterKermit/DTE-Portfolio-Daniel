export default function babyCar() {
    const project = {
      title: "Assistive Technology Club",
      cover: "/images/launcher-cover.png",
      summary:
        "A physics-based launcher game where players fire projectiles at moving targets while racing against the clock. The project explores smooth physics simulation, responsive player input, and consistent collision accuracy.",
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
          desc: "Sketched mechanics inspired by Angry Birds, focusing on precision-based gameplay and simple but engaging physics interactions.",
        },
        {
          title: "Implementation",
          desc: "Used Pygame Zero sprites, lists, and timers to manage bullets and targets. Implemented real-time collision detection, target resets, and score tracking.",
        },
        {
          title: "Testing & Polish",
          desc: "Refined physics behavior for consistent arcs and velocities, added time-based scoring, background music, and persistent high-score saving for replayability.",
        },
      ],
    };
  
    return (
      <section class="max-w-4xl mx-auto space-y-8">
        {/* Title + Summary */}
        <div class="text-center">
          <h1 class="text-4xl mb-4 text-green-400">{project.title}</h1>
          <p class="text-lg text-green-200">{project.summary}</p>
        </div>
  
        {/* Cover Image */}
        <img
          src={project.cover}
          alt="Project cover"
          class="w-full rounded-xl border-2 border-green-800 shadow-[0_0_15px_#ec4899] bg-black/70"
        />
  
        {/* Tidbits */}
        <div class="grid sm:grid-cols-3 gap-4 text-center">
          {project.tidbits.map((t) => (
            <div class="border-2 border-green-800 rounded-xl p-4 bg-black/70 shadow-[0_0_8px_#ec4899]">
              <h3 class="text-green-400 text-sm mb-1">{t.label}</h3>
              <p class="text-green-200 text-base">{t.value}</p>
            </div>
          ))}
        </div>
  
        {/* Gallery */}
        <div>
          <h2 class="text-2xl mb-4 text-green-400">Gallery 🖼️</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            {project.gallery.map((img) => (
              <img
                src={img}
                alt="Project screenshot"
                class="rounded-xl border border-green-800 shadow-[0_0_10px_#ec4899] hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
  
        {/* Design Process Steps */}
        <div>
          <h2 class="text-2xl mb-4 text-green-400">Design Process ⚙️</h2>
          <ol class="space-y-6">
            {project.steps.map((s, i) => (
              <li
                key={i}
                class="border-l-4 border-green-500 pl-4 hover:translate-x-1 transition-transform"
              >
                <h3 class="text-xl text-green-300 mb-1">
                  Step {i + 1}: {s.title}
                </h3>
                <p class="text-green-200">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
  