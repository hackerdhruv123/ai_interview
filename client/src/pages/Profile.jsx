import { useEffect, useState } from "react";
import {
  User,
  Mail,
  BadgeCheck,
  Loader2,
  Pencil,
  Save,
  X,
} from "lucide-react";

import api from "../api/axios";
import background from "../assets/images/background.jpg";
function Profile() {
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/auth/profile");

      setUser(response.data);

      setFormData({
        name: response.data.name,
        email: response.data.email,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await api.put(
        "/auth/profile",
        formData
      );

      setUser(response.data.user);

      setEditMode(false);

      alert("✅ Profile Updated Successfully");

    } catch (error) {
      console.log(error);

      alert("❌ Something went wrong");

    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
    });

    setEditMode(false);
  };

  if (loading) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[170px]" />

      <div
      
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          gap-6
          rounded-3xl
          border
          border-cyan-400/20
          bg-white/5
          px-12
          py-10
          backdrop-blur-3xl
        "
      >
        <Loader2
          className="h-14 w-14 animate-spin text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Loading Profile...
        </h2>

        <p className="text-slate-400">
          Please wait while we fetch your profile.
        </p>
      </div>

    </div>
  );
}
  return (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
   style={{
          backgroundImage: `url(${background})`,
        }}>

    {/* Background Glow */}

    <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

    <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

    <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[170px]" />

    <div className="relative z-10 px-6 py-10">

      <div
        className="
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[35px]
          border
          border-cyan-400/20
          bg-white/5
          backdrop-blur-3xl
          shadow-[0_0_60px_rgba(0,255,255,0.05)]
        "
      >

        {/* Hero Header */}

        <div
          className="
            relative
            overflow-hidden
            border-b
            border-white/10
            bg-gradient-to-r
            from-cyan-500/10
            via-slate-900/40
            to-purple-500/10
            px-10
            py-14
          "
        >

          {/* Glow */}

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center">

            <div
              className="
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/30
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(34,211,238,.25)]
              "
            >

              <User
                className="text-cyan-400"
                size={60}
              />

            </div>

            <h1 className="mt-6 text-4xl font-black text-white">
              {user.name}
            </h1>

            <p className="mt-2 text-lg text-slate-300">
              {user.email}
            </p>

            <div
              className="
                mt-6
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-6
                py-2
                text-sm
                font-semibold
                text-cyan-300
              "
            >
              AI InterviewAce Member
            </div>

          </div>

        </div>

        {/* Body */}

        <div className="p-10">
                  <h2 className="mb-10 text-3xl font-black text-white">
            Personal Information
          </h2>

          {/* Name */}

          <div className="mb-8">
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <User
                size={18}
                className="text-cyan-400"
              />
              Full Name
            </label>

            {editMode ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900/60
                  px-5
                  py-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-500/30
                "
              />
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-lg
                  text-white
                  backdrop-blur-xl
                "
              >
                {user.name}
              </div>
            )}
          </div>

          {/* Email */}

          <div className="mb-8">
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <Mail
                size={18}
                className="text-cyan-400"
              />
              Email Address
            </label>

            {editMode ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900/60
                  px-5
                  py-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-500/30
                "
              />
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-lg
                  text-white
                  backdrop-blur-xl
                "
              >
                {user.email}
              </div>
            )}
          </div>

          {/* User ID */}

          <div className="mb-10">
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-300">
              <BadgeCheck
                size={18}
                className="text-green-400"
              />
              User ID
            </label>

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                text-lg
                text-white
                backdrop-blur-xl
              "
            >
              #{user.id}
            </div>
          </div>
                    {/* Action Buttons */}

          {!editMode ? (

            <button
              onClick={() => setEditMode(true)}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-cyan-400/20
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-indigo-600
                px-8
                py-4
                text-lg
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
              "
            >
              <Pencil
                size={20}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              Edit Profile
            </button>

          ) : (

            <div className="grid gap-5 md:grid-cols-2">

              {/* Save Button */}

              <button
                onClick={handleSave}
                disabled={saving}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-green-600
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_35px_rgba(34,197,94,.35)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {saving ? (
                  <Loader2
                    className="animate-spin"
                    size={20}
                  />
                ) : (
                  <Save
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}

                {saving ? "Saving..." : "Save Changes"}
              </button>

              {/* Cancel Button */}

              <button
                onClick={handleCancel}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-red-500/30
                  bg-red-500/10
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-red-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-red-500/20
                  hover:shadow-[0_0_35px_rgba(239,68,68,.25)]
                "
              >
                <X
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />

                Cancel
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  </div>
);
}

export default Profile;