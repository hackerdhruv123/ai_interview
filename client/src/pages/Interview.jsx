import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Brain,
  ClipboardList,
  Clock,
  ArrowRight,
  Sparkles,
  Target,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import api from "../api/axios";

function Interview() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Frontend Developer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [questions, setQuestions] = useState(10);
  const [type, setType] = useState("Technical");
  const [loading, setLoading] = useState(false);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "Python Developer",
    "Data Analyst",
    "AI / ML Engineer",
    "DevOps Engineer",
    "Cyber Security",
  ];

  const difficulties = [
    "Easy",
    "Medium",
    "Hard",
  ];

  const interviewTypes = [
    "Technical",
    "HR",
    "Mixed",
  ];

  const handleStartInterview = async () => {
    try {
      setLoading(true);

      const response = await api.post("/interview/start", {
        role,
        difficulty,
        questions,
        type,
      });

      navigate("/question-screen", {
        state: {
          questions: response.data.questions,
        },
      });

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to generate interview."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}

        <section
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-cyan-400/20
            bg-white/5
            backdrop-blur-3xl
            p-10
          "
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="max-w-3xl">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-cyan-300
                "
              >
                <Sparkles size={16} />
                AI Powered Interview Platform
              </span>

              <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-white">
                Practice.
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}Improve.
                </span>
                <br />
                Get Hired.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Generate AI-powered interview questions based on your role,
                difficulty level and interview type. Receive personalised
                feedback, detailed analytics and improve your confidence for
                top product-based companies.
              </p>

            </div>

            {/* Right Stats */}

            <div className="grid grid-cols-2 gap-5 w-full max-w-md">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Target className="text-cyan-400" size={34} />
                <h2 className="mt-4 text-3xl font-black text-white">
                  {questions}
                </h2>
                <p className="mt-2 text-slate-400">
                  Questions
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Clock className="text-green-400" size={34} />
                <h2 className="mt-4 text-3xl font-black text-white">
                  {questions * 2}
                </h2>
                <p className="mt-2 text-slate-400">
                  Minutes
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Brain className="text-yellow-400" size={34} />
                <h2 className="mt-4 text-xl font-bold text-white">
                  {difficulty}
                </h2>
                <p className="mt-2 text-slate-400">
                  Difficulty
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Trophy className="text-purple-400" size={34} />
                <h2 className="mt-4 text-xl font-bold text-white">
                  {type}
                </h2>
                <p className="mt-2 text-slate-400">
                  Interview
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ---------- PART 2 STARTS FROM HERE ---------- */}
              {/* Interview Setup */}

      <section
        className="
          mt-10
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          p-10
        "
      >
        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck
            size={32}
            className="text-cyan-400"
          />

          <div>
            <h2 className="text-4xl font-bold text-white">
              Interview Setup
            </h2>

            <p className="mt-2 text-slate-400">
              Configure your AI interview before getting started.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Role */}

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <Briefcase size={18} />
              Job Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
              "
            >
              {roles.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="bg-slate-900"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <Brain size={18} />
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
              "
            >
              {difficulties.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="bg-slate-900"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
                    {/* Number of Questions */}

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <ClipboardList size={18} />
              Number of Questions
            </label>

            <select
              value={questions}
              onChange={(e) => setQuestions(Number(e.target.value))}
              className="
                w-full
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
              "
            >
              {[5, 10, 15, 20].map((item) => (
                <option
                  key={item}
                  value={item}
                  className="bg-slate-900"
                >
                  {item} Questions
                </option>
              ))}
            </select>
          </div>

          {/* Interview Type */}

          <div>
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <Brain size={18} />
              Interview Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
              "
            >
              {interviewTypes.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="bg-slate-900"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

        </div>
                {/* Interview Summary */}

        <div
          className="
            mt-12
            rounded-[30px]
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-cyan-500/10
            via-slate-900/60
            to-purple-500/10
            backdrop-blur-3xl
            p-8
          "
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Interview Summary
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* Role */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
              "
            >
              <Briefcase
                className="text-cyan-400"
                size={32}
              />

              <p className="mt-5 text-sm text-slate-400">
                Selected Role
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                {role}
              </h4>
            </div>

            {/* Difficulty */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-yellow-400/30
              "
            >
              <Brain
                className="text-yellow-400"
                size={32}
              />

              <p className="mt-5 text-sm text-slate-400">
                Difficulty
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                {difficulty}
              </h4>
            </div>

            {/* Questions */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-green-400/30
              "
            >
              <ClipboardList
                className="text-green-400"
                size={32}
              />

              <p className="mt-5 text-sm text-slate-400">
                Questions
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                {questions}
              </h4>
            </div>

            {/* Estimated Time */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-purple-400/30
              "
            >
              <Clock
                className="text-purple-400"
                size={32}
              />

              <p className="mt-5 text-sm text-slate-400">
                Estimated Time
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                {questions * 2} Minutes
              </h4>
            </div>

          </div>

        </div>
                {/* AI Tips */}

        <div
          className="
            mt-12
            rounded-[30px]
            border
            border-cyan-400/20
            bg-gradient-to-r
            from-cyan-500/10
            via-slate-900/60
            to-purple-500/10
            backdrop-blur-3xl
            p-8
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles
              size={28}
              className="text-cyan-400"
            />

            <h3 className="text-3xl font-bold text-white">
              AI Interview Tips
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-cyan-300">
                🎯 Be Confident
              </h4>

              <p className="mt-3 text-slate-300 leading-7">
                Speak clearly and confidently. Even if you don't know
                the exact answer, explain your thought process.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-green-300">
                💻 Use Project Examples
              </h4>

              <p className="mt-3 text-slate-300 leading-7">
                Try to answer using your real-world projects and
                practical experience whenever possible.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-yellow-300">
                🧠 Think Before Speaking
              </h4>

              <p className="mt-3 text-slate-300 leading-7">
                Take a few seconds to organise your thoughts before
                answering difficult questions.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-purple-300">
                🚀 Keep Improving
              </h4>

              <p className="mt-3 text-slate-300 leading-7">
                Every interview is a learning opportunity. Focus on
                improvement instead of perfection.
              </p>
            </div>

          </div>
        </div>

        {/* Start Interview */}

        <div className="mt-12 flex justify-end">

          <button
            onClick={handleStartInterview}
            disabled={loading}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-10
              py-5
              text-lg
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-cyan-500/30
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? "Generating Questions..." : "Start AI Interview"}

            <ArrowRight size={22} />
          </button>

        </div>

      </section>

    </div>
    </div>
  );
}

export default Interview;