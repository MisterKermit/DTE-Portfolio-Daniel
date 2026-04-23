import { Head } from "$fresh/runtime.ts";

export default function RoboticsPage() {
  return (
    <>
      <Head>
        <title>FTC/FRC Robotics | Daniel's Portfolio</title>
      </Head>
      <section class="space-y-8 px-6 py-10">
        <a
          href="/"
          class="text-sm text-green-300 hover:text-green-100 transition"
        >
          ← Back to Home
        </a>

        <div class="rounded-3xl border border-green-800 bg-black/70 p-8 shadow-[0_0_30px_#ec4899]">
          <h1 class="text-4xl mb-4 text-green-400">🤖 FTC/FRC Robotics</h1>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="space-y-4">
              <h2 class="text-2xl text-pink-400 mb-4">Design Engineering Process</h2>

              <div class="space-y-4">
                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">1. Define the Problem</h3>
                  <p class="text-slate-100">
                    Identified the competitive robotics challenge: build robots that can autonomously and manually complete complex game objectives within strict time limits and rules.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">2. Research & Gather Information</h3>
                  <p class="text-slate-100">
                    Studied game manuals, analyzed successful robot designs from previous seasons, researched mechanical components, sensors, and control systems available for FTC and FRC competitions.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">3. Brainstorm Solutions</h3>
                  <p class="text-slate-100">
                    Generated multiple robot configurations including different drive trains (tank, mecanum, swerve), manipulator designs, and autonomous programming strategies for various game challenges.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">4. Prototype & Build</h3>
                  <p class="text-slate-100">
                    Constructed initial robot prototypes using CAD software for design visualization, then fabricated physical models with 3D printed and machined components, motors, and sensors.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">5. Test & Evaluate</h3>
                  <p class="text-slate-100">
                    Conducted iterative testing on practice fields, measuring performance metrics like speed, accuracy, reliability, and scoring efficiency during both autonomous and driver-controlled periods.
                  </p>
                </div>

                <div class="border-l-4 border-green-400 pl-4">
                  <h3 class="text-lg font-semibold text-green-300">6. Refine & Improve</h3>
                  <p class="text-slate-100">
                    Analyzed test data to identify weaknesses, then iterated on designs with improved mechanisms, better sensor integration, optimized programming, and enhanced driver training.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl text-pink-400 mb-4">Technical Implementation</h2>

              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Mechanical Design</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• CAD modeling for drivetrain and manipulator systems</li>
                    <li>• Precision fabrication using CNC and 3D printing</li>
                    <li>• Weight optimization and structural integrity analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">Control Systems</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• Sensor integration (encoders, IMU, vision systems)</li>
                    <li>• PID control algorithms for precise movement</li>
                    <li>• Real-time telemetry and diagnostics</li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-green-300 mb-2">FRC Programming</h3>
                  <ul class="text-slate-100 space-y-1">
                    <li>• <strong>Limelight AprilTag Vision Tracking:</strong> Integrated Limelight camera system with AprilTag detection for autonomous alignment and precise targeting of game elements</li>
                    <li>• <strong>Swerve Drive with YAGSL:</strong> Implemented advanced swerve drive kinematics using the Yet Another Gyro Swerve Library (YAGSL) for omni-directional robot control and rotation</li>
                    <li>• <strong>Command-Based Architecture:</strong> Built robot software using WPILib's command-based paradigm, organizing subsystems, commands, and trigger-based autonomous routines</li>
                    <li>• <strong>Autonomous Sequences:</strong> Programmed complex autonomous paths using PathPlanner for smooth trajectories and integrated vision-based feedback</li>
                  </ul>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="text-lg font-semibold text-green-300 mb-2">Competition Results</h3>
                <p class="text-slate-100">
                  Successfully competed in multiple FTC and FRC regional tournaments, achieving consistent top rankings through systematic design iteration and team collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Placeholder */}
          <div class="mt-8">
            <h2 class="text-2xl text-pink-400 mb-4">Photo Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Robot Prototype<br/>Photo 1</span>
              </div>
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Competition Field<br/>Photo 2</span>
              </div>
              <div class="aspect-video bg-green-900/20 border-2 border-dashed border-green-600 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-center">Team Assembly<br/>Photo 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}