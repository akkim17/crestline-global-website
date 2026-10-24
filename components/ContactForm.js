"use client";

import { useState } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    interest: "",
    fname: "",
    lname: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    nickname: "", // Honeypot field (hidden from users, if filled -> spam)
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.nickname) {
      console.warn("Spam detected via honeypot field.");
      setStatus("success"); // Silently pretend it succeeded to deter spammers
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.fname} ${formData.lname}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        let errorText = "Unable to process intake at this time. Please try again.";
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) errorText = errorData.error;
        } catch {
          // Response was not JSON (e.g. server error page)
        }
        throw new Error(errorText);
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setErrorMessage(err.message || "Procurement network connection latency. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(46, 125, 50, 0.08)", color: "#2E7D32", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto" }}>
          <ShieldCheck size={36} />
        </div>
        <h3 style={{ color: "#0A2540", textTransform: "uppercase", fontSize: "1.3rem", fontWeight: "900", marginBottom: "0.75rem" }}>Enquiry Transmitted</h3>
        <p style={{ color: "var(--charcoal)", fontSize: "0.9rem", lineHeight: "1.55", margin: 0 }}>
          Thank you. Your commercial inquiry details have been successfully secured and routed to our procurement desk team.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <h3>Submit Your Enquiry</h3>
      <div className="form-title-line"></div>

      <form onSubmit={handleSubmit} id="contactForm">
        {/* Honeypot field (visually hidden) */}
        <div style={{ display: "none" }} aria-hidden="true">
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            value={formData.nickname}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        {/* Enquiry Category */}
        <div className="contact-form-group">
          <label htmlFor="interest">Enquiry Category <span>*</span></label>
          <select
            id="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select enquiry type...</option>
            <option value="Mining Chemicals">Mining Chemicals (Ammonium Nitrate Bulk)</option>
            <option value="Minerals & Copper">Minerals &amp; Copper Trading</option>
            <option value="Agro Distribution">Agro Solutions &amp; SRT Bio Capsules</option>
            <option value="Trade Services">Trade Services &amp; Agency Commission</option>
          </select>
        </div>

        {/* First & Last Name */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="fname">First Name <span>*</span></label>
            <input
              type="text"
              id="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              placeholder="John"
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="lname">Last Name <span>*</span></label>
            <input
              type="text"
              id="lname"
              value={formData.lname}
              onChange={handleChange}
              required
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Company & Phone */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="company">Company Name <span>*</span></label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Company / Organization"
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone">Phone Number <span>*</span></label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              placeholder="+971 5X XXX XXXX"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="contact-form-group">
          <label htmlFor="email">Business Email Address <span>*</span></label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="name@company.com"
            suppressHydrationWarning
          />
        </div>

        {/* Details text area */}
        <div className="contact-form-group">
          <label htmlFor="message">Enquiry Details <span>*</span></label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Please provide details about your requirement, product, quantity, destination or any other relevant information..."
          ></textarea>
        </div>

        {status === "error" && (
          <div style={{ color: "#801F33", fontWeight: "700", marginBottom: "1.25rem", fontSize: "0.9rem" }}>
            {errorMessage}
          </div>
        )}

        {/* Footer Submit & Security Badge */}
        <div className="contact-form-footer">
          <button
            type="submit"
            className="contact-submit-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Transmitting..." : "Submit Enquiry"} <ArrowRight size={14} />
          </button>

          <div className="contact-security-badge">
            <ShieldCheck size={28} className="contact-security-icon" />
            <p className="contact-security-text">
              Your information is secure and protected with us.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
