import { Sparkles } from "lucide-react";

function PopularBadge() {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">

      <div
        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/30
        bg-gradient-to-r
        from-cyan-500/20
        via-blue-500/20
        to-purple-500/20
        backdrop-blur-3xl
        px-5
        py-2
        shadow-[0_10px_40px_rgba(34,211,238,.25)]
        "
      >

        <Sparkles
          size={15}
          className="text-cyan-300"
        />

        <span
          className="
          text-sm
          font-semibold
          text-white
          "
        >
          Most Popular
        </span>

      </div>

    </div>
  );
}

export default PopularBadge;