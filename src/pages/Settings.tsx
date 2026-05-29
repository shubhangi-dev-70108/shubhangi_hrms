import ProfileCard from "../components/ProfileCard";
import NotificationsCard from "../components/NotificationsCard";
import SecurityCard from "../components/SecurityCard";
import RoleTabs from "../components/RoleTabs";
import RolesCard from "../components/RolesCard";
import { useState } from "react";
import EmployeeProfileCard from "../components/EmployeeProfileCard";
// import AppearanceCard from "../components/Appearance";

export default function Settings({themeTextColor, themeBgColor, buttonBgColor, themeMainColor}: any) {
  const [activeTab, setActiveTab] = useState("admin");
  // const [darkMode, setIsDarkMode] = useState(false);
 
  // const themeBgColor = darkMode ? "themeblack-color" : "bg-white";
  // const themeTextColor = darkMode ? "text-white" : "text-slate-800";
  // const themeMainColor = darkMode ? "bg-[#0F172A]" : "bg-gray-50";
  // const buttonBgColor = darkMode ? "bg-[linear-gradient(135deg,#1E6BD6,#2BB7DA)]" : "bg-[linear-gradient(135deg,#1E6BD6,#2BB7DA)]";

  return (
 
    <main className={`flex-1 overflow-y-auto p-5 ${themeMainColor}`}>
          <div className="mb-4 flex justify-between items-center">
            <div>
              <h1 className={`text-[24px] font-semibold tracking-tight ${themeTextColor}`}>
                Settings
              </h1>
              <p className={`text-[13px] ${themeTextColor} dark:text-slate-300 mt-1`}>
                Manage account preferences & system settings
              </p>
            </div>

            {/* Role Tabs */}
            <RoleTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              themeTextColor={themeTextColor}
              themeBgColor={themeBgColor}
              buttonBgColor={buttonBgColor}
            />
          </div >
          {activeTab === "admin" ? (
            <>
              <div className="grid lg:grid-cols-[2fr_1fr] gap-5">

                {/* Profile component */}
                <ProfileCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} />

                {/* Notifications */}
                <div className="space-y-5">
                  <NotificationsCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} />
                </div>

              </div>

              {/* role and security card */}
              <div className="grid lg:grid-cols-3 gap-5 mt-5 items-stretch">
                <RolesCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} />
                <SecurityCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} />
                {/* <AppearanceCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} /> */}
              </div>
            </>
          ) : (
            <div className="grid lg:grid-cols-[2fr_1fr] gap-5">
              <EmployeeProfileCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} />
              <div className="space-y-5">
                <NotificationsCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} />
              </div>
            </div>
          )}

        </main>
  );
}