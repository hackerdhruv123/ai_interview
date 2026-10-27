import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          p-12
          lg:p-20
          text-center
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
          "
        >

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
              Ready To Begin?
            </span>

          </div>

          <h2
            className="
            mt-8
            text-5xl
            lg:text-6xl
            font-black
            text-white
            leading-tight
            "
          >

            Start Your

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

              AI Interview Journey

            </span>

          </h2>

          <p
            className="
            mt-8
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-slate-300
            "
          >

            Practice realistic AI interviews, receive instant
            personalised feedback and prepare confidently
            for your next opportunity.

          </p>

          <div
            className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-5
            "
          >

            <Link
              to="/signup"
              className="
              group
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              "
            >

              Get Started Free

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </Link>

            <button
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/15
              bg-white/10
              backdrop-blur-xl
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-slate-900
              "
            >

              <PlayCircle size={20} />

              Watch Demo

            </button>
                      </div>

          {/* Stats */}

          <div
            className="
            mt-16
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >

            {[
              {
                value: "10K+",
                label: "Students",
              },
              {
                value: "500+",
                label: "AI Questions",
              },
              {
                value: "92%",
                label: "Average Score",
              },
              {
                value: "24/7",
                label: "AI Support",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
                "
              >

                <h3
                  className="
                  text-4xl
                  font-black
                  bg-gradient-to-r
                  from-cyan-300
                  via-blue-400
                  to-purple-400
                  bg-clip-text
                  text-transparent
                  "
                >
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* Bottom Badge */}

          <div
            className="
            mt-16
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            "
          >

            <span
              className="
              rounded-full
              border
              border-green-400/20
              bg-green-500/10
              px-5
              py-2
              text-green-300
              text-sm
              font-medium
              "
            >
              ✅ No Credit Card Required
            </span>

            <span
              className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-cyan-300
              text-sm
              font-medium
              "
            >
              🚀 Start Free in Seconds
            </span>

            <span
              className="
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/10
              px-5
              py-2
              text-purple-300
              text-sm
              font-medium
              "
            >
              🤖 AI Powered Platform
            </span>

          </div>

        </div>

      </div>

    </section>

  );
}

export default CTA;