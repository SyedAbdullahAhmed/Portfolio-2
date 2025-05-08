
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const sendWithRetry = async (transporter, mailOptions, maxAttempts) => {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log(`Email sent successfully on attempt ${attempt}: ${info.response}`);
            return;
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error.message);
            console.error(error);
            if (attempt === maxAttempts) {
                console.error('All attempts failed. Giving up.');
            } else {
                // Wait 1 second before retrying
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
    }
};

//A 35.209.60.242
// wa-mac.com.default.dkim.auto.dnssmarthost.net.
export async function POST(request) {
    try {
        const formData = await request.json();

        const config = {
            username: process.env.SENDER_EMAIL,
            password: process.env.PASSWORD,
            smtpServer: process.env.SMTPSERVER,
            smtpPort: Number(process.env.SMTPPORT),
            imapServer: process.env.IMAPSERVER,
            imapPort: process.env.IMAPPORT,
            pop3Port: process.env.POP3PORT,
        };

        const transporter = nodemailer.createTransport({
            host: config.smtpServer,
            port: config.smtpPort,
            secure: config.smtpPort === 465,
            auth: {
                user: config.username,
                pass: config.password,
            },
        });

        const mailOptions = {
            from: config.username,
            to: process.env.RECIPIENT_EMAIL,
            subject: `Contact Information: ${formData?.name ?? '---'}`,
            html: `
                  <h2>New Contact Form Submission</h2>
                  <table style="border-collapse: collapse; width: 100%;">
                    <tr><td><strong>Full Name:</strong></td><td>${formData?.name ?? '---'}</td></tr>
                    <tr><td><strong>Email:</strong></td><td>${formData?.email ?? '---'}</td></tr>
                    <tr><td><strong>Message:</strong></td><td>${formData?.message ?? '---'}</td></tr>
                  </table>
                  <br/>
                  <p>Kind regards</p>
                `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully on attempt ${info.response}`);
        console.log("Email sent successfully");
        return NextResponse.json(
            {
                success: true,
                message: "Email sent successfully",
                data: [],
                status: 200
            }
        );

    } catch (error) {
        console.log(error.message);
        return NextResponse.json(
            {
                success: false,
                message: error.message,
                data: [],
                status: 400
            }
        );
    }

}