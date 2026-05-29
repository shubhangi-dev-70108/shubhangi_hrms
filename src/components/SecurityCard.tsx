import {
  ShieldCheck,
  Lock,
  KeyRound,
} from "lucide-react";
import type { SecurityProps } from "../types/profile";
import { useState } from "react";

export default function SecurityCard({ themeTextColor, themeBgColor }: any) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  function SecurityItem({
    icon,
    title,
    onClick,
  }: SecurityProps) {
    return (
      <button
        className={`cursor-pointer w-full flex items-center gap-3 py-3 px-3 rounded-xl transition ${themeBgColor} ${themeTextColor} hover:bg-slate-100`}
        onClick={onClick}
      >

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

      {/* change password */}
      <SecurityItem
        icon={<Lock size={15} className="text-green-600" />}
        title="Change Password"
        onClick={() => setShowPasswordModal(true)}
      />

        {/* password modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-gray-100">

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Change Password
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Update your account password securely.
              </p>
            </div>

            <div className="space-y-3">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Update
              </button>
            </div>

          </div>
        </div>
      )}

      <SecurityItem
        icon={<KeyRound size={15} className="text-green-600" />}
        title="2FA Authentication"
      />

    </div>
  );
}


