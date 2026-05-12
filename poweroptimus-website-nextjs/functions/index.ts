import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import next from "next";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { createTransport } from "nodemailer";
import * as logger from "firebase-functions/logger";


const isDev = process.env.NODE_ENV !== "production";

const nextServer = next({
  dev: isDev,
  conf: {
    distDir: ".next",
  },
});

const nextHandler = nextServer.getRequestHandler();

// ⭐ v2 CORRECT SYNTAX — NO .region() ⭐
export const nextServerFunction = onRequest(
  {
    cors: false,
    region: "us-central1", // specify region here, NOT as a method
    maxInstances: 10
  },
  async (req, res) => {
    await nextServer.prepare();
    return nextHandler(req, res);
  }
);


// email send functionality for contact-us form
// 📧 Sender details
const senderName = "EnviorOptimus";
const senderEmail = "info@constructmonitor.online";

// 📨 Admin emails
const adminEmails = ["chinmay.wani@neilsoft.com","chinmaywaniss@gmail.com"];

// 🚀 SMTP transporter (same style as your old code)
const transporter = createTransport({
  host: "smtpout.secureserver.net",
  secure: true,
  port: 465,
  auth: {
    user: "info@constructmonitor.online",
    pass: "Vyfa2xH?dSj6J",
  },
} as any);

// 🔥 Trigger on Firestore
export const onCreateContactRequest = onDocumentCreated(
  "demo-requests/{docId}",
  async (event) => {
    const snapshot = event.data;

    if (!snapshot) {
      logger.info("No data found");
      return;
    }

    const data = snapshot.data();

    const name = data?.name;
    const email = data?.email;
    const message = data?.message;

    if (!email) {
      logger.error("No email found");
      return;
    }

    // 📩 Email to ADMIN
    const adminMail = {
      from: `${senderName} <${senderEmail}>`,
      to: adminEmails,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    // 📩 Email to USER
    const userMail = {
      from: `${senderName} <${senderEmail}>`,
      to: email,
      subject: "Thanks for contacting us",
      html: `
        <h3>Hi ${name} 👋</h3>
        <p>We received your message.</p>
        <p>Our team will contact you soon.</p>
      `,
    };

    try {
      // ✉️ Send both emails
      await transporter.sendMail(adminMail);
      await transporter.sendMail(userMail);

      logger.info("Emails sent successfully ✅");
    } catch (error) {
      logger.error("Error sending email", error);
    }
  })