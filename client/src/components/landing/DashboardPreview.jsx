import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Mic,
  Settings,
  Bot,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

function DashboardPreview() {
  const stats = [
    {
      title: "Interviews",
      value: "24",
      color: "text-cyan-300",
      icon: <Mic size={22} />,
    },
    {
      title: "Average Score",
      value: "92%",
      color: "text-green-300",
      icon: <TrendingUp size={22} />,
    },
    {
      title: "Completed",
      value: "18",
      color: "text-yellow-300",
      icon: <BarChart3 size={22} />,
    },
    {
      title: "AI Feedback",
      value: "98%",
      color: "text-pink-300",
      icon: <BrainCircuit size={22} />,
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

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
            text-cyan-300
            "
          >
            <Sparkles size={16} />

            <span className="text-sm font-medium">
              Dashboard Preview
            </span>

          </div>

          <h2
            className="
            mt-7
            text-5xl
            font-black
            text-white
            leading-tight
            "
          >

            Powerful AI

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

              Dashboard

            </span>

          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-slate-300
            "
          >
            Track interview performance, AI feedback,
            resume analysis and learning progress
            from one beautiful dashboard.
          </p>

        </div>

        {/* Dashboard */}

        <div
          className="
          mt-20
          rounded-[36px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
          "
        >

          <div className="flex">

            {/* Sidebar */}

            <div
              className="
              hidden
              lg:flex
              w-72
              flex-col
              border-r
              border-white/10
              bg-white/5
              p-8
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Bot className="text-white" />
                </div>

                <div>

                  <h3 className="text-xl font-black text-white">
                    InterviewAce
                  </h3>

                  <p className="text-xs text-slate-400">
                    AI Dashboard
                  </p>

                </div>

              </div>

              <div className="mt-12 space-y-4">

                <div className="flex items-center gap-4 rounded-2xl bg-cyan-500/10 px-5 py-4 text-cyan-300">
                  <LayoutDashboard size={20} />
                  Dashboard
                </div>

                <div className="flex items-center gap-4 rounded-2xl px-5 py-4 text-slate-300 hover:bg-white/5 transition">
                  <Mic size={20} />
                  Interviews
                </div>

                <div className="flex items-center gap-4 rounded-2xl px-5 py-4 text-slate-300 hover:bg-white/5 transition">
                  <FileText size={20} />
                  Resume
                </div>

                <div className="flex items-center gap-4 rounded-2xl px-5 py-4 text-slate-300 hover:bg-white/5 transition">
                  <BarChart3 size={20} />
                  Analytics
                </div>

                <div className="flex items-center gap-4 rounded-2xl px-5 py-4 text-slate-300 hover:bg-white/5 transition">
                  <Settings size={20} />
                  Settings
                </div>

              </div>

            </div>

            {/* Main */}

            <div className="flex-1 p-10">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-4xl font-black text-white">
                    Welcome Back 👋
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Here's your interview progress overview.
                  </p>

                </div>

                <button
                  className="
                  hidden
                  lg:flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  "
                >
                  New Interview

                  <ArrowRight size={18} />

                </button>

              </div>

              {/* Stats */}

              <div
                className="
                mt-10
                grid
                grid-cols-2
                xl:grid-cols-4
                gap-6
                "
              >

                {stats.map((item) => (

                  <div
                    key={item.title}
                    className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    transition
                    hover:-translate-y-2
                    hover:border-cyan-400/30
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`
                        w-12
                        h-12
                        rounded-xl
                        bg-white/5
                        flex
                        items-center
                        justify-center
                        ${item.color}
                        `}
                      >
                        {item.icon}
                      </div>

                      <span className="text-slate-500 text-sm">
                        Live
                      </span>

                    </div>

                    <p className="mt-6 text-slate-400">
                      {item.title}
                    </p>

                    <h2
                      className={`
                      mt-2
                      text-4xl
                      font-black
                      ${item.color}
                      `}
                    >
                      {item.value}
                    </h2>
                                        <p className="mt-2 text-xs text-slate-500">
                      Updated just now
                    </p>

                  </div>

                ))}

              </div>

              {/* AI Performance + Recent Interviews */}

              <div className="grid lg:grid-cols-2 gap-8 mt-10">

                {/* AI Performance */}

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  "
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-bold text-white">
                      AI Performance
                    </h3>

                    <span className="text-cyan-300 font-semibold">
                      92%
                    </span>

                  </div>

                  <div className="mt-8 space-y-6">

                    <div>

                      <div className="flex justify-between text-sm text-slate-300 mb-2">
                        <span>Technical Skills</span>
                        <span>95%</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[95%] h-full rounded-full bg-cyan-400"></div>
                      </div>

                    </div>

                    <div>

                      <div className="flex justify-between text-sm text-slate-300 mb-2">
                        <span>Communication</span>
                        <span>90%</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[90%] h-full rounded-full bg-green-400"></div>
                      </div>

                    </div>

                    <div>

                      <div className="flex justify-between text-sm text-slate-300 mb-2">
                        <span>Confidence</span>
                        <span>94%</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[94%] h-full rounded-full bg-yellow-400"></div>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Recent Interviews */}

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  "
                >

                  <h3 className="text-2xl font-bold text-white">
                    Recent Interviews
                  </h3>

                  <div className="mt-8 space-y-5">

                    {[
                      {
                        role: "Frontend Developer",
                        score: "95%",
                        color: "text-green-300",
                      },
                      {
                        role: "React Developer",
                        score: "90%",
                        color: "text-cyan-300",
                      },
                      {
                        role: "Node.js Developer",
                        score: "84%",
                        color: "text-yellow-300",
                      },
                    ].map((item) => (

                      <div
                        key={item.role}
                        className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        bg-white/5
                        p-5
                        "
                      >

                        <div>

                          <h4 className="text-white font-semibold">
                            {item.role}
                          </h4>

                          <p className="text-sm text-slate-400">
                            Completed Today
                          </p>

                        </div>

                        <span
                          className={`font-bold ${item.color}`}
                        >
                          {item.score}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>
                            {/* Activity + AI Insights */}

              <div className="grid lg:grid-cols-2 gap-8 mt-10">

                {/* Activity Timeline */}

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  "
                >

                  <h3 className="text-2xl font-bold text-white">
                    Recent Activity
                  </h3>

                  <div className="mt-8 space-y-6">

                    {[
                      "Completed React Interview",
                      "Uploaded Resume Successfully",
                      "Received AI Feedback",
                      "Improved Communication Score",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >

                        <div
                          className="
                          mt-1
                          h-3
                          w-3
                          rounded-full
                          bg-cyan-400
                          shadow-[0_0_15px_rgba(34,211,238,.8)]
                          "
                        />

                        <div>

                          <p className="text-white font-medium">
                            {item}
                          </p>

                          <span className="text-sm text-slate-500">
                            Just now
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* AI Insight */}

                <div
                  className="
                  rounded-3xl
                  border
                  border-cyan-400/20
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-blue-500/10
                  to-purple-500/10
                  backdrop-blur-2xl
                  p-8
                  "
                >

                  <h3 className="text-2xl font-bold text-white">
                    🤖 AI Insight
                  </h3>

                  <p
                    className="
                    mt-6
                    leading-8
                    text-slate-300
                    "
                  >
                    Your technical performance is excellent.
                    Focus more on behavioural questions and
                    communication to increase your overall
                    interview score above <span className="font-bold text-cyan-300">95%</span>.
                  </p>

                  <div
                    className="
                    mt-8
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    p-5
                    "
                  >

                    <div className="flex justify-between">

                      <span className="text-slate-300">
                        Interview Readiness
                      </span>

                      <span className="font-bold text-green-300">
                        Excellent
                      </span>

                    </div>

                    <div className="mt-5 h-3 rounded-full bg-white/10 overflow-hidden">

                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div
          className="
          mt-24
          text-center
          "
        >

          <h2
            className="
            text-4xl
            font-black
            text-white
            "
          >
            One Dashboard.

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
              Everything You Need.
            </span>

          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-slate-300
            "
          >
            Practise interviews, analyse your resume,
            improve communication skills and monitor
            your complete preparation journey from
            one intelligent AI dashboard.
          </p>

          <button
            className="
            mt-10
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-semibold
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-cyan-500/30
            "
          >
            Explore Dashboard
          </button>

        </div>

      </div>

    </section>

  );
}

export default DashboardPreview;