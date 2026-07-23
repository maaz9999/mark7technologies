import Link from "next/link";
import { Reveal, TiltCard } from "../../components/MotionPrimitives";
import { Mark47ArchitectureVisualizer } from "../../components/SystemArchitectureDiagram";

export default function Mark47Page() {
  return (
    <main className="route-page">
      {/* MARK 47 Hero Section */}
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "18px", background: "rgba(255, 77, 21, 0.12)", borderColor: "rgba(255, 77, 21, 0.35)", color: "var(--orange)" }}>
            <i style={{ background: "var(--orange)", boxShadow: "0 0 8px var(--orange)" }} />
            <span>STATUS: LIVE — PUBG MOBILE SHIPPING NOW</span>
          </div>
          <h1>
            MARK 47 — Esports broadcast overlays<br />
            <em>powered by real-time match data.</em>
          </h1>
          <p style={{ maxWidth: "600px", color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}>
            Design-to-broadcast graphic pipeline that turns your Photoshop PSD overlays into live, animated 60 FPS graphics with zero manual entry during broadcast.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a className="button" href="https://mark47.com" target="_blank" rel="noopener noreferrer">
              Get MARK 47 for Your Tournament <span>-&gt;</span>
            </a>
            <Link className="button button-secondary" href="/products">
              Explore All Products
            </Link>
          </div>
        </Reveal>

        <div className="mark47-banner-wrapper" style={{ borderRadius: "18px" }}>
          <img src="/assets/MARK47.png" alt="MARK 47 Software" />
          <div className="banner-overlay-badge">
            <span>60 FPS RENDER ENGINE</span>
          </div>
        </div>
      </section>

      {/* MARK 47 Architecture Section */}
      <section className="content-section shell">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot" />
            </div>
            <span className="section-category-tag">SYSTEM ENGINE ARCHITECTURE</span>
          </div>

          <div className="heading-main-title">
            <h2>
              MARK 47 System Architecture.<br />
              <span className="gradient-text-orange">High-throughput data binding pipeline.</span>
            </h2>
          </div>
        </Reveal>

        <Mark47ArchitectureVisualizer />
      </section>

      {/* Deep Capabilities Grid */}
      <section className="content-section shell" style={{ paddingTop: "20px" }}>
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill" style={{ background: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
              <span className="num-slash">/</span>
              <span className="num-digits">02</span>
            </div>
            <span className="section-category-tag" style={{ color: "#94a3b8" }}>CAPABILITIES &amp; FEATURES</span>
          </div>
          <div className="heading-main-title">
            <h2>
              Engineered specifically for esports broadcast teams.
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3">
          <TiltCard className="depth-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🎨</span>
              <span className="node-tag tag-orange-sm">PSD TO OVERLAY</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Design-to-Broadcast Pipeline
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Upload your Photoshop PSD tournament graphic files. MARK 47 parses layer groups, player text, and scoreboard frames into live animated HTML5 overlays — zero manual rebuilding required.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "11px", color: "var(--orange-soft)", fontFamily: "var(--font-mono)" }}>
              • Photoshop PSD Layer Parser<br />
              • Zero Manual Graphic Rebuilding
            </div>
          </TiltCard>

          <TiltCard className="depth-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>🎮</span>
              <span className="node-tag tag-orange-sm">REAL-TIME DATA</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              Live Game Data Binding
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Player names, elimination counts, team logos, and match standings update automatically in real time, pulled directly from live PUBG Mobile game feeds without human delay.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "11px", color: "var(--orange-soft)", fontFamily: "var(--font-mono)" }}>
              • &lt; 15ms Data Telemetry Latency<br />
              • Automated Standings &amp; Scoreboards
            </div>
          </TiltCard>

          <TiltCard className="depth-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>📺</span>
              <span className="node-tag tag-green-sm">BROADCAST READY</span>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>
              vMix &amp; OBS Transparent Source
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 20px", flex: 1 }}>
              Loads directly into your existing production setup as a transparent browser source. Features 60 FPS smooth rendering and hardware acceleration.
            </p>
            <div style={{ padding: "10px 12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "11px", color: "#86efac", fontFamily: "var(--font-mono)" }}>
              • Alpha Channel Transparency<br />
              • 60 FPS Hardware Render Engine
            </div>
          </TiltCard>
        </div>
      </section>

      {/* CTA */}
      <section className="shell" style={{ marginBlock: "60px 80px" }}>
        <div className="cta-v2">
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto" }}>
              <i /> <span>REQUEST MARK 47 DEMO</span>
            </div>
            <h2>Ready to elevate your esports broadcast?</h2>
            <p>Book a live walkthrough of the MARK 47 graphics engine with our engineering team.</p>
            <a 
              className="button" 
              href="https://mark47.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Request MARK 47 Live Demo <span>-&gt;</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
