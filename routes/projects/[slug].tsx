import { Head } from "$fresh/runtime.ts";
import { projects } from "../projects_data.ts";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return (
      <section class="px-6 py-10">
        <h1 class="text-4xl text-red-400">Project not found</h1>
        <a
          href="/projects"
          class="mt-4 inline-block text-green-300 underline hover:text-green-100"
        >
          Back to Projects
        </a>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Projects</title>
      </Head>
      <section class="space-y-8 px-6 py-10">
        <a
          href="/projects"
          class="text-sm text-green-300 hover:text-green-100 transition"
        >
          ← Back to Projects
        </a>

        <div class="rounded-3xl border border-green-800 bg-black/70 p-8 shadow-[0_0_30px_#ec4899]">
          <h1 class="text-4xl mb-4 text-green-400">{project.title}</h1>
          <p class="text-lg text-slate-100 max-w-3xl">{project.longDesc}</p>

          <div class="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                class="bg-green-800 text-black px-3 py-1 rounded-full text-sm"
                key={t}
              >
                {t}
              </span>
            ))}
          </div>

          <div class="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 class="text-2xl mb-4 text-green-400">Details</h2>
              <ul class="list-disc list-inside space-y-3 text-slate-200">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 class="text-2xl mb-4 text-green-400">Gallery</h2>
              {project.images && project.images.length > 0 ? (
                <div class="space-y-4">
                  {project.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} screenshot`}
                      class="w-full rounded-3xl border border-green-800 object-cover"
                    />
                  ))}
                </div>
              ) : (
                <div class="rounded-3xl border border-green-800 bg-slate-900/80 p-6 text-slate-400">
                  Add screenshots, mockups, or demo images for this project
                  here.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}