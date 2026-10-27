import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock3,
  Loader2,
  Sparkles,
  XCircle,
} from "lucide-react";

import api from "../api/axios";

const QuestionScreen = () => {
  // ==============================
  // Navigation
  // ==============================
  const navigate = useNavigate();
  const location = useLocation();

  // ==============================
  // Interview Data
  // ==============================
  const questions = location.state?.questions || [];
  const role =
    location.state?.role || "Frontend Developer";

  // 2 Minutes Per Question (Default)
  const totalMinutes =
    location.state?.duration ||
    questions.length * 2;

  // ==============================
  // States
  // ==============================
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  // Stores every answer
  const [responses, setResponses] = useState([]);

  // Loading while submitting interview
  const [loading, setLoading] = useState(false);

  // Finish Interview Modal
  const [showQuitModal, setShowQuitModal] =
    useState(false);

  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState(
    totalMinutes * 60
  );

  // ==============================
  // Refs
  // ==============================
  const textAreaRef = useRef(null);
  // ==============================
  // Redirect if no questions
  // ==============================
  useEffect(() => {
    if (!questions.length) {
      navigate("/interview");
    }
  }, [questions, navigate]);

  // ==============================
  // Auto Focus Textarea
  // ==============================
  useEffect(() => {
    textAreaRef.current?.focus();
  }, [currentQuestion]);

  // ==============================
  // Countdown Timer
  // ==============================
  useEffect(() => {
    if (loading) return;

    if (timeLeft <= 0) {
      submitInterview();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, loading]);

  // ==============================
  // Progress Percentage
  // ==============================
  const progress = useMemo(() => {
    if (!questions.length) return 0;

    return (
      ((currentQuestion + 1) / questions.length) * 100
    );
  }, [currentQuestion, questions]);

  // ==============================
  // Interview Statistics
  // ==============================
  const answeredCount = responses.filter(
    (item) =>
      item &&
      !item.skipped &&
      item.answer.trim() !== ""
  ).length;

  const skippedCount = responses.filter(
    (item) => item?.skipped
  ).length;

  const remainingCount =
    questions.length -
    answeredCount -
    skippedCount;

  // ==============================
  // Timer Formatting
  // ==============================
  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(
    timeLeft % 60
  ).padStart(2, "0");
  // ==============================
  // Handle Answer Change
  // ==============================
  const handleAnswerChange = (e) => {
    const updatedResponses = [...responses];

    updatedResponses[currentQuestion] = {
      question: questions[currentQuestion],
      answer: e.target.value,
      skipped: false,
    };

    setResponses(updatedResponses);
  };

  // ==============================
  // Previous Question
  // ==============================
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // ==============================
  // Next Question
  // ==============================
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // ==============================
  // Skip Question
  // ==============================
  const handleSkip = () => {
    const updatedResponses = [...responses];

    updatedResponses[currentQuestion] = {
      question: questions[currentQuestion],
      answer: "",
      skipped: true,
    };

    setResponses(updatedResponses);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // ==============================
  // Submit Interview
  // ==============================
  const submitInterview = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // Unvisited/undefined questions ko safe format me convert karo
      // taaki backend ko poora array mile, koi undefined/null na jaye
      const safeResponses = questions.map((q, i) =>
        responses[i] || {
          question: q,
          answer: "",
          skipped: true,
        }
      );

      const response = await api.post(
        "/interview/submit",
        {
          role,
          questions,
          answers: safeResponses, // backend "answers" key expect karta hai
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/result", {
        state: response.data.result,
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to submit interview."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // Finish Interview
  // ==============================
  const handleFinish = () => {
    setShowQuitModal(true);
  };

  // ==============================
  // Confirm Finish
  // ==============================
  const confirmFinish = () => {
    if (answeredCount === 0) {
      alert("Please answer at least one question.");
      return;
    }

    setShowQuitModal(false);
    submitInterview();
  };

  // ==============================
  // Cancel Finish
  // ==============================
  const cancelFinish = () => {
    setShowQuitModal(false);
  };

  // ==============================
  // Redirect Safety
  // ==============================
  if (!questions.length) {
    return null;
  }

  // ==============================
  // JSX Starts
  // ==============================
  return (
    <div className="min-h-screen bg-slate-950">
      {/* pt-24 se navbar ke peeche content chupega nahi */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
        {/* ================= Progress ================= */}

        <div className="mt-4">

          <div className="flex justify-between text-slate-300 mb-2">

            <span>Interview Progress</span>

            <span>{Math.round(progress)}%</span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* ================= Question Navigator ================= */}

        <div className="mt-5 flex flex-wrap gap-2">

          {questions.map((_, index) => {

            const response = responses[index];

            let bg =
              "bg-slate-700 hover:bg-slate-600";

            if (response?.skipped) {
              bg =
                "bg-yellow-500 hover:bg-yellow-600";
            }

            if (
              response?.answer &&
              response.answer.trim() !== ""
            ) {
              bg =
                "bg-emerald-500 hover:bg-emerald-600";
            }

            if (index === currentQuestion) {
              bg =
                "bg-cyan-500 hover:bg-cyan-600";
            }

            return (

              <button
                key={index}
                onClick={() =>
                  setCurrentQuestion(index)
                }
                className={`
                  w-10
                  h-10
                  rounded-full
                  text-white
                  text-sm
                  font-semibold
                  transition
                  duration-300
                  ${bg}
                `}
              >

                {index + 1}

              </button>

            );

          })}

        </div>

        {/* ================= Main Grid ================= */}

        <div className="grid lg:grid-cols-4 gap-6 mt-6">

          {/* ================= Left Section ================= */}

          <div className="lg:col-span-3">

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-6">

              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full mb-4 text-sm">

                <Sparkles size={16} />

                Question {currentQuestion + 1}

              </div>

              <h2 className="text-2xl font-semibold text-white leading-relaxed">

                {questions[currentQuestion]?.question}

              </h2>

              {/* Status Badge */}

              <div className="mt-4 flex gap-3">

                {responses[currentQuestion]?.skipped ? (

                  <span className="px-3 py-1 text-sm rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/20">

                    Skipped

                  </span>

                ) : responses[currentQuestion]?.answer?.trim() ? (

                  <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/20">

                    Answered

                  </span>

                ) : (

                  <span className="px-3 py-1 text-sm rounded-full bg-slate-700 text-slate-300">

                    Not Answered

                  </span>

                )}

              </div>
              {/* ================= Answer Box ================= */}

              <div className="mt-6">

                <label className="block text-slate-300 font-semibold mb-3 text-sm">

                  Your Answer

                </label>

                <textarea
                  ref={textAreaRef}
                  rows={8}
                  value={responses[currentQuestion]?.answer || ""}
                  onChange={handleAnswerChange}
                  placeholder="Type your answer here... You can also skip this question."
                  className="
                    w-full
                    rounded-2xl
                    bg-slate-900/70
                    border
                    border-slate-700
                    text-white
                    p-4
                    resize-none
                    outline-none
                    focus:ring-2
                    focus:ring-cyan-500
                    placeholder:text-slate-500
                  "
                />

                <p className="mt-3 text-sm text-cyan-300">

                  ✓ Answers are automatically saved while you type.

                </p>

              </div>

            </div>

          </div>

          {/* ================= Sidebar ================= */}

          <div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-xl p-5">

              <h3 className="text-xl text-white font-bold mb-4">

                Interview Stats

              </h3>

              <div className="space-y-3">

                {/* Total Questions */}

                <div className="rounded-2xl bg-slate-900/70 p-4">

                  <p className="text-slate-400 text-sm">

                    Total Questions

                  </p>

                  <h2 className="text-2xl text-white font-bold mt-1">

                    {questions.length}

                  </h2>

                </div>

                {/* Answered */}

                <div className="rounded-2xl bg-slate-900/70 p-4">

                  <p className="text-slate-400 text-sm">

                    Answered

                  </p>

                  <h2 className="text-2xl text-emerald-400 font-bold mt-1">

                    {answeredCount}

                  </h2>

                </div>

                {/* Skipped */}

                <div className="rounded-2xl bg-slate-900/70 p-4">

                  <p className="text-slate-400 text-sm">

                    Skipped

                  </p>

                  <h2 className="text-2xl text-yellow-400 font-bold mt-1">

                    {skippedCount}

                  </h2>

                </div>

                {/* Remaining */}

                <div className="rounded-2xl bg-slate-900/70 p-4">

                  <p className="text-slate-400 text-sm">

                    Remaining

                  </p>

                  <h2 className="text-2xl text-orange-400 font-bold mt-1">

                    {remainingCount}

                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>
        {/* ================= Navigation ================= */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">

          {/* Previous Button */}

          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="
              px-6
              py-3
              rounded-2xl
              bg-slate-800
              hover:bg-slate-700
              disabled:opacity-40
              disabled:cursor-not-allowed
              text-white
              font-semibold
              flex
              items-center
              gap-2
              transition
            "
          >
            <ArrowLeft size={20} />

            Previous

          </button>

          {/* Middle Buttons */}

          <div className="flex items-center gap-3">

            {/* Skip */}

            <button
              onClick={handleSkip}
              className="
                px-6
                py-3
                rounded-2xl
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                font-semibold
                transition
              "
            >
              Skip
            </button>

            {/* Next / Finish */}

            {currentQuestion === questions.length - 1 ? (

              <button
                onClick={handleFinish}
                className="
                  px-8
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-green-600
                  hover:from-emerald-600
                  hover:to-green-700
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition
                "
              >
                <CheckCircle size={20} />

                Finish Interview

              </button>

            ) : (

              <button
                onClick={handleNext}
                className="
                  px-8
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  hover:from-cyan-600
                  hover:to-blue-700
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition
                "
              >
                Next

                <ArrowRight size={20} />

              </button>

            )}

          </div>

        </div>
        {/* ================= Loading Overlay ================= */}

        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md">

            <div className="flex flex-col items-center">

              <Loader2
                className="animate-spin text-cyan-400"
                size={70}
              />

              <h2 className="mt-8 text-3xl font-bold text-white">

                Evaluating Your Interview...

              </h2>

              <p className="mt-3 text-slate-400">

                Please wait while our AI analyses your responses.

              </p>

            </div>

          </div>
        )}

        {/* ================= Finish Interview Modal ================= */}

        {showQuitModal && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-[92%] max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

              <div className="flex items-center gap-3">

                <XCircle
                  className="text-red-500"
                  size={34}
                />

                <h2 className="text-3xl font-bold text-white">

                  End Interview?

                </h2>

              </div>

              <p className="mt-6 leading-7 text-slate-400">

                Your interview will be submitted immediately.

                <br />

                You won't be able to continue after submission.

              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <button
                  onClick={cancelFinish}
                  className="
                    rounded-xl
                    bg-slate-700
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-slate-600
                  "
                >
                  Continue Interview
                </button>

                <button
                  onClick={confirmFinish}
                  className="
                    rounded-xl
                    bg-red-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-red-700
                  "
                >
                  Submit Interview
                </button>

              </div>

            </div>

          </div>

        )}
        {/* ================= End Container ================= */}

      </div>

    </div>

  );
};

export default QuestionScreen;