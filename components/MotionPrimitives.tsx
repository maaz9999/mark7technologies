"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.article
      className={`tilt-card ${className}`}
      style={style}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.article>
  );
}

export function Hero3D({ variant }: { variant?: string }) {
  return (
    <motion.div 
      className="hero-tech-card-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-tech-card">
        {/* Top Bar */}
        <div className="tech-card-header">
          <div className="badge-pill" style={{ background: "rgba(255, 77, 21, 0.12)", borderColor: "rgba(255, 77, 21, 0.3)", color: "var(--orange)" }}>
            <i style={{ background: "var(--orange)", boxShadow: "0 0 8px var(--orange)" }} />
            <span>MARK7 PLATFORM CORE {variant ? `// ${variant.toUpperCase()}` : ""}</span>
          </div>
          <span className="mono" style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", letterSpacing: "0.08em" }}>v3.0 OPERATIONAL</span>
        </div>

        {/* 2-Card Product Grid */}
        <div className="hero-product-grid">
          <div className="hero-product-box box-m47">
            <div className="product-box-header">
              <span className="product-tag tag-orange">MARK 47</span>
              <span className="pill-status">LIVE SHIPPING</span>
            </div>
            <h3>Esports Broadcast Overlays</h3>
            <p>Design-to-broadcast graphic pipeline for vMix &amp; OBS.</p>
          </div>

          <div className="hero-product-box box-m56">
            <div className="product-box-header">
              <span className="product-tag tag-green">MARK 56</span>
              <span className="pill-status green-status">WHATSAPP AI</span>
            </div>
            <h3>AI Business Agent</h3>
            <p>Understands Urdu &amp; English voice notes with auto-booking.</p>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hero-card-footer">
          <div className="footer-stat-item">
            <span>LATENCY</span>
            <strong>&lt; 15 MS</strong>
          </div>
          <div className="footer-stat-item">
            <span>FRAME RATE</span>
            <strong>60 FPS LIVE</strong>
          </div>
          <div className="footer-stat-item">
            <span>LANGUAGES</span>
            <strong>URDU / ENG</strong>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function MetricOrb({ label, value }: { label: string; value: string }) {
  return (
    <motion.div className="metric-orb" whileHover={{ scale: 1.03 }}>
      <span>{label}</span>
      <strong>{value}</strong>
      <i />
    </motion.div>
  );
}
