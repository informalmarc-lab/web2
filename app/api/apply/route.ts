import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    // Direct webhook URL for simple setup.
    const webhookUrl =
      "https://discord.com/api/webhooks/1483433440773672974/b0izN_I21sLyKU0jR5K9L8TM6pSkIPwtQ245astopPDaHHa0ahV-Q_86Rq1emWuRXNFZ";

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
