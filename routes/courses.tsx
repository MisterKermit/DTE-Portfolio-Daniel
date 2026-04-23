export default function Courses() {
    const courses = [
      {
        title: "📘 CS 1331 - Intro to Object-Oriented Programming",
        desc:
          "Covers Java fundamentals, class design, inheritance, and polymorphism. Introduced algorithmic thinking and structured debugging practices.",
      },
      {
        title: "💡 ECE 2020 - Digital System Design",
        desc:
          "Focused on logic gates, combinational and sequential circuit design. Used simulation tools to build and test digital circuits.",
      },
      {
        title: "🤖 CS 3630 - Intro to Robotics and Perception",
        desc:
          "Explored sensing, localization, and motion planning. Built ROS-based simulations and implemented Kalman filters for robot tracking.",
      },
      {
        title: "🧠 PSYC 2210 - Cognitive Psychology",
        desc:
          "Studied how humans process information, focusing on perception, attention, and learning. Applied findings to improve human-computer interaction design.",
      },
    ];
  
    return (
      <section>
        <h1 class="text-3xl mb-6 text-green-400">Prior Courses 📚</h1>
        <div class="grid gap-6">
          {courses.map((c, i) => (
            <details
              key={i}
              class="group border-2 border-green-800 rounded-xl p-6 bg-black/70 shadow-[0_0_15px_#ec4899] hover:scale-105 transition-transform"
            >
              <summary class="cursor-pointer text-2xl text-green-400 flex items-center justify-between">
                {c.title}
                <span class="transition-transform group-open:rotate-90">▶</span>
              </summary>
              <p class="mt-3 text-lg text-green-200 bg-green-900/30 rounded-lg p-3 border border-green-700 shadow-inner">
                {c.desc}
              </p>
            </details>
          ))}
        </div>
      </section>
    );
  }
  