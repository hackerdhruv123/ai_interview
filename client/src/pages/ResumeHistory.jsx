import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Loader2,
  Trash2,
  Eye,
  Inbox,
  AlertTriangle,
} from "lucide-react";

import api from "../api/axios";

const ResumeHistory = () => {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/resume/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

     setHistory(response.data.resumes || []);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Failed to load resume history. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleView = (id) => {
    navigate(`/resume/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this resume analysis?"
    );
    if (!confirmed) return;

    try {
      setDeletingId(id);

      await api.delete(`/resume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHistory((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Failed to delete resume. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  const scoreColor = (score) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">

        {/* ================= Header ================= */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">
            Resume Analysis History
          </h1>
          <p className="text-slate-400 mt-2">
            View, revisit, or remove your previously analyzed resumes.
          </p>
        </div>

        {error && (
          <p className="mb-6 text-sm text-red-400 flex items-center gap-2">
            <AlertTriangle size={16} />
            {error}
          </p>
        )}

        {/* ================= Loading State ================= */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <Loader2 size={32} className="animate-spin mb-4" />
            <p>Loading your resume history...</p>
          </div>
        )}

        {/* ================= Empty State ================= */}
        {!loading && history.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl">
            <Inbox size={40} className="mb-4 text-slate-500" />
            <p className="text-lg font-medium text-slate-300">
              No Resume Found
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Analyze a resume to see it show up here.
            </p>
          </div>
        )}

        {/* ================= History List ================= */}
        {!loading && history.length > 0 && (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                {/* Resume Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <FileText size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {item.resume_name || "Resume"}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1 text-sm">
                      <span className="text-slate-400">
                        ATS Score:{" "}
                        <span className={`font-semibold ${scoreColor(item.ats_score)}`}>
                          {item.ats_score}
                        </span>
                      </span>
                      <span className="text-slate-400">
                        Overall Score:{" "}
                        <span className={`font-semibold ${scoreColor(item.overall_score)}`}>
                          {item.overall_score}
                        </span>
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">
                      {formatDate(item.created_at)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 md:shrink-0">
                  <button
                    onClick={() => handleView(item.id)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold flex items-center gap-2 transition"
                  >
                    <Eye size={16} />
                    View Report
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deletingId === item.id}
                    className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-sm font-semibold flex items-center gap-2 transition disabled:opacity-50"
                  >
                    {deletingId === item.id ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeHistory;