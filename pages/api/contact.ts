import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message, name } = req.body;
  // validate the data coming in
  if (!email || !message || !name) {
    return res.status(400).send("Missing one or more fields");
  }

  const msg = {
    to: process.env.EMAIL_TO,
    from: {
      email: process.env.EMAIL_FROM,
      name: `${name} via Portfolio`,
    },
    replyTo: email,
    subject: `Message from ${name}`,
    name,
    text: `From: ${email} Message: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
