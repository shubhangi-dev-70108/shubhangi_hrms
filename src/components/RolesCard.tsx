import { ShieldCheck, Users } from "lucide-react";
import type { RoleProps } from "../types/profile";

export default function RolesCard({ themeTextColor, themeBgColor }: any) {
  function RoleItem({
  title,
  role,
}: RoleProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-none">
      <div className="flex items-center gap-3">

        <Users
          size={16}
          className="text-blue-500"
        />

        <div>
          <h4 className={`font-medium ${themeTextColor}`}>
            {title}
          </h4>
          <p className={`text-xs ${themeTextColor}`}>
            {role}
          </p>
        </div>

      </div>

    </div>
  );
}
  return (
    <div className={`h-full rounded-2xl ${themeBgColor} border border-slate-200 p-5 shadow-sm flex flex-col`}>
      <div className="flex items-center gap-3 mb-5">

        {/* Role icon */}
        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <ShieldCheck
            size={18}
            className="text-violet-600 "
          />
        </div>
        <div>
            {/* text */}
          <h3 className={`font-semibold ${themeTextColor}`}>
            Roles & Permissions
          </h3>
          <p className={`text-xs ${themeTextColor}`}>
            Access management
          </p>
        </div>
      </div>

        {/* Role items */}
      <RoleItem
        title="Admin Access"
        role="Full Control"
      />

      <RoleItem
        title="HR Manager"
        role="Manage Employees"
      />

      <RoleItem
        title="Team Lead"
        role="Limited Access"
      />

      <RoleItem
        title="Employee"
        role="Limited Access"
      />

    </div>
  );
}

