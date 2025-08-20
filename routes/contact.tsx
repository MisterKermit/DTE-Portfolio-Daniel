/** @jsx h */
import { h } from "preact";

export default function Contact() {
  return (
    <section>
      <h1 class="text-3xl mb-4 text-pink-400">Contact 📬</h1>
      <p class="text-lg mb-4">
        Let’s connect! Reach out to me through any of the platforms below:
      </p>
      <ul class="space-y-2">
        <li>📧 Email: <a class="underline" href="mailto:daniel@example.com">daniel@example.com</a></li>
        <li>💼 LinkedIn: <a class="underline" href="#">linkedin.com/in/daniel</a></li>
        <li>🐙 GitHub: <a class="underline" href="#">github.com/daniel</a></li>
      </ul>
    </section>
  );
}
