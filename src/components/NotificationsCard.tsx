import { Bell, CalendarCheck, CalendarDays, Mail, Smartphone, Wallet } from "lucide-react";
import type { ToggleProps } from "../types/profile";
import { useState } from "react";

export default function NotificationsCard({themeTextColor, themeBgColor, buttonBgColor}: any) {
const [notifications, setNotifications] = useState({
  email: true,
  push: false,
  payroll: true,
  attendance: false,
  leave: true,
});

const handleToggle = (
  key: keyof typeof notifications
) => {
  setNotifications((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};
  
  function ToggleRow({
  icon,
  title,
  active,
  onClick,
}: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-none">
      <div className="flex items-center gap-3">

        <div className="text-slate-500">
          {icon}
        </div>
        <p className={`text-sm font-medium ${themeTextColor}`}>
          {title}
        </p>

      </div>

      <div
        onClick={onClick}
        className={`w-11 h-6 rounded-full relative transition ${
          active
            ? `${buttonBgColor}`
            : "bg-slate-600"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
            active
              ? "right-1"
              : "left-1"
          }`}
        />
      </div>

    </div>
  );
}
  return (
    <div className={`rounded-2xl ${themeBgColor} border border-slate-200 p-5 shadow-sm hover:shadow-lg transition duration-300`}>
      <div className="flex items-center gap-3 mb-5">

        <div className="w-10 h-10 rounded-xl ${themeBgColor} flex items-center justify-center">
          {/* icon */}
          <Bell
            size={18}
            className="text-violet-600"
          />
        </div>

        <div>
          <h3 className={`font-semibold ${themeTextColor}`}>
            Notifications
          </h3>
          <p className={`text-xs ${themeTextColor}`}>
            Manage alerts & updates
          </p>
        </div>
      </div>

        {/* Toggle Rows messages */}
      <ToggleRow
        icon={<Mail size={15} className={`text-blue-600`}/>}
        title="Email Alerts"
        active={notifications.email}
        onClick={() => handleToggle("email")}
      />

      <ToggleRow
        icon={<Smartphone size={15} className={`text-blue-600`}/>}
        title="Push Notifications"
        active={notifications.push}
        onClick={() => handleToggle("push")}
      />

      <ToggleRow
        icon={<Wallet size={15} className="text-blue-600"/>}
        title="Payroll Alerts"
        active={notifications.payroll}
        onClick={() => handleToggle("payroll")}
      />

      <ToggleRow
        icon={<CalendarCheck size={15} className="text-blue-600"/>}
        title="Attendance Alerts"
        active={notifications.attendance}
        onClick={() => handleToggle("attendance")}
      />

      <ToggleRow
        icon={<CalendarDays size={15} className="text-blue-600"/>}
        title="Leave Requests"
        active={notifications.leave}
        onClick={() => handleToggle("leave")}
      />

    </div>
  );
}


