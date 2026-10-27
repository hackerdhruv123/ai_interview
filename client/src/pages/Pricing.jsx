import pricingPlans from "../data/pricingPlans";
import PricingCard from "../components/pricing/PricingCard";
import { Sparkles } from "lucide-react";

function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">

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
              Pricing Plans
            </span>

          </div>

          <h2
            className="
            mt-7
            text-5xl
            lg:text-6xl
            font-black
            text-white
            "
          >

            Simple Pricing

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

              For Everyone

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

            Start free and upgrade whenever you're
            ready. No hidden charges, no complicated
            plans.

          </p>

          {/* Pricing Toggle */}

          <div
            className="
            mt-10
            inline-flex
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-2
            "
          >

            <button
              className="
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-3
              font-semibold
              text-white
              "
            >
              Monthly
            </button>

            <button
              className="
              rounded-xl
              px-8
              py-3
              font-semibold
              text-slate-300
              hover:text-white
              transition
              "
            >
              Yearly
            </button>

          </div>

        </div>

        {/* Pricing Cards */}

        <div
          className="
          mt-24
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
          items-stretch
        "
        >

          {pricingPlans.map((plan) => (

            <PricingCard
              key={plan.id}
              plan={plan}
            />

          ))}

        </div>
                {/* Bottom Section */}

        <div
          className="
          mt-24
          rounded-[36px]
          border
          border-white/10
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-purple-500/10
          backdrop-blur-3xl
          p-10
          lg:p-14
          "
        >

          <div
            className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            "
          >

            {/* Left */}

            <div>

              <h3
                className="
                text-3xl
                lg:text-4xl
                font-black
                text-white
                "
              >
                Every Plan Includes
              </h3>

              <p
                className="
                mt-4
                max-w-2xl
                text-lg
                leading-8
                text-slate-300
                "
              >
                Whether you choose the Free or Pro plan,
                you'll always get a premium interview
                preparation experience powered by AI.
              </p>

            </div>

            {/* Right */}

            <div
              className="
              grid
              grid-cols-2
              gap-4
              "
            >

              {[
                "🤖 AI Interviews",
                "📄 Resume Analysis",
                "📊 Analytics",
                "⚡ Instant Feedback",
                "🎯 Company Questions",
                "🔒 Secure Platform",
              ].map((item) => (

                <div
                  key={item}
                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-5
                  py-4
                  text-slate-300
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* Trust Badges */}

          <div
            className="
            mt-12
            flex
            flex-wrap
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
              text-sm
              font-medium
              text-green-300
              "
            >
              ✅ Cancel Anytime
            </span>

            <span
              className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
              "
            >
              🔒 Secure Payments
            </span>

            <span
              className="
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-purple-300
              "
            >
              ⭐ Trusted by 10K+ Students
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;