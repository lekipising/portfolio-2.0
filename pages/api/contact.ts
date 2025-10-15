import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message, name } = req.body;
  // validate the data coming in
  if (!email || !message || !name) {
    return res.status(400).send("Missing one or more fields");
  }

  try {
    await resend.emails.send({
      from: `${name} via Portfolio <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Message from ${name}`,
      text: `From: ${email}\n\nMessage: ${message}`,
    });
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
};
