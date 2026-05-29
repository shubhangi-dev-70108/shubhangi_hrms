import {
  // LayoutDashboard,
  // Users,
  // CalendarCheck,
  // Wallet,
  // BarChart3,
  // FileText,
  Settings,
  Wallet,
} from "lucide-react";
import type { SidebarProps } from "../types/profile";


export default function Sidebar({activePage, setActivePage}: any) {
  // const [activePage, setActivePage] = useState("payroll");
  
function SidebarItem({
  icon,
  label,
  active,
  onClick
}: SidebarProps) {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition ${
        active
          ? "bg-[linear-gradient(135deg,#1E6BD6,#2BB7DA)] text-white"
          : "hover:bg-white/10"
      }`}
    >
      {icon}

      <span className="text-sm">
        {label}
      </span>
    </li>
  );
}
  return (
    
    <aside className="w-[200px] min-h-screen bg-gradient-to-r from-[#1E6BD6] to-[#2BB7DA] text-white">

      <nav className="px-2 py-4">

        <ul className="space-y-1">

          {/* <SidebarItem
            icon={<LayoutDashboard size={16} />}
            label="Dashboard"
          />

          <SidebarItem
            icon={<Users size={16} />}
            label="Employees"
          />

          <SidebarItem
            icon={<CalendarCheck size={16} />}
            label="Attendance"
          />

          <SidebarItem
            icon={<BarChart3 size={16} />}
            label="Reports"
          />

          <SidebarItem
            icon={<FileText size={16} />}
            label="Documents"
          /> */}

          <SidebarItem
            icon={<Wallet size={16} />}
            label="Payroll"
            onClick={() => {setActivePage("payroll");console.log("Payroll clicked")}}
            active={activePage === "payroll"}
          />

          <SidebarItem
            icon={<Settings size={16} />}
            label="Settings"
            onClick={() => {setActivePage("settings");console.log("Settings clicked")}}
            active={activePage === "settings"}
          />

        </ul>

      </nav>

    </aside>


  );
}

