import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lock, Loader2, ArrowLeft } from "lucide-react";
import api from "../api/axios";

function ResetPassword() {

    const { token } = useParams();

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccess("");

        setError("");

        if (!password || !confirmPassword) {

            setError("All fields are required.");

            return;

        }

        if (password.length < 8) {

            setError("Password must be at least 8 characters.");

            return;

        }

        if (password !== confirmPassword) {

            setError("Passwords do not match.");

            return;

        }

        try {

            setLoading(true);

            const response = await api.post(

                `/auth/reset-password/${token}`,

                {

                    password,

                }

            );

            setSuccess(response.data.message);

            setTimeout(() => {

                navigate("/login");

            }, 2000);

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Something went wrong."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 px-4">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                <div className="flex justify-center">

                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

                        <Lock className="text-blue-600 w-10 h-10" />

                    </div>

                </div>

                <h1 className="text-3xl font-bold text-center mt-6">

                    Reset Password

                </h1>

                <p className="text-center text-gray-500 mt-2">

                    Create your new password.

                </p>

                <form

                    onSubmit={handleSubmit}

                    className="mt-8 space-y-5"

                >

                    <div>

                        <label className="block mb-2 font-medium">

                            New Password

                        </label>

                        <input

                            type="password"

                            value={password}

                            onChange={(e)=>setPassword(e.target.value)}

                            placeholder="Enter new password"

                            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">

                            Confirm Password

                        </label>

                        <input

                            type="password"

                            value={confirmPassword}

                            onChange={(e)=>setConfirmPassword(e.target.value)}

                            placeholder="Confirm password"

                            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />

                    </div>

                    {

                        success &&

                        <div className="bg-green-100 text-green-700 border border-green-300 rounded-xl p-3">

                            {success}

                        </div>

                    }

                    {

                        error &&

                        <div className="bg-red-100 text-red-700 border border-red-300 rounded-xl p-3">

                            {error}

                        </div>

                    }

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"

                    >

                        {

                            loading ?

                            <>

                                <Loader2

                                    className="animate-spin"

                                    size={20}

                                />

                                Resetting...

                            </>

                            :

                            "Reset Password"

                        }

                    </button>

                </form>

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

export default ResetPassword;