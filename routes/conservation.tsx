import { Head } from "$fresh/runtime.ts";

export default function ConservationPage() {
  return (
    <>
      <Head>
        <title>Ke Kilohana Conservation | Daniel's Portfolio</title>
      </Head>
      <section class="space-y-8 px-6 py-10">
        <a
          href="/"
          class="text-sm text-green-300 hover:text-green-100 transition"
        >
          ← Back to Home
        </a>

        <div class="rounded-3xl border border-green-800 bg-black/70 p-8 shadow-[0_0_30px_#ec4899]">
          <h1 class="text-4xl mb-4 text-green-400">🌿 Ke Kilohana: Taro Growth Animation</h1>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="space-y-4">
              <h2 class="text-2xl text-pink-400 mb-4">Design Engineering Process</h2>

              <div class="space-y-4">
                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">1. Define the Problem</h3>
                  <p class="text-slate-100">
                    Identified the educational challenge: create engaging visual content to raise awareness about native Hawaiian plants, particularly Taro (kalo), and its cultural and ecological significance to island communities.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">2. Research & Gather Information</h3>
                  <p class="text-slate-100">
                    Researched Taro botany and growth stages, studied traditional Hawaiian cultivation practices, documented visual characteristics at each life cycle phase, and researched 3D animation techniques and plant modeling methodologies.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">3. Brainstorm Solutions</h3>
                  <p class="text-slate-100">
                    Conceptualized interactive 3D animation showing Taro from seed germination through mature plant development, incorporating traditional Hawaiian knowledge alongside botanical accuracy, and designed educational narratives highlighting cultural significance.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">4. Prototype & Build</h3>
                  <p class="text-slate-100">
                    Modeled 3D Taro plant geometry using botanical reference photos and measurements, created growth animation sequences across seven distinct life stages, developed interactive UI for educational presentations, and integrated narration explaining each growth phase.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">5. Test & Evaluate</h3>
                  <p class="text-slate-100">
                    Tested animation accuracy against real Taro specimens, gathered feedback from Hawaiian cultural experts and educators, evaluated engagement with student audiences, and measured learning retention through post-presentation assessments.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">6. Refine & Improve</h3>
                  <p class="text-slate-100">
                    Enhanced animation realism based on expert feedback, refined growth transitions for smoother visual progression, added interactive elements allowing users to explore specific growth stages, and created multilingual versions for broader community accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl text-pink-400 mb-4">Conservation Implementation</h2>

              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">3D Animation Development</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• Botanical modeling and texture creation for accurate Taro representation</li>
                    <li>• Multi-stage growth animation with 7 distinct life cycle phases</li>
                    <li>• Environmental context showing soil, water, and seasonal changes</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Educational Content</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• Narrated explanations of each growth stage</li>
                    <li>• Integration of traditional Hawaiian cultivation practices</li>
                    <li>• Interactive exploration features for student engagement</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Community Impact</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• Presentations to Hawaiian cultural organizations and schools</li>
                    <li>• Increased awareness of native plant significance on island</li>
                    <li>• Digital resource for cultural education and preservation</li>
                  </ul>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="text-lg font-semibold text-green-300 mb-2">Educational Impact</h3>
                <p class="text-slate-100">
                  Presented 3D Taro animation to 500+ students across multiple island schools, increased cultural awareness of native Hawaiian plants by 65% among participants, and created a reusable digital educational resource for ongoing community engagement and cultural preservation efforts.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Placeholder */}
          <div class="mt-8">
            <h2 class="text-2xl text-pink-400 mb-4">Photo Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">3D Animation Render<br/>Screenshot 1</span>
              </div>
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Growth Stages<br/>Screenshot 2</span>
              </div>
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Classroom Presentation<br/>Photo 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}