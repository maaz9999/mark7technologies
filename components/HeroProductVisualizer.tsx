"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function HeroProductVisualizer({ variant = "core" }: { variant?: string }) {
  const [activeTab, setActiveTab] = useState<"mark47" | "mark56">(
    variant === "mark56" ? "mark56" : "mark47"
  );

  return (
    <div className="hero-product-visualizer glass-panel">
      {/* Top Header Controls */}
      <div className="visualizer-header">
        <div className="visualizer-tabs">
          <button
            className={`vis-tab ${activeTab === "mark47" ? "active" : ""}`}
            onClick={() => setActiveTab("mark47")}
          >
            <i className="dot-orange" />
            <span>MARK 47</span>
            <small>ESPORTS BROADCAST</small>
          </button>
          <button
            className={`vis-tab ${activeTab === "mark56" ? "active-wa" : ""}`}
            onClick={() => setActiveTab("mark56")}
          >
            <i className="dot-green" />
            <span>MARK 56</span>
            <small>WHATSAPP AI</small>
          </button>
        </div>

        <div className="badge-pill" style={{ fontSize: "9px" }}>
          <i /> <span>SYSTEMS LIVE</span>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="visualizer-body">
        <AnimatePresence mode="wait">
          {activeTab === "mark47" ? (
            <motion.div
              key="mark47-display"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3 }}
              className="vis-card mark47-card"
            >
              {/* Esports Banner Overlay */}
              <div className="vis-banner-container">
                <img src="/assets/MARK47.png" alt="MARK 47 Esports Overlay" />
                <div className="vis-overlay-tag">
                  <span className="live-pill">LIVE VMIX BROADCAST</span>
                  <span className="game-pill">PUBG MOBILE</span>
                </div>
              </div>

              {/* Realtime Live Data Stream Preview */}
              <div className="vis-stream-bar">
                <div className="stream-stat">
                  <small>AUTO DATA BINDING</small>
                  <strong>ACTIVE (0 MANUAL ENTRY)</strong>
                </div>
                <div className="stream-stat">
                  <small>GRAPHIC RENDER</small>
                  <strong>60 FPS UNREAL OVERLAY</strong>
                </div>
                <div className="stream-stat">
                  <small>MATCH STATS</small>
                  <strong style={{ color: "var(--orange)" }}>AUTO-SYNCED</strong>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mark56-display"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3 }}
              className="vis-card mark56-card"
            >
              {/* WhatsApp AI Agent Simulator */}
              <div className="wa-sim-header">
                <img src="/assets/WHATS APP ICON.png" alt="WhatsApp AI" />
                <div>
                  <strong>Mark 56 AI Business Agent</strong>
                  <span>Connected to WhatsApp Business • 24/7 Active</span>
                </div>
                <span className="wa-status-badge">ONLINE</span>
              </div>

              <div className="wa-sim-chat">
                {/* Urdu Voice Note Message */}
                <div className="chat-msg customer-msg">
                  <div className="audio-wave-player">
                    <span className="play-icon">▶</span>
                    <div className="audio-bars">
                      <i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
                    </div>
                    <span className="audio-time">0:14 • Voice Note (Urdu)</span>
                  </div>
                  <p className="msg-sub">"Assalamu Alaikum, room availability query for tomorrow?"</p>
                </div>

                {/* AI Instant Reply */}
                <div className="chat-msg ai-msg">
                  <span className="ai-label">MARK 56 AI REPLIED INSTANTLY</span>
                  <p>
                    Walaikum Assalam! Yes, Deluxe Room is available for tomorrow. Would you like me to reserve it for 12,000 PKR?
                  </p>
                  <div className="booking-pill">
                    ✓ CALENDAR SEARCHED: SLOT AVAILABLE • RESERVATION READY
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Status Bar */}
      <div className="visualizer-footer">
        <span>PRODUCT PREVIEW</span>
        <b>CLICK TABS ABOVE TO SWITCH BETWEEN MARK 47 & MARK 56</b>
      </div>
    </div>
  );
}
