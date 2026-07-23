import { Hero3D, Reveal, TiltCard } from "../../components/MotionPrimitives";

const industries = [
  ["Professional Services", "Automate lead intake, client qualification, document processing, and scheduling workflows.", "PRO / 01"],
  ["Real Estate & Property", "Connect lead response, property inquiry voice agents, appointment booking, and portfolio CRM systems.", "PROP / 02"],
  ["Healthcare Operations", "Power non-clinical scheduling, patient reminders, administrative workflows, and internal policy lookup.", "HEALTH / 03"],
  ["Financial & Banking", "Accelerate loan document extraction, customer service bots, audit logging, and internal RAG search.", "FIN / 04"],
  ["Retail & E-commerce", "Build intelligent shopping assistants, customer service automation, and inventory management platforms.", "SHOP / 05"],
  ["Logistics & Fleet", "Connect dispatch messaging, shipment tracking inquiries, document validation, and operational reporting.", "MOVE / 06"],
  ["Education & EdTech", "Deliver student portal interfaces, enrollment automation, administrative query bots, and learning platforms.", "LEARN / 07"],
  ["Esports & Media", "Operate competitive tournaments, broadcast telemetry data, live ops, and fan community platforms.", "ARENA / 08"],
];

export default function IndustriesPage() {
  return (
    <main className="route-page">
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "20px" }}>
            <i /> <span>INDUSTRY DOMAIN EXPERTISE</span>
          </div>
          <h1>
            Technology shaped by<br />
            <em>operational reality.</em>
          </h1>
          <p>
            We analyze how your staff, clients, systems, and data interact—then construct tailored software and AI systems that produce measurable operational leverage.
          </p>
          <a className="button" href="/#contact">
            Discuss your industry <span>-&gt;</span>
          </a>
        </Reveal>
        <Hero3D variant="industry" />
      </section>

      {/* Industry Depth Grid */}
      <section className="content-section shell">
        <Reveal className="route-heading">
          <div>
            <span>/ 01</span>
            <p>Industry experience</p>
          </div>
          <h2>
            Diverse sectors.<br />
            <em>One unified systems mindset.</em>
          </h2>
          <p>Every engagement begins with the unique constraints, terminology, and value creation of your industry.</p>
        </Reveal>

        <div className="industry-depth-grid">
          {industries.map(([title, copy, code], index) => (
            <TiltCard className="industry-depth-card" key={title}>
              <span>{code}</span>
              <div className="industry-orbit">
                <i /><i />
                <b>0{index + 1}</b>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="/#contact">
                Explore solution <b>-&gt;</b>
              </a>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Cross Industry Section */}
      <section className="cross-industry-section">
        <div className="shell">
          <Reveal className="route-heading light-route-heading">
            <div>
              <span>/ 02</span>
              <p>Common outcomes</p>
            </div>
            <h2>
              Across every industry, our goal<br />
              <em>is max operational leverage.</em>
            </h2>
          </Reveal>

          <div className="outcome-row">
            <span>FASTER RESPONSE TIMES</span>
            <span>REDUCED MANUAL WORK</span>
            <span>FULL OPERATIONAL VISIBILITY</span>
            <span>CONSISTENT SERVICE QUALITY</span>
            <span>SCALABLE BUSINESS DELIVERY</span>
          </div>
        </div>
      </section>
    </main>
  );
}
