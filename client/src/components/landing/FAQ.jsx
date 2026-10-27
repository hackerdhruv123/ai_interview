import { useState } from "react";
import {
  Plus,
  Minus,
  Sparkles,
  HelpCircle,
} from "lucide-react";

function FAQ() {

  const faqs = [
    {
      id: 1,
      question: "What is InterviewAce AI?",
      answer:
        "InterviewAce AI is an AI-powered interview preparation platform that helps students practice realistic mock interviews and receive personalised AI feedback.",
    },
    {
      id: 2,
      question: "Is there a free plan available?",
      answer:
        "Yes. You can start with the free plan and upgrade anytime to unlock unlimited AI interviews, resume analysis and advanced insights.",
    },
    {
      id: 3,
      question: "Can I prepare for specific companies?",
      answer:
        "Yes. You can practise company-inspired interview questions for Google, Amazon, Microsoft, Meta and many other leading technology companies.",
    },
    {
      id: 4,
      question: "How does AI feedback work?",
      answer:
        "Our AI evaluates your answers, communication skills, confidence, technical knowledge and provides detailed suggestions for improvement.",
    },
    {
      id: 5,
      question: "Can I upload my resume?",
      answer:
        "Absolutely. Upload your resume and InterviewAce AI generates personalised interview questions based on your skills and experience.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (

<section className="relative py-28 overflow-hidden">

<div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

<div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

<div className="relative max-w-5xl mx-auto px-6">

{/* Heading */}

<div className="text-center">

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

<Sparkles size={16}/>

<span className="text-sm font-medium">
Frequently Asked Questions
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

Have Questions?

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

We've Got Answers

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

Everything you need to know about
InterviewAce AI before starting your
interview preparation journey.

</p>

</div>

{/* Accordion */}

<div className="mt-20 space-y-6">

{faqs.map((faq)=>(

<div
key={faq.id}
className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-2xl
overflow-hidden
transition-all
duration-300
hover:border-cyan-400/30
"
>

<button
onClick={()=>toggleFAQ(faq.id)}
className="
w-full
flex
items-center
justify-between
p-7
text-left
"
>

<div className="flex items-center gap-5">

<div
className="
w-12
h-12
rounded-2xl
bg-white/5
flex
items-center
justify-center
text-cyan-300
"
>

<HelpCircle size={22}/>

</div>

<div>

<h3
className="
text-xl
font-bold
text-white
"
>

{faq.question}

</h3>

</div>

</div>

<div
className="
text-cyan-300
"
>

{activeId===faq.id
?
<Minus size={24}/>
:
<Plus size={24}/>
}

</div>

</button>
              {/* Answer */}

              <div
                className={`
                  transition-all
                  duration-500
                  overflow-hidden
                  ${
                    activeId === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-7 pb-7">

                  <div className="ml-[68px] border-l border-white/10 pl-6">

                    <p
                      className="
                      leading-8
                      text-slate-300
                      "
                    >
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Support Card */}

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
            Still Have

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
              Questions?
            </span>

          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg
            leading-8
            text-slate-300
            "
          >
            Our team is always ready to help you.
            Reach out anytime and we'll help you
            get started with InterviewAce AI.

          </p>

          <div className="mt-10 flex justify-center">

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
              Contact Support
            </button>

          </div>

        </div>

      </div>

    </section>

  );
}

export default FAQ;