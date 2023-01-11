import React, { useState } from "react";
import ShowRealTimeMessage from "./code";
import ContactForm from "./form";
import MobileSocials from "./mobileContact";
import SuccessMessage from "./success";

import { motion } from "framer-motion";
import { event } from "nextjs-google-analytics";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messageReceived, setMessageReceived] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const data = {
        name,
        email,
        message,
      };
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      setLoading(false);
      // clear form
      setName("");
      setEmail("");
      setMessage("");
      setMessageReceived(name);
      // track event
      event("contact", {
        category: "Contact",
        label: `Contacted by ${name}`,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section
      id="_contact-me"
      className="relative m-auto my-20 mb-32 flex h-max w-full max-w-[85vw] flex-col items-center justify-between rounded-[15px] bg-dark-100/20 p-8 pb-64 md:my-16 md:max-w-[70vw] md:flex-row md:pb-32"
    >
      <div className="absolute left-1/2 -top-16 w-[185px] -translate-x-1/2 md:-top-12">
        <motion.h2 className="text-lg font-semibold text-white">
          Send me a message
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="h-[1px] bg-white"
        />
      </div>
      {messageReceived ? (
        <SuccessMessage
          senderName={messageReceived}
          toggleNewForm={() => setMessageReceived("")}
        />
      ) : (
        <ContactForm
          receiveName={(val) => setName(val)}
          receiveEmail={(val) => setEmail(val)}
          receiveMessage={(val) => setMessage(val)}
          submitMessage={() => {
            sendMessage();
          }}
          loading={loading}
        />
      )}
      <div className="absolute left-1/2 top-[40%] hidden h-[50%] w-[1px] -translate-y-1/2 -translate-x-1/2 bg-gray-100 md:block" />
      <ShowRealTimeMessage name={name} email={email} message={message} />
      <MobileSocials />
    </section>
  );
}
