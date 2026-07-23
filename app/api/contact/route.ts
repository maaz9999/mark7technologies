import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, product, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Log submission to server stdout
    console.log("==========================================");
    console.log("📥 NEW MARK7 DEMO REQUEST RECEIVED:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Product Selected: ${product}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    // Check for Resend API Key in environment
    const resendApiKey = process.env.RESEND_API_KEY || "re_XNN1RkYT_7bTQAWS89rNy8w4GgR4X2u4c";

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Mark7 Contact Form <onboarding@resend.dev>",
            to: ["hello@mark7technologies.com"],
            reply_to: email,
            subject: `[Demo Request] ${product} - ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; max-width: 600px;">
                <h2 style="color: #ff4d15;">New Mark7 Demo Request</h2>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Product Interest:</strong> ${product}</p>
                <p><strong>Requirements / Message:</strong></p>
                <blockquote style="background:#f8fafc; padding:16px; border-left:4px solid #ff4d15; margin:10px 0; border-radius:4px; font-size:14px; line-height:1.6;">
                  ${message.replace(/\n/g, "<br>")}
                </blockquote>
              </div>
            `,
          }),
        });

        const resendData = await resendRes.json();
        if (resendRes.ok) {
          console.log("✅ Email successfully dispatched via Resend API ID:", resendData.id);
        } else {
          console.error("⚠️ Resend API response warning:", resendData);
        }
      } catch (err) {
        console.error("Failed sending email via Resend:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your demo request has been received. Our team will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process demo request. Please try again or email hello@mark7technologies.com directly." },
      { status: 500 }
    );
  }
}
