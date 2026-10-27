import {
  Home,
  Mic,
  FileText,
  Bot,
  History,
  BarChart3,
  BadgeDollarSign,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

function Sidebar() {

  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      name: "Home",
      icon: <Home size={22} />,
      path: "/home",
    },
    {
      name: "AI Interview",
      icon: <Mic size={22} />,
      path: "/interview",
    },
    {
      name: "Resume Analyzer",
      icon: <FileText size={22} />,
      path: "/resume-analyzer",
    },
    {
      name: "AI Career Coach",
      icon: <Bot size={22} />,
      path: "/career-coach",
    },
    {
      name: "History",
      icon: <History size={22} />,
      path: "/history",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={22} />,
      path: "/analytics",
    },
    {
      name: "Pricing",
      icon: <BadgeDollarSign size={22} />,
      path: "/pricing",
    },
    {
      name: "Profile",
      icon: <User size={22} />,
      path: "/profile",
    },
    {
      name: "Settings",
      icon: <Settings size={22} />,
      path: "/settings",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", {
      replace: true,
    });
  };

  return (

    <aside
      className={`
      ${
        collapsed
          ? "w-24"
          : "w-72"
      }
      min-h-screen
      bg-slate-900/80
      backdrop-blur-2xl
      border-r
      border-white/10
      text-white
      flex
      flex-col
      justify-between
      transition-all
      duration-300
      shadow-2xl
      `}
    >

      {/* Logo */}

      <div>

        <div
          className="
          flex
          items-center
          justify-between
          px-6
          py-6
          border-b
          border-white/10
          "
        >

          {!collapsed && (

            <div>

              <h1 className="text-2xl font-bold text-blue-400">

                InterviewAce AI

              </h1>

              <p className="text-sm text-gray-400 mt-2">

                AI Interview Platform

              </p>

            </div>

          )}

          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
            className="
            p-3
            rounded-xl
            bg-white/10
            hover:bg-white/20
            transition
            "
          >

            {collapsed ? (
              <Menu size={22} />
            ) : (
              <X size={22} />
            )}

          </button>

        </div>
              {/* Navigation */}

      <nav className="flex-1 px-4 py-6 overflow-y-auto">

        {menuItems.map((item) => {

          const active = location.pathname === item.path;

          return (

            <Link
              key={item.name}
              to={item.path}
              title={collapsed ? item.name : ""}
              className={`
                group
                relative
                flex
                items-center
                ${collapsed ? "justify-center" : "gap-4"}
                px-4
                py-4
                mb-3
                rounded-2xl
                transition-all
                duration-300

                ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >

              {/* Active Indicator */}

              {active && (
                <div
                  className="
                  absolute
                  left-0
                  top-2
                  bottom-2
                  w-1
                  rounded-r-full
                  bg-cyan-400
                  "
                />
              )}

              <div
                className={`
                  transition-all
                  duration-300

                  ${
                    active
                      ? "scale-110"
                      : "group-hover:scale-110"
                  }
                `}
              >
                {item.icon}
              </div>

              {!collapsed && (

                <span className="font-medium whitespace-nowrap">

                  {item.name}

                </span>

              )}

            </Link>

          );

        })}

      </nav>
            {/* Bottom Section */}

      <div className="border-t border-white/10 p-4">

        {/* User Card */}

        {!collapsed && (

          <div
            className="
            flex
            items-center
            gap-3
            mb-4
            p-3
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
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
              "
            >
              U
            </div>

            <div>

              <h3 className="font-semibold text-white">
                User
              </h3>

              <p className="text-sm text-gray-400">
                Premium Member
              </p>

            </div>

          </div>

        )}

        {/* Logout */}

        <button
          onClick={handleLogout}
          title={collapsed ? "Logout" : ""}
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          px-4
          py-4
          rounded-2xl
          bg-red-500/10
          border
          border-red-500/20
          text-red-300
          hover:bg-red-600
          hover:text-white
          transition-all
          duration-300
          hover:scale-105
          "
        >

          <LogOut size={22} />

          {!collapsed && (
            <span className="font-medium">
              Logout
            </span>
          )}

        </button>

      </div>
      </div>   {/* Close Logo Wrapper */}
    </aside>

  );
}

export default Sidebar;