import React from "react";

export default function SuccessMessage({
  toggleNewForm,
  senderName,
}: {
  toggleNewForm: () => void;
  senderName: string;
}) {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-6 text-center md:mt-0 md:max-w-[20vw]">
      <h1 className="text-[26px] font-medium text-white">Thank you! 🤘</h1>
      <p className="text-[18px] font-medium text-gray-100">
        I have received your message,{" "}
        <span className="text-white">{senderName}</span>. I will get back to you
        as soon as possible.
      </p>
      <button
        className="w-max rounded-[8px] bg-dark-100 px-4 py-2"
        onClick={() => toggleNewForm()}
      >
        send-new-message
      </button>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/lekipising"
        className="w-max rounded-[8px] bg-dark-300 px-4 py-2 text-sm"
      >
        View my GitHub profile
      </a>
    </div>
  );
}
