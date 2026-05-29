import {
  Wallet,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Play,
} from "lucide-react";

export default function Payroll({themeTextColor, themeBgColor, buttonBgColor, themeMainColor}: any) {
  return (

    <main className={`flex-1 overflow-y-auto p-6 ${themeMainColor}`}>

          {/* Header */}

          <div className="flex items-center justify-between mb-8">

            <div>
              <h1 className={`text-3xl font-bold ${themeTextColor}`}>
                Payroll
              </h1>

              <p className={`text-slate-500 mt-2 ${themeTextColor}`}>
                Manage payroll processing and history
              </p>
            </div>

            <button className={`flex items-center gap-2 ${buttonBgColor} hover:opacity-90 text-white px-6 py-3 rounded-2xl transition`}>

              <Play size={18} />

              <span className="font-medium">
                Process Payroll
              </span>

            </button>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Total Payroll */}

            <div className={`bg-white border border-slate-200 rounded-3xl p-7 shadow-sm ${themeBgColor}`}>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center">

                  <Wallet
                    size={32}
                    className="text-indigo-600"
                  />

                </div>

                <div>

                  <p className={`text-slate-500 ${themeTextColor}`}>
                    Total Payroll
                  </p>

                  <h2 className={`text-3xl font-bold ${themeTextColor} mt-2`}>
                    ₹935,000
                  </h2>

                </div>

              </div>

            </div>

            {/* Earnings */}

            <div className={`bg-white border border-slate-200 rounded-3xl p-7 shadow-sm ${themeBgColor}`}>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">

                  <TrendingUp
                    size={32}
                    className="text-emerald-600"
                  />

                </div>

                <div>

                  <p className={`text-slate-500 ${themeTextColor}`}>
                    Earnings
                  </p>

                  <h2 className={`text-3xl font-bold ${themeTextColor} mt-2`}>
                    ₹1,050,000
                  </h2>

                </div>

              </div>

            </div>

            {/* Deductions */}

            <div className={`bg-white border border-slate-200 rounded-3xl p-7 shadow-sm ${themeBgColor}`}>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

                  <TrendingDown
                    size={32}
                    className="text-red-600"
                  />

                </div>

                <div>

                  <p className={`text-slate-500 ${themeTextColor}`}>
                    Deductions
                  </p>

                  <h2 className={`text-3xl font-bold ${themeTextColor} mt-2`}>
                    ₹115,000
                  </h2>

                </div>

              </div>

            </div>

            {/* Paid */}

            <div className={`bg-white border border-slate-200 rounded-3xl p-7 shadow-sm ${themeBgColor}`}>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center">

                  <DollarSign
                    size={32}
                    className="text-amber-600"
                  />

                </div>

                <div>

                  <p className={`text-slate-500 ${themeTextColor}`}>
                    Paid
                  </p>

                  <h2 className={`text-3xl font-bold ${themeTextColor} mt-2`}>
                    10 / 12
                  </h2>

                </div>

              </div>

            </div>

          </div>

        </main>
  );
}