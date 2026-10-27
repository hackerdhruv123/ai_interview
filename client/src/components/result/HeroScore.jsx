import background from "../../assets/images/background.jpg";
import { Trophy, Star } from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

function HeroScore() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const result = state || {};

const strengths = result.strengths ?? [];
const improvements = result.improvements ?? [];
const feedback = result.feedback ?? "No feedback available.";

  const score = result.score ?? 0;
  const role = result.role ?? "Frontend Developer";
  const duration = result.duration ?? "0 Minutes";
  const totalQuestions = result.totalQuestions ?? 0;
  const confidenceScore = result.confidence_score ?? 0;

  let performance = "";
  let performanceText = "";

  if (score >= 90) {
    performance = "Excellent Performance 🎉";
    performanceText =
      "You performed exceptionally well during the AI interview.";
  } else if (score >= 80) {
    performance = "Very Good Performance 🚀";
    performanceText =
      "Great job! Your interview performance was impressive.";
  } else if (score >= 70) {
    performance = "Good Performance 👍";
    performanceText =
      "You have a solid foundation. Keep practising consistently.";
  } else if (score >= 60) {
    performance = "Average Performance 🙂";
    performanceText =
      "Good effort. Focus more on DSA and communication.";
  } else {
    performance = "Needs Improvement 💪";
    performanceText =
      "Don't worry. Practice more interviews and you'll improve quickly.";
  }

  let confidenceLevel = "Low";

  if (confidenceScore >= 90) {
    confidenceLevel = "High";
  } else if (confidenceScore >= 70) {
    confidenceLevel = "Medium";
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]"></div>

      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <div
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
            backdrop-blur-xl
            "
          >
            <Trophy size={18} className="text-yellow-400" />

            <span className="text-sm font-semibold text-cyan-300">
              Interview Completed Successfully
            </span>

          </div>

          <h1
            className="
            mt-8
            text-5xl
            lg:text-6xl
            font-black
            text-white
            "
          >
            Your AI Interview

            <span
              className="
              block
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-purple-400
              bg-clip-text
              text-transparent
              "
            >
              Performance Report
            </span>

          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">

            Congratulations! 🎉

            Our AI evaluated your interview performance and generated
            a detailed report with scores, strengths and personalised
            improvement suggestions.

          </p>

        </div>

        {/* Hero Grid */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
                  {/* Score Card */}

          <div
            className="
            relative
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-10
            shadow-[0_20px_80px_rgba(0,0,0,.35)]
            "
          >

            {/* Score Circle */}

            <div className="flex justify-center">

              <div className="relative h-64 w-64">

                {/* Outer Glow */}

                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl"></div>

                {/* Gradient Ring */}

                <div
                  className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  p-[10px]
                  "
                >

                  <div
                    className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-950
                    "
                  >

                    <div className="text-center">

                      <h2 className="text-7xl font-black text-white">
  {score}
</h2>

                      <p className="mt-2 text-cyan-300 font-semibold">
                        Overall Score
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Rating */}

            <div className="mt-10 text-center">

              <div className="flex justify-center gap-1">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={24}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>
<h3 className="mt-5 text-3xl font-bold text-white">
  {performance}
</h3>
             <p className="mt-3 text-slate-400">
  {performanceText}
</p>

            </div>

          </div>

          {/* Interview Summary */}

          <div
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-10
            shadow-[0_20px_80px_rgba(0,0,0,.35)]
            "
          >

            <h2 className="text-3xl font-bold text-white">

              Interview Summary

            </h2>

            <p className="mt-5 text-slate-300 leading-8">

              The AI analysed your technical knowledge,
              communication, confidence and overall
              interview performance.

            </p>

            <div className="mt-10 space-y-6">

              <div className="flex justify-between">

                <span className="text-slate-300">
                  Role
                </span>

               <span className="font-semibold text-white">
  {role}
</span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-300">
                  Questions Answered
                </span>

                <span className="font-semibold text-white">
                  {totalQuestions} / {totalQuestions}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-300">
                  Interview Duration
                </span>

                <span className="font-semibold text-white">
                  {duration}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-300">
                  AI Confidence
                </span>

                <span className="font-semibold text-green-400">
                  {confidenceLevel}
                </span>

              </div>

            </div>

          </div>
                  </div>

        {/* Performance Cards */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
{
title:"Technical Skills",
score:`${result.technical_score ?? 0}%`,
color:"text-cyan-300"
},
{
title:"Communication",
score:`${result.communication_score ?? 0}%`,
color:"text-green-300"
},
{
title:"Problem Solving",
score:`${result.problem_solving ?? 0}%`,
color:"text-yellow-300"
},
{
title:"Confidence",
score:`${result.confidence_score ?? 0}%`,
color:"text-purple-300"
}
].map((item) => (
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-7
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <h3 className="text-slate-300 text-sm">
                {item.title}
              </h3>

              <p className={`mt-3 text-4xl font-black ${item.color}`}>
                {item.score}
              </p>
            </div>
          ))}

        </div>

        {/* AI Feedback */}

        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {/* Strengths */}

          <div
            className="
            rounded-3xl
            border
            border-green-400/20
            bg-green-500/5
            backdrop-blur-2xl
            p-8
            "
          >

            <h2 className="text-2xl font-bold text-green-300">
              💪 Strengths
            </h2>

            
<ul className="mt-6 space-y-4 text-slate-300">
  {(result.strengths ?? []).map((item,index)=>(
      <li key={index}>
          ✅ {item}
      </li>
  ))}
</ul>

        

          </div>

          {/* Improvements */}

          <div
            className="
            rounded-3xl
            border
            border-yellow-400/20
            bg-yellow-500/5
            backdrop-blur-2xl
            p-8
            "
          >

            <h2 className="text-2xl font-bold text-yellow-300">
              🚀 Improvements
            </h2>

           <ul className="mt-6 space-y-4 text-slate-300">
  {(result.improvements ?? []).map((item,index)=>(
      <li key={index}>
          ⚡ {item}
      </li>
  ))}
</ul>

          </div>

        </div>

        {/* AI Summary */}

        <div
          className="
          mt-20
          rounded-[32px]
          border
          border-cyan-400/20
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-purple-500/10
          backdrop-blur-2xl
          p-10
          "
        >

          <h2 className="text-3xl font-black text-white">
            🤖 AI Feedback Summary
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
{result.feedback}

          </p>

        </div>

        {/* Buttons */}

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <button
            className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            hover:scale-105
            transition-all
            "
          >
            Download Report
          </button>

        
  <button
  onClick={() => navigate("/")}
  className="
    rounded-2xl
    bg-gradient-to-r
    from-green-500
    to-emerald-600
    px-8
    py-4
    font-semibold
    text-white
    hover:scale-105
    transition-all
  "
>
  Back to Home
</button>

        </div>

      </div>

    </section>
   
  );
}

export default HeroScore;