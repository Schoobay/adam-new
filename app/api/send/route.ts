import { EmailTemplate } from "@/components/email-template";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "coaching@adamdoylecoaching.co",
      to: ["adamdoyle.f@gmail.com"],
      subject: "New Client!",
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
