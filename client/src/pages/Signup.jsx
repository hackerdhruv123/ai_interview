import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import api from "../api/axios";

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

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

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-white">
            InterviewAce AI
          </h1>

        </div>

        <div className="mt-8 text-center">

          <h2 className="text-3xl font-bold text-white">
            Create Account
          </h2>

          <p className="text-slate-400 mt-2">
            Start your AI interview journey today.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Name */}

          <div>

            <label className="block text-sm text-slate-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500">

              <HiOutlineUser className="text-slate-400 text-xl" />

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-slate-400"
              />

            </div>

            {nameError && (
              <p className="text-red-400 text-sm mt-2">
                {nameError}
              </p>
            )}

          </div>

          {/* Email */}

          <div>

            <label className="block text-sm text-slate-300 mb-2">
              Email Address
            </label>

            <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500">

              <HiOutlineMail className="text-slate-400 text-xl" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-slate-400"
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

            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500">

              <FiLock className="text-slate-400 text-xl" />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-slate-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-white"
              >
                {showPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>

            </div>

            {passwordError && (
              <p className="text-red-400 text-sm mt-2">
                {passwordError}
              </p>
            )}

          </div>

          {/* Confirm Password */}

          <div>

            <label className="block text-sm text-slate-300 mb-2">
              Confirm Password
            </label>

            <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500">

              <FiLock className="text-slate-400 text-xl" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm your password"
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-slate-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="text-slate-400 hover:text-white"
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>

            </div>

            {confirmPasswordError && (
              <p className="text-red-400 text-sm mt-2">
                {confirmPasswordError}
              </p>
            )}

          </div>

          {/* Signup Button */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              hover:from-blue-700
              hover:to-indigo-700
              transition-all
              duration-300
              disabled:opacity-70
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>

        {/* Divider */}

        <div className="flex items-center my-7">

          <div className="flex-1 h-px bg-slate-700"></div>

          <span className="px-4 text-slate-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-slate-700"></div>

        </div>

        {/* Footer */}

        <p className="text-center text-slate-400 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;