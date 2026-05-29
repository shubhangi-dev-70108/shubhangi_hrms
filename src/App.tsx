import { useState } from "react";
import Payroll from "./pages/Payroll";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [activePage, setActivePage] = useState("settings");
   const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const [darkMode, setIsDarkMode] = useState(false);
  const themeBgColor = darkMode ? "themeblack-color" : "bg-white";
  const themeTextColor = darkMode ? "text-white" : "text-slate-800";
  const themeMainColor = darkMode ? "bg-[#0F172A]" : "bg-gray-50";
  const buttonBgColor = darkMode ? "bg-[linear-gradient(135deg,#1E6BD6,#2BB7DA)]" : "bg-[linear-gradient(135deg,#1E6BD6,#2BB7DA)]";
  console.log("Active Page:", activePage);
  return (
      <div className="flex h-screen overflow-hidden">

        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="flex-1 flex flex-col">

          <Header  toggleDarkMode={toggleDarkMode} darkMode={darkMode} themeBgColor={themeBgColor} themeTextColor={themeTextColor} buttonBgColor={buttonBgColor}
          />
        
        {activePage === "settings" && (
        <Settings themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} themeMainColor={themeMainColor} />
      )}

      {activePage === "payroll" && (
        <Payroll themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} themeMainColor={themeMainColor} />
      )}
    

        </div>
       
      </div>
  )
}

export default App;
