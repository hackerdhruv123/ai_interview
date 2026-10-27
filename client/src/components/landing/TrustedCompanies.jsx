import {
  Building2,
  BriefcaseBusiness,
  Cpu,
  Cloud,
  ShieldCheck,
  Code2,
  Layers3,
  Rocket,
} from "lucide-react";
function TrustedCompanies() {
  const companies = [
    {
      name: "Google",
      icon: <Building2 size={34} />,
      color: "text-blue-400",
    },
    {
      name: "Microsoft",
      icon: <Layers3 size={34} />,
      color: "text-cyan-400",
    },
    {
      name: "Amazon",
      icon: <Cloud size={34} />,
      color: "text-orange-400",
    },
    {
      name: "Meta",
      icon: <Cpu size={34} />,
      color: "text-indigo-400",
    },
    {
      name: "Netflix",
      icon: <Rocket size={34} />,
      color: "text-red-400",
    },
    {
      name: "Adobe",
      icon: <BriefcaseBusiness size={34} />,
      color: "text-pink-400",
    },
    {
      name: "Atlassian",
      icon: <ShieldCheck size={34} />,
      color: "text-sky-400",
    },
    {
      name: "Uber",
      icon: <Code2 size={34} />,
      color: "text-green-400",
    },
  ];

  return (
   <section
  id="companies"
  className="relative py-24 overflow-hidden bg-transparent"
>
      {/* Background Glow */}

      <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-400/20
            bg-blue-500/10
            px-5
            py-2
            text-sm
            font-medium
            text-blue-300
            "
          >
            🚀 Prepare for Top Tech Interviews
          </span>

          <h2
            className="
            mt-6
            text-4xl
            lg:text-5xl
            font-black
            text-white
            "
          >
            Practice for Leading
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Companies
            </span>
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-300
            leading-8
            "
          >
            Build confidence with company-inspired interview
            practice and improve your chances of cracking
            top software engineering roles.
          </p>

        </div>

        {/* Companies Grid */}

        <div
          className="
          mt-16
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >
          {companies.map((company) => (
            <div
              key={company.name}
              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-7
              transition-all
              duration-300
              hover:-translate-y-2
              hover:bg-white/10
              hover:border-blue-400/30
              hover:shadow-[0_20px_60px_rgba(59,130,246,0.20)]
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
                  ${company.color}
                  group-hover:scale-110
                  transition
                `}
              >
                {company.icon}
              </div>

              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-white
                "
              >
                {company.name}
              </h3>

              <p
                className="
                mt-2
                text-sm
                leading-6
                text-slate-400
                "
              >
                Company-inspired interview preparation
                and AI mock interview experience.
              </p>
                          </div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div
          className="
          mt-20
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-7
            text-center
            "
          >
            <h3 className="text-4xl font-black text-cyan-300">
              500+
            </h3>

            <p className="mt-2 text-slate-400">
              AI Interview Questions
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-7
            text-center
            "
          >
            <h3 className="text-4xl font-black text-green-300">
              10K+
            </h3>

            <p className="mt-2 text-slate-400">
              Active Learners
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-7
            text-center
            "
          >
            <h3 className="text-4xl font-black text-yellow-300">
              92%
            </h3>

            <p className="mt-2 text-slate-400">
              Average AI Score
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-7
            text-center
            "
          >
            <h3 className="text-4xl font-black text-purple-300">
              24/7
            </h3>

            <p className="mt-2 text-slate-400">
              AI Career Support
            </p>
          </div>
        </div>

        {/* Bottom Message */}

        <div className="mt-16 text-center">

          <p
            className="
            text-lg
            text-slate-300
            max-w-3xl
            mx-auto
            leading-8
            "
          >
            Whether you're preparing for your first internship or a software
            engineering role, InterviewAce AI helps you practise consistently,
            improve with AI-driven feedback and build confidence for technical
            interviews.
          </p>

        </div>

      </div>

    </section>
  );
}

export default TrustedCompanies;