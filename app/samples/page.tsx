import Link from "next/link";
import { Hero3D, Reveal } from "../../components/MotionPrimitives";
import { WebSamplesShowcase } from "../../components/WebSamplesShowcase";

export const metadata = {
  title: "Featured Projects & Live Demos | Mark7 Technologies",
  description: "Explore 14 production web applications, resort booking engines, and custom software engineered by Mark7 Technologies.",
};

export default function SamplesPage() {
  return (
    <main className="route-page">
      <section className="inner-hero shell">
        <Reveal>
          <div className="badge-pill" style={{ marginBottom: "18px", borderColor: "rgba(0, 240, 255, 0.3)", background: "rgba(0, 240, 255, 0.08)", color: "var(--cyan)" }}>
            <i style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
            <span>MARK7 PROJECTS PORTFOLIO</span>
          </div>
          <h1>
            Featured projects &amp;<br />
            <em>live production demos.</em>
          </h1>
          <p>
            Explore live digital platforms engineered for luxury resorts, travel agencies, boutique stays, automotive care, and enterprise consulting.
          </p>
          <div className="hero-actions">
            <Link className="button" style={{ background: "linear-gradient(135deg, var(--cyan), #00b4d8)", color: "#03050d", fontWeight: "800" }} href="#web-samples">
              Browse 14 Live Deployments <span>-&gt;</span>
            </Link>
            <Link className="button button-secondary" href="/contact">
              Build Your Custom Web App
            </Link>
          </div>
        </Reveal>
        <Hero3D />
      </section>

      {/* Interactive Web Samples Section */}
      <WebSamplesShowcase
        limit={0}
        showFilters={true}
        showSearch={true}
        sectionNumber="01"
        title="14 Live Production Deployments"
        subtitle="Click any card or link to launch the live production deployment."
      />

      {/* CTA Section */}
      <section className="shell" style={{ marginBlock: "60px 80px" }}>
        <div className="cta-v2" style={{ borderColor: "rgba(0, 240, 255, 0.2)" }}>
          <div className="cta-grid-floor" />
          <Reveal>
            <div className="badge-pill" style={{ margin: "0 auto 14px auto", borderColor: "rgba(0, 240, 255, 0.3)", color: "var(--cyan)" }}>
              <i style={{ background: "var(--cyan)" }} /> <span>READY TO BUILD?</span>
            </div>
            <h2>Need a high-performance web app for your business or resort?</h2>
            <p>From instant online booking engines to high-converting web applications, we deliver tailored software built for speed and conversion.</p>
            <Link className="button button-light" href="/contact">
              Discuss Your Web Project <span>-&gt;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
