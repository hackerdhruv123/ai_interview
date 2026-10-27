import { Link } from "react-router-dom";
import { PlayCircle, Sparkles, ArrowRight } from "lucide-react";
function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
      
    >



      {/* Glow */}

      <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-xl px-5 py-2">

              <Sparkles className="text-cyan-300" size={18} />

              <span className="text-sm font-semibold tracking-wide text-blue-100">
                AI Powered Interview Platform
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">

              Ace Your

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">

                Dream Job

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Practice company-specific AI interviews, analyse your resume,
              improve communication skills and receive detailed AI feedback
              to confidently crack your dream job.

            </p>
                      {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex items-center justify-center">

            {/* Floating Glow */}

            <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>

            {/* Main Dashboard Card */}

            <div
              className="
              relative
              w-full
              max-w-lg
              rounded-[32px]
              border
              border-white/10
              bg-white/10
              backdrop-blur-3xl
              p-7
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >

              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    AI Interview Report
                  </p>

                  <h2 className="text-3xl font-black text-white mt-1">
                    Overall Score
                  </h2>

                </div>

                <div
                  className="
                  w-20
                  h-20
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                  text-3xl
                  "
                >
                  🤖
                </div>

              </div>

              {/* Score */}

              <div className="mt-8">

                <div className="flex justify-between text-white mb-2">

                  <span>Interview Score</span>

                  <span className="font-bold">
                    92%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-white/10 overflow-hidden">

                  <div className="w-[92%] h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

                </div>

              </div>

              {/* Skills */}

              <div className="space-y-6 mt-10">

                <div>

                  <div className="flex justify-between text-sm text-slate-300 mb-2">

                    <span>Technical Skills</span>

                    <span>95%</span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                    <div className="w-[95%] h-full bg-blue-500 rounded-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-sm text-slate-300 mb-2">

                    <span>Communication</span>

                    <span>90%</span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                    <div className="w-[90%] h-full bg-green-500 rounded-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-sm text-slate-300 mb-2">

                    <span>Confidence</span>

                    <span>94%</span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                    <div className="w-[94%] h-full bg-orange-400 rounded-full"></div>

                  </div>

                </div>

              </div>

              {/* Bottom Stats */}

              <div className="grid grid-cols-3 gap-4 mt-10">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">

                  <h3 className="text-2xl font-black text-cyan-300">
                    500+
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    Questions
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">

                  <h3 className="text-2xl font-black text-green-300">
                    24/7
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    AI Coach
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">

                  <h3 className="text-2xl font-black text-yellow-300">
                    10K+
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    Students
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Badge 1 */}

            <div
              className="
              hidden
              lg:flex
              absolute
              -top-8
              -left-8
              rounded-2xl
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              px-5
              py-4
              "
            >
              <div>

                <h3 className="text-lg font-bold text-white">
                  Crack SDE Interview 🚀
                </h3>

              </div>

            </div>

            {/* Floating Badge 2 */}

            <div
              className="
              hidden
              lg:flex
              absolute
              -bottom-8
              -right-8
              rounded-2xl
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              px-5
              py-4
              "
            >

            </div>

          </div>

        </div>

      </div>
 </div>
    </section>
  );
}

export default Hero;