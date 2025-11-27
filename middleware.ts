import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET!);

export async function middleware(req: any) {
  const token = req.cookies.get("session")?.value;
  const url = req.nextUrl.pathname;

  // ✅ Protected routes
  const requiresAuth =
    url.startsWith("/user") ||
    url.startsWith("/admin");

  // ✅ If no session and accessing protected route → redirect to login
  if (!token && requiresAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ If token exists, decode it
  if (token) {
    try {
      const { payload }: any = await jwtVerify(token, SECRET);

      // ✅ Admin area protection
      if (url.startsWith("/admin") && payload.role !== "admin") {
        return NextResponse.redirect(new URL("/user", req.url));
      }

    } catch (err) {
      // ✅ Invalid token → force login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*"
  ],
};
