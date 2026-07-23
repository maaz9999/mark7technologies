import { t as require_jsx_runtime } from "../index.js";
import { t as motion } from "./proxy--Bb8vy3_.js";
//#region components/MotionPrimitives.tsx
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function TiltCard({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
		className: `tilt-card ${className}`,
		whileHover: {
			y: -6,
			scale: 1.01
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 22
		},
		children
	});
}
function Hero3D() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "hero-tech-card",
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tech-card-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "badge-pill",
					style: {
						background: "rgba(255, 77, 21, 0.12)",
						borderColor: "rgba(255, 77, 21, 0.3)",
						color: "var(--orange)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
						background: "var(--orange)",
						boxShadow: "0 0 8px var(--orange)"
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MARK7 PLATFORM CORE" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mono",
					style: {
						fontSize: "10px",
						color: "#64748b"
					},
					children: "v3.0 OPERATIONAL"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-product-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-product-box box-m47",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "product-box-header",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag-orange",
								children: "MARK 47"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pill-status",
								children: "LIVE SHIPPING"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Esports Broadcast Overlays" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Design-to-broadcast graphic pipeline for vMix & OBS." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-product-box box-m56",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "product-box-header",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag-green",
								children: "MARK 56"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pill-status green-status",
								children: "WHATSAPP AI"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "AI Business Agent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Understands Urdu & English voice notes with auto-booking." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-card-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-stat-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LATENCY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "< 15 MS" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-stat-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FRAME RATE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "60 FPS LIVE" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-stat-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LANGUAGES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "URDU / ENG" })]
					})
				]
			})
		]
	});
}
//#endregion
export { Hero3D, Reveal, TiltCard };
