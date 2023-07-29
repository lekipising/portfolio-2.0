import React, { useEffect, useRef, useState } from "react";
import ShowRealTimeMessage from "./code";
import ContactForm from "./form";
import MobileSocials from "./mobileContact";
import SuccessMessage from "./success";

import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";

export default function ContactMe({setIsVisible}: {setIsVisible: () => void}) {


  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);


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
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section
    ref={observeRef}
      id="_contact-me"
      className="relative m-auto my-20 mb-32 flex h-max w-full max-w-[85vw] flex-col items-center justify-between rounded-[15px] bg-dark-100/20 p-8 pb-64 md:my-32 md:max-w-[70vw] md:flex-row md:pb-8"
    >
      <div className="absolute left-1/2 -top-16 w-[185px] -translate-x-1/2 md:-top-12">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          Send me a message
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
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
