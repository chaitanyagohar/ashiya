// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("API Endpoint was hit!"); // 1. Check if the function is running at all

  try {
    const { name, email, message } = await req.json();
    console.log("Data received:", { name, email, message }); // 2. Check if you're getting the data

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New message from Ashiya`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    console.log("Sending email..."); // 3. Check before sending
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!"); // 4. Check for success

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // 5. Log the *entire* error object for more details
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
