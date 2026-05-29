import {
    Camera,
    Mail,
    Phone,
    Briefcase,
    Pencil,
    PencilOff,
    LocateIcon,
    User,
} from "lucide-react";
import type { InputFieldProps } from "../types/profile";
import { useState } from "react";

export default function ProfileCard({ themeTextColor, themeBgColor, buttonBgColor }: any) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [isFormdisabled, setIsFormDisabled] = useState(true);

    function InputField({
        icon,
        placeholder = "",
        value,
        label,
        onChange,
        disabled,
    }: InputFieldProps) {
        return (
            <div>
                {label && (
                    <label className={`block text-sm font-medium ${themeTextColor} mb-1`}>
                        {label}
                    </label>
                )}
                <div className={`relative ${themeTextColor}`}>

                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>

                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={isFormdisabled}
                        className={`w-full h-[42px] rounded-xl border pl-10 pr-4 text-sm outline-none transition
                                ${isFormdisabled
                                ? "bg-slate-200 border-slate-300 text-slate-500 cursor-not-allowed"
                                : `${themeBgColor} border-slate-200 ${themeTextColor}`
                            }`}
                    // className={`w-full h-[42px] rounded-xl border border-slate-200 ${themeBgColor} pl-10 pr-4 text-sm outline-none`}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className={`rounded-2xl ${themeBgColor} border border-slate-200 p-5 shadow-sm hover:shadow-lg transition duration-300 h-fit`}>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className={`text-lg font-semibold ${themeTextColor}`}>
                        Profile Settings
                    </h2>
                    <p className={`text-[13px] ${themeTextColor} dark:text-slate-300 mt-1`}>
                        Update your personal information
                    </p>
                </div>

                {/* Edit Button */}
                <button
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center"
                    onClick={() => setIsFormDisabled(prev => !prev)}
                >
                    {isFormdisabled ? <PencilOff size={16}
                        className="text-slate-600" /> : <Pencil size={16}
                            className="text-slate-600" />}

                </button>
            </div>

            {/* Profile + Form */}
            <div className="flex gap-8 items-start mb-3">
                {/* LEFT */}
                <div className="flex flex-col items-center min-w-[110px]">
                    <div className={`w-20 h-20 rounded-full ${buttonBgColor} text-white flex items-center justify-center text-xl font-semibold`}>
                        A
                    </div>

                    {/* camera */}
                    <button className="mt-3 w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">
                        <Camera
                            size={16}
                            className="text-slate-600"
                        />
                    </button>
                </div>

                {/* RIGHT */}
                {/* Form Fields */}
                <div className="flex-1 grid grid-cols-2 gap-4">

                    <InputField
                        label="Full Name"
                        icon={<User size={15} className="text-blue-600" />}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                    />

                    <InputField
                        label="Email"
                        icon={<Mail size={15} className="text-blue-600" />}
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter your email"
                    />

                    <InputField
                        label="Phone"
                        icon={<Phone size={15} className="text-blue-600" />}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={"Enter your phone number"}
                    />


                    <InputField
                        label="Location"
                        icon={<LocateIcon size={15} className="text-blue-600" />}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your location"
                    />

                    <InputField
                        label="Department"
                        icon={<Briefcase size={15} className="text-blue-600" />}
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Enter your department"
                    />

                    <InputField
                        label="Role"
                        icon={<Briefcase size={15} className="text-blue-600" />}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Enter your role"
                    />
                </div>

            </div>

            {/* Submit Button */}

            <div className="mt-5 flex justify-end gap-3">

                <button className={`rounded-xl border border-slate-300 ${themeBgColor} hover:bg-slate-100 transition ${themeTextColor} px-5 py-2 text-sm font-medium`}>
                    Discard
                </button>

                <button className={`rounded-xl ${buttonBgColor} hover:opacity-90 transition text-white px-5 py-2 text-sm font-medium`}>
                    Save Changes
                </button>

            </div>
        </div>
    );
}


