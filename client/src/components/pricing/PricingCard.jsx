import { CheckCircle2, ArrowRight } from "lucide-react";
import PopularBadge from "./PopularBadge";

function PricingCard({ plan }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        border
        backdrop-blur-3xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_25px_80px_rgba(34,211,238,.18)]

        ${
          plan.popular
            ? "bg-gradient-to-b from-cyan-500/15 to-blue-600/10 border-cyan-400/40 scale-105"
            : "bg-white/5 border-white/10 hover:border-cyan-400/20"
        }
      `}
    >
      {/* Popular Badge */}
      {plan.popular && <PopularBadge />}

      {/* Plan Name */}
      <h3 className="text-3xl font-black text-white">
        {plan.name}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-300">
        {plan.description}
      </p>

      {/* Price */}
      <div className="mt-10 flex items-end gap-2">
        <h2
          className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-purple-400
            bg-clip-text
            text-transparent
          "
        >
          {plan.price}
        </h2>

        <span className="mb-2 text-slate-400">
          {plan.duration}
        </span>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-white/10"></div>

      {/* Features */}
      <div className="mt-10 space-y-5">
        {plan.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <CheckCircle2
              size={22}
              className="text-green-400 shrink-0"
            />

            <span className="text-slate-300 leading-7">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className={`
          group
          mt-10
          w-full
          rounded-2xl
          py-4
          font-semibold
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-2

          ${
            plan.popular
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 hover:shadow-[0_15px_40px_rgba(34,211,238,.35)]"
              : "border border-white/15 bg-white/10 text-white hover:bg-white hover:text-slate-900"
          }
        `}
      >
        {plan.buttonText}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Bottom Badge */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-4
          text-center
        "
      >
        <p className="text-sm text-slate-400">
          {plan.popular
            ? "⭐ Most developers choose this plan"
            : "Upgrade anytime as your preparation grows"}
        </p>
      </div>
    </div>
  );
}

export default PricingCard;