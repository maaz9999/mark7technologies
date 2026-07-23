import Link from "next/link";
import { Hero3D, Reveal } from "../../components/MotionPrimitives";
import { Mark47ArchitectureVisualizer, Mark56ArchitectureVisualizer } from "../../components/SystemArchitectureDiagram";

export default function ProductsPage() {
  return (
    <main className="route-page">
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "18px" }}>
            <i /> <span>MARK7 PRODUCT SUITE</span>
          </div>
          <h1>
            Focused products for<br />
            <em>esports &amp; business operations.</em>
          </h1>
          <p>
            We build specialized, purpose-built software products rather than generic tools.
          </p>
          <Link className="button" href="/contact">
            Book a Live Demo <span>-&gt;</span>
          </Link>
        </Reveal>
        <Hero3D />
      </section>

      {/* MARK 47 Product Detail & Architecture Section */}
      <section className="content-section shell" id="mark47-detail">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot" />
            </div>
            <span className="section-category-tag">ESPORTS BROADCAST SOFTWARE</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 47 — Broadcast graphics.<br />
              <span className="gradient-text-orange">Powered by real-time data.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card">
          <div className="product-showcase-grid" style={{ marginBottom: "32px" }}>
            <div>
              <div className="badge-pill" style={{ marginBottom: "14px", background: "rgba(255, 77, 21, 0.1)", borderColor: "rgba(255, 77, 21, 0.3)", color: "var(--orange)" }}>
                <i style={{ background: "var(--orange)", boxShadow: "0 0 8px var(--orange)" }} />
                <span>STATUS: LIVE — PUBG MOBILE SHIPPING NOW</span>
              </div>
              <h3 style={{ fontSize: "26px", fontWeight: "800", margin: "0 0 12px", color: "#ffffff" }}>
                Design-to-Broadcast Graphic Pipeline
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.65", margin: "0 0 20px" }}>
                MARK 47 takes your existing design work — your overlay PSDs — and turns them into live, data-driven broadcast graphics for vMix and OBS.
              </p>
              <Link className="button button-small" href="/mark47">
                View Full MARK 47 Page <span>-&gt;</span>
              </Link>
            </div>
            <div>
              <div className="mark47-banner-wrapper">
                <img src="/assets/MARK47.png" alt="MARK 47 Software" />
              </div>
            </div>
          </div>

          {/* Standalone MARK 47 Architecture Pipeline on Products Page */}
          <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <h4 style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--orange)", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              MARK 47 System Architecture Pipeline
            </h4>
            <Mark47ArchitectureVisualizer />
          </div>
        </div>
      </section>

      {/* MARK 56 Product Detail & Architecture Section */}
      <section className="content-section shell" id="mark56-detail">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill green-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">02</span>
              <span className="num-dot green-dot" />
            </div>
            <span className="section-category-tag green-tag">WHATSAPP AI BUSINESS AGENT</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 56 — Your 24/7 AI Agent<br />
              <span className="gradient-text-green">for WhatsApp communication.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card" style={{ borderColor: "rgba(37, 211, 102, 0.2)" }}>
          <div className="product-showcase-grid" style={{ marginBottom: "32px" }}>
            <div>
              <div className="badge-pill badge-whatsapp" style={{ marginBottom: "14px" }}>
                <i />
                <span>STATUS: IN DEVELOPMENT — LAUNCHING SOON</span>
              </div>
              <h3 style={{ fontSize: "26px", fontWeight: "800", margin: "0 0 12px", color: "#ffffff" }}>
                AI Customer Communications &amp; Real Availability Booking
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.65", margin: "0 0 20px" }}>
                An AI Agent that lives inside your WhatsApp business number. It understands text and voice notes in Urdu, Roman Urdu, and English.
              </p>
              <Link className="button button-whatsapp button-small" href="/mark56">
                View Full MARK 56 Page <span>-&gt;</span>
              </Link>
            </div>
            <div className="whatsapp-icon-wrapper">
              <img src="/assets/WHATS APP ICON.png" alt="MARK 56 WhatsApp AI" />
            </div>
          </div>

          {/* Standalone MARK 56 Architecture Pipeline on Products Page */}
          <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(37, 211, 102, 0.15)" }}>
            <h4 style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "#25d366", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              MARK 56 Reasoning Engine Architecture
            </h4>
            <Mark56ArchitectureVisualizer />
          </div>
        </div>
      </section>

      {/* MARK 56 Voice Product Detail Section */}
      <section className="content-section shell" id="mark56-voice-detail">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill violet-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">03</span>
              <span className="num-dot violet-dot" />
            </div>
            <span className="section-category-tag violet-tag">PHONE CALL AI AGENT (COMING SOON)</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 56 Voice — Phone call AI<br />
              <span className="gradient-text-violet">for your business communications.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card" style={{ borderColor: "rgba(139, 92, 246, 0.25)" }}>
          <div className="product-showcase-grid">
            <div>
              <div className="badge-pill" style={{ marginBottom: "14px", background: "rgba(139, 92, 246, 0.1)", borderColor: "rgba(139, 92, 246, 0.3)", color: "var(--violet-soft)" }}>
                <i style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }} />
                <span>STATUS: IN DEVELOPMENT — COMING SOON</span>
              </div>
              <h3 style={{ fontSize: "26px", fontWeight: "800", margin: "0 0 12px", color: "#ffffff" }}>
                Extending WhatsApp AI Intelligence to Phone Calls
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.65", margin: "0 0 20px" }}>
                When a customer calls instead of sending a WhatsApp message, MARK 56 Voice speaks naturally in real time, schedules appointments, and transfers calls only when necessary.
              </p>
              <Link className="button button-small" style={{ background: "linear-gradient(135deg, var(--violet), #6d28d9)", boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)" }} href="/mark56-voice">
                View Full MARK 56 Voice Page &amp; Waitlist <span>-&gt;</span>
              </Link>
            </div>

            <div style={{ padding: "24px", border: "1px solid var(--line)", borderRadius: "14px", background: "rgba(139, 92, 246, 0.04)" }}>
              <span style={{ color: "var(--violet-soft)", fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700" }}>VOICE CAPABILITIES (COMING SOON)</span>
              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", color: "#cbd5e1", fontSize: "12.5px", lineHeight: "2" }}>
                <li>✓ Natural conversational voice speech</li>
                <li>✓ Shares knowledge base with MARK 56 WhatsApp</li>
                <li>✓ Automated phone appointment booking</li>
                <li>✓ Instant call transfer to staff upon request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
