import nodemailer from "nodemailer";
import { getContactRecipient } from "../../lib/contactEmails";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || smtpUser;

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.setHeader("Allow", ["POST"]);
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { society, reason, name, email, message } = req.body;

	if (!society || !reason || !name || !email || !message) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
		return res.status(500).json({ error: "Email service not configured" });
	}

	const recipient = getContactRecipient(society, reason);
	const subject = `Contact form: ${name} (${reason})`;
	const html = `
		<p><strong>Name:</strong> ${name}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Society:</strong> ${society}</p>
		<p><strong>Reason:</strong> ${reason}</p>
		<p><strong>Message:</strong></p>
		<p>${message.replace(/\n/g, "<br />")}</p>
	`;

	const transporter = nodemailer.createTransport({
		host: smtpHost,
		port: Number(smtpPort),
		secure: Number(smtpPort) === 465,
		auth: {
			user: smtpUser,
			pass: smtpPass,
		},
	});

	try {
		await transporter.sendMail({
			from: smtpFrom,
			to: recipient,
			subject,
			html,
			text: `Name: ${name}\nEmail: ${email}\nSociety: ${society}\nReason: ${reason}\n\n${message}`,
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Contact form send failed:", error);
		return res.status(500).json({ error: "Failed to send email" });
	}
}
