import {
  Code2,
  MessageSquare,
  Brain,
  ShieldCheck,
} from "lucide-react";

import { useLocation } from "react-router-dom";

function PerformanceCards() {
  const { state } = useLocation();

  const result = state || {};

  const performanceData = [
    {
      title: "Technical Skills",
      score: result.technical_score ?? 0,
      icon: Code2,
      color: "text-cyan-400",
      description:
        "Excellent understanding of frontend concepts.",
    },
    {
      title: "Communication",
      score: result.communication_score ?? 0,
      icon: MessageSquare,
      color: "text-green-400",
      description:
        "Clear explanation and confidence while answering.",
    },
    {
      title: "Problem Solving",
      score: result.problem_solving ?? 0,
      icon: Brain,
      color: "text-yellow-400",
      description:
        "Strong logical thinking and coding approach.",
    },
    {
      title: "Confidence",
      score: result.confidence_score ?? 0,
      icon: ShieldCheck,
      color: "text-purple-400",
      description:
        "Maintained confidence throughout the interview.",
    },
  ];

  return (
    <section className="relative mt-24">

      {/* Heading */}

      <div className="text-center mb-14">

        <span
          className="
            inline-flex
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-5
            py-2
            text-sm
            font-semibold
            text-cyan-300
            backdrop-blur-xl
          "
        >
          Performance Analysis
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Detailed Performance
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          AI analysed every important skill during your interview and
          generated this performance report.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                {performanceData.map((item) => {
          const Icon = item.icon;

          const performanceLabel =
            item.score >= 90
              ? "Excellent"
              : item.score >= 75
              ? "Good"
              : item.score >= 60
              ? "Average"
              : "Needs Improvement";

          return (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-slate-700/70
                bg-slate-900/60
                backdrop-blur-3xl
                p-7
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400/40
                hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-purple-500/10
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-slate-700
                      bg-slate-800/80
                    "
                  >
                    <Icon
                      className={item.color}
                      size={30}
                    />
                  </div>

                  <div className="text-right">
                    <h3
                      className={`text-5xl font-black ${item.color}`}
                    >
                      {item.score}%
                    </h3>

                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Score
                    </p>
                  </div>
                </div>

                <h4 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                {/* Progress */}

                <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Performance
                    </span>

                    <span className={`font-semibold ${item.color}`}>
                      {item.score}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        via-blue-500
                        to-purple-500
                        transition-all
                        duration-1000
                      "
                      style={{
                        width: `${item.score}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Section */}

                <div className="mt-8 flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-cyan-300
                    "
                  >
                    AI Verified
                  </span>

                  <span className="text-sm text-slate-500">
                    {performanceLabel}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PerformanceCards;