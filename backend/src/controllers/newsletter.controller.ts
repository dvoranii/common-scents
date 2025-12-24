import { Request, Response } from "express";
import {
  addContactToNewsletter,
  isDuplicateContactError,
} from "../services/newsletter.service";
import { sendWelcomeEmail } from "../services/email.service";
import { EMAIL_CONFIG } from "../config/email.config";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const subscribeToNewsletter = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    await addContactToNewsletter(email);

    res.status(200).json({
      message: "Successfully subscribed! Check your email in 30 seconds.",
    });

    setTimeout(async () => {
      try {
        await sendWelcomeEmail(email);
      } catch (emailError: unknown) {
        console.error(`Failed to send welcome email to ${email}:`, emailError);
      }
    }, EMAIL_CONFIG.WELCOME_EMAIL_DELAY_MS);
  } catch (error: unknown) {
    console.error("Newsletter subscription error:", error);

    if (isDuplicateContactError(error)) {
      return res.status(200).json({
        message: "You're already subscribed!",
      });
    }

    res.status(500).json({
      error: "Failed to subscribe. Please try again later.",
    });
  }
};
