import { ShieldCheck, Users } from "lucide-react";
import type { RoleTabsProps } from "../types/profile";


export default function RoleTabs({
  activeTab,
  setActiveTab,
 themeTextColor,
themeBgColor,
buttonBgColor
}: RoleTabsProps) {
  return (
    <div className={`rounded-2xl ${themeBgColor} border border-slate-200 p-2 inline-flex gap-2`}>

      <button
        onClick={() => setActiveTab("admin")}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
          activeTab === "admin"
            ? `${buttonBgColor} text-white`
            : `${themeTextColor} hover:bg-slate-400`
        }`}
      >

        <ShieldCheck size={16} />
        Admin
      </button>

      <button
        onClick={() => setActiveTab("employee")}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
          activeTab === "employee"
            ? `${buttonBgColor} text-white`
            : `${themeTextColor} hover:bg-slate-400`
        }`}
      >
        <Users size={16} />
        Employee
      </button>

    </div>
  );
}