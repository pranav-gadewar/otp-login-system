import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../lib/supabase";

export async function POST(req: Request) {
  const { mobile } = await req.json();
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

  await supabaseAdmin.from("otps").insert({
    mobile,
    otp,
    expires_at: expiresAt
  });

  console.log("OTP (DEV ONLY):", otp);

  return NextResponse.json({ success: true });
}
