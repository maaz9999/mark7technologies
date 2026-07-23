import Link from "next/link";
import { Hero3D, Reveal } from "../components/MotionPrimitives";

export default function Home() {
  return (
    <main className="route-page home-v2">
      {/* Hero Section with Tech Card on Right */}
      <section className="hero-v2 shell">
        <Reveal className="hero-v2-copy">
          <div className="badge-pill" style={{ marginBottom: "14px" }}>
            <i /> <span>MARK7 TECHNOLOGIES</span>
          </div>
          <h1>
            Software for esports &amp; <em>business communication.</em>
          </h1>
          <p>
            We build focused, purpose-built software rather than generic tools. Two core product lines are currently live and in active development.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/mark47">
              Explore MARK 47 <span>-&gt;</span>
            </Link>
            <Link className="button button-whatsapp" href="/mark56">
              Explore MARK 56 <span>-&gt;</span>
            </Link>
            <Link className="button button-secondary" href="/contact">
              Book Demo
            </Link>
          </div>
          <div className="proof-inline">
            <span>MARK 47 (LIVE)</span>
            <span>MARK 56 (WHATSAPP AI)</span>
            <span>MARK 56 VOICE (COMING SOON)</span>
          </div>
        </Reveal>

        <Hero3D />
      </section>

      {/* Section 01 — MARK 47 BROADCAST SOFTWARE */}
      <section className="content-section shell" id="mark47">
        <Reveal className="route-heading-clean">
          <div className="heading-left-meta">
            <div className="section-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot" />
            </div>
            <span className="section-category-tag">ESPORTS BROADCAST SOFTWARE</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 47 — Broadcast graphics. <span className="gradient-text-orange">Powered by real-time data.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card">
          <div className="product-showcase-grid">
            <div className="showcase-left-copy">
              <div className="badge-pill" style={{ marginBottom: "16px", background: "rgba(255, 77, 21, 0.12)", borderColor: "rgba(255, 77, 21, 0.35)", color: "var(--orange)" }}>
                <i style={{ background: "var(--orange)", boxShadow: "0 0 8px var(--orange)" }} />
                <span>STATUS: LIVE — PUBG MOBILE SHIPPING NOW</span>
              </div>
              
              <h3 className="showcase-title">
                Design-to-Broadcast Graphic Pipeline
              </h3>

              {/* Problem / Solution Highlight Boxes */}
              <div className="showcase-block-list">
                <div className="showcase-block problem-block">
                  <div className="block-header">
                    <span className="block-tag tag-red">THE PROBLEM</span>
                  </div>
                  <p>
                    Esports tournament production relies on rigid, legacy tools. Organizers need live updating overlays without requiring a massive production crew.
                  </p>
                </div>

                <div className="showcase-block solution-block">
                  <div className="block-header">
                    <span className="block-tag tag-orange-sol">WHAT MARK 47 DOES</span>
                  </div>
                  <p>
                    Transforms your existing overlay PSDs into live, data-driven broadcast graphics. Player stats, scores, and standings update automatically with zero manual entry.
                  </p>
                </div>
              </div>

              {/* Clean Feature Pills */}
              <div className="feature-pill-list">
                <span>PUBG Mobile Module</span>
                <span>vMix Browser Source</span>
                <span>OBS Studio Ready</span>
                <span>Automated Match Data</span>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link className="button" href="/mark47">
                  View Full MARK 47 Details &amp; Architecture <span>-&gt;</span>
                </Link>
              </div>
            </div>

            <div className="showcase-right-visual">
              <div className="mark47-banner-wrapper">
                <img src="/assets/MARK47.png" alt="MARK 47 Esports Broadcast Graphics Software" />
                <div className="banner-overlay-badge">
                  <span>60 FPS RENDER ENGINE</span>
                </div>
              </div>
              <div className="veteran-box">
                <span className="veteran-title">BUILT BY ESPORTS BROADCAST VETERANS</span>
                <p className="veteran-desc">
                  MARK 47 is engineered by competitive players, tournament organizers, and broadcast engineers — not developers guessing at tournament needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-features-3">
            <div className="feature-mini-box">
              <h4>Design-to-Broadcast Pipeline</h4>
              <p>Upload your PSD overlay designs and MARK 47 turns them into live, animated graphics — no rebuilding from scratch.</p>
            </div>
            <div className="feature-mini-box">
              <h4>Live Data Binding</h4>
              <p>Player names, scores, and match stats update automatically in real time, pulled directly from live game feeds.</p>
            </div>
            <div className="feature-mini-box">
              <h4>vMix &amp; OBS Ready</h4>
              <p>Loads directly into existing production setups as a transparent browser source — no new hardware required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — MARK 56 WHATSAPP AI AGENT */}
      <section className="content-section shell" id="mark56">
        <Reveal className="route-heading-clean">
          <div className="heading-left-meta">
            <div className="section-number-pill green-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">02</span>
              <span className="num-dot green-dot" />
            </div>
            <span className="section-category-tag green-tag">WHATSAPP AI BUSINESS AGENT</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 56 — Your 24/7 AI Agent <span className="gradient-text-green">for WhatsApp communication.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card" style={{ borderColor: "rgba(37, 211, 102, 0.2)" }}>
          <div className="product-showcase-grid">
            <div className="showcase-left-copy">
              <div className="badge-pill badge-whatsapp" style={{ marginBottom: "16px" }}>
                <i />
                <span>STATUS: IN DEVELOPMENT — LAUNCHING SOON</span>
              </div>
              
              <h3 className="showcase-title">
                AI Customer Communications &amp; Real Availability Booking
              </h3>

              <div className="showcase-block-list">
                <div className="showcase-block problem-block-wa">
                  <div className="block-header">
                    <span className="block-tag tag-red-wa">THE PROBLEM</span>
                  </div>
                  <p>
                    Customers message on WhatsApp at 2am or during peak hours. Every missed message is a lost booking. Every unread voice note is a customer lost to a competitor.
                  </p>
                </div>

                <div className="showcase-block solution-block-wa">
                  <div className="block-header">
                    <span className="block-tag tag-green-sol">WHAT MARK 56 DOES</span>
                  </div>
                  <p>
                    An AI Agent that lives inside your WhatsApp business number. It understands text &amp; voice notes in Urdu, Roman Urdu, and English, answers inquiries, and books appointments.
                  </p>
                </div>
              </div>

              <div style={{ margin: "20px 0" }}>
                <span style={{ display: "block", color: "#94a3b8", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>Built For:</span>
                <div className="feature-pill-list" style={{ margin: 0 }}>
                  <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Hotels</span>
                  <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Clinics</span>
                  <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Salons</span>
                  <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Real Estate</span>
                  <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Restaurants</span>
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link className="button button-whatsapp" href="/mark56">
                  View Full MARK 56 Details &amp; Architecture <span>-&gt;</span>
                </Link>
              </div>
            </div>

            <div className="showcase-right-visual">
              <div className="whatsapp-icon-wrapper">
                <img src="/assets/WHATS APP ICON.png" alt="MARK 56 WhatsApp AI Agent" />
              </div>
            </div>
          </div>

          <div className="grid-features-3" style={{ marginTop: "32px" }}>
            <div className="feature-mini-box">
              <h4>Understands Voice Notes</h4>
              <p>Customers can send voice notes in Urdu — MARK 56 understands them and replies instantly like a human staff member.</p>
            </div>
            <div className="feature-mini-box">
              <h4>Real Booking Management</h4>
              <p>Checks real room availability, doctor timings, and calendar slots. Never promises a time slot that doesn't exist.</p>
            </div>
            <div className="feature-mini-box">
              <h4>Smart Human Handoff</h4>
              <p>Sensitive questions or complex requests are transferred to your team instantly with full chat history &amp; context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — MARK 56 VOICE */}
      <section className="content-section shell" id="mark56-voice">
        <Reveal className="route-heading-clean">
          <div className="heading-left-meta">
            <div className="section-number-pill violet-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">03</span>
              <span className="num-dot violet-dot" />
            </div>
            <span className="section-category-tag violet-tag">UPCOMING CAPABILITY</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 56 Voice — <span className="gradient-text-violet">Phone call AI for your business.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card" style={{ borderColor: "rgba(139, 92, 246, 0.25)" }}>
          <div className="product-showcase-grid">
            <div className="showcase-left-copy">
              <div className="badge-pill" style={{ marginBottom: "16px", background: "rgba(139, 92, 246, 0.1)", borderColor: "rgba(139, 92, 246, 0.3)", color: "var(--violet-soft)" }}>
                <i style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }} />
                <span>STATUS: IN DEVELOPMENT — COMING SOON</span>
              </div>
              
              <h3 className="showcase-title">
                Extending WhatsApp AI Intelligence to Phone Calls
              </h3>
              
              <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.65", margin: "0 0 16px" }}>
                MARK 56 Voice extends everything your AI Agent already knows about your business to real telephone calls. When a customer calls instead of messaging, the same AI answers naturally, schedules appointments, and transfers calls only when necessary.
              </p>

              <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.55", margin: "0 0 20px" }}>
                *This is a separate, upcoming capability currently in early development and will be rolled out for existing MARK 56 customers first.
              </p>

              <Link className="button" style={{ background: "linear-gradient(135deg, var(--violet), #6d28d9)", boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)" }} href="/mark56-voice">
                View MARK 56 Voice Details &amp; Waitlist <span>-&gt;</span>
              </Link>
            </div>

            <div className="showcase-right-visual">
              <div style={{ padding: "24px", border: "1px solid var(--line)", borderRadius: "14px", background: "rgba(139, 92, 246, 0.04)", width: "100%" }}>
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
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="shell" style={{ marginBottom: "80px" }} id="contact">
        <div className="cta-v2">
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto" }}>
              <i /> <span>DISCUSS YOUR PRODUCT DEMO</span>
            </div>
            <h2>
              Ready to transform your broadcasts or customer service?
            </h2>
            <p>
              Book a live demo for MARK 47 broadcast software or get early access to MARK 56 WhatsApp AI agent for your business.
            </p>
            <Link className="button button-light" href="/contact">
              Contact Mark7 Technologies <span>-&gt;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
