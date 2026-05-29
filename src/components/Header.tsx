import {
  Search,
  Bell,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";


export default function Header({toggleDarkMode , darkMode, themeBgColor, themeTextColor, buttonBgColor}: any) {

  const notifications = [
    {
      title: "New employee onboarded",
      description: "Rohan Das has joined the Engineering team",
      time: "2 hours ago",
    },
    {
      title: "Payroll processed",
      description: "January 2025 payroll has been processed successfully",
      time: "1 day ago",
    },
    {
      title: "Leave request pending",
      description: "Sneha Reddy has requested leave for Feb 10-12",
      time: "1 day ago",
    },
    {
      title: "Document uploaded",
      description: "Tax Declaration Form uploaded by Arjun Menon",
      time: "3 days ago",
    },
    {
      title: "Document uploaded",
      description: "Tax Declaration Form uploaded by Arjun Menon",
      time: "3 days ago",
    },
    {
      title: "Document uploaded",
      description: "Tax Declaration Form uploaded by Arjun Menon",
      time: "3 days ago",
    },
  ];

  // const [darkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);



  return (
    <header className={`h-[62px] ${themeBgColor} dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between`}>

      {/* Search */}

      <div className="relative">

        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
        />
          {/* search box */}
        <input
          type="text"
          placeholder="Search..."
          className="w-[240px] h-[36px] rounded-lg dark:bg-slate-800 bg-slate-100 pl-9 pr-3 text-[13px] outline-none"
        />
    
      </div>

      {/* Right Actions */}

      <div className="flex items-center gap-2">

        <button
          onClick={toggleDarkMode}
          className="w-8 h-8 rounded-lg dark:bg-slate-800 bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">

          {darkMode ? (
            <Moon
              size={16}
              className="text-blue-500"
            />
          ) : (<Sun
            size={15}
            className="text-amber-500"
          />)}
        </button>

        {/* Profile */}
        <div className="relative">

          {/* Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 rounded-lg dark:bg-slate-800 bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition"
          >
            <Bell
              size={15}
              className="text-slate-600 dark:text-slate-500"
            />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
          </button>

          {/* Dropdown OUTSIDE button */}

          {open && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              />

              <div className={`absolute right-0 mt-3 w-80 rounded-3xl ${themeBgColor} dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-[0_10px_35px_rgba(0,0,0,0.12)] z-50 overflow-hidden`}>

                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className={`text-sm font-semibold ${themeTextColor} dark:text-white`}>
                    Notifications
                  </h3>
                </div>

                <div className="max-h-80 overflow-y-auto p-2 space-y-1">

                  {notifications.map((item, index) => {
                    return (
                      
                      // Highlight the most recent notification
                      <div
                        key={index}
                        className={`flex gap-3 p-3 rounded-2xl transition cursor-pointer
                            ${item.title === "New employee onboarded"
                            ? "bg-slate-400 dark:bg-slate-700"
                            : "hover:bg-slate-400 dark:hover:bg-slate-400"
                          }`}
                      >

                        {/* colored bullet */}
                        <div
                          className={`mt-1 h-2.5 w-2.5 rounded-full shrink-0 ${item.title === "New employee onboarded"
                            ? "bg-red-500"
                            : "bg-emerald-500"}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2">

                            <h4 className={`text-[13px] font-semibold ${themeTextColor} dark:text-white truncate`}>
                              {item.title}
                            </h4>

                            <span className={`text-[10px] ${themeTextColor} whitespace-nowrap`}>
                              {item.time}
                            </span>

                          </div>

                          <p className={`text-[11px] ${themeTextColor} dark:text-slate-400 mt-1 leading-4`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

        </div>

        <div className="flex items-center gap-2 ml-1">

          <div className={`w-8 h-8 rounded-full ${buttonBgColor} text-white flex items-center justify-center text-[12px] font-semibold`}>

            A

          </div>

          <div className="leading-tight">

            <h4 className={`text-sm font-semibold ${themeTextColor} dark:text-white`}>
              Admin
            </h4>

            <p className={`text-[10px] ${themeTextColor} dark:text-slate-400`}>
              Super Admin
            </p>

          </div>

          <ChevronDown
            size={14}
            className="text-slate-400 dark:text-slate-500"
          />

        </div>

      </div>

    </header>
  );
}