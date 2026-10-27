import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative py-24 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className="
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-[30px]
          shadow-[0_20px_80px_rgba(0,0,0,.30)]
          overflow-hidden
          "
        >

          <div
            className="
            grid
            lg:grid-cols-5
            gap-8
            p-10
            lg:p-14
            "
          >

            {/* Brand */}

            <div className="lg:col-span-2">

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Sparkles
                    className="text-white"
                    size={24}
                  />
                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    InterviewAce

                    <span className="text-cyan-300">
                      {" "}AI
                    </span>

                  </h2>

                  <p className="text-sm text-slate-400">
                    AI Interview Platform
                  </p>

                </div>

              </div>

              <p
                className="
                mt-8
                max-w-md
                leading-8
                text-slate-300
                "
              >
                Practice smarter with AI-powered mock interviews,
                resume analysis, personalised feedback and
                interview analytics.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  🤖 AI Powered
                </span>

                <span className="rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                  🚀 10K+ Students
                </span>

              </div>

              <Link
                to="/signup"
                className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Start Free

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

            </div>

            {/* Product */}

            <div>

              <h3 className="text-xl font-bold text-white">
                Product
              </h3>

              <div className="mt-8 space-y-4">

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  AI Interview
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Resume Analyzer
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Dashboard
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Pricing
                </p>

              </div>

            </div>

            {/* Company */}

            <div>

              <h3 className="text-xl font-bold text-white">
                Company
              </h3>

              <div className="mt-8 space-y-4">

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  About
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Careers
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Contact
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Privacy
                </p>

              </div>

            </div>

            {/* Resources */}

            <div>

              <h3 className="text-xl font-bold text-white">
                Resources
              </h3>

              <div className="mt-8 space-y-4">

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Blog
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Documentation
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  FAQs
                </p>

                <p className="text-slate-400 hover:text-cyan-300 transition cursor-pointer">
                  Support
                </p>

              </div>

            </div>
                      </div>

          {/* Divider */}

          <div className="border-t border-white/10"></div>

          {/* Bottom */}

          <div
            className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
            px-10
            lg:px-14
            py-8
            "
          >

            {/* Left */}

            <div>

              <p className="text-slate-300">

                © 2026

                <span className="font-semibold text-white">
                  {" "}InterviewAce AI
                </span>

                . All Rights Reserved.

              </p>

              <p className="mt-2 text-sm text-slate-500">
                Designed & Developed with ❤️ using React, Node.js and AI.
              </p>

            </div>

            {/* Social */}

            <div className="flex items-center gap-4">

              <a
                href="#"
                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-slate-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                hover:text-cyan-300
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-slate-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                hover:text-cyan-300
                "
              >
               <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-slate-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                hover:text-cyan-300
                "
              >
               <FaXTwitter size={22} />
              </a>

              <a
                href="mailto:hello@interviewace.ai"
                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-slate-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                hover:text-cyan-300
                "
              >
                <MdEmail size={22} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;