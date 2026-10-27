import {
  Mic,
  FileText,
  Bot,
  BarChart3,
  ArrowRight,
  Sparkles,
  PlayCircle,
  Trophy,
  BrainCircuit,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-8">

      {/* ================= HERO SECTION ================= */}

<section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-indigo-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

  {/* Background Glow */}

  <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

  <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

  <div className="relative z-10 grid gap-10 px-8 py-10 lg:grid-cols-2 lg:px-12 lg:py-14">

    {/* Left */}

    <div className="flex flex-col justify-center">

      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">

        <Sparkles className="text-yellow-300" size={18} />

        <span className="text-sm font-semibold tracking-wide text-blue-100">
          AI Powered Interview Platform
        </span>

      </div>

      <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">

        Prepare Like

        <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">

          For Your Dream

        </span>

      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">

        Practice AI-powered interviews, receive instant feedback,
        improve communication skills and become interview-ready
        with InterviewAce AI.

      </p>

      {/* Feature Pills */}

      <div className="mt-8 flex flex-wrap gap-3">

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
          🤖 AI Feedback
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
          📄 Resume Review
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
          🎯 Real Questions
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          to="/interview"
          className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
        >
          <PlayCircle size={20} />

          Start Interview

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </Link>

        <Link
          to="/resume-analyzer"
          className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900"
        >
          Upload Resume
        </Link>

      </div>

    </div>

    {/* Right */}

    <div className="flex items-center justify-center">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-400">
              AI Interview Score
            </p>

            <h2 className="mt-2 text-5xl font-black text-white">
              92%
            </h2>

          </div>

          <div className="rounded-2xl bg-blue-500/20 p-5">
            <BrainCircuit className="text-cyan-300" size={42} />
          </div>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

            <div>
              <p className="text-sm text-slate-400">
                Questions
              </p>

              <h3 className="text-xl font-bold text-white">
                500+
              </h3>
            </div>

            <Mic className="text-blue-300" />
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

            <div>
              <p className="text-sm text-slate-400">
                Success Rate
              </p>

              <h3 className="text-xl font-bold text-white">
                96%
              </h3>
            </div>

            <Trophy className="text-yellow-300" />
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

          </div>

          <p className="text-center text-sm text-slate-300">
            Train smarter with AI and boost your interview confidence.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* Quick Access */}

      <section>

        <h2 className="text-3xl font-bold text-white mb-8">

          Quick Access

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
                    {/* AI Interview */}

          <Link
            to="/interview"
            className="
            group
            bg-white/15
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-7
            shadow-2xl
            hover:bg-white/20
            hover:scale-105
            transition-all
            duration-300
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">

              <Mic
                className="text-blue-300 group-hover:scale-110 transition"
                size={32}
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              AI Interview
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Practice AI-powered mock interviews with real interview questions.
            </p>

            <div className="flex items-center gap-2 mt-8 text-blue-300 font-semibold">

              Start Interview

              <ArrowRight size={18} />

            </div>

          </Link>

          {/* Resume Analyzer */}

          <Link
            to="/resume-analyzer"
            className="
            group
            bg-white/15
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-7
            shadow-2xl
            hover:bg-white/20
            hover:scale-105
            transition-all
            duration-300
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">

              <FileText
                className="text-green-300 group-hover:scale-110 transition"
                size={32}
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Resume Analyzer
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Upload your resume and receive detailed AI-powered suggestions.
            </p>

            <div className="flex items-center gap-2 mt-8 text-green-300 font-semibold">

              Analyze Resume

              <ArrowRight size={18} />

            </div>

          </Link>

          {/* AI Career Coach */}

          <Link
            to="/career-coach"
            className="
            group
            bg-white/15
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-7
            shadow-2xl
            hover:bg-white/20
            hover:scale-105
            transition-all
            duration-300
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">

              <Bot
                className="text-purple-300 group-hover:scale-110 transition"
                size={32}
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              AI Career Coach
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Get personalised AI career guidance and interview preparation.
            </p>

            <div className="flex items-center gap-2 mt-8 text-purple-300 font-semibold">

              Ask AI

              <ArrowRight size={18} />

            </div>

          </Link>

          {/* Analytics */}

          <Link
            to="/analytics"
            className="
            group
            bg-white/15
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-7
            shadow-2xl
            hover:bg-white/20
            hover:scale-105
            transition-all
            duration-300
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">

              <BarChart3
                className="text-orange-300 group-hover:scale-110 transition"
                size={32}
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Analytics
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Track interview performance and monitor your learning progress.
            </p>

            <div className="flex items-center gap-2 mt-8 text-orange-300 font-semibold">

              View Analytics

              <ArrowRight size={18} />

            </div>

          </Link>

        </div>

      </section>
            {/* Stats */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-7">

        <div
          className="
          bg-white/15
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-7
          shadow-2xl
          hover:scale-105
          transition-all
          duration-300
          "
        >

          <p className="text-gray-300 text-lg">
            Mock Interviews
          </p>

          <h2 className="text-5xl font-extrabold mt-4 text-blue-300">
            0
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Complete your first interview today.
          </p>

        </div>

        <div
          className="
          bg-white/15
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-7
          shadow-2xl
          hover:scale-105
          transition-all
          duration-300
          "
        >

          <p className="text-gray-300 text-lg">
            Average Score
          </p>

          <h2 className="text-5xl font-extrabold mt-4 text-green-300">
            0%
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            AI evaluation score will appear here.
          </p>

        </div>

        <div
          className="
          bg-white/15
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-7
          shadow-2xl
          hover:scale-105
          transition-all
          duration-300
          "
        >

          <p className="text-gray-300 text-lg">
            Current Streak
          </p>

          <h2 className="text-5xl font-extrabold mt-4 text-orange-300">
            0 Days
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Practice daily to increase your streak.
          </p>

        </div>

      </section>

      {/* Daily DSA */}

      <section
        className="
        bg-gradient-to-r
        from-orange-500/20
        to-red-500/20
        backdrop-blur-xl
        border
        border-orange-300/20
        rounded-3xl
        p-8
        shadow-2xl
        "
      >

        <h2 className="text-3xl font-bold text-white">
          🔥 Daily DSA Challenge
        </h2>

        <p className="text-gray-300 mt-4 leading-8">

          Solve one coding problem every day and build
          strong problem-solving skills for coding interviews.

        </p>

        <button
          className="
          mt-8
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          shadow-xl
          "
        >

          Solve Today's Problem

        </button>

      </section>
            {/* Recent Activity */}

      <section
        className="
        bg-white/15
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-8
        shadow-2xl
        "
      >

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            📜 Recent Activity
          </h2>

          <span className="text-sm text-blue-300">
            Last 7 Days
          </span>

        </div>

        <div
          className="
          mt-8
          border
          border-dashed
          border-white/20
          rounded-2xl
          p-12
          flex
          flex-col
          items-center
          justify-center
          text-center
          "
        >

          <div
            className="
            w-20
            h-20
            rounded-full
            bg-blue-500/20
            flex
            items-center
            justify-center
            mb-6
            "
          >

            <BarChart3
              className="text-blue-300"
              size={40}
            />

          </div>

          <h3 className="text-2xl font-bold text-white">

            No Interview History Yet

          </h3>

          <p className="text-gray-300 mt-4 max-w-xl leading-8">

            Complete your first AI Interview and your
            interview reports, AI scores and performance
            analytics will appear here.

          </p>

          <Link
            to="/interview"
            className="
            mt-8
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-xl
            "
          >

            Start Your First Interview

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;