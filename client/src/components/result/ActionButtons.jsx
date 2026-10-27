import {
  Download,
  RotateCcw,
  LayoutDashboard,
  Share2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ActionButtons() {
  const navigate = useNavigate();

  const handleDownload = () => {
    alert("PDF download feature coming soon!");
  };

  const handleShare = () => {
    alert("Share feature coming soon!");
  };

  return (
    <section className="mt-20">

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-10
        "
      >

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            What's Next?
          </h2>

          <p className="mt-3 text-slate-300">
            Save your report, continue practicing, or return to your dashboard.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* Download */}

          <button
            onClick={handleDownload}
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <Download size={20} />
            Download Report
          </button>

          {/* New Interview */}

          <button
            onClick={() => navigate("/interview")}
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-6
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <RotateCcw size={20} />
            New Interview
          </button>

          {/* Dashboard */}

          <button
            onClick={() => navigate("/dashboard")}
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-6
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          {/* Share */}

          <button
            onClick={handleShare}
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-cyan-400/30
              bg-cyan-500/10
              px-6
              py-4
              font-semibold
              text-cyan-300
              transition-all
              duration-300
              hover:bg-cyan-500/20
            "
          >
            <Share2 size={20} />
            Share Result
          </button>

        </div>

      </div>

    </section>
  );
}

export default ActionButtons;