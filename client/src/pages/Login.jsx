import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import api from "../api/axios";
import background from "../assets/images/background.jpg";
function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        }

        if (!password.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true);

        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);

            alert(response.data.message);

            // Login ke baad Home Page
            navigate("/home");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (

   <div className="relative min-h-screen flex justify-center items-start overflow-y-auto py-8 px-4">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url(${background})`,
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-slate-950/75"></div>

  {/* Login Card */}
  <div className="relative z-10
      w-full
      max-w-md
      rounded-[36px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-[30px]
      shadow-[0_25px_80px_rgba(0,0,0,.45)]
      p-7
      "
    >

      {/* Badge */}

      <div className="flex justify-center">

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
          "
        >

          ✨

          <span className="text-sm font-medium text-cyan-300">
            AI Powered Platform
          </span>

        </div>

      </div>

      {/* Heading */}

      <div className="mt-5 text-center">


        <p className="mt-5 text-slate-300 leading-7">

          Continue your interview journey with
          InterviewAce AI.

        </p>

      </div>

      {/* Back */}

      <div className="mt-8 text-center">

        <Link
          to="/"
          className="
          inline-flex
          items-center
          gap-2
          text-cyan-300
          hover:text-white
          transition
          "
        >
          ← Back to Home
        </Link>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
       className="mt-6 space-y-5"
      >
              {/* Email */}

        <div>

          <label className="block text-sm font-medium text-slate-300 mb-3">
            Email Address
          </label>

          <div
            className="
            flex
            items-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            px-5
            transition-all
            duration-300
            focus-within:border-cyan-400
            focus-within:shadow-[0_0_20px_rgba(34,211,238,.25)]
            "
          >

            <HiOutlineMail
              className="text-cyan-300 text-xl"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
              w-full
              bg-transparent
              px-4
              py-4
              outline-none
              text-white
              placeholder:text-slate-500
              "
            />

          </div>

          {emailError && (
            <p className="text-red-400 text-sm mt-2">
              {emailError}
            </p>
          )}

        </div>

        {/* Password */}

        <div>

          <div className="flex justify-between mb-3">

            <label className="text-sm font-medium text-slate-300">
              Password
            </label>

            <Link
              to="/forgot-password"
              className="
              text-cyan-300
              hover:text-white
              transition
              "
            >
              Forgot Password?
            </Link>

          </div>

          <div
            className="
            flex
            items-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            px-5
            transition-all
            duration-300
            focus-within:border-cyan-400
            focus-within:shadow-[0_0_20px_rgba(34,211,238,.25)]
            "
          >

            <FiLock
              className="text-cyan-300 text-xl"
            />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="
              w-full
              bg-transparent
              px-4
              py-5
              outline-none
              text-white
              placeholder:text-slate-500
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
              text-slate-400
              hover:text-cyan-300
              transition
              "
            >
              {showPassword ? (
                <FiEyeOff size={22} />
              ) : (
                <FiEye size={22} />
              )}
            </button>

          </div>

          {passwordError && (
            <p className="text-red-400 text-sm mt-2">
              {passwordError}
            </p>
          )}

        </div>

        {/* Login Button */}

        <button
          type="submit"
          disabled={loading}
          className="
          group
          w-full
          py-4
          rounded-2xl
          font-semibold
          text-lg
          text-white
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-purple-600
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-[0_20px_40px_rgba(34,211,238,.30)]
          disabled:opacity-70
          "
        >

          {loading ? "Signing In..." : "Login"}

        </button>

        {/* Divider */}

        <div className="flex items-center py-4">

          <div className="flex-1 h-px bg-white/10"></div>

          <span className="px-5 text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-white/10"></div>

        </div>
        
                {/* Bottom */}

        <div className="mt-67 text-center">

          <p className="text-slate-400">

            Don't have an account?

            <Link
              to="/signup"
              className="
              ml-2
              font-semibold
              text-cyan-300
              hover:text-white
              transition
              "
            >
              Create Account
            </Link>

          </p>

        </div>



      </form>

      {/* Footer */}

      <div className="mt-10 border-t border-white/10 pt-6 text-center">

        <p className="text-sm text-slate-500">

          © 2026 InterviewAce AI

        </p>

        <p className="mt-2 text-xs text-slate-600">

          Designed with ❤️ for developers preparing for interviews.

        </p>

      </div>

    </div>

  </div>
);
}

export default Login;