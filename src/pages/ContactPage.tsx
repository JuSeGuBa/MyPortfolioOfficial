"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const firstName = formData.get("user_firstname") as string;
    const lastName = formData.get("user_lastname") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setError(true);
      return;
    }

    setIsLoading(true);
    setError(false);

    try {
      await emailjs.sendForm(
        "service_yoapk2c",
        "template_ren4i0b",
        form.current,
        "kfk7NXzjf2jUPIPPA",
      );
      setSent(true);
      form.current.reset();
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <p className="contact-header__eyebrow">// get in touch</p>
          <h1 className="contact-header__title">
            <span className="contact-header__accent">C</span>ontact
          </h1>
          <p className="contact-header__subtitle">
            Contact me and let's start creating something amazing!
          </p>
        </div>

        {/* Success state */}
        {sent ? (
          <div className="contact-success">
            <span className="contact-success__icon">✓</span>
            <p className="contact-success__text">Message sent successfully!</p>
            <button
              className="contact-success__reset"
              onClick={() => setSent(false)}
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            {error && (
              <p className="contact-error">
                Please fill in all required fields.
              </p>
            )}

            <div className="contact-grid">
              {/* First name */}
              <div className="contact-field">
                <label htmlFor="first-name" className="contact-label">
                  First name <sup>*</sup>
                </label>
                <input
                  id="first-name"
                  name="user_firstname"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="contact-input"
                />
              </div>

              {/* Last name */}
              <div className="contact-field">
                <label htmlFor="last-name" className="contact-label">
                  Last name <sup>*</sup>
                </label>
                <input
                  id="last-name"
                  name="user_lastname"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="contact-input"
                />
              </div>

              {/* Company */}
              <div className="contact-field contact-field--full">
                <label htmlFor="company" className="contact-label">
                  Company
                </label>
                <input
                  id="company"
                  name="user_company"
                  type="text"
                  autoComplete="organization"
                  className="contact-input"
                />
              </div>

              {/* Email */}
              <div className="contact-field contact-field--full">
                <label htmlFor="email" className="contact-label">
                  Email <sup>*</sup>
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  required
                  className="contact-input"
                />
              </div>

              {/* Message */}
              <div className="contact-field contact-field--full">
                <label htmlFor="message" className="contact-label">
                  Message <sup>*</sup>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="contact-input contact-input--textarea"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`contact-submit ${isLoading ? "contact-submit--loading" : ""}`}
            >
              {isLoading ? (
                <>
                  <span className="contact-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <span>Let's Talk</span>
                  <span className="contact-submit__arrow">→</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
