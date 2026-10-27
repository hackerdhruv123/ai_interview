import { useState } from "react";
import {
  UploadCloud,
  FileText,
  Loader2,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";

import api from "../api/axios";

const ResumeAnalyzer = () => {
  const [mode, setMode] = useState("file"); // "file" | "paste"
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setError("");
    }
  };

  const handleAnalyze = async () => {
    setError("");

    if (mode === "file" && !file) {
      setError("Please upload a resume file.");
      return;
    }

    if (mode === "paste" && !resumeText.trim()) {
      setError("Please paste your resume text.");
      return;
    }

    try {
      setLoading(true);
      setAnalysis(null);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      if (mode === "file") {
        formData.append("resume", file);
      } else {
        formData.append("resumeText", resumeText);
      }

      formData.append("jobDescription", jobDescription);

      const response = await api.post("/resume/analyze", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
console.log(response.data); 
      setAnalysis(response.data.analysis);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Failed to analyze resume. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const scoreColor = (score) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const scoreRing = (score) => {
    if (score >= 80) return "from-emerald-500 to-green-600";
    if (score >= 50) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-rose-600";
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">

        {/* ================= Header ================= */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full mb-4 text-sm">
            <Sparkles size={16} />
            AI Resume Analyzer
          </div>
          <h1 className="text-3xl font-bold text-white">
            Resume ATS Score Checker
          </h1>
          <p className="text-slate-400 mt-2">
            Upload your resume to get an instant ATS compatibility score and improvement suggestions.
          </p>
        </div>

        {/* ================= Input Card ================= */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-6">

          {/* Mode Switch */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setMode("file")}
              className={`px-5 py-2.5 rounded-xl font-semibold transition ${
                mode === "file"
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Upload File
            </button>
            <button
              onClick={() => setMode("paste")}
              className={`px-5 py-2.5 rounded-xl font-semibold transition ${
                mode === "paste"
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Paste Text
            </button>
          </div>

          {/* File Upload */}
          {mode === "file" && (
            <label
              htmlFor="resume-upload"
              className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-700 rounded-2xl p-10 cursor-pointer hover:border-cyan-500 transition"
            >
              <UploadCloud size={40} className="text-cyan-400" />
              <p className="text-slate-300 font-medium">
                {file ? file.name : "Click to upload PDF or DOCX"}
              </p>
              <p className="text-slate-500 text-sm">Max file size: 5MB</p>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}

          {/* Paste Text */}
          {mode === "paste" && (
            <textarea
              rows={10}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume text here..."
              className="w-full rounded-2xl bg-slate-900/70 border border-slate-700 text-white p-4 resize-none outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500"
            />
          )}

          {/* Job Description (optional) */}
          <div className="mt-6">
            <label className="block text-slate-300 font-semibold mb-3 text-sm">
              Job Description (optional — for a targeted match score)
            </label>
            <textarea
              rows={5}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description to get a keyword match score..."
              className="w-full rounded-2xl bg-slate-900/70 border border-slate-700 text-white p-4 resize-none outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500"
            />
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400 flex items-center gap-2">
              <AlertTriangle size={16} />
              {error}
            </p>
          )}

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white font-semibold flex items-center justify-center gap-2 transition"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Analyzing Resume...
              </>
            ) : (
              <>
                <FileText size={20} />
                Analyze Resume
              </>
            )}
          </button>
        </div>

        {/* ================= Results ================= */}
        {analysis && (
          <div className="mt-10 space-y-6">

            {/* Overall Score */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-8 text-center">
              <p className="text-slate-400 mb-2">Overall ATS Score</p>
              <h2 className={`text-6xl font-bold ${scoreColor(analysis.atsScore)}`}>
                {analysis.atsScore}
                <span className="text-2xl text-slate-500">/100</span>
              </h2>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mt-6">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${scoreRing(analysis.atsScore)} transition-all duration-500`}
                  style={{ width: `${analysis.atsScore}%` }}
                />
              </div>
            </div>

            {/* Sub Scores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Keyword Match", value: analysis.keyword_match_score },
                { label: "Formatting", value: analysis.formatting_score },
                { label: "Impact", value: analysis.impact_score },
                { label: "Clarity", value: analysis.clarity_score },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-slate-900/70 p-5 border border-white/10"
                >
                  <p className="text-slate-400 text-sm">{item.label}</p>
                  <h3 className={`text-2xl font-bold mt-1 ${scoreColor(item.value)}`}>
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Keywords */}
            {(analysis.matchedkeywords?.length > 0 ||
             analysis.missingKeywords?.length > 0) && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Matched Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.matchedkeywords?.map((kw, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/20"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                    <XCircle size={20} />
                    Missing Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.missingKeywords?.map((kw, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-red-500/20 text-red-300 border border-red-400/20"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Strengths / Weaknesses / Suggestions */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-4">Strengths</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {analysis.strengths?.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Weaknesses</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {analysis.weaknesses?.map((w, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-400">•</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Suggestions</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {analysis.grammarSuggestions?.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Summary */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Summary</h3>
              <p className="text-slate-300 leading-7">{analysis.summary}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;