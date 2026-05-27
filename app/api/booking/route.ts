import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Connect to production booking API when credentials are provided.
    console.log("Booking enquiry received:", body);
    return NextResponse.json({ success: true, message: "Booking enquiry logged locally." });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
