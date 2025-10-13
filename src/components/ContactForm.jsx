"use client";

import { useState } from "react";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import Turnstile from "react-turnstile";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!turnstileToken) {
      setErrorMessage("Please verify you are human!");
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, token: turnstileToken }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Submission failed");

      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTurnstileToken("");
      setIsModalOpen(false);
    } catch (err) {
      setErrorMessage(err.message);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
        Zindex={false}
      >
        <button
          className="_btn-connect contact-info-upper-container"
          onClick={() => setIsModalOpen(true)}
        >
          Leave a Message....
        </button>
      </AnimatedContent>

      {isModalOpen && (
        <div className="_modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="_modal-content overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="_modal-header">
              <div>
                <h2>Contact Me</h2>
                <p>Send us a message and we'll get back to you ASAP.</p>
              </div>
              <button
                className="_btn-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="_contact-form">
              {/* name + email */}
              <div className="_form-row">
                <div className="_form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="_form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* subject */}
              <div className="_form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* message */}
              <div className="_form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  disabled={isSubmitting}
                  rows="4"
                />
              </div>

              {/* Cloudflare Turnstile */}
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onVerify={(token) => {
                  setTurnstileToken(token);
                }}
                onExpire={() => setTurnstileToken("")}
                theme="light"
              />

              <div className="_form-actions">
                <button
                  type="button"
                  className="_btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="_btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="_modal-overlay" onClick={() => setShowSuccess(false)}>
          <div className="_success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="_success-icon">✓</div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you! I’ll reply as soon as I can.</p>
            <button
              className="_btn-primary"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="_modal-overlay" onClick={() => setShowError(false)}>
          <div
            className="_success-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ border: "1px solid #dc2626" }}
          >
            <div className="_success-icon" style={{ background: "#dc2626" }}>
              !
            </div>
            <h3>Submission Failed</h3>
            <p>{errorMessage}</p>
            <button
              className="_btn-primary"
              onClick={() => setShowError(false)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}
