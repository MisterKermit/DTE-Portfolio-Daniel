import { projects } from "./projects_data.ts";

export default function Projects() {
  return (
    <section>
      <h1 class="text-3xl mb-6 text-green-400">Projects 🚀</h1>

      <div class="grid gap-6">
        {projects.map((p) => (
          <a
            href={`/projects/${p.slug}`}
            key={p.slug}
            class="block border-2 border-green-800 rounded-xl p-6 bg-black/70 shadow-[0_0_15px_#ec4899] hover:scale-105 transition-transform"
          >
            {/* Title */}
            <h2 class="text-2xl mb-2 text-green-400">{p.title}</h2>

            {/* Description */}
            <p class="text-lg mb-3">{p.desc}</p>

            {/* Tech Stack */}
            <div class="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  class="bg-green-800 text-black px-2 py-1 rounded-md text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
