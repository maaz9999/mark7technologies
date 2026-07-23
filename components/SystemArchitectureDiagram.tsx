"use client";

export function Mark47ArchitectureVisualizer() {
  return (
    <div className="system-diagram-card-v3 m47-glow">
      <div className="top-glow-bar orange-glow-bar" />
      
      {/* Top Bar Header */}
      <div className="arch-card-top-bar">
        <div className="arch-title-tag tag-orange-title">
          <i className="dot-orange" />
          <span>MARK 47 PIPELINE ARCHITECTURE</span>
        </div>
        <span className="fps-badge">60 FPS BROADCAST RENDERER</span>
      </div>

      {/* 3-Column Flow Layout */}
      <div className="arch-3col-grid">
        {/* Column 1: Input Sources */}
        <div className="arch-col">
          <div className="col-title-bar">
            <span className="col-title-text">INPUT SOURCES</span>
            <span className="col-badge badge-orange-light">2 FEEDS</span>
          </div>

          <div className="arch-node-card input-node">
            <div className="node-header">
              <span className="node-icon">🎨</span>
              <span className="node-tag tag-orange-sm">INPUT 01</span>
            </div>
            <h4>Overlay PSD Designs</h4>
            <p>Upload tournament graphics PSD files.</p>
          </div>

          <div className="arch-node-card input-node">
            <div className="node-header">
              <span className="node-icon">🎮</span>
              <span className="node-tag tag-orange-sm">INPUT 02</span>
            </div>
            <h4>Live Game Telemetry</h4>
            <p>PUBG Mobile &amp; match data feed.</p>
          </div>
        </div>

        {/* Flow SVG Connector 1 */}
        <div className="arch-flow-col">
          <svg width="24" height="90" viewBox="0 0 24 90" fill="none">
            <path d="M 0 24 C 12 24, 12 45, 24 45" stroke="var(--orange)" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
            <path d="M 0 66 C 12 66, 12 45, 24 45" stroke="var(--orange)" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
          </svg>
        </div>

        {/* Column 2: Center Engine */}
        <div className="arch-col center-engine-col">
          <div className="col-title-bar">
            <span className="col-title-text">CORE BROADCAST ENGINE</span>
          </div>

          <div className="arch-node-card engine-node orange-engine-node">
            <span className="product-tag tag-orange-bg">MARK 47 CORE PIPELINE</span>
            <h3>Broadcast Overlay Engine</h3>
            <p>Transforms design assets into data-driven live broadcast graphics with zero manual entry.</p>

            <div className="engine-pill-group">
              <span>vMix Compatible</span>
              <span>OBS Ready</span>
              <span>60 FPS Render</span>
            </div>

            <div className="status-bar-orange">
              <i className="dot-orange" /> <span>PIPELINE OPERATIONAL</span>
            </div>
          </div>
        </div>

        {/* Flow SVG Connector 2 */}
        <div className="arch-flow-col">
          <svg width="24" height="90" viewBox="0 0 24 90" fill="none">
            <path d="M 0 45 C 12 45, 12 24, 24 24" stroke="var(--orange)" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
            <path d="M 0 45 C 12 45, 12 66, 24 66" stroke="var(--orange)" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
          </svg>
        </div>

        {/* Column 3: Output System */}
        <div className="arch-col">
          <div className="col-title-bar">
            <span className="col-title-text">OUTPUT SYSTEM</span>
            <span className="col-badge badge-green-light">READY</span>
          </div>

          <div className="arch-node-card output-node">
            <div className="node-header">
              <span className="node-icon">📺</span>
              <span className="node-tag tag-green-sm">STREAM READY</span>
            </div>
            <h4>Live Overlay Stream</h4>
            <p>Transparent browser source for vMix &amp; OBS.</p>
          </div>

          <div className="arch-node-card output-node">
            <div className="node-header">
              <span className="node-icon">📊</span>
              <span className="node-tag tag-green-sm">AUTO SYNCED</span>
            </div>
            <h4>Auto Match Statistics</h4>
            <p>Real-time player scores &amp; standings.</p>
          </div>
        </div>
      </div>

      {/* Footer Stat Bar */}
      <div className="arch-card-footer">
        <div className="footer-item"><i className="dot-green" /> <span>MARK 47 BROADCAST CORE v3.0</span></div>
        <div className="footer-item"><span>LATENCY: &lt; 15 MS</span></div>
        <div className="footer-item"><span>WEBSOCKET BINDING ACTIVE</span></div>
      </div>
    </div>
  );
}

export function Mark56ArchitectureVisualizer() {
  return (
    <div className="system-diagram-card-v3 m56-glow">
      <div className="top-glow-bar green-glow-bar" />
      
      {/* Top Bar Header */}
      <div className="arch-card-top-bar">
        <div className="arch-title-tag tag-green-title">
          <i className="dot-green" />
          <span>MARK 56 REASONING ARCHITECTURE</span>
        </div>
        <span className="fps-badge tag-green-mono">24/7 AI REASONING ACTIVE</span>
      </div>

      {/* 3-Column Flow Layout */}
      <div className="arch-3col-grid">
        {/* Column 1: Input Sources */}
        <div className="arch-col">
          <div className="col-title-bar">
            <span className="col-title-text">INPUT SOURCES</span>
            <span className="col-badge badge-green-light">2 FEEDS</span>
          </div>

          <div className="arch-node-card input-node wa-border">
            <div className="node-header">
              <span className="node-icon">🎙️</span>
              <span className="node-tag tag-wa-sm">SPEECH AI</span>
            </div>
            <h4>Urdu &amp; English Voice Notes</h4>
            <p>Speech recognition &amp; audio parsing.</p>
          </div>

          <div className="arch-node-card input-node wa-border">
            <div className="node-header">
              <span className="node-icon">💬</span>
              <span className="node-tag tag-wa-sm">TEXT AI</span>
            </div>
            <h4>WhatsApp Inquiries</h4>
            <p>Messages in Roman Urdu &amp; English.</p>
          </div>
        </div>

        {/* Flow SVG Connector 1 */}
        <div className="arch-flow-col">
          <svg width="24" height="90" viewBox="0 0 24 90" fill="none">
            <path d="M 0 24 C 12 24, 12 45, 24 45" stroke="#25d366" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
            <path d="M 0 66 C 12 66, 12 45, 24 45" stroke="#25d366" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
          </svg>
        </div>

        {/* Column 2: Center Engine */}
        <div className="arch-col center-engine-col">
          <div className="col-title-bar">
            <span className="col-title-text">AI REASONING ENGINE</span>
          </div>

          <div className="arch-node-card engine-node green-engine-node">
            <span className="product-tag tag-green-bg">MARK 56 AI AGENT</span>
            <h3>WhatsApp AI Reasoning Engine</h3>
            <p>Understands voice notes &amp; text, checks real calendar availability, and completes bookings.</p>

            <div className="engine-pill-group">
              <span>Urdu / Roman Urdu</span>
              <span>Calendar API</span>
              <span>Human Handoff</span>
            </div>

            <div className="status-bar-green">
              <i className="dot-green" /> <span>24/7 AGENT OPERATIONAL</span>
            </div>
          </div>
        </div>

        {/* Flow SVG Connector 2 */}
        <div className="arch-flow-col">
          <svg width="24" height="90" viewBox="0 0 24 90" fill="none">
            <path d="M 0 45 C 12 45, 12 24, 24 24" stroke="#25d366" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
            <path d="M 0 45 C 12 45, 12 66, 24 66" stroke="#25d366" strokeWidth="2" strokeDasharray="4 4" className="path-animated" />
          </svg>
        </div>

        {/* Column 3: Output System */}
        <div className="arch-col">
          <div className="col-title-bar">
            <span className="col-title-text">OUTPUT SYSTEM</span>
            <span className="col-badge badge-green-light">READY</span>
          </div>

          <div className="arch-node-card output-node">
            <div className="node-header">
              <span className="node-icon">⚡</span>
              <span className="node-tag tag-green-sm">INSTANT REPLY</span>
            </div>
            <h4>Multilingual AI Reply</h4>
            <p>Answers customer inquiries using your policies.</p>
          </div>

          <div className="arch-node-card output-node">
            <div className="node-header">
              <span className="node-icon">📅</span>
              <span className="node-tag tag-green-sm">RESERVED</span>
            </div>
            <h4>Confirmed Reservations</h4>
            <p>Real-time booking slots for rooms &amp; appointments.</p>
          </div>
        </div>
      </div>

      {/* Footer Stat Bar */}
      <div className="arch-card-footer">
        <div className="footer-item"><i className="dot-green" /> <span>MARK 56 REASONING AGENT v3.0</span></div>
        <div className="footer-item"><span>LATENCY: &lt; 15 MS</span></div>
        <div className="footer-item"><span>REAL-TIME CALENDAR SYNC ACTIVE</span></div>
      </div>
    </div>
  );
}
