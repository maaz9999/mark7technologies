"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  ["MARK 47", "/mark47"],
  ["MARK 56", "/mark56"],
  ["MARK 56 VOICE", "/mark56-voice"],
  ["Products", "/products"],
  ["Process", "/process"],
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.header 
      className="site-header-floating" 
      initial={{ y: -90, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-pill shell-pill" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Mark7 Technologies home" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/assets/Mark OI.png" alt="Mark7 Logo" />
          <span>MARK7 <em style={{ color: "#ffffff", opacity: 0.95 }}>TECHNOLOGIES</em></span>
        </Link>
        
        <div className="nav-links route-nav">
          {links.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link className="button-pill-cta" href="/contact">
            Book Demo
          </Link>
          <button 
            className="menu-toggle" 
            aria-label="Toggle navigation" 
            aria-expanded={open} 
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="mobile-nav" 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            {links.map(([label, href], index) => (
              <motion.div 
                key={href} 
                initial={{ x: -20, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ delay: index * 0.05 }}
              >
                <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
              </motion.div>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>Book Demo</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="generic-site-footer">
      <div className="shell footer-inner-grid">
        {/* Col 1: Brand & Tagline */}
        <div className="footer-col">
          <Link className="brand" href="/" style={{ marginBottom: "12px", display: "inline-flex" }}>
            <img className="brand-logo" src="/assets/Mark OI.png" alt="Mark7 Logo" />
            <span>MARK7 <em style={{ color: "#ffffff" }}>TECHNOLOGIES</em></span>
          </Link>
          <p className="footer-tagline">
            Purpose-built software for esports broadcast automation and WhatsApp AI business communications.
          </p>
          <div className="footer-status-inline">
            <i className="status-dot-green" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>

        {/* Col 2: Navigation Products */}
        <div className="footer-col">
          <span className="footer-heading">PRODUCTS</span>
          <ul className="footer-links-list">
            <li><Link href="/mark47">MARK 47 Esports</Link></li>
            <li><Link href="/mark56">MARK 56 WhatsApp AI</Link></li>
            <li><Link href="/mark56-voice">MARK 56 Voice (Coming Soon)</Link></li>
            <li><Link href="/products">All Products</Link></li>
          </ul>
        </div>

        {/* Col 3: Company / Process */}
        <div className="footer-col">
          <span className="footer-heading">COMPANY</span>
          <ul className="footer-links-list">
            <li><Link href="/process">Process &amp; Principles</Link></li>
            <li><Link href="/contact">Book a Demo</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Inquiries */}
        <div className="footer-col">
          <span className="footer-heading">INQUIRIES</span>
          <a className="footer-email-link" href="mailto:hello@mark7technologies.com">
            hello@mark7technologies.com
          </a>
          <span className="footer-subtext" style={{ marginTop: "6px", display: "block" }}>
            Response within 24 hours
          </span>
        </div>
      </div>

      {/* Bottom Full-Width Bar */}
      <div className="footer-bottom-bar shell">
        <span className="copyright-text">
          © {new Date().getFullYear()} Mark7 Technologies Private Limited. All rights reserved.
        </span>
        <span className="rights-text">
          Built for performance &amp; speed.
        </span>
      </div>
    </footer>
  );
}
