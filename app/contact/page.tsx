"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "../../components/MotionPrimitives";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "MARK 47",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Please check your connection or email hello@mark7technologies.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="route-page">
      <section className="inner-hero shell" style={{ paddingBottom: "40px" }}>
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "18px" }}>
            <i /> <span>DIRECT INQUIRIES &amp; DEMOS</span>
          </div>
          <h1>
            Book a product demo or<br />
            <em>discuss your custom build.</em>
          </h1>
          <p style={{ maxWidth: "580px", color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}>
            Get in touch with our engineering team for a live demonstration of MARK 47, MARK 56 WhatsApp AI, or custom software solutions.
          </p>
        </Reveal>
      </section>

      <section className="content-section shell" style={{ paddingTop: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "flex-start" }}>
          
          {/* Left Column: Contact Form */}
          <div className="product-showcase-card" style={{ padding: "36px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div className="badge-pill" style={{ margin: "0 auto 16px auto", background: "rgba(16, 185, 129, 0.15)", color: "#86efac", borderColor: "rgba(16, 185, 129, 0.3)" }}>
                  <i style={{ background: "#10b981" }} /> <span>DEMO REQUEST RECEIVED</span>
                </div>
                <h3 style={{ fontSize: "24px", color: "#ffffff", fontWeight: "800", margin: "0 0 10px" }}>
                  Thank you, {formData.name || "there"}!
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", maxWidth: "440px", margin: "0 auto" }}>
                  Your demo request for <strong>{formData.product}</strong> has been logged. Our engineering team will reach out at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button 
                  className="button button-secondary" 
                  style={{ marginTop: "24px" }} 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", product: "MARK 47", message: "" });
                  }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", margin: 0 }}>
                  Request Product Demo
                </h3>

                {errorMsg && (
                  <div style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#fca5a5", fontSize: "13px" }}>
                    ⚠️ {errorMsg}
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer" 
                    style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--line)", color: "#ffffff", fontSize: "14px", outline: "none" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com" 
                    style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--line)", color: "#ffffff", fontSize: "14px", outline: "none" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Select Product
                  </label>
                  <select 
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(13, 18, 36, 0.9)", border: "1px solid var(--line)", color: "#ffffff", fontSize: "14px", outline: "none" }}
                  >
                    <option value="MARK 47">MARK 47 — Esports Broadcast Overlays</option>
                    <option value="MARK 56">MARK 56 — WhatsApp AI Agent</option>
                    <option value="MARK 56 VOICE">MARK 56 Voice — Phone Call AI (Waitlist)</option>
                    <option value="Custom">Custom Software Development</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Message &amp; Project Requirements
                  </label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your tournament, business, or software needs..." 
                    style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--line)", color: "#ffffff", fontSize: "14px", outline: "none", resize: "none" }}
                  />
                </div>

                <button className="button" type="submit" disabled={loading} style={{ marginTop: "10px" }}>
                  {loading ? "Submitting Request..." : "Submit Demo Request ->"}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="product-showcase-card" style={{ padding: "28px", margin: 0 }}>
              <span className="footer-heading" style={{ marginBottom: "10px", display: "block" }}>EMAIL US DIRECTLY</span>
              <a 
                href={`mailto:hello@mark7technologies.com?subject=Demo%20Inquiry%20from%20Website&body=Name:%20${encodeURIComponent(formData.name)}%0D%0AProduct:%20${encodeURIComponent(formData.product)}`} 
                style={{ color: "var(--orange-soft)", fontSize: "18px", fontWeight: "800", fontFamily: "var(--font-mono)" }}
              >
                hello@mark7technologies.com
              </a>
              <p style={{ color: "#94a3b8", fontSize: "12px", margin: "8px 0 0", lineHeight: "1.5" }}>
                Send direct email notes. We respond within 24 hours on business days.
              </p>
            </div>

            <div className="product-showcase-card" style={{ padding: "28px", margin: 0, borderColor: "rgba(37, 211, 102, 0.2)" }}>
              <span className="footer-heading" style={{ color: "#86efac", marginBottom: "10px", display: "block" }}>WHATSAPP AI DEMO</span>
              <p style={{ color: "#cbd5e1", fontSize: "13px", margin: 0, lineHeight: "1.5" }}>
                Want to test the MARK 56 WhatsApp AI agent live? Mention WhatsApp Demo in your message to test our live bot.
              </p>
            </div>

            <div className="product-showcase-card" style={{ padding: "28px", margin: 0, borderColor: "rgba(255, 77, 21, 0.2)" }}>
              <span className="footer-heading" style={{ color: "var(--orange-soft)", marginBottom: "10px", display: "block" }}>MARK 47 DEMO SITE</span>
              <p style={{ color: "#cbd5e1", fontSize: "13px", margin: "0 0 12px", lineHeight: "1.5" }}>
                You can also visit the official MARK 47 product portal directly:
              </p>
              <a className="button button-small" href="https://mark47.com" target="_blank" rel="noopener noreferrer">
                Visit mark47.com <span>-&gt;</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
