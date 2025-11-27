export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Card Container */}
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-yellow-200 text-center">
        
        {/* Logo / Icon */}
        <div className="mx-auto mb-5 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-4xl font-bold">🍽️</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Welcome to <span className="text-yellow-600">Foodie's Haven</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 text-sm">
          Fresh flavors. Authentic taste. Delivered with love.
        </p>

        {/* Button */}
        <a
          href="/login"
          className="mt-6 inline-block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all shadow-md"
        >
          Login to Continue
        </a>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Foodie's Haven. All rights reserved.
      </p>
    </div>
  );
}
