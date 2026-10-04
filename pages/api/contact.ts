import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
export const config = { api: { bodyParser: { sizeLimit: "16kb" } } };
export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const body = req.body;
  if (!body || typeof body !== "object")
    return res.status(400).json({ error: "Invalid message" });
  const { name, email, message, website } = body;
  if (typeof website === "string" && website)
    return res.status(200).json({ message: "Message received" });
  if (
    typeof name !== "string" ||
    name.trim().length < 1 ||
    name.length > 120 ||
    /[\r\n]/.test(name) ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.length > 5000
  )
    return res.status(400).json({ error: "Please check your message details" });
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.EMAIL_FROM ||
    !process.env.EMAIL_TO
  )
    return res.status(503).json({ error: "Please email me directly for now" });
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: `Liplan Portfolio <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      reply_to: email.trim(),
      subject: `Portfolio message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });
    if (result.error)
      return res.status(502).json({ error: "Message could not be sent" });
    return res.status(200).json({ message: "Message sent" });
  } catch {
    return res.status(502).json({ error: "Message could not be sent" });
  }
}
