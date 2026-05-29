import { Palette } from "lucide-react";

export default function AppearanceCard({
  themeTextColor,
  themeBgColor,
}: any) {

  function ToggleItem({
    title,
  }: {
    title: string;
  }) {
    return (
      <button className="w-full flex items-center justify-between py-3 px-3 rounded-xl transition">

        <span className={`text-sm font-medium ${themeTextColor}`}>
          {title}
        </span>

        <div className="w-11 h-6 rounded-full bg-violet-600 relative">

          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />

        </div>

      </button>
    );
  }

  return (
    <div className={`rounded-2xl ${themeBgColor} border border-slate-200 p-5 shadow-sm hover:shadow-lg transition duration-300`}>

      {/* Header */}

      <div className="flex items-center gap-3 mb-5">

        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">

          <Palette
            size={18}
            className="text-violet-600"
          />

        </div>

        <div>

          <h3 className={`font-semibold ${themeTextColor}`}>
            Appearance
          </h3>

          <p className={`text-xs ${themeTextColor}`}>
            UI preferences
          </p>

        </div>

      </div>

      {/* Description */}

      <p className={`text-sm ${themeTextColor} mb-4 leading-6`}>
        Toggle dark mode using the moon/sun icon in the top navigation bar.
      </p>


    </div>
  );
}