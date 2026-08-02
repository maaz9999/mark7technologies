import Link from "next/link";
import { Hero3D, Reveal, TiltCard } from "../components/MotionPrimitives";
import { WebSamplesShowcase } from "../components/WebSamplesShowcase";

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

      {/* Section 01 — ABOUT MARK7 TECHNOLOGIES */}
      <section className="content-section shell" id="about">
        <Reveal className="route-heading-clean">
          <div className="heading-left-meta">
            <div className="section-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot" />
            </div>
            <span className="section-category-tag">ABOUT MARK7 TECHNOLOGIES</span>
          </div>

          <div className="heading-main-title">
            <h2>
              Clarity over complexity. <br />
              <span className="gradient-text-orange">Engineered for zero downtime.</span>
            </h2>
          </div>
        </Reveal>

        <div className="product-showcase-card glow-card" style={{ padding: "40px 36px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "left" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#e2e8f0", fontWeight: "500", marginBottom: "24px" }}>
              At <strong style={{ color: "#ffffff", fontWeight: "700" }}>Mark7 Technologies</strong>, we reject generic, off-the-shelf software tools. We design and deploy high-performance software systems tailored for industries where precision, real-time speed, and uninterrupted reliability carry immediate business consequences.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.75", color: "#cbd5e1", margin: "0 0 32px" }}>
              Whether powering live 60 FPS esports broadcast graphics for international tournaments or deploying autonomous AI agents that converse naturally in regional languages, our mission is simple: convert complex operational challenges into reliable, automated advantage.
            </p>
          </div>

          <div className="grid-features-3" style={{ marginTop: "16px" }}>
            <div className="feature-mini-box">
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>⚡</div>
              <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>Evidence-Led Development</h4>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: "1.6" }}>
                Every system architectural decision is stress-tested against real load benchmarks before deployment. Zero guesswork.
              </p>
            </div>
            <div className="feature-mini-box">
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>🛡️</div>
              <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>Mission-Critical Reliability</h4>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: "1.6" }}>
                Engineered for continuous uptime with clean telemetry, self-healing failovers, and low latency across all touchpoints.
              </p>
            </div>
            <div className="feature-mini-box">
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>⚙️</div>
              <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "6px" }}>Ownership &amp; Clean Tech</h4>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: "1.6" }}>
                Type-safe TypeScript, modern cloud architectures, and transparent delivery with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — WHAT WE BUILD (SOLUTION OVERVIEW) */}
      <section className="content-section shell" id="solutions">
        <Reveal className="route-heading-clean">
          <div className="heading-left-meta">
            <div className="section-number-pill green-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">02</span>
              <span className="num-dot green-dot" />
            </div>
            <span className="section-category-tag green-tag">OUR SPECIALIZED SOLUTIONS</span>
          </div>

          <div className="heading-main-title">
            <h2>
              Software built for high-impact domains.<br />
              <span className="gradient-text-green">From broadcast media to conversational AI.</span>
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {/* Card 1: Broadcast Media */}
          <TiltCard className="depth-card" style={{ padding: "32px", borderColor: "rgba(255, 77, 21, 0.25)", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span className="section-category-tag" style={{ background: "rgba(255, 77, 21, 0.12)", color: "var(--orange)", borderColor: "rgba(255, 77, 21, 0.3)" }}>
                ESPORTS &amp; BROADCAST MEDIA
              </span>
              <span className="pill-status">LIVE SYSTEM</span>
            </div>

            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px" }}>
              Real-Time Broadcast Overlays &amp; Data Pipeline
            </h3>

            <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.65", margin: "0 0 20px" }}>
              Automating tournament broadcast graphics by converting existing Photoshop designs into dynamic 60 FPS animated overlays. Powered by live data feeds, compatible with vMix &amp; OBS Studio.
            </p>

            <div className="feature-pill-list" style={{ marginBottom: "24px" }}>
              <span>vMix &amp; OBS Ready</span>
              <span>60 FPS Render Engine</span>
              <span>Live Game Feed Sync</span>
            </div>

            <Link className="button" style={{ marginTop: "auto", width: "100%", textAlign: "center", justifyContent: "center" }} href="/mark47">
              Explore Broadcast Solutions <span>-&gt;</span>
            </Link>
          </TiltCard>

          {/* Card 2: WhatsApp & Voice AI */}
          <TiltCard className="depth-card" style={{ padding: "32px", borderColor: "rgba(37, 211, 102, 0.25)", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span className="section-category-tag green-tag">
                CONVERSATIONAL AI AGENTS
              </span>
              <span className="pill-status green-status">AI ENGINE</span>
            </div>

            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px" }}>
              WhatsApp &amp; Voice Business AI Communication
            </h3>

            <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.65", margin: "0 0 20px" }}>
              24/7 intelligent business agents that understand voice notes and text in Urdu, Roman Urdu, and English. Handles customer inquiries, verifies availability, and automates appointment bookings.
            </p>

            <div className="feature-pill-list" style={{ marginBottom: "24px" }}>
              <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Urdu Voice Note AI</span>
              <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Live Calendar Booking</span>
              <span style={{ borderColor: "rgba(37, 211, 102, 0.3)", color: "#86efac" }}>Human Handoff</span>
            </div>

            <Link className="button button-whatsapp" style={{ marginTop: "auto", width: "100%", textAlign: "center", justifyContent: "center" }} href="/mark56">
              Explore AI Agent Solutions <span>-&gt;</span>
            </Link>
          </TiltCard>
        </div>
      </section>

      {/* Section 03 — PRODUCTION WEB SAMPLES & CLIENT SHOWCASE */}
      <WebSamplesShowcase
        limit={6}
        showFilters={true}
        showSearch={false}
        sectionNumber="03"
        title="Featured Client Web Applications"
        subtitle="Explore high-converting web apps, resort booking platforms, and custom digital software engineered by Mark7."
      />

      <div className="shell" style={{ marginTop: "-12px", marginBottom: "48px", textAlign: "center" }}>
        <Link className="button button-pill-cta" style={{ background: "rgba(0, 240, 255, 0.12)", border: "1px solid var(--cyan)", color: "var(--cyan)", padding: "12px 28px", fontSize: "14px", fontWeight: "700" }} href="/samples">
          Explore All 14 Live Web Samples <span>-&gt;</span>
        </Link>
      </div>

      {/* Section 04 — ENGINEERING STANDARDS & TELEMETRY */}
      <section className="content-section shell" id="standards" style={{ paddingTop: "20px" }}>
        <Reveal className="route-heading-clean">
          <div className="heading-left-meta">
            <div className="section-number-pill violet-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">04</span>
              <span className="num-dot violet-dot" />
            </div>
            <span className="section-category-tag violet-tag">THE MARK7 STANDARD</span>
          </div>

          <div className="heading-main-title">
            <h2>
              Designed for speed. <br />
              <span className="gradient-text-violet">Built for continuous scale.</span>
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          <div className="feature-mini-box" style={{ textAlign: "center", padding: "24px 16px" }}>
            <span className="mono" style={{ fontSize: "28px", fontWeight: "800", color: "var(--orange)", display: "block", marginBottom: "6px" }}>
              &lt; 15 MS
            </span>
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: "700" }}>
              LATENCY BENCHMARK
            </span>
          </div>

          <div className="feature-mini-box" style={{ textAlign: "center", padding: "24px 16px" }}>
            <span className="mono" style={{ fontSize: "28px", fontWeight: "800", color: "var(--whatsapp-green)", display: "block", marginBottom: "6px" }}>
              99.9%
            </span>
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: "700" }}>
              TARGET UPTIME
            </span>
          </div>

          <div className="feature-mini-box" style={{ textAlign: "center", padding: "24px 16px" }}>
            <span className="mono" style={{ fontSize: "28px", fontWeight: "800", color: "var(--cyan)", display: "block", marginBottom: "6px" }}>
              60 FPS
            </span>
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: "700" }}>
              RENDER ENGINE
            </span>
          </div>

          <div className="feature-mini-box" style={{ textAlign: "center", padding: "24px 16px" }}>
            <span className="mono" style={{ fontSize: "28px", fontWeight: "800", color: "var(--violet-soft)", display: "block", marginBottom: "6px" }}>
              3+
            </span>
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: "700" }}>
              LANGUAGES SUPPORTED
            </span>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="shell" style={{ marginBlock: "60px 80px" }} id="contact">
        <div className="cta-v2">
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto" }}>
              <i /> <span>WORK WITH MARK7</span>
            </div>
            <h2>Ready to transform your operations with purpose-built software?</h2>
            <p>Speak directly with our engineering team to discuss your software goals.</p>
            <Link className="button button-light" href="/contact">
              Contact Mark7 Engineering <span>-&gt;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

