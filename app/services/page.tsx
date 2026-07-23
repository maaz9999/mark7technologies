import Link from "next/link";
import { Hero3D, Reveal, TiltCard } from "../../components/MotionPrimitives";

const aiServices = [
  ["Mark 47 Broadcast Engine", "Live esports broadcast overlays & real-time match data pipeline for tournament organizers.", ["PSD-to-Broadcast", "vMix Compatible", "PUBG Mobile", "Tekken 8"]],
  ["Mark 56 WhatsApp AI Agent", "24/7 customer communication, voice note comprehension in Urdu & English, and live appointment booking.", ["Voice Notes (Urdu)", "Real Booking", "24/7 Automation", "Human Handoff"]],
  ["Mark 56 Voice Calling", "Extending WhatsApp AI agent knowledge to real phone calls with natural voice synthesis and appointment booking.", ["Natural Speech", "Shared Knowledge", "Call Transfers", "Waitlist"]],
  ["Custom SaaS Engineering", "Multi-tenant software products, subscription platforms, customer portals, and cloud architecture.", ["Cloud Architecture", "SaaS Admin", "Multi-Tenant", "API Gateway"]],
  ["API & System Integration", "Robust middleware connecting CRMs, ERPs, payment gateways, messaging tools, and broadcast feeds.", ["CRM Integration", "ERP Connectors", "Broadcast Feeds", "Webhook Sync"]],
  ["Product Design & UX", "User research, broadcast overlay design, service design, UX architecture, and clickable prototypes.", ["UI/UX Systems", "Overlay PSDs", "Prototyping", "Design System"]],
];

const softwareServices = [
  ["Esports Production Systems", "Broadcast overlay tools, match telemetry data binding, tournament management, and audience experience software."],
  ["AI Communication Systems", "WhatsApp business agents, multi-lingual voice note parsing (Urdu/Roman Urdu/English), and automated booking engines."],
  ["SaaS & Enterprise Platforms", "High-performance digital portals, client management tools, executive dashboards, and cloud backend systems."],
];

export default function ServicesPage() {
  return (
    <main className="route-page">
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "14px" }}>
            <i /> <span>MARK7 PRODUCTS & EXPERTISE</span>
          </div>
          <h1>
            Software for esports &<br />
            <em>business communication.</em>
          </h1>
          <p>
            Mark7 builds purpose-built software and AI systems designed for tournament organizers and high-volume business communications.
          </p>
          <a className="button" href="/#contact">
            Plan a project <span>-&gt;</span>
          </a>
        </Reveal>
        <Hero3D variant="mark47" />
      </section>

      {/* Product & Service Grid */}
      <section className="content-section shell">
        <Reveal className="route-heading">
          <div>
            <span>/ 01</span>
            <p>Product capabilities</p>
          </div>
          <h2>
            Specialized solutions.<br />
            <em>Built for real operations.</em>
          </h2>
          <p>We build purpose-built software engineered around your specific operational workflows.</p>
        </Reveal>

        <div className="service-detail-grid">
          {aiServices.map(([title, copy, tags], i) => (
            <TiltCard className="service-detail-card" key={title as string}>
              <span style={{ color: "var(--orange)", fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: "700" }}>0{i + 1}</span>
              <h3>{title as string}</h3>
              <p>{copy as string}</p>
              <div>
                {(tags as string[]).map((tag) => (
                  <b key={tag}>{tag}</b>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Software Engineering Section */}
      <section className="light-route-section">
        <div className="shell">
          <Reveal className="route-heading light-route-heading">
            <div>
              <span>/ 02</span>
              <p>Core Software Pillars</p>
            </div>
            <h2>
              Engineering designed<br />
              <em>to perform and scale.</em>
            </h2>
          </Reveal>

          <div className="software-list">
            {softwareServices.map(([title, copy], index) => (
              <Reveal delay={index * 0.05} key={title}>
                <article>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/#contact">
                    Discuss <b>-&gt;</b>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Page End CTA */}
      <section className="shell" style={{ marginBlock: "60px" }}>
        <div className="cta-v2">
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto" }}>
              <i /> <span>WORK WITH MARK7</span>
            </div>
            <h2>Ready to transform your broadcast or business?</h2>
            <p>We build custom features, integrations, and dedicated product instances for tournament organizers and businesses.</p>
            <a className="button button-light" href="mailto:hello@mark7technologies.com">
              Contact Mark7 Technologies <span>-&gt;</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
