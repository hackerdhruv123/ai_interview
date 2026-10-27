import HeroScore from "../components/result/HeroScore";
import PerformanceCards from "../components/result/PerformanceCards";
import ScoreChart from "../components/result/ScoreChart";
import Feedback from "../components/result/Feedback";
import Roadmap from "../components/result/Roadmap";
import ActionButtons from "../components/result/ActionButtons";
import background from "../assets/images/background.jpg";
function Result() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-20">

        <HeroScore />
        <PerformanceCards />
        <ScoreChart />
        <Feedback />
        <Roadmap />
        <ActionButtons />

      </div>
    </div>
  );
}

export default Result;