"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { title: "Voice Agent", status: "Listening", type: "voice", desc: "Twilio & WebRTC connection active. Human speech parsed in 80ms." },
  { title: "Knowledge RAG", status: "8 sources", type: "knowledge", desc: "Vector database querying company policies & internal documentation." },
  { title: "CRM Action", status: "Ready", type: "action", desc: "Salesforce / HubSpot API synced. Deal stage auto-updated." },
  { title: "Human Review", status: "Optional", type: "human", desc: "Automated escalation threshold set to 94% confidence." },
];

export function AIOperatingLayer() {
  const [selectedNode, setSelectedNode] = useState(0);

  return (
    <motion.div 
      className="ai-os" 
      initial={{ opacity: 0, y: 40, rotateX: 6 }} 
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ai-os-top">
        <div><i /><i /><i /></div>
        <span>MARK7 / AI OPERATING LAYER SIMULATOR</span>
        <b>LIVE ENVIRONMENT</b>
      </div>

      <div className="ai-os-body">
        <aside>
          <img src="/assets/Mark WI.png" alt="Mark7" />
          <span className="selected" title="Workflow Studio">⌁</span>
          <span title="Knowledge Store">◫</span>
          <span title="Agent Monitor">◎</span>
          <span title="API Connections">⌘</span>
          <i />
        </aside>

        <div className="ai-os-main">
          <div className="os-heading">
            <div>
              <span>AGENTIC WORKFLOW STREAM</span>
              <h3>Lead qualification & booking system</h3>
            </div>
            <button>Running <i /></button>
          </div>

          <div className="workflow-space">
            {nodes.map((node, index) => (
              <motion.div 
                className={`workflow-node node-${index + 1} ${node.type} ${selectedNode === index ? "selected" : ""}`} 
                key={node.title} 
                animate={{ y: index % 2 ? [2, -3, 2] : [-3, 2, -3] }} 
                transition={{ duration: 4 + index * 0.4, repeat: Infinity }}
                onClick={() => setSelectedNode(index)}
                style={selectedNode === index ? { borderColor: "var(--orange)", boxShadow: "0 0 25px rgba(255, 77, 21, 0.3)" } : {}}
              >
                <div className="node-glyph"><i /><i /></div>
                <span>{node.title}</span>
                <b>{node.status}</b>
              </motion.div>
            ))}

            <div className="badge-pill" style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(9, 13, 26, 0.95)" }}>
              <span>ACTIVE NODE: <strong>{nodes[selectedNode].title}</strong></span>
            </div>
          </div>

          <div className="os-metrics">
            <div>
              <span>Tasks completed</span>
              <strong>3,842</strong>
              <b>+24.1%</b>
            </div>
            <div>
              <span>Resolution rate</span>
              <strong>94.6%</strong>
              <b>+8.4%</b>
            </div>
            <div>
              <span>Human time saved</span>
              <strong>210 hrs</strong>
              <b>This month</b>
            </div>
          </div>
        </div>

        <div className="ai-os-rail">
          <span>REALTIME ACTIVITY</span>
          {["Voice stream initialized", "Vector store queried", "CRM entry updated", "Meeting scheduled"].map((item, index) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0.35 }} 
              animate={{ opacity: [index === 0 ? 1 : 0.35, 1, 0.35] }} 
              transition={{ duration: 4, delay: index, repeat: Infinity }}
            >
              <i />
              {item}
              <b>0{index + 1}s ago</b>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
