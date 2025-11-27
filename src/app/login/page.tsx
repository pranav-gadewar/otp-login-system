"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile })
    });

    setLoading(false);

    if (res.ok) {
      setOtpSent(true);
    } else {
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile, otp })
    });

    setLoading(false);

    const data = await res.json();

    if (data.success) {
      // ✅ Redirect based on role returned from backend
      window.location.href = data.redirect;
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-6 border rounded shadow w-96 text-center">
        {!otpSent ? (
          <>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Login with Mobile Number
            </h2>

            <input
              className="border text-black p-2 w-full rounded mb-4"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Enter OTP
            </h2>

            <input
              className="border text-black p-2 w-full rounded mb-4"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              onClick={() => setOtpSent(false)}
              className="mt-4 text-blue-600 underline"
            >
              Change Mobile Number
            </button>
          </>
        )}
      </div>
    </div>
  );
}
