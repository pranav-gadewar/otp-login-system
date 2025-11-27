export default function UserPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl w-full text-center border border-yellow-100">
        
        {/* Welcome Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome User!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-8">
          We're glad to have you here. Explore and enjoy the platform!
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
            ⭐ Personalized Dashboard
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
            🔔 Notifications & Updates
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
            📁 Manage Your Data
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
            🧾 Activity Overview
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-10 px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 transition text-white rounded-xl shadow-md">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
