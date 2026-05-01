import { Head } from "$fresh/runtime.ts";
import { projects } from "../projects_data.ts";
import ImageModal from "../../islands/ImageModal.tsx";
import VideoModal from "../../islands/VideoModal.tsx";

export default function ProjectPage(props: any) {
  const slug = props.params.slug;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div class="p-8 text-red-400">Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>

      <section class="space-y-8 px-6 py-10">
        <a href="/" class="text-sm text-green-300 hover:text-green-100">
          ← Back to Home
        </a>

        <h1 class="text-4xl text-green-400">{project.title}</h1>
        <p class="text-lg text-slate-100">{project.longDesc}</p>

        {/* MEDIA GALLERY */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.media?.map((item, i) => {
            if (item.type === "image") {
              return (
                <ImageModal
                  key={i}
                  src={item.src}
                  alt={item.alt ?? ""}
                />
              );
            }

            if (item.type === "video") {
              return (
                <VideoModal
                  key={i}
                  src={item.src}
                  poster={item.poster}
                />
              );
            }

            return null;
          })}
        </div>

        {/* FEATURES */}
        <div>
          <h2 class="text-2xl text-pink-400 mb-2">Features</h2>
          <ul class="text-slate-100 list-disc ml-6">
            {project.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {/* TECH */}
        <div class="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              class="bg-green-800 text-black px-2 py-1 rounded-md text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
