import * as brevo from "@getbrevo/brevo";
import {
  getWelcomeEmailHTML,
  getWelcomeEmailText,
} from "../templates/emails/welcome.template";

const emailApi = new brevo.TransactionalEmailsApi();
emailApi.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

interface EmailConfig {
  to: string;
  subject: string;
  htmlContent: string;
  textContent: string;
}

async function sendEmail(config: EmailConfig): Promise<void> {
  const sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = config.subject;
  sendSmtpEmail.htmlContent = config.htmlContent;
  sendSmtpEmail.textContent = config.textContent;
  sendSmtpEmail.sender = {
    name: process.env.SENDER_NAME!,
    email: process.env.SENDER_EMAIL!,
  };
  sendSmtpEmail.to = [{ email: config.to }];

  await emailApi.sendTransacEmail(sendSmtpEmail);
}

export async function sendWelcomeEmail(email: string): Promise<void> {
  try {
    const frontendUrl = process.env.FRONTEND_URL!;

    const htmlContent = getWelcomeEmailHTML({ frontendUrl });
    const textContent = getWelcomeEmailText({ frontendUrl });

    await sendEmail({
      to: email,
      subject: "Welcome to Our Newsletter",
      htmlContent,
      textContent,
    });

    console.log(`Welcome email sent to ${email}`);
  } catch (error: unknown) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
}
