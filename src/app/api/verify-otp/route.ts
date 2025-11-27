import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../lib/supabase";
import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET!);

export async function POST(req: Request) {
  const { mobile, otp } = await req.json();

  console.log("Verifying OTP for:", mobile, otp);

  // ✅ Fetch most recent OTP entry for this mobile
  const { data: otpRecord, error: otpError } = await supabaseAdmin
    .from("otps")
    .select("*")
    .eq("mobile", mobile.toString())
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  console.log("OTP Record Found:", otpRecord, otpError);

  // ✅ OTP existence and match check only
  if (!otpRecord || otpRecord.otp !== otp.toString()) {
    return NextResponse.json({ success: false, message: "Invalid OTP" });
  }

  // ✅ Fetch or create user
  let { data: user } = await supabaseAdmin
    .from("users")
    .select("*")
    .eq("mobile", mobile.toString())
    .single();

  if (!user) {
    const { data: newUser } = await supabaseAdmin
      .from("users")
      .insert({ mobile, role: "user" })
      .select()
      .single();
    user = newUser;
  }

  // ✅ Determine redirect based on role
  const redirectPath = user.role === "admin" ? "/admin" : "/user";

  console.log("User role:", user.role);
  console.log("Redirecting to:", redirectPath);

  // ✅ Generate session token
  const token = await new SignJWT({
    id: user.id,
    role: user.role
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET);

  // ✅ Send response with cookie
  const response = NextResponse.json({
    success: true,
    redirect: redirectPath
  });

  response.cookies.set({
    name: "session",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
