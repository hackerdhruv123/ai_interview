import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Loader2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import api from "../api/axios";

const ResumeDetails = () => {
  const { id } = useParams();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await api.get(`/resume/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
console.log("Resume API Response:", response.data);
console.log("Resume Object:", response.data.resume);
        setResume(response.data.resume);
      } catch (err) {
        console.error(err);
        setError(
          err.response?.data?.message ||
            "Failed to load resume details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id]);

  const scoreColor = (score) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="animate-spin text-cyan-400" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-400">
        <AlertTriangle className="mr-2" />
        {error}
      </div>
    );
  }

 if (!resume) return null;

console.log("Resume Object:", resume);
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-20">

      {/* ATS */}
<div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center mb-6">
  <p className="text-slate-400">ATS Score</p>

  <h1 className={`text-6xl font-bold ${scoreColor(resume.ats_score)}`}>
    {resume.ats_score}
  </h1>

  <p className="text-slate-400 mt-2">
    Overall Score : {resume.overall_score}
  </p>
</div>

        {/* Summary */}
        <div className="bg-white/10 rounded-3xl p-6 border border-white/10 mb-6">
          <h2 className="text-xl font-bold text-white mb-3">
            Summary
          </h2>

          <p className="text-slate-300">
            {resume.summary}
          </p>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">

          <div className="bg-white/10 rounded-3xl p-6 border border-white/10">
            <h2 className="text-emerald-400 font-bold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} />
              Strengths
            </h2>

            <ul className="space-y-2">
              {resume.strengths?.map((item, i) => (
                <li key={i} className="text-slate-300">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 border border-white/10">
            <h2 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
              <XCircle size={18} />
              Weaknesses
            </h2>

            <ul className="space-y-2">
              {resume.weaknesses?.map((item, i) => (
                <li key={i} className="text-slate-300">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Technical Skills */}
        <div className="bg-white/10 rounded-3xl p-6 border border-white/10 mb-6">
          <h2 className="text-cyan-400 text-lg font-bold mb-4">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {resume.technicalSkills?.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="bg-white/10 rounded-3xl p-6 border border-white/10 mb-6">
          <h2 className="text-red-400 text-lg font-bold mb-4">
            Missing Keywords
          </h2>

          <div className="flex flex-wrap gap-2">
           {resume.missingKeywords?.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-red-500/20 text-red-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-3xl p-6">
          <h2 className="text-white text-lg font-bold mb-3">
            Final Verdict
          </h2>

          <p className="text-slate-300">
            {resume.finalVerdict}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResumeDetails;