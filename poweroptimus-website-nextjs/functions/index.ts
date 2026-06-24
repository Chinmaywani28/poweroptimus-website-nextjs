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
const senderName = "EnvirOptimus";
const senderEmail = "info@constructmonitor.online";

// 📨 Admin emails
const adminEmails = ["chinmay.wani@neilsoft.com","chinmaywaniss@gmail.com","pragya.gupta@neilsoft.com","dhananjay.dixit@neilsoft.com"];

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
        <p>Thank you for contacting us.</p>
        <p>We’ve received your enquiry, and our team is reviewing it. We’ll get back to you shortly with the relevant details.</p>
        <p>Looking forward to connecting with you.</p>

    <br />
    <br />

        <p>Best Regards,</p>
        <p>EnvirOptimus Team</p>
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

// watch recording
// 🔥 Trigger on Firestore
export const onCreateRecordingRequest = onDocumentCreated(
  "recording-requests/{docId}",
  async (event) => {

    const snapshot = event.data;

    if (!snapshot) {
      logger.info("No data found");
      return;
    }

    const data = snapshot.data();

    const name = data?.name;
    const email = data?.email;

    // ✅ this comes from form / firestore
    const webinarType = data?.webinarType;

    if (!email) {
      logger.error("No email found");
      return;
    }

    // ✅ Static webinar links(copy title from db and paste in keys of object(recordingLinks)) (2nd not working)
    const recordingLinks: any = {

      "connecting energy monitoring, predictive maintenance, and sustainability for resilient operations":
        "https://www.youtube.com/watch?v=FI8Ko4r2C_o&t=1981s",

      'webinar digital twin maturity model: from bim to intelligent operations':
        "https://www.youtube.com/watch?v=taQjEQWaPaE&t=1s",

      'beyond monitoring: the digital twin mandate for data centers webinar':
        "https://www.youtube.com/watch?v=C2xvgR_53po",

      // sustainability:
      //   "https://your-domain.com/recording-link-3",
    };

    // ✅ match link based on string
    const recordingLink =
      recordingLinks[webinarType?.toLowerCase()];

    if (!recordingLink) {
      logger.error("No matching recording link found");
      logger.info("webinarType =>", webinarType);
      logger.info("recordingLink =>", recordingLink);
      return;
    }

    // 📩 Email to ADMIN
    const adminMail = {
      from: `${senderName} <${senderEmail}>`,
      to: adminEmails,
      subject: `New Webinar link is requested: ${webinarType}`,
      html: `
        <h3>New Recording Request</h3>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Selected Webinar:</b> ${webinarType}</p>
      `,
    };

    // 📩 Email to USER
    const userMail = {
      from: `${senderName} <${senderEmail}>`,
      to: email,
      subject: "Your Webinar Recording Link",
      html: `
        <h3>Hi ${name} 👋</h3>

        <p>Thank you for your interest.</p>

        <p>
          You can watch the webinar recording
          using the link below:
        </p>

        <p>
          <a href="${recordingLink}" target="_blank">
            Watch Recording
          </a>
        </p>

        <br />
        <br />

        <p>Best Regards,</p>
        <p>EnvirOptimus Team</p>
      `,
    };

    try {

      await transporter.sendMail(adminMail);
      await transporter.sendMail(userMail);

      logger.info("Recording emails sent successfully ✅");

    } catch (error) {

      logger.error("Error sending email", error);
    }
  }
);

// Case study trigger
export const onCreateCaseStudyRequest =
  onDocumentCreated(
    "case-study-requests/{docId}",
    async (event) => {

      const snapshot = event.data;

      if (!snapshot) {
        logger.info("No data found");
        return;
      }

      const data = snapshot.data();

      const name = data?.name;
      const company = data?.company;
      const email = data?.email;
      const phone = data?.phone;
      const jobTitle = data?.jobTitle;
      const country = data?.country;
      const city = data?.city;

      const brochureName =
        data?.caseStudyTitle;

      const brochureLink =
        data?.pdfLink;

      if (!email) {
        logger.error("No email found");
        return;
      }

      if (!brochureLink) {
        logger.error("No brochure link found");
        return;
      }

      // ==========================
      // ADMIN EMAIL
      // ==========================

      const adminMail = {
        from: `${senderName} <${senderEmail}>`,
        to: adminEmails,

        subject: `New Case Study Download - ${brochureName}`,

        html: `
          <h3>New Case Study Download Request</h3>

          <p><b>Name:</b> ${name}</p>

          <p><b>Company:</b> ${company}</p>

          <p><b>Email:</b> ${email}</p>

          <p><b>Phone:</b> ${phone}</p>

          <p><b>Job Title:</b> ${jobTitle}</p>

          <p><b>Country:</b> ${country}</p>

          <p><b>City:</b> ${city}</p>

          <p><b>Brochure:</b> ${brochureName}</p>
        `,
      };

      // ==========================
      // USER EMAIL
      // ==========================

      const userMail = {
        from: `${senderName} <${senderEmail}>`,
        to: email,

        subject: `Your ${brochureName}`,

        html: `
          <h3>Hi ${name} 👋</h3>

          <p>
            Thank you for your interest in
            ${brochureName}.
          </p>

          <p>
            You can download the case study
            using the link below:
          </p>

          <p>
            <a
              href="${brochureLink}"
              target="_blank"
            >
              Download Case Study
            </a>
          </p>

          <br/>

          <p>
            Best Regards,
          </p>

          <p>
            EnvirOptimus Team
          </p>
        `,
      };

      try {

        await transporter.sendMail(
          adminMail
        );

        await transporter.sendMail(
          userMail
        );

        logger.info(
          "Case Study emails sent successfully ✅"
        );

      } catch (error) {

        logger.error(
          "Error sending Case Study email",
          error
        );
      }
    }
  );