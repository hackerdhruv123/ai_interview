import { useEffect, useMemo, useState } from "react";
import {
  Trophy,
  TrendingUp,
  Target,
  Brain,
  Award,
  Loader2,
  BarChart3,
} from "lucide-react";
import background from "../assets/images/background.jpg";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import api from "../api/axios";
function Analytics() {

  // =============================
  // States
  // =============================

  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] = useState(true);

  // =============================
  // Fetch Analytics
  // =============================

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {

    try {

      const res = await api.get("/interview/analytics");

      if (res.data.success) {
        setAnalytics(res.data.analytics);
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  // =============================
  // Chart Data
  // =============================

  const chartData = useMemo(() => {

    if (!analytics) return [];

    return analytics.scoreTrend;

  }, [analytics]);

  // =============================
  // Loading Screen
  // =============================

  if (loading) {

    return (

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >

        <div className="absolute -top-52 -left-52 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />

        <div className="absolute top-20 -right-40 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[170px]" />

        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-12 backdrop-blur-3xl">

          <Loader2
            className="mx-auto h-14 w-14 animate-spin text-cyan-400"
          />

          <p className="mt-6 text-center text-lg text-slate-300">

            Loading Analytics...

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    style={{
            backgroundImage: `url(${background})`,
          }}>

      {/* Background Glow */}

      <div className="absolute -top-52 -left-52 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="absolute top-24 -right-44 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[170px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10"></div>
              {/* ========================================= */}
        {/* Hero Section */}
        {/* ========================================= */}

        <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-3xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">

                <BarChart3 className="mr-2 h-4 w-4" />

                Performance Analytics

              </div>

              <h1 className="text-5xl font-black text-white">

                Interview Performance Dashboard

              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-400">

                Monitor your interview journey, evaluate your strengths,
                identify improvement areas and track your progress over time.

              </p>

            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 px-8 py-6 text-center">

              <p className="text-sm uppercase tracking-widest text-cyan-300">

                Overall Average

              </p>

              <h2 className="mt-3 text-6xl font-black text-white">

                {analytics?.averageScore || 0}%

              </h2>

            </div>

          </div>

          {/* ========================================= */}
          {/* Statistics Cards */}
          {/* ========================================= */}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* Total Interviews */}

            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-3xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">

                    Total Interviews

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {analytics?.totalInterviews || 0}

                  </h2>

                </div>

                <div className="rounded-2xl bg-cyan-500/20 p-4">

                  <BarChart3
                    size={30}
                    className="text-cyan-300"
                  />

                </div>

              </div>

            </div>

            {/* Highest Score */}

            <div className="rounded-3xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur-3xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">

                    Highest Score

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {analytics?.highestScore || 0}%

                  </h2>

                </div>

                <div className="rounded-2xl bg-emerald-500/20 p-4">

                  <Trophy
                    size={30}
                    className="text-emerald-300"
                  />

                </div>

              </div>

            </div>

            {/* Average Score */}

            <div className="rounded-3xl border border-purple-400/20 bg-white/5 p-6 backdrop-blur-3xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">

                    Average Score

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {analytics?.averageScore || 0}%

                  </h2>

                </div>

                <div className="rounded-2xl bg-purple-500/20 p-4">

                  <TrendingUp
                    size={30}
                    className="text-purple-300"
                  />

                </div>

              </div>

            </div>

            {/* Best Role */}

            <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-3xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">

                    Best Role

                  </p>

                  <h2 className="mt-3 text-xl font-bold text-white">

                    {analytics?.bestRole || "N/A"}

                  </h2>

                </div>

                <div className="rounded-2xl bg-yellow-500/20 p-4">

                  <Award
                    size={30}
                    className="text-yellow-300"
                  />

                </div>

              </div>

            </div>

          </div>
                  {/* ========================================= */}
        {/* Score Trend Chart */}
        {/* ========================================= */}

        <div className="mt-10">

          <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black text-white">

                  Score Trend

                </h2>

                <p className="mt-2 text-slate-400">

                  Track your interview performance over time.

                </p>

              </div>

              <div className="rounded-2xl bg-cyan-500/20 p-4">

                <TrendingUp
                  size={30}
                  className="text-cyan-300"
                />

              </div>

            </div>

            <div className="h-[420px]">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 10,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="4 4"
                    stroke="#334155"
                  />

                  <XAxis
                    dataKey="date"
                    stroke="#94A3B8"
                    tick={{ fill: "#CBD5E1" }}
                  />

                  <YAxis
                    domain={[0, 100]}
                    stroke="#94A3B8"
                    tick={{ fill: "#CBD5E1" }}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      border: "1px solid #22D3EE",
                      borderRadius: "16px",
                      color: "#fff",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#22D3EE"
                    strokeWidth={4}
                    dot={{
                      r: 6,
                      fill: "#22D3EE",
                    }}
                    activeDot={{
                      r: 9,
                    }}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>
                {/* ========================================= */}
        {/* Skill Analysis */}
        {/* ========================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Technical & Communication */}

          <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl">

            <div className="mb-8 flex items-center gap-3">

              <Brain className="text-cyan-300" size={30} />

              <h2 className="text-3xl font-black text-white">

                Skill Analysis

              </h2>

            </div>

            {/* Technical */}

            <div className="mb-6">

              <div className="mb-2 flex justify-between">

                <span className="font-medium text-slate-300">

                  Technical Skills

                </span>

                <span className="font-bold text-cyan-300">

                  {analytics?.technicalAverage || 0}%

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                  style={{
                    width: `${analytics?.technicalAverage || 0}%`,
                  }}
                />

              </div>

            </div>

            {/* Communication */}

            <div className="mb-6">

              <div className="mb-2 flex justify-between">

                <span className="font-medium text-slate-300">

                  Communication

                </span>

                <span className="font-bold text-green-300">

                  {analytics?.communicationAverage || 0}%

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className="h-full rounded-full bg-green-400 transition-all duration-700"
                  style={{
                    width: `${analytics?.communicationAverage || 0}%`,
                  }}
                />

              </div>

            </div>

            {/* Problem Solving */}

            <div className="mb-6">

              <div className="mb-2 flex justify-between">

                <span className="font-medium text-slate-300">

                  Problem Solving

                </span>

                <span className="font-bold text-purple-300">

                  {analytics?.problemSolvingAverage || 0}%

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className="h-full rounded-full bg-purple-400 transition-all duration-700"
                  style={{
                    width: `${analytics?.problemSolvingAverage || 0}%`,
                  }}
                />

              </div>

            </div>

            {/* Confidence */}

            <div>

              <div className="mb-2 flex justify-between">

                <span className="font-medium text-slate-300">

                  Confidence

                </span>

                <span className="font-bold text-yellow-300">

                  {analytics?.confidenceAverage || 0}%

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                <div
                  className="h-full rounded-full bg-yellow-400 transition-all duration-700"
                  style={{
                    width: `${analytics?.confidenceAverage || 0}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* Best Performance */}

          <div className="rounded-[35px] border border-emerald-400/20 bg-white/5 p-8 backdrop-blur-3xl">

            <div className="mb-8 flex items-center gap-3">

              <Award className="text-emerald-300" size={30} />

              <h2 className="text-3xl font-black text-white">

                Best Performance

              </h2>

            </div>

            <div className="space-y-6">

              <div className="rounded-2xl bg-emerald-500/10 p-6">

                <p className="text-sm text-slate-400">

                  Best Role

                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">

                  {analytics?.bestRole || "N/A"}

                </h3>

              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-6">

                <p className="text-sm text-slate-400">

                  Highest Score

                </p>

                <h3 className="mt-2 text-4xl font-black text-cyan-300">

                  {analytics?.highestScore || 0}%

                </h3>

              </div>

              <div className="rounded-2xl bg-purple-500/10 p-6">

                <p className="text-sm text-slate-400">

                  Average Score

                </p>

                <h3 className="mt-2 text-4xl font-black text-purple-300">

                  {analytics?.averageScore || 0}%

                </h3>

              </div>

            </div>

          </div>

        </div>
                {/* ========================================= */}
        {/* AI Insights */}
        {/* ========================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Strongest Skill */}

          <div className="rounded-[35px] border border-emerald-400/20 bg-white/5 p-8 backdrop-blur-3xl">

            <div className="mb-6 flex items-center gap-3">

              <Award
                size={30}
                className="text-emerald-300"
              />

              <h2 className="text-3xl font-black text-white">

                Strongest Skill

              </h2>

            </div>

            <div className="rounded-3xl bg-emerald-500/10 p-8">

              <h3 className="text-4xl font-black text-white">

                {analytics?.strongestSkill?.name || "N/A"}

              </h3>

              <p className="mt-4 text-lg text-slate-300">

                Average Score

              </p>

              <h4 className="mt-2 text-6xl font-black text-emerald-300">

                {analytics?.strongestSkill?.score || 0}%

              </h4>

            </div>

          </div>

          {/* Weakest Skill */}

          <div className="rounded-[35px] border border-red-400/20 bg-white/5 p-8 backdrop-blur-3xl">

            <div className="mb-6 flex items-center gap-3">

              <Target
                size={30}
                className="text-red-300"
              />

              <h2 className="text-3xl font-black text-white">

                Needs Improvement

              </h2>

            </div>

            <div className="rounded-3xl bg-red-500/10 p-8">

              <h3 className="text-4xl font-black text-white">

                {analytics?.weakestSkill?.name || "N/A"}

              </h3>

              <p className="mt-4 text-lg text-slate-300">

                Average Score

              </p>

              <h4 className="mt-2 text-6xl font-black text-red-300">

                {analytics?.weakestSkill?.score || 0}%

              </h4>

            </div>

          </div>

        </div>

        {/* ========================================= */}
        {/* AI Recommendation */}
        {/* ========================================= */}

        <div className="mt-10 rounded-[35px] border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-3xl">

          <div className="flex items-center gap-4">

            <Brain
              size={35}
              className="text-cyan-300"
            />

            <div>

              <h2 className="text-3xl font-black text-white">

                AI Insights

              </h2>

              <p className="text-slate-400">

                Personalized recommendations based on your interview history.

              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-emerald-500/10 p-6">

              <h3 className="text-xl font-bold text-emerald-300">

                Keep Doing 👍

              </h3>

              <p className="mt-4 text-slate-300">

                Your strongest area is{" "}
                <span className="font-bold text-white">

                  {analytics?.strongestSkill?.name || "N/A"}

                </span>.

                Continue solving more interview questions to maintain this performance.

              </p>

            </div>

            <div className="rounded-3xl bg-red-500/10 p-6">

              <h3 className="text-xl font-bold text-red-300">

                Focus More 🚀

              </h3>

              <p className="mt-4 text-slate-300">

                Improve your{" "}
                <span className="font-bold text-white">

                  {analytics?.weakestSkill?.name || "N/A"}

                </span>{" "}

                by practising mock interviews regularly and reviewing your feedback after every session.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Analytics;