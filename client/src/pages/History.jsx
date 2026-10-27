import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  CalendarDays,
  Trophy,
  Target,
  History,
  Eye,
  Loader2,
  FileX,
  TrendingUp,
} from "lucide-react";

import api from "../api/axios";

function HistoryPage() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ============================
  // Fetch Interview History
  // ============================

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/interview/history");

      setHistory(res.data.history || []);
      setFilteredHistory(res.data.history || []);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // Search
  // ============================

  useEffect(() => {
    const data = history.filter((item) =>
      item.role.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredHistory(data);

  }, [search, history]);

  // ============================
  // Stats
  // ============================

  const totalInterviews = history.length;

  const highestScore =
    history.length > 0
      ? Math.max(...history.map((item) => item.score))
      : 0;

  const averageScore = useMemo(() => {
    if (!history.length) return 0;

    return Math.round(
      history.reduce((sum, item) => sum + item.score, 0) /
        history.length
    );
  }, [history]);
    // ============================
  // Score Badge Color
  // ============================

  const getScoreColor = (score) => {
    if (score >= 85)
      return "bg-emerald-500/20 text-emerald-300 border-emerald-400/20";

    if (score >= 70)
      return "bg-yellow-500/20 text-yellow-300 border-yellow-400/20";

    return "bg-red-500/20 text-red-300 border-red-400/20";
  };

  // ============================
  // Loading Screen
  // ============================

  if (loading) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />

        <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-12 backdrop-blur-3xl">

          <Loader2 className="mx-auto h-14 w-14 animate-spin text-cyan-400" />

          <p className="mt-6 text-center text-lg text-slate-300">
            Loading Interview History...
          </p>

        </div>

      </div>
    );
  }

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Background Glow */}

      <div className="absolute -top-52 -left-52 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="absolute top-24 -right-44 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[170px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">

        {/* Header */}

        <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-3xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">

                <History className="mr-2 h-4 w-4" />

                Interview History

              </div>

              <h1 className="text-5xl font-black text-white">

                Your Previous Interviews

              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-400">

                Review all your previous AI interview attempts,
                compare your performance and track your progress.

              </p>

            </div>

            {/* Search */}

            <div className="relative w-full max-w-md">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search by role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  py-4
                  pl-14
                  pr-5
                  text-white
                  placeholder:text-slate-500
                  backdrop-blur-xl
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

            </div>

          </div>
                    {/* ============================= */}
          {/* Statistics Cards */}
          {/* ============================= */}

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* Total Interviews */}

            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-3xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Total Interviews
                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">
                    {totalInterviews}
                  </h2>

                </div>

                <div className="rounded-2xl bg-cyan-500/20 p-4">

                  <History
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
                    {highestScore}%
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
                    {averageScore}%
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

          </div>

          {/* ============================= */}
          {/* History Section */}
          {/* ============================= */}

          <div className="mt-12">

            <h2 className="mb-8 text-3xl font-black text-white">

              Interview Attempts

            </h2>
                      {filteredHistory.length === 0 ? (

            <div className="mt-10 rounded-3xl border border-dashed border-slate-700 bg-white/5 p-14 text-center backdrop-blur-3xl">

              <FileX
                size={70}
                className="mx-auto text-slate-500"
              />

              <h2 className="mt-6 text-3xl font-bold text-white">
                No Interview History
              </h2>

              <p className="mt-3 text-slate-400">
                Complete your first interview to see your performance history.
              </p>

            </div>

          ) : (

            <div className="mt-8 grid gap-8 lg:grid-cols-2">

              {filteredHistory.map((item) => (

                <div
                  key={item.id}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-7
                    backdrop-blur-3xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400/30
                    hover:shadow-[0_0_45px_rgba(34,211,238,.12)]
                  "
                >

                  {/* Top */}

                  <div className="flex items-start justify-between">

                    <div>

                      <h3 className="text-2xl font-bold text-white">

                        {item.role}

                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-slate-400">

                        <CalendarDays size={16} />

                        {new Date(item.created_at).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}

                      </div>

                    </div>

                    <div
                      className={`
                        rounded-full
                        border
                        px-5
                        py-2
                        text-sm
                        font-bold
                        ${getScoreColor(item.score)}
                      `}
                    >
                      {item.score}%
                    </div>

                  </div>

                  {/* Divider */}

                  <div className="my-6 h-px bg-white/10" />

                  {/* Scores */}

                  <div className="grid grid-cols-2 gap-5">

                    <div className="rounded-2xl bg-slate-900/40 p-4">

                      <p className="text-sm text-slate-400">

                        Technical

                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">

                        {item.technical_score}%

                      </h4>

                    </div>

                    <div className="rounded-2xl bg-slate-900/40 p-4">

                      <p className="text-sm text-slate-400">

                        Communication

                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">

                        {item.communication_score}%

                      </h4>

                    </div>

                    <div className="rounded-2xl bg-slate-900/40 p-4">

                      <p className="text-sm text-slate-400">

                        Problem Solving

                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">

                        {item.problem_solving}%

                      </h4>

                    </div>

                    <div className="rounded-2xl bg-slate-900/40 p-4">

                      <p className="text-sm text-slate-400">

                        Confidence

                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-white">

                        {item.confidence_score}%

                      </h4>

                    </div>

                  </div>

                  {/* View Report */}

                  <button
                    onClick={() =>
                      navigate("/result", {
                        state: item,
                      })
                    }
                    className="
                      mt-8
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-500
                      to-indigo-600
                      py-4
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
                    "
                  >

                    <Eye size={20} />

                    View Full Report

                  </button>

                </div>

              ))}

            </div>

          )}
                  </div>

      </div>

    </div>
</div>
  );
}

export default HistoryPage;