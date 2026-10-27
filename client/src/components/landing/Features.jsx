import {
  Bot,
  MessageSquareText,
  Building2,
  FileText,
  BarChart3,
  Mic,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Features() {

  const features = [
    {
      title: "AI Mock Interview",
      description:
        "Practice realistic AI-powered interviews with adaptive questions and real interview scenarios.",
      icon: <Bot size={32} />,
      color: "text-cyan-300",
    },
    {
      title: "Instant AI Feedback",
      description:
        "Receive detailed feedback on confidence, communication and technical answers instantly.",
      icon: <MessageSquareText size={32} />,
      color: "text-green-300",
    },
    {
      title: "Company Specific Questions",
      description:
        "Prepare for interviews inspired by Google, Amazon, Microsoft, Meta and more.",
      icon: <Building2 size={32} />,
      color: "text-yellow-300",
    },
    {
      title: "Resume Analysis",
      description:
        "Generate interview questions directly from your resume with AI insights.",
      icon: <FileText size={32} />,
      color: "text-pink-300",
    },
    {
      title: "Performance Analytics",
      description:
        "Track scores, strengths, weaknesses and interview history in one dashboard.",
      icon: <BarChart3 size={32} />,
      color: "text-orange-300",
    },
    {
      title: "Voice Interview",
      description:
        "Improve speaking confidence by practising with an AI interviewer using voice mode.",
      icon: <Mic size={32} />,
      color: "text-purple-300",
    },
  ];

  return (

<section
className="relative py-28 overflow-hidden"
>

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
Everything You Need
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

Crack Your

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

Dream Interview

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

Powerful AI tools designed to help you practise smarter,
receive instant feedback and confidently prepare for
technical interviews.

</p>

</div>

{/* Cards */}

<div
className="
mt-20
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-8
"
>

{features.map((feature) => (

<div
key={feature.title}
className="
group
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-2xl
p-8
transition-all
duration-300
hover:-translate-y-2
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
${feature.color}
group-hover:scale-110
transition
`}
>

{feature.icon}

</div>

<h3
className="
mt-7
text-2xl
font-bold
text-white
"
>

{feature.title}

</h3>

<p
className="
mt-4
text-slate-300
leading-7
"
>

{feature.description}

</p>
              {/* Learn More */}

              <div
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                font-semibold
                text-cyan-300
                transition-all
                duration-300
                group-hover:gap-4
                "
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div
          className="
          mt-24
          rounded-[32px]
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
            Ready to Crack
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
              Your Dream Interview?
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
            Join thousands of students improving their interview skills
            with AI-powered mock interviews, personalised feedback,
            resume analysis and detailed performance tracking.
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
              Explore Features
            </button>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Features;