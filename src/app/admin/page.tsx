export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Page Header */}
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Admin Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-black text-sm">Total Users</p>
          <h2 className="text-3xl text-gray-700 font-bold mt-2">1,248</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-black text-sm">Active Sessions</p>
          <h2 className="text-3xl text-gray-700 font-bold mt-2">87</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-black text-sm">New Signups</p>
          <h2 className="text-3xl text-gray-700 font-bold mt-2">32</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-black text-sm">Pending Tasks</p>
          <h2 className="text-3xl text-gray-700 font-bold mt-2">14</h2>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white shadow-md rounded-xl p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li className="border-b pb-3 text-gray-600">
            ✅ User <strong>Rohit</strong> created a new event
          </li>
          <li className="border-b pb-3 text-gray-600">
            🔄 System sync completed successfully
          </li>
          <li className="border-b pb-3 text-gray-600">
            ⚠️ Payment verification pending for user <strong>Asha</strong>
          </li>
          <li className="text-gray-600">
            📩 12 new support messages received
          </li>
        </ul>
      </div>
    </div>
  );
}
