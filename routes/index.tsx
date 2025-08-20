export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <img
                        src="/logo.svg"
                        alt="Daniel's Logo"
                        className="w-20 h-20 mb-4 rounded-full border-2 border-cyan-500 shadow"
                    />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Daniel's Portfolio
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Computer Science Student &amp; Developer
                    </p>
                    <div className="flex gap-4">
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
                </div>
            </div>
        </div>
    );
}