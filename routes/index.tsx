/** @jsx h */
import { h } from "preact";
import ProjectCarousel from "../islands/ProjectCarousel.tsx";

const projects = [
    {
        title: "Sorting Visualizer",
        description: "An interactive tool to visualize sorting algorithms.",
        image: "/projects/sorting.png",
        link: "https://github.com/MisterKermit/sorting-visualizer",
    },
    {
        title: "Chat App",
        description: "A real-time chat application using WebSockets.",
        image: "/projects/chat.png",
        link: "https://github.com/MisterKermit/chat-app",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with Deno Fresh and Tailwind CSS.",
        image: "/projects/portfolio.png",
        link: "https://github.com/MisterKermit/portfolio",
    },
];

export default function Home() {
    return (
        <div class="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center">
            <div class="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-md w-full animate-fade-in">
                <div class="flex flex-col items-center">
                    <img
                        src="/logo.svg"
                        alt="Daniel's Logo"
                        class="w-20 h-20 mb-4 rounded-full border-2 border-cyan-500 shadow animate-bounce"
                    />
                    <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center animate-slide-down">
                        Daniel's Portfolio
                    </h1>
                    <p class="text-gray-600 text-center mb-6 animate-fade-in">
                        Computer Science Student &amp; Developer
                    </p>
                    <div class="flex gap-4 mb-8">
                        <a
                            href="https://github.com/MisterKermit"
                            target="_blank"
                            class="text-cyan-600 hover:text-cyan-800 transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:dlin26@punahou.edu"
                            class="text-cyan-600 hover:text-cyan-800 transition"
                        >
                            Email
                        </a>
                        <a
                            href="/resume.pdf"
                            class="text-cyan-600 hover:text-cyan-800 transition"
                        >
                            Resume
                        </a>
                    </div>
                    {/* Carousel Island */}
                    <ProjectCarousel projects={projects} />
                </div>
            </div>
            {/* Tailwind custom animations */}
            <style>
                {`
                .animate-fade-in {
                    animation: fadeIn 1s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slide-down {
                    animation: slideDown 0.7s cubic-bezier(.17,.67,.83,.67);
                }
                @keyframes slideDown {
                    from { transform: translateY(-30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                `}
            </style>
        </div>
    );
}