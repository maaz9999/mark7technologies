import Link from "next/link";
import { Hero3D, Reveal, TiltCard } from "../../components/MotionPrimitives";

const phases = [
  [
    "01",
    "Discover the System",
    "We map business objectives, user flows, data sources, security requirements, technical constraints, and success metrics.",
    ["Stakeholder discovery", "Workflow mapping", "Tech audit", "Success metrics"],
  ],
  [
    "02",
    "Design the Product",
    "We translate requirements into clear system models, interactive UI prototypes, cloud architecture, and delivery milestones.",
    ["UI/UX prototypes", "Service design", "System architecture", "Scope roadmap"],
  ],
  [
    "03",
    "Prove the Intelligence",
    "For AI systems, we validate data quality, model selection, prompt pipelines, tool usage, accuracy, and unit economics.",
    ["AI proof-of-concept", "Evaluation set", "Safety guardrails", "Cost modeling"],
  ],
  [
    "04",
    "Engineer in Milestones",
    "We construct production systems in visible weekly increments with live demonstrations and transparent progress tracking.",
    ["Weekly delivery", "Clean architecture", "API integrations", "Transparent demo"],
  ],
  [
    "05",
    "Validate in Reality",
    "The software is rigorously stress-tested against edge cases, peak loads, real user input, security compliance, and owner feedback.",
    ["User acceptance", "Security audit", "Load testing", "Launch readiness"],
  ],
  [
    "06",
    "Launch & Enhance",
    "We manage production rollout, telemetry monitoring, staff enablement, and ongoing feature enhancement based on usage.",
    ["Production rollout", "Live monitoring", "Team enablement", "Continuous roadmap"],
  ],
];

const principles = [
  {
    num: "01",
    title: "Make Work Visible",
    copy: "Working software, clear architectural decisions, and direct transparent communication throughout delivery.",
    icon: "👁️",
    badge: "TRANSPARENCY",
    impact: "Weekly live demos & open repository access."
  },
  {
    num: "02",
    title: "Reduce Risk Early",
    copy: "Test the hardest architectural assumptions and high-load bottlenecks before committing to expensive production builds.",
    icon: "⚡",
    badge: "PROOF OF CONCEPT",
    impact: "Early telemetry latency & stress validation."
  },
  {
    num: "03",
    title: "Design for Ownership",
    copy: "Type-safe codebases, comprehensive documentation, cloud maintainability, and complete team enablement are standard.",
    icon: "⚙️",
    badge: "MAINTAINABILITY",
    impact: "Clean TypeScript & zero vendor lock-in."
  },
  {
    num: "04",
    title: "Measure Real Value",
    copy: "We measure success by user adoption rates, human hours saved, operational uptime, and clear business ROI.",
    icon: "📈",
    badge: "ROI METRICS",
    impact: "Tracked operational uptime & time saved."
  }
];

export default function ProcessPage() {
  return (
    <main className="route-page">
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "20px" }}>
            <i /> <span>MARK7 DELIVERY SYSTEM</span>
          </div>
          <h1>
            From uncertainty to<br />
            <em>working advantage.</em>
          </h1>
          <p style={{ maxWidth: "560px", color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6" }}>
            A disciplined, evidence-led engineering process for converting ambitious ideas into dependable, production-ready systems.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Link className="button" href="/contact">
              Start Discovery Phase <span>-&gt;</span>
            </Link>
          </div>
        </Reveal>
        <Hero3D variant="process" />
      </section>

      {/* 6 Delivery Phases Timeline */}
      <section className="content-section shell">
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">01</span>
              <span className="num-dot" />
            </div>
            <span className="section-category-tag">SIX DELIVERY PHASES</span>
          </div>

          <div className="heading-main-title">
            <h2>
              Clarity before code.<br />
              <span className="gradient-text-orange">Evidence before scale.</span>
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {phases.map(([number, title, copy, outputs]) => (
            <TiltCard className="depth-card" key={number as string} style={{ minHeight: "auto", padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: "800", color: "var(--orange)", background: "rgba(255, 77, 21, 0.12)", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255, 77, 21, 0.3)" }}>
                  PHASE {number as string}
                </span>
                <span className="node-tag tag-orange-sm">MILESTONE</span>
              </div>

              <h3 style={{ fontSize: "19px", fontWeight: "800", color: "#ffffff", margin: "0 0 8px" }}>
                {title as string}
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px" }}>
                {copy as string}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                {(outputs as string[]).map((output) => (
                  <span key={output} style={{ padding: "4px 8px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "4px", fontSize: "10px", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                    • {output}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section className="content-section shell" style={{ paddingTop: "20px" }}>
        <Reveal className="route-heading-clean">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div className="section-number-pill green-number-pill">
              <span className="num-slash">/</span>
              <span className="num-digits">02</span>
              <span className="num-dot green-dot" />
            </div>
            <span className="section-category-tag green-tag">ENGINEERING PRINCIPLES</span>
          </div>

          <div className="heading-main-title">
            <h2>
              Principles built into every<br />
              <span className="gradient-text-green">Mark7 engagement.</span>
            </h2>
          </div>
        </Reveal>

        <div className="card-grid-3" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {principles.map((p) => (
            <TiltCard 
              className="depth-card" 
              key={p.num} 
              style={{ 
                minHeight: "auto", 
                padding: "24px", 
                borderColor: "rgba(37, 211, 102, 0.25)",
                background: "linear-gradient(145deg, rgba(37, 211, 102, 0.05), rgba(13, 18, 36, 0.95))"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "22px" }}>{p.icon}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: "700", color: "#86efac", letterSpacing: "0.08em" }}>
                    PRINCIPLE {p.num}
                  </span>
                </div>
                <span className="node-tag tag-wa-sm">{p.badge}</span>
              </div>

              <h3 style={{ fontSize: "19px", fontWeight: "800", color: "#ffffff", margin: "0 0 8px" }}>
                {p.title}
              </h3>
              
              <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px" }}>
                {p.copy}
              </p>

              <div style={{ padding: "10px 12px", background: "rgba(37, 211, 102, 0.08)", borderRadius: "6px", border: "1px solid rgba(37, 211, 102, 0.2)", fontSize: "11px", color: "#86efac", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="status-dot-green" /> <span>{p.impact}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="shell" style={{ marginBlock: "60px 80px" }}>
        <div className="cta-v2">
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto" }}>
              <i /> <span>START A PROJECT</span>
            </div>
            <h2>Ready to build software that scales?</h2>
            <p>Discuss your project goals with our lead engineering team.</p>
            <Link className="button" href="/contact">
              Contact Mark7 Engineering <span>-&gt;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
