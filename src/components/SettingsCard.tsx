export default function SettingsCard() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">

      <h2 className="text-2xl font-bold mb-6">
        Profile Settings
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Phone"
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Role"
          className="border p-4 rounded-xl"
        />

      </div>

    </div>
  );
}