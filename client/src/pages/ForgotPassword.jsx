import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import api from "../api/axios";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setSuccess("");
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    try {

      setLoading(true);

      const response = await api.post(
        "/auth/forgot-password",
        {
          email,
        }
      );

      setSuccess(response.data.message);

      setEmail("");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Icon */}

        <div className="flex justify-center">

          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

            <Mail className="text-blue-600 w-10 h-10" />

          </div>

        </div>

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center mt-6">

          Forgot Password

        </h1>

        <p className="text-center text-gray-500 mt-2">

          Enter your registered email address.
          We'll send you a password reset link.

        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">

              Email Address

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Success */}

          {success && (

            <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-3 text-sm">

              {success}

            </div>

          )}

          {/* Error */}

          {error && (

            <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-3 text-sm">

              {error}

            </div>

          )}

          {/* Button */}

          <button

            type="submit"

            disabled={loading}

            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70"

          >

            {loading ? (

              <>

                <Loader2
                  className="animate-spin"
                  size={20}
                />

                Sending...

              </>

            ) : (

              "Send Reset Link"

            )}

          </button>

        </form>

        {/* Back */}

        <Link

          to="/login"

          className="flex justify-center items-center gap-2 mt-6 text-blue-600 hover:underline"

        >

          <ArrowLeft size={18} />

          Back to Login

        </Link>

      </div>

    </div>

  );

}

export default ForgotPassword;