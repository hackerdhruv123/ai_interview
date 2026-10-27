import {
  Upload,
  Bot,
  BadgeCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function HowItWorks() {

  const steps = [
    {
      step: "01",
      title: "Upload Your Resume",
      description:
        "Upload your resume and let AI understand your experience, skills and career goals.",
      icon: <Upload size={34} />,
      color: "text-cyan-300",
    },
    {
      step: "02",
      title: "Start AI Interview",
      description:
        "Choose your target role and practise realistic interviews with AI-generated questions.",
      icon: <Bot size={34} />,
      color: "text-blue-300",
    },
    {
      step: "03",
      title: "Receive AI Feedback",
      description:
        "Get detailed feedback, performance reports and personalised improvement tips.",
      icon: <BadgeCheck size={34} />,
      color: "text-green-300",
    },
  ];

  return (

<section
className="relative py-28 overflow-hidden"
>

{/* Glow */}

<div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

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
Simple Process
</span>

</div>

<h2
className="
mt-6
text-5xl
font-black
text-white
leading-tight
"
>

Get Started In

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

Just 3 Steps

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

Upload your resume, practise interviews and
receive AI-powered feedback to continuously
improve your interview performance.

</p>

</div>

{/* Timeline */}

<div
className="
relative
mt-24
grid
grid-cols-1
lg:grid-cols-3
gap-10
"
>

{/* Desktop Line */}

<div
className="
hidden
lg:block
absolute
top-12
left-1/2
-translate-x-1/2
w-[75%]
h-[2px]
bg-gradient-to-r
from-cyan-500
via-blue-500
to-purple-500
opacity-30
"
></div>

{steps.map((step) => (

<div
key={step.step}
className="
relative
group
"
>

{/* Step Number */}

<div
className="
absolute
-top-5
left-1/2
-translate-x-1/2
z-20
w-12
h-12
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-500
flex
items-center
justify-center
font-bold
text-white
shadow-xl
"
>

{step.step}

</div>

{/* Card */}

<div
className="
mt-8
rounded-[30px]
border
border-white/10
bg-white/5
backdrop-blur-2xl
p-8
pt-12
transition-all
duration-300
hover:-translate-y-3
hover:bg-white/10
hover:border-cyan-400/30
hover:shadow-[0_20px_60px_rgba(34,211,238,.18)]
"
>

<div
className={`
w-16
h-16
rounded-2xl
bg-white/5
flex
items-center
justify-center
${step.color}
group-hover:scale-110
transition
`}
>

{step.icon}

</div>

<h3
className="
mt-8
text-2xl
font-bold
text-white
"
>

{step.title}

</h3>

<p
className="
mt-4
leading-7
text-slate-300
"
>

{step.description}

</p>
              {/* Step Footer */}

              <div className="mt-8 flex items-center justify-between">

                <span
                  className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-cyan-300
                  "
                >
                  Step {step.step}
                </span>

                <button
                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-300
                  font-semibold
                  transition-all
                  duration-300
                  group-hover:gap-4
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                    "
                  />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Bottom CTA */}

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
        text-center
        "
      >

        <h2
          className="
          text-4xl
          lg:text-5xl
          font-black
          text-white
          "
        >
          Your Next Interview

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
            Starts Today
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
          Don't wait until your real interview to practise.
          Start today with AI-powered mock interviews,
          personalised feedback and performance tracking.
        </p>

        <div
          className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-5
          "
        >

          <button
            className="
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
            Start Free Interview
          </button>

          <button
            className="
            px-8
            py-4
            rounded-2xl
            border
            border-white/15
            bg-white/10
            backdrop-blur-xl
            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-white
            hover:text-slate-900
            "
          >
            Explore Platform
          </button>

        </div>

      </div>

    </div>

  </section>

  );
}

export default HowItWorks;