import {
  Clock3,
  Download,
  UserPlus,
  FileCheck,
} from "lucide-react";
import type { ItemProps } from "../types/profile";

export default function ActivityCard() {
  function ActivityItem({
  icon,
  title,
  time,
  color,
}: ItemProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>

        <div>

          <h4 className="text-sm font-medium">
            {title}
          </h4>

          <p className="text-xs text-slate-500">
            {time}
          </p>

        </div>

      </div>

    </div>
  );
}
  return (
    <div className=" h-full rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-lg transition duration-300 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-semibold text-slate-800">
            Recent Activity
          </h3>

          <p className="text-xs text-slate-500 mt-1">
            Latest account updates
          </p>
        </div>

            {/* Recent clock icon */}
        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
          <Clock3
            size={18}
            className="text-orange-600"
          />
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        <ActivityItem
          icon={<UserPlus size={16} />}
          title="New employee added"
          time="2 min ago"
          color="bg-violet-100 text-violet-600"
        />

        <ActivityItem
          icon={<Download size={16} />}
          title="Payroll exported"
          time="15 min ago"
          color="bg-emerald-100 text-emerald-600"
        />

        <ActivityItem
          icon={<FileCheck size={16} />}
          title="Attendance approved"
          time="1 hour ago"
          color="bg-blue-100 text-blue-600"
        />

      </div>

    </div>
  );
}


