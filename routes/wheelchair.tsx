import { Head } from "$fresh/runtime.ts";

export default function WheelchairPage() {
  return (
    <>
      <Head>
        <title>Motorized Wheelchair Trainer | Daniel's Portfolio</title>
      </Head>
      <section class="space-y-8 px-6 py-10">
        <a
          href="/"
          class="text-sm text-green-300 hover:text-green-100 transition"
        >
          ← Back to Home
        </a>

        <div class="rounded-3xl border border-green-800 bg-black/70 p-8 shadow-[0_0_30px_#ec4899]">
          <h1 class="text-4xl mb-4 text-green-400">🦽 Motorized Wheelchair Trainer</h1>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="space-y-4">
              <h2 class="text-2xl text-pink-400 mb-4">Design Engineering Process</h2>

              <div class="space-y-4">
                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">1. Define the Problem</h3>
                  <p class="text-slate-100">
                    Identified the need for safe, accessible training tools for individuals learning to operate motorized wheelchairs, addressing safety concerns and skill development challenges.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">2. Research & Gather Information</h3>
                  <p class="text-slate-100">
                    Studied wheelchair mechanics, accessibility guidelines, existing training simulators, user experience research with wheelchair users, and safety standards for assistive technology.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">3. Brainstorm Solutions</h3>
                  <p class="text-slate-100">
                    Developed concepts for virtual reality training, physical simulation platforms, adaptive control interfaces, and progressive difficulty training scenarios tailored to different user abilities.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">4. Prototype & Build</h3>
                  <p class="text-slate-100">
                    Created initial prototypes combining physical wheelchair components with electronic controls, haptic feedback systems, and software interfaces for realistic simulation environments.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">5. Test & Evaluate</h3>
                  <p class="text-slate-100">
                    Conducted user testing with wheelchair users of varying experience levels, measuring learning outcomes, safety metrics, user satisfaction, and system reliability through controlled training sessions.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">6. Refine & Improve</h3>
                  <p class="text-slate-100">
                    Iterated on design based on user feedback, improving interface accessibility, adding adaptive difficulty scaling, enhancing safety features, and optimizing the learning experience.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl text-pink-400 mb-4">Technical Implementation</h2>

              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Hardware Architecture</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• <strong>Arduino Microcontroller Integration:</strong> Programmed multiple Arduino boards to manage real-time sensor input and wheelchair motor control</li>
                    <li>• <strong>Proximity Sensor Array:</strong> Deployed ultrasonic and infrared proximity sensors around the wheelchair perimeter for 360° obstacle detection</li>
                    <li>• <strong>Haptic Feedback System:</strong> Integrated vibration motors triggered by proximity alerts to warn patients of nearby obstacles without relying solely on visual cues</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Patient Navigation & Control</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• <strong>Adaptive Motor Control:</strong> Implemented Arduino-based speed limiting and directional controls calibrated to individual patient capabilities</li>
                    <li>• <strong>Assisted Navigation:</strong> Developed semi-autonomous obstacle avoidance that gently corrects trajectory when sensors detect hazards, empowering patient confidence</li>
                    <li>• <strong>Real-time Monitoring Dashboard:</strong> Created wireless telemetry system to display navigation data, proximity alerts, and performance metrics for caregivers and therapists</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Safety Features</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• Emergency stop systems and collision prevention</li>
                    <li>• Speed limiting and stability controls</li>
                    <li>• User monitoring and assistance alerts</li>
                  </ul>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="text-lg font-semibold text-green-300 mb-2">Impact & Outcomes</h3>
                <p class="text-slate-100">
                  Successfully developed a training system that improved user confidence and safety in motorized wheelchair operation, with measurable improvements in navigation skills and reduced anxiety during real-world use.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Placeholder */}
          <div class="mt-8">
            <h2 class="text-2xl text-pink-400 mb-4">Photo Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Training Interface<br/>Photo 1</span>
              </div>
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Wheelchair Setup<br/>Photo 2</span>
              </div>
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">User Testing<br/>Photo 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}