import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

import { useLocation } from "react-router-dom";

function ScoreChart() {
  const { state } = useLocation();

  const result = state || {};

  const data = [
    {
      subject: "Technical",
      score: result.technical_score ?? 0,
    },
    {
      subject: "Communication",
      score: result.communication_score ?? 0,
    },
    {
      subject: "Problem Solving",
      score: result.problem_solving ?? 0,
    },
    {
      subject: "Confidence",
      score: result.confidence_score ?? 0,
    },
    {
      subject: "Behaviour",
      score: result.behaviour_score ?? result.communication_score ?? 0,
    },
    {
      subject: "Creativity",
      score: result.creativity_score ?? result.problem_solving ?? 0,
    },
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">
          Performance Analytics
        </h2>

        <p className="mt-3 text-slate-300">
          Visual breakdown of your interview performance.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-8
        "
      >
        <div className="h-[450px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid stroke="#334155" />

              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#e2e8f0", fontSize: 14 }}
              />

              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "#94a3b8" }}
              />

              <Radar
                name="Score"
                dataKey="score"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.45}
              />

              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default ScoreChart;