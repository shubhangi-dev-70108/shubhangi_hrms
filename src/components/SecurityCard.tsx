import {
  ShieldCheck,
  Lock,
  KeyRound,
} from "lucide-react";
import type { SecurityProps } from "../types/profile";

export default function SecurityCard({themeTextColor, themeBgColor}: any) {
  function SecurityItem({
  icon,
  title,
}: SecurityProps) {
  return (
    <button className="w-full flex items-center gap-3 py-3 px-3 rounded-xl transition">

      <div className="text-slate-500">
        {icon}
      </div>

      <span className={`text-sm font-medium ${themeTextColor}`}>
        {title}
      </span>

    </button>
  );
}
  return (
    <div className={`rounded-2xl ${themeBgColor} border border-slate-200 p-5 shadow-sm hover:shadow-lg transition duration-300`}>
      <div className="flex items-center gap-3 mb-5">

          {/* icon */}
        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
          <ShieldCheck
            size={18}
            className="text-emerald-600"
          />
        </div>

        <div>
          <h3 className={`font-semibold ${themeTextColor}`}>
            Security
          </h3>
          <p className={`text-xs ${themeTextColor}`}>
            Account protection
          </p>
        </div>
      </div>

        {/* Security Items */}
      <SecurityItem
        icon={<Lock size={15} className="text-green-600"/>}
        title="Change Password"
      />

      <SecurityItem
        icon={<KeyRound size={15} className="text-green-600"/>}
        title="2FA Authentication"
      />

    </div>
  );
}


