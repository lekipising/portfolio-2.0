import React, { useState } from "react";
import ShowRealTimeMessage from "./code";
import ContactForm from "./form";
import SuccessMessage from "./success";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messageReceived, setMessageReceived] = useState(false);

  return (
    <section className="relative m-auto flex h-full w-full max-w-[70vw] items-center justify-between pb-32">
      {messageReceived ? (
        <SuccessMessage toggleNewForm={() => setMessageReceived(false)} />
      ) : (
        <ContactForm
          receiveName={(val) => setName(val)}
          receiveEmail={(val) => setEmail(val)}
          receiveMessage={(val) => setMessage(val)}
          submitMessage={() => {
            // clear form
            setName("");
            setEmail("");
            setMessage("");
            setMessageReceived(true);
          }}
        />
      )}
      <div className="absolute left-1/2 top-[40%] h-[50vh] w-[1px] -translate-y-1/2 -translate-x-1/2 bg-gray-100" />
      <ShowRealTimeMessage name={name} email={email} message={message} />
    </section>
  );
}
