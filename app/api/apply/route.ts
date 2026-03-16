import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    // Placeholder storage: log to the server console for now.
    console.log("Omega application received:", payload);

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
