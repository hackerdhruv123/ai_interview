import {
  BookOpen,
  Code2,
  Brain,
  Trophy,
  ArrowRight,
} from "lucide-react";

import { useLocation } from "react-router-dom";

function Roadmap() {

  const { state } = useLocation();

  const result = state || {};

  const roadmap = result.roadmap ?? [
    {
      icon: BookOpen,
      title: "Revise Core Fundamentals",
      description:
        "Strengthen JavaScript, React, HTML, CSS and Computer Science fundamentals.",
    },
    {
      icon: Code2,
      title: "Practice DSA Daily",
      description:
        "Solve 2-3 LeetCode problems every day focusing on patterns and optimisation.",
    },
    {
      icon: Brain,
      title: "Mock Interviews",
      description:
        "Take AI mock interviews regularly to improve confidence and communication.",
    },
    {
      icon: Trophy,
      title: "Become Interview Ready",
      description:
        "Build projects, revise System Design and apply for top product-based companies.",
    },
  ];

  return (
    <section className="mt-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Your Learning Roadmap
        </h2>

        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Based on your interview performance, our AI recommends
          the following learning path.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {roadmap.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
              "
            >
              <div className="flex items-start gap-5">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                  "
                >
                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <ArrowRight
                      className="
                        text-cyan-400
                        transition-transform
                        group-hover:translate-x-2
                      "
                      size={20}
                    />

                  </div>

                  <p className="mt-4 text-slate-300 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Bottom CTA */}

      <div
        className="
          mt-12
          rounded-3xl
          border
          border-cyan-400/20
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-purple-500/10
          backdrop-blur-2xl
          p-10
          text-center
        "
      >
        <h3 className="text-3xl font-bold text-white">
          Keep Improving 🚀
        </h3>

        <p className="mt-4 text-slate-300 max-w-3xl mx-auto leading-8">
          Every interview brings you one step closer to your dream job.
          Keep practicing consistently, build real-world projects,
          improve your DSA skills and take AI mock interviews regularly.
        </p>

        <button
          className="
            mt-8
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Start Next Interview
        </button>
      </div>

    </section>
  );
}

export default Roadmap;