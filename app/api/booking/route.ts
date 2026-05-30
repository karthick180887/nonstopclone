import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const pickup = String(body.pickup ?? "").trim();
    const drop = String(body.drop ?? "").trim();

    if (!name || !phone || !pickup || !drop) {
      return NextResponse.json(
        { success: false, message: "Name, phone, pickup, and drop are required." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.",
        },
        { status: 500 }
      );
    }

    const message = [
      "New Taxi Booking",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Pickup: ${pickup}`,
      `Drop: ${drop}`,
      `Date: ${body.date ?? "-"}`,
      `Time: ${body.time ?? "-"}`,
      `Trip Type: ${body.tripType ?? "-"}`,
      `Vehicle: ${body.vehicle ?? "-"}`,
      `Distance: ${body.distanceText ?? "-"}`,
      `Estimated Fare: ${body.estimatedFare ?? "-"}`,
      "",
      `Submitted At: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
    ].join("\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const telegramData = await telegramResponse.json();
    if (!telegramResponse.ok || !telegramData.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message to Telegram. Check bot token/chat id and bot permissions.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Booking sent to Telegram." });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
