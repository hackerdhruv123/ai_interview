import {
  Quote,
  Star,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

function Testimonials() {

  const testimonials = [
    {
      id: 1,
      name: "Nitu Chinar ",
      role: "Frontend Developer",
      review:
        "The AI feedback completely changed the way I prepare for interviews. My confidence improved after every mock interview.",
    },
    {
      id: 2,
      name: "soumen Mondal",
      role: "Software Engineer",
      review:
        "Company-inspired interview questions felt incredibly realistic. The dashboard helped me track my improvement every week.",
    },
    {
      id: 3,
      name: "Dhruv Kumar",
      role: "Full Stack Developer",
      review:
        "One of the best interview preparation platforms I have used. The AI feedback is detailed and very practical.",
    },
  ];

  return (

<section className="relative py-28 overflow-hidden">

{/* Background Glow */}

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
Success Stories
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

Loved By

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

Future Developers

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

Hear how aspiring developers improved
their interview performance with
InterviewAce AI.

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

{testimonials.map((item) => (

<div
key={item.id}
className="
group
rounded-[30px]
border
border-white/10
bg-white/5
backdrop-blur-2xl
p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400/30
hover:bg-white/10
hover:shadow-[0_20px_60px_rgba(34,211,238,.18)]
"
>

<div className="flex items-center justify-between">

<div
className="
w-16
h-16
rounded-full
bg-gradient-to-r
from-blue-600
to-cyan-500
flex
items-center
justify-center
text-white
text-2xl
font-bold
"
>

{item.name.charAt(0)}

</div>

<Quote
className="
text-cyan-300
opacity-70
"
size={34}
/>

</div>

<h3
className="
mt-7
text-2xl
font-bold
text-white
"
>

{item.name}

</h3>

<div className="flex items-center gap-2 mt-2">

<p className="text-cyan-300 font-medium">
{item.role}
</p>

<BadgeCheck
size={16}
className="text-green-400"
/>

</div>

<div className="flex gap-1 mt-5">

{[1,2,3,4,5].map((star)=>(
<Star
key={star}
size={18}
className="fill-yellow-400 text-yellow-400"
/>
))}

</div>

<p
className="
mt-6
leading-8
text-slate-300
italic
"
>

"{item.review}"

</p>
              {/* Footer */}

              <div
                className="
                mt-8
                flex
                items-center
                justify-between
                "
              >

                <span
                  className="
                  rounded-full
                  border
                  border-green-400/20
                  bg-green-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-green-300
                  "
                >
                  Verified Review
                </span>

                <span className="text-slate-500 text-sm">
                  5.0 Rating
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Community Stats */}

        <div
          className="
          mt-24
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
              label: "Interview Questions",
            },
            {
              value: "92%",
              label: "Average AI Score",
            },
            {
              value: "4.9/5",
              label: "User Rating",
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
              p-8
              text-center
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

        {/* Bottom Quote */}

        <div
          className="
          mt-20
          rounded-[36px]
          border
          border-white/10
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-purple-500/10
          backdrop-blur-3xl
          p-12
          text-center
          "
        >

          <Quote
            className="
            mx-auto
            text-cyan-300
            "
            size={44}
          />

          <h2
            className="
            mt-6
            text-4xl
            lg:text-5xl
            font-black
            text-white
            "
          >
            Join Thousands Of

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
              Successful Candidates
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
            Improve your interview skills with AI-powered mock interviews,
            personalised feedback, resume analysis and performance tracking —
            all in one platform.
          </p>

        </div>

      </div>

    </section>

  );
}

export default Testimonials;