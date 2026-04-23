export default function Layout({ Component }: { Component: any }) {
  return (
    <div class="min-h-screen bg-black text-green-400 font-mono crt flicker">
      {/* Navbar */}
      <nav class="flex justify-center gap-8 py-6 text-xl">
        <a href="/" class="hover:text-pink-400 transition-colors">About Me</a>
        <a href="/courses" class="hover:text-pink-400 transition-colors">Courses</a>
        <a href="/blog" class="hover:text-pink-400 transition-colors">Blog</a>
        <a href="/contact" class="hover:text-pink-400 transition-colors">Contact</a>
        <a href="/projects" class="hover:text-pink-400 transition-colors">Projects</a>
        <a href="/robotics" class="hover:text-pink-400 transition-colors">Robotics</a>
        <a href="/babyCar" class="hover:text-pink-400 transition-colors">ATC</a>
        <a href="/planterSim" class="hover:text-pink-400 transition-colors">Ke Kilohana</a>
      </nav>

      {/* Content */}
      <main class="max-w-3xl mx-auto p-6">
        <Component />
      </main>

      {/* Footer */}
      <footer class="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} Daniel Lin
      </footer>
    </div>
  );
}
