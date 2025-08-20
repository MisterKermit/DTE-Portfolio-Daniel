import { useState } from "preact/hooks";

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
    const [current, setCurrent] = useState(0);

    function prevProject() {
        setCurrent((current - 1 + projects.length) % projects.length);
    }

    function nextProject() {
        setCurrent((current + 1) % projects.length);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-md w-full animate-fade-in">
                <div className="flex flex-col items-center">
                    <img
                        src="/logo.svg"
                        alt="Daniel's Logo"
                        className="w-20 h-20 mb-4 rounded-full border-2 border-cyan-500 shadow animate-bounce"
                    />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center animate-slide-down">
                        Daniel's Portfolio
                    </h1>
                    <p className="text-gray-600 text-center mb-6 animate-fade-in">
                        Computer Science Student &amp; Developer
                    </p>
                    <div className="flex gap-4 mb-8">
                        <a
                            href="https://github.com/MisterKermit"
                            target="_blank"
                            className="text-cyan-600 hover:text-cyan-800 transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:dlin26@punahou.edu"
                            className="text-cyan-600 hover:text-cyan-800 transition"
                        >
                            Email
                        </a>
                        <a
                            href="/resume.pdf"
                            className="text-cyan-600 hover:text-cyan-800 transition"
                        >
                            Resume
                        </a>
                    </div>
                    {/* Carousel */}
                    <div className="w-full flex flex-col items-center">
                        <div className="relative w-full">
                            <div className="flex flex-col items-center transition-all duration-500 ease-in-out animate-fade-in">
                                <img
                                    src={projects[current].image}
                                    alt={projects[current].title}
                                    className="w-40 h-28 object-cover rounded-lg shadow mb-4"
                                />
                                <h2 className="text-xl font-semibold text-gray-700 mb-1">
                                    {projects[current].title}
                                </h2>
                                <p className="text-gray-500 text-center mb-2">
                                    {projects[current].description}
                                </p>
                                <a
                                    href={projects[current].link}
                                    target="_blank"
                                    className="text-cyan-600 hover:text-cyan-800 transition"
                                >
                                    View Project
                                </a>
                            </div>
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                                <button
                                    onClick={prevProject}
                                    className="bg-cyan-500 text-white rounded-full p-2 shadow hover:bg-cyan-700 transition"
                                    aria-label="Previous Project"
                                >
                                    &#8592;
                                </button>
                            </div>
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <button
                                    onClick={nextProject}
                                    className="bg-cyan-500 text-white rounded-full p-2 shadow hover:bg-cyan-700 transition"
                                    aria-label="Next Project"
                                >
                                    &#8594;
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            {projects.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${
                                        idx === current
                                            ? "bg-cyan-600"
                                            : "bg-gray-300"
                                    } transition`}
                                />
                            ))}
                        </div>
                    </div>
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