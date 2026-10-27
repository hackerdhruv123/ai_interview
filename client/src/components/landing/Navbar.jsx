import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "How It Works",
      href: "#how-it-works",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-white/10
      bg-slate-950/40
      backdrop-blur-2xl
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        h-20
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            via-cyan-400
            to-purple-500
            flex
            items-center
            justify-center
            shadow-xl
            group-hover:rotate-6
            transition
            duration-300
            "
          >
            <Sparkles
              size={20}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-2xl font-black text-white">

              InterviewAce

              <span className="text-blue-400">
                {" "}AI
              </span>

            </h1>

            <p className="text-xs text-slate-400">
              AI Mock Interview Platform
            </p>

          </div>
        </Link>

        {/* Desktop Navigation */}

        <ul
          className="
          hidden
          lg:flex
          items-center
          gap-8
          "
        >
          {navLinks.map((item) => (
            <li key={item.name}>

              <a
                href={item.href}
                className="
                relative
                text-slate-300
                font-medium
                transition
                hover:text-white
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-blue-400
                after:transition-all
                hover:after:w-full
                "
              >
                {item.name}
              </a>

            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-4
          "
        >

          <Link
            to="/login"
            className="
            px-6
            py-2.5
            rounded-xl
            border
            border-white/15
            bg-white/10
            backdrop-blur-xl
            text-white
            font-medium
            transition-all
            duration-300
            hover:bg-white
            hover:text-slate-900
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
            px-6
            py-2.5
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-semibold
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-blue-500/30
            "
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
          lg:hidden
          w-11
          h-11
          rounded-xl
          bg-white/10
          border
          border-white/10
          flex
          items-center
          justify-center
          text-white
          "
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
              {/* ================= Mobile Menu ================= */}

        {isOpen && (
          <div
            className="
            lg:hidden
            absolute
            top-20
            left-4
            right-4
            rounded-3xl
            border
            border-white/10
            bg-slate-950/95
            backdrop-blur-3xl
            shadow-2xl
            overflow-hidden
            animate-in
            fade-in
            slide-in-from-top-5
            duration-300
            "
          >
            <div className="flex flex-col p-6">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  py-4
                  text-slate-300
                  font-medium
                  border-b
                  border-white/10
                  hover:text-blue-400
                  transition
                  "
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Buttons */}

              <div className="flex flex-col gap-4 mt-8">

                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="
                  w-full
                  py-3
                  rounded-xl
                  text-center
                  border
                  border-white/15
                  bg-white/10
                  text-white
                  font-medium
                  hover:bg-white
                  hover:text-slate-900
                  transition-all
                  duration-300
                  "
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="
                  w-full
                  py-3
                  rounded-xl
                  text-center
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  "
                >
                  Get Started Free
                </Link>

              </div>

            </div>
          </div>
        )}

    </nav>
  );
}

export default Navbar;