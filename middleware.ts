import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.droptaxi.live";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (
    host &&
    host !== CANONICAL_HOST &&
    !host.startsWith("localhost") &&
    !host.startsWith("127.0.0.1")
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
