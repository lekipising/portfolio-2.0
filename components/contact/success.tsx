import React from "react";

export default function SuccessMessage({
  toggleNewForm,
}: {
  toggleNewForm: () => void;
}) {
  return (
    <div className="flex md:max-w-[20vw] w-full md:mt-0 mt-8 flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-[26px] font-medium text-white">Thank you! 🤘</h1>
      <p className="text-[18px] font-medium text-gray-100">
        I have received your message! I will get back to you as soon.
      </p>
      <button
        className="w-max rounded-[8px] bg-dark-100 px-4 py-2"
        onClick={() => toggleNewForm()}
      >
        send-new-message
      </button>
    </div>
  );
}
