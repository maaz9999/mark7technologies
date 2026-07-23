import Link from "next/link";
import { Reveal, TiltCard } from "../../components/MotionPrimitives";
import { Mark56ArchitectureVisualizer } from "../../components/SystemArchitectureDiagram";

export default function Mark56Page() {
  return (
    <main className="route-page">
      {/* MARK 56 Hero Section */}
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill badge-whatsapp" style={{ marginBottom: "18px" }}>
            <i /> <span>STATUS: IN DEVELOPMENT — LAUNCHING SOON</span>
          </div>
          <h1>
            MARK 56 — Your 24/7 AI Agent<br />
            <em>for WhatsApp customer communications.</em>
          </h1>
          <p style={{ maxWidth: "600px", color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}>
            Understands voice notes &amp; text in Urdu, Roman Urdu, and English. Answers inquiries instantly, checks real-time availability, and completes customer bookings.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a className="button button-whatsapp" href="/#contact">
              Book a Live Demo <span>-&gt;</span>
            </a>
            <Link className="button button-secondary" href="/products">
              Explore All Products
            </Link>
          </div>
        </Reveal>

        <div className="whatsapp-icon-wrapper" style={{ borderRadius: "18px" }}>
          <img src="/assets/WHATS APP ICON.png" alt="MARK 56 WhatsApp AI Agent" />
        </div>
      </section>

      {/* MARK 56 Architecture Section */}
      <section className="content-section shell">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill green-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot green-dot" />
            </div>
            <span className="section-category-tag green-tag">AI REASONING ENGINE ARCHITECTURE</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 56 System Architecture.<br />
              <span className="gradient-text-green">Multilingual voice &amp; availability engine.</span>
            </h2>
          </div>
        </Reveal>

        <Mark56ArchitectureVisualizer />
      </section>

      {/* Target Industries Section */}
      <section className="content-section shell" style={{ paddingTop: "20px" }}>
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill green-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">02</span>
            </div>
            <span className="section-category-tag green-tag">TARGET INDUSTRIES</span>
          </div>
          <div className="heading-main-title">
            <h2>
              Tailored for high-inquiry service businesses.
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3">
          <TiltCard className="depth-card" style={{ borderColor: "rgba(37, 211, 102, 0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🏨</span>
              <span className="node-tag tag-wa-sm">HOSPITALITY</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Hotels &amp; Hospitality
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Answers room availability inquiries, rate packages, and checkout policies in Urdu or English. Automatically reserves room dates directly into your PMS calendar.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(37, 211, 102, 0.05)", borderRadius: "8px", border: "1px solid rgba(37, 211, 102, 0.2)", fontSize: "11px", color: "#86efac", fontFamily: "var(--font-mono)" }}>
              • Room Availability Sync<br />
              • Instant Reservation Booking
            </div>
          </TiltCard>

          <TiltCard className="depth-card" style={{ borderColor: "rgba(37, 211, 102, 0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🩺</span>
              <span className="node-tag tag-wa-sm">MEDICAL</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Clinics &amp; Medical Centers
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Handles patient appointment slot booking for doctors and specialists. Sends instant WhatsApp appointment confirmations and pre-visit guidelines.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(37, 211, 102, 0.05)", borderRadius: "8px", border: "1px solid rgba(37, 211, 102, 0.2)", fontSize: "11px", color: "#86efac", fontFamily: "var(--font-mono)" }}>
              • Doctor Schedule Integration<br />
              • Automated Patient Reminders
            </div>
          </TiltCard>

          <TiltCard className="depth-card" style={{ borderColor: "rgba(37, 211, 102, 0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>✂️</span>
              <span className="node-tag tag-wa-sm">SERVICES &amp; REAL ESTATE</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Salons, Real Estate &amp; Services
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Manages service appointments and property viewing slot requests 24/7 without staff delays. Transfers complex cases to human staff with full conversation history.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(37, 211, 102, 0.05)", borderRadius: "8px", border: "1px solid rgba(37, 211, 102, 0.2)", fontSize: "11px", color: "#86efac", fontFamily: "var(--font-mono)" }}>
              • 24/7 Voice Note Understanding<br />
              • Seamless Human Staff Handoff
            </div>
          </TiltCard>
        </div>
      </section>

      {/* CTA */}
      <section className="shell" style={{ marginBlock: "60px 80px" }}>
        <div className="cta-v2" style={{ borderColor: "rgba(37, 211, 102, 0.25)" }}>
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill badge-whatsapp" style={{ margin: "0 auto 14px auto" }}>
              <i /> <span>MARK 56 DEMO ACCESS</span>
            </div>
            <h2>Never miss another customer booking on WhatsApp</h2>
            <p>Get early access for your hotel, clinic, salon, or service business.</p>
            <a className="button button-whatsapp" href="mailto:hello@mark7technologies.com?subject=MARK%2056%20Demo%20Request">
              Request MARK 56 Demo <span>-&gt;</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
