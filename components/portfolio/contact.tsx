import React from "react";
import { FormEvent, useState } from "react";
import { Arrow } from "./shared";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      if (!response.ok) throw new Error("Could not send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <h2>
          Good things start
          <br />
          with <em>a hello.</em>
          <span className="lime-dot">↗</span>
        </h2>
        <p>
          Tell me about the role, product, or platform you have in mind. I’m
          interested in work where I can contribute to the decisions as well as
          the delivery.
        </p>
        <a className="email-link" href="mailto:hi@lekipising.com">
          hi@lekipising.com <Arrow />
        </a>
        <div className="contact-availability">
          <span className="status-dot" />
          Let’s discuss roles, product builds, and platform rebuilds.
        </div>
      </div>
      <div className="contact-form-wrap">
        <form
          onSubmit={submit}
          aria-busy={status === "sending"}
          onInput={() => {
            if (status === "success" || status === "error") setStatus("idle");
          }}
        >
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                placeholder="Alex"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="alex@company.com"
              />
            </label>
          </div>
          <label>
            Your message
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={4}
              placeholder="What would you like to talk about?"
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button
            className={`button button-lime submit-button is-${status}`}
            disabled={status === "sending"}
            type="submit"
          >
            <span className="submit-label" key={status}>
              {status === "sending"
                ? "Sending…"
                : status === "success"
                  ? "Message sent"
                  : status === "error"
                    ? "Try again"
                    : "Send a message"}
            </span>
            <span className="submit-icon" aria-hidden="true">
              {status === "sending" ? (
                <span className="sending-spinner" />
              ) : status === "success" ? (
                "✓"
              ) : (
                <Arrow />
              )}
            </span>
          </button>
          <p
            className={`form-status ${status === "error" ? "has-error" : ""}`}
            role="status"
            aria-live="polite"
          >
            <span className="status-copy" key={status}>
              {status === "success"
                ? "Thanks for reaching out. Your message has been sent."
                : status === "error"
                  ? "Your message couldn’t be sent. Please try again or email me directly."
                  : status === "sending"
                    ? "Sending your message…"
                    : "Your details are only used to respond to your message."}
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}
