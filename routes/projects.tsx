/** @jsx h */
import { h } from "preact";

export default function Projects() {
  return (
    <section>
      <h1 class="text-3xl mb-4 text-pink-400">Projects 🚀</h1>
      <ul class="list-disc pl-6 space-y-2">
        <li>🎮 Pygame Launcher Game – Bullet physics + high score tracker</li>
        <li>🧬 PGZero Infection Simulator – clumping + infection spread</li>
        <li>🌐 Retro Portfolio – built with Deno Fresh</li>
      </ul>
    </section>
  );
}
