/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface Props {
    projects: Project[];
}

export default function ProjectCarousel({ projects }: Props) {
    const [current, setCurrent] = useState(0);

    function prevProject() {
        setCurrent((current - 1 + projects.length) % projects.length);
    }

    function nextProject() {
        setCurrent((current + 1) % projects.length);
    }

    return (
        <div class="w-full flex flex-col items-center">
            <div class="relative w-full">
                <div class="flex flex-col items-center transition-all duration-500 ease-in-out animate-fade-in">
                    <img
                        src={projects[current].image}
                        alt={projects[current].title}
                        class="w-40 h-28 object-cover rounded-lg shadow mb-4"
                    />
                    <h2 class="text-xl font-semibold text-gray-700 mb-1">
                        {projects[current].title}
                    </h2>
                    <p class="text-gray-500 text-center mb-2">
                        {projects[current].description}
                    </p>
                    <a
                        href={projects[current].link}
                        target="_blank"
                        class="text-cyan-600 hover:text-cyan-800 transition"
                    >
                        View Project
                    </a>
                </div>
                <div class="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <button
                        onClick={prevProject}
                        class="bg-cyan-500 text-white rounded-full p-2 shadow hover:bg-cyan-700 transition"
                        aria-label="Previous Project"
                    >
                        &#8592;
                    </button>
                </div>
                <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button
                        onClick={nextProject}
                        class="bg-cyan-500 text-white rounded-full p-2 shadow hover:bg-cyan-700 transition"
                        aria-label="Next Project"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
            <div class="flex gap-2 mt-4">
                {projects.map((_, idx) => (
                    <span
                        key={idx}
                        class={`w-3 h-3 rounded-full ${
                            idx === current
                                ? "bg-cyan-600"
                                : "bg-gray-300"
                        } transition`}
                    />
                ))}
            </div>
        </div>
    );
}