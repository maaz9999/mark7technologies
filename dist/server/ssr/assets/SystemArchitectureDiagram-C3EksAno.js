import { D as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import { t as motion } from "./proxy--Bb8vy3_.js";
import { t as AnimatePresence } from "./AnimatePresence-BBAoyExU.js";
//#region components/SystemArchitectureDiagram.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SystemArchitectureDiagram() {
	const [activeArch, setActiveArch] = (0, import_react.useState)("mark47");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "system-diagram-container glass-panel-glow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "arch-top-bar" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "diagram-header",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "arch-tabs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `arch-tab ${activeArch === "mark47" ? "active-m47" : ""}`,
						onClick: () => setActiveArch("mark47"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "dot-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MARK 47 ARCHITECTURE" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `arch-tab ${activeArch === "mark56" ? "active-m56" : ""}`,
						onClick: () => setActiveArch("mark56"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "dot-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MARK 56 ARCHITECTURE" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: activeArch === "mark47" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -6
					},
					transition: { duration: .2 },
					className: "diagram-flow-with-connectors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "diagram-column",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "column-header",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-label",
										children: "INPUT SOURCES"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-count",
										children: "2 FEEDS"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card input-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-orange",
												children: "🎨"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-orange",
												children: "INPUT 01"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Overlay PSD Designs" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Upload tournament graphics & PSD files." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card input-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-orange",
												children: "🎮"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-orange",
												children: "INPUT 02"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Live Game Telemetry" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "PUBG Mobile & Tekken match data stream." })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flow-connector-svg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "40",
								height: "150",
								viewBox: "0 0 40 150",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 38 C 20 38, 20 75, 40 75",
									stroke: "var(--orange)",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 112 C 20 112, 20 75, 40 75",
									stroke: "var(--orange)",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "diagram-column column-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "column-header",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "column-label",
									children: "CORE PROCESSING ENGINE"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "arch-card center-engine-card engine-orange",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "product-tag tag-orange",
										children: "MARK 47 CORE PIPELINE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Broadcast Overlay Engine" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Transforms design assets into data-driven live broadcast graphics with zero manual entry." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "engine-pills",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "vMix Compatible" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "OBS Ready" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "60 FPS Render" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "engine-status-bar bar-orange",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PIPELINE OPERATIONAL" })
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flow-connector-svg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "40",
								height: "150",
								viewBox: "0 0 40 150",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 75 C 20 75, 20 38, 40 38",
									stroke: "var(--orange)",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 75 C 20 75, 20 112, 40 112",
									stroke: "var(--orange)",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "diagram-column",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "column-header",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-label",
										children: "OUTPUT SYSTEM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-count green-count",
										children: "READY"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card output-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-green",
												children: "📺"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-green",
												children: "STREAM READY"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Live Overlay Stream" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Transparent browser source for vMix & OBS." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card output-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-green",
												children: "📊"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-green",
												children: "AUTO SYNCED"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Auto Match Statistics" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Real-time player scores & standings." })
									]
								})
							]
						})
					]
				}, "mark47-arch") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -6
					},
					transition: { duration: .2 },
					className: "diagram-flow-with-connectors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "diagram-column",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "column-header",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-label",
										children: "INPUT SOURCES"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-count green-count",
										children: "2 FEEDS"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card input-card wa-input",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-wa",
												children: "🎙️"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-wa",
												children: "SPEECH AI"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Urdu & English Voice Notes" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Speech recognition & audio parsing." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card input-card wa-input",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-wa",
												children: "💬"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-wa",
												children: "TEXT AI"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "WhatsApp Inquiries" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Messages in Roman Urdu & English." })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flow-connector-svg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "40",
								height: "150",
								viewBox: "0 0 40 150",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 38 C 20 38, 20 75, 40 75",
									stroke: "#25d366",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 112 C 20 112, 20 75, 40 75",
									stroke: "#25d366",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "diagram-column column-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "column-header",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "column-label",
									children: "CORE ENGINE"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "arch-card center-engine-card engine-green",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "product-tag tag-green",
										children: "MARK 56 AI AGENT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "WhatsApp AI Reasoning Engine" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Understands voice notes & text, checks real calendar availability, and completes bookings." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "engine-pills",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Urdu / Roman Urdu" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Calendar API" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Human Handoff" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "engine-status-bar bar-green",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "24/7 AGENT OPERATIONAL" })
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flow-connector-svg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "40",
								height: "150",
								viewBox: "0 0 40 150",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 75 C 20 75, 20 38, 40 38",
									stroke: "#25d366",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 75 C 20 75, 20 112, 40 112",
									stroke: "#25d366",
									strokeWidth: "2.5",
									strokeDasharray: "4 4",
									className: "path-animated"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "diagram-column",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "column-header",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-label",
										children: "OUTPUT SYSTEM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "column-count green-count",
										children: "READY"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card output-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-green",
												children: "⚡"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-green",
												children: "INSTANT REPLY"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Multilingual AI Reply" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Answers customer inquiries using your policies." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "arch-card output-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "arch-card-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "icon-badge icon-green",
												children: "📅"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "card-badge badge-green",
												children: "RESERVED"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Confirmed Reservations" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Real-time booking slots for rooms & appointments." })
									]
								})
							]
						})
					]
				}, "mark56-arch")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "diagram-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-stat",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MARK7 SYSTEM ENGINE v3.0" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-stat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LATENCY: < 15 MS" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-stat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WEBSOCKET SYNC ACTIVE" })
					})
				]
			})
		]
	});
}
//#endregion
export { SystemArchitectureDiagram };
