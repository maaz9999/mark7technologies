import Link from "next/link";
import { Reveal, TiltCard } from "../../components/MotionPrimitives";

export default function Mark56VoicePage() {
  return (
    <main className="route-page">
      {/* MARK 56 Voice Hero Section */}
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "18px", background: "rgba(139, 92, 246, 0.12)", borderColor: "rgba(139, 92, 246, 0.35)", color: "var(--violet-soft)" }}>
            <i style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }} />
            <span>STATUS: IN DEVELOPMENT — COMING SOON</span>
          </div>
          <h1>
            MARK 56 Voice — Phone call AI<br />
            <em style={{ background: "linear-gradient(100deg, #c4b5fd 20%, var(--violet) 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              for your business communications.
            </em>
          </h1>
          <p style={{ maxWidth: "600px", color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}>
            Extends everything your AI Agent already knows about your business to real telephone calls. Answers incoming phone calls naturally, schedules appointments, and transfers calls only when necessary.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a className="button" style={{ background: "linear-gradient(135deg, var(--violet), #6d28d9)", boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)" }} href="mailto:hello@mark7technologies.com?subject=MARK%2056%20Voice%20Waitlist">
              Join Voice Waitlist (Coming Soon) <span>-&gt;</span>
            </a>
            <Link className="button button-secondary" href="/mark56">
              Explore MARK 56 WhatsApp AI
            </Link>
          </div>
        </Reveal>

        <div style={{ padding: "32px", border: "1px solid rgba(139, 92, 246, 0.3)", borderRadius: "18px", background: "linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(13, 18, 36, 0.95))", boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 35px rgba(139, 92, 246, 0.15)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <span style={{ color: "var(--violet-soft)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em" }}>
              📞 MARK 56 VOICE ENGINE
            </span>
            <span className="node-tag" style={{ background: "rgba(139, 92, 246, 0.2)", color: "#c4b5fd" }}>
              EARLY ACCESS
            </span>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px" }}>
            Designed to integrate directly with your existing PBX or phone line numbers. When a customer calls instead of sending a message, MARK 56 Voice speaks naturally in real time.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ padding: "4px 8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--font-mono)", color: "#cbd5e1" }}>Urdu &amp; English Speech</span>
            <span style={{ padding: "4px 8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--font-mono)", color: "#cbd5e1" }}>SIP / Telephony Bridge</span>
            <span style={{ padding: "4px 8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--font-mono)", color: "#cbd5e1" }}>Smart Staff Transfer</span>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="content-section shell">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill violet-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot violet-dot" />
            </div>
            <span className="section-category-tag violet-tag">VOICE CAPABILITIES (COMING SOON)</span>
          </div>

          <div className="heading-main-title">
            <h2>
              AI phone calls for customer service &amp; bookings.<br />
              <span className="gradient-text-violet">Powered by the MARK 56 Knowledge Engine.</span>
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3">
          <TiltCard className="depth-card" style={{ borderColor: "rgba(139, 92, 246, 0.25)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🎙️</span>
              <span className="node-tag" style={{ background: "rgba(139, 92, 246, 0.15)", color: "#c4b5fd" }}>VOICE SYNTHESIS</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Natural Conversational Speech
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Responds to incoming caller questions with ultra-low latency conversational voice speech in natural Urdu and English.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(139, 92, 246, 0.05)", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.2)", fontSize: "11px", color: "#c4b5fd", fontFamily: "var(--font-mono)" }}>
              • Sub-Second Speech Latency<br />
              • Natural Accents &amp; Intonation
            </div>
          </TiltCard>

          <TiltCard className="depth-card" style={{ borderColor: "rgba(139, 92, 246, 0.25)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🧠</span>
              <span className="node-tag" style={{ background: "rgba(139, 92, 246, 0.15)", color: "#c4b5fd" }}>UNIFIED AI</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Shared WhatsApp Knowledge Base
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Shares the exact same business rules, room rates, doctor timings, and FAQs as your MARK 56 WhatsApp AI agent.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(139, 92, 246, 0.05)", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.2)", fontSize: "11px", color: "#c4b5fd", fontFamily: "var(--font-mono)" }}>
              • Unified Business Memory<br />
              • Single Dashboard Management
            </div>
          </TiltCard>

          <TiltCard className="depth-card" style={{ borderColor: "rgba(139, 92, 246, 0.25)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>📞</span>
              <span className="node-tag" style={{ background: "rgba(139, 92, 246, 0.15)", color: "#c4b5fd" }}>CALL FORWARDING</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Smart Call Transfer
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              When a caller requests a manager or has a complex request, MARK 56 Voice instantly forwards the call to your staff phone line.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(139, 92, 246, 0.05)", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.2)", fontSize: "11px", color: "#c4b5fd", fontFamily: "var(--font-mono)" }}>
              • Zero Caller Drop Rate<br />
              • Call Context Briefing for Staff
            </div>
          </TiltCard>
        </div>
      </section>

      {/* CTA */}
      <section className="shell" style={{ marginBlock: "60px 80px" }}>
        <div className="cta-v2" style={{ borderColor: "rgba(139, 92, 246, 0.3)" }}>
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto", background: "rgba(139, 92, 246, 0.12)", borderColor: "rgba(139, 92, 246, 0.3)", color: "var(--violet-soft)" }}>
              <i style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }} />
              <span>MARK 56 VOICE WAITLIST</span>
            </div>
            <h2>Get priority early access for phone call AI</h2>
            <p>Rollout will begin for existing MARK 56 WhatsApp AI customers first.</p>
            <a className="button" style={{ background: "linear-gradient(135deg, var(--violet), #6d28d9)", boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)" }} href="mailto:hello@mark7technologies.com?subject=MARK%2056%20Voice%20Waitlist">
              Join Voice Waitlist (Coming Soon) <span>-&gt;</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
