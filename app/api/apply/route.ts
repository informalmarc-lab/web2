import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Missing DISCORD_WEBHOOK_URL.");
      return NextResponse.json(
        { ok: false, message: "Unable to process the application." },
        { status: 500 }
      );
    }

    const content = [
      "New Omega Agency application:",
      `Full name or alias: ${payload.fullName ?? "N/A"}`,
      `Email address: ${payload.email ?? "N/A"}`,
      `Country: ${payload.country ?? "N/A"}`,
      `Age confirmed: ${payload.ageConfirm ? "Yes" : "No"}`,
      `On StripChat: ${payload.stripchat ?? "N/A"}`,
      `On Chaturbate: ${payload.chaturbate ?? "N/A"}`,
      `About: ${payload.about ?? "N/A"}`,
    ].join("\n");

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (!discordResponse.ok) {
      console.error("Discord webhook error:", await discordResponse.text());
      return NextResponse.json(
        { ok: false, message: "Unable to process the application." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Thank you for applying. We'll be in touch within 48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Omega application error:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to process the application." },
      { status: 400 }
    );
  }
}
