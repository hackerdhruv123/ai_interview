import { Bell, Search, CalendarDays } from "lucide-react";

function Topbar() {

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white/10
      backdrop-blur-2xl
      border-b
      border-white/10
      px-8
      py-5
      flex
      justify-between
      items-center
      shadow-xl
      "
    >

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <div className="flex items-center gap-3 mt-2">

          <p className="text-gray-200">
            {greeting}
          </p>

          <span className="text-white/40">
            •
          </span>

          <div className="flex items-center gap-2 text-gray-300">

            <CalendarDays size={16} />

            {today}

          </div>

        </div>

      </div>
            {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
          />

          <input
            type="text"
            placeholder="Search interviews..."
            className="
            w-80
            pl-11
            pr-4
            py-3
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            text-white
            placeholder:text-gray-300
            outline-none
            focus:ring-2
            focus:ring-blue-400
            transition-all
            "
          />

        </div>

        {/* Notification */}

        <button
          className="
          relative
          p-3
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          hover:bg-white/20
          transition-all
          duration-300
          hover:scale-105
          "
        >

          <Bell
            size={22}
            className="text-white"
          />

          <span
            className="
            absolute
            top-2
            right-2
            w-3
            h-3
            rounded-full
            bg-red-500
            border-2
            border-white
            animate-pulse
            "
          />

        </button>

        {/* Profile */}

        <div
          className="
          flex
          items-center
          gap-4
          px-3
          py-2
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          hover:bg-white/20
          transition-all
          duration-300
          cursor-pointer
          "
        >

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-lg
            shadow-lg
            "
          >
            U
          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold text-white">
              User
            </h3>

            <p className="text-sm text-gray-300">
              Premium Member
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;