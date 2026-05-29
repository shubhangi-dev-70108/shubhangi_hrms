import {
  ShieldCheck,
  Lock,
  KeyRound,
} from "lucide-react";
import type { SecurityProps } from "../types/profile";
import { useState } from "react";

export default function SecurityCard({ themeTextColor, themeBgColor }: any) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

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
          <div className={`w-full max-w-md rounded-2xl ${themeBgColor} p-6 shadow-2xl border border-gray-100`}>

            <div className="mb-5">
              <h2 className={`text-lg font-semibold ${themeTextColor} dark:text-white`}>
                Change Password
              </h2>
              <p className={`text-sm ${themeTextColor} dark:text-gray-400`} mt-1>
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
                className={`rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium ${themeTextColor}`}
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
        onClick={() => setShow2FAModal(true)}
      />

      {/* 2FA Modal */}

      {show2FAModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className={`w-full max-w-md rounded-2xl ${themeBgColor} dark:bg-slate-900 p-6 shadow-2xl border border-gray-100 dark:border-slate-700`}>

            <h2 className={`text-lg font-semibold ${themeTextColor} dark:text-white`}>
              Mobile 2FA Verification
            </h2>

            <p className={`mt-1 text-sm ${themeTextColor} dark:text-gray-400`}>
              Secure your account using OTP verification.
            </p>

            {/* Mobile Number */}
            <div className="mt-5">
              <label className={`mb-2 block text-sm font-medium ${themeTextColor} dark:text-gray-300`}>
                Mobile Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => {const value = e.target.value.replace(/[^0-9+]/g, "");
                  setPhone(value);
                }}
                placeholder="+91 "
                maxLength={13}
                className="w-full rounded-xl border border-gray-200 dark:border-slate-700
          bg-gray-50 dark:bg-slate-800
          px-4 py-3 text-sm
          text-gray-900 dark:text-white
          outline-none focus:border-blue-500"
              />
            </div>

            {/* OTP */}
            {otpSent && (
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Enter OTP
                </label>

                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="6-digit OTP"
                  maxLength={6}
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700
            bg-gray-50 dark:bg-slate-800
            px-4 py-3 text-sm
            text-gray-900 dark:text-white
            outline-none focus:border-green-500"
                />
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() => setShow2FAModal(false)}
                className={`cursor-pointer rounded-xl border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm ${themeTextColor} dark:text-white`}
              >
                Cancel
              </button>

              {!otpSent ? (
                <button
                  onClick={() => setOtpSent(true)}
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm text-white"
                >
                  Send OTP
                </button>
              ) : (
                <button
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm text-white"
                >
                  Verify OTP
                </button>
              )}

            </div>

          </div>
        </div>
      )}


    </div>
  );
}


