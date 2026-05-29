import ProfileCard from "./ProfileCard";

export default function EmployeeProfileCard({ themeTextColor, themeBgColor, buttonBgColor }: any) {
  return (
    <div>

      <ProfileCard themeTextColor={themeTextColor} themeBgColor={themeBgColor} buttonBgColor={buttonBgColor} />

    </div>
  );
}