"use client";

import { useState, useMemo } from "react";
import { WEB_SAMPLES, WebSample } from "../lib/samplesData";
import { Reveal, TiltCard } from "./MotionPrimitives";

interface WebSamplesShowcaseProps {
  limit?: number;
  showFilters?: boolean;
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
  sectionNumber?: string;
}

export function WebSamplesShowcase({
  limit,
  showFilters = true,
  showSearch = true,
  title = "Featured Projects & Live Demos",
  subtitle = "High-performance web applications, resort booking engines, and digital platforms engineered by Mark7.",
  sectionNumber = "03",
}: WebSamplesShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All");
    WEB_SAMPLES.forEach((sample) => cats.add(sample.category));
    return Array.from(cats);
  }, []);

  const filteredSamples = useMemo(() => {
    let result = WEB_SAMPLES;

    if (selectedCategory !== "All") {
      result = result.filter((sample) => sample.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (sample) =>
          sample.title.toLowerCase().includes(q) ||
          sample.description.toLowerCase().includes(q) ||
          sample.category.toLowerCase().includes(q) ||
          sample.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (limit && limit > 0) {
      return result.slice(0, limit);
    }

    return result;
  }, [selectedCategory, searchQuery, limit]);

  return (
    <section className="content-section shell" id="web-samples">
      <Reveal className="route-heading-clean">
        <div className="heading-left-meta">
          <div className="section-number-pill cyan-number-pill">
            <span className="num-slash">/</span>
            <span className="num-digits">{sectionNumber}</span>
            <span className="num-dot cyan-dot" />
          </div>
          <span className="section-category-tag cyan-tag">FEATURED PROJECTS &amp; LIVE DEMOS</span>
        </div>

        <div className="heading-main-title">
          <h2>
            {title} <br />
            <span className="gradient-text-cyan">{subtitle}</span>
          </h2>
        </div>
      </Reveal>

      {(showFilters || showSearch) && (
        <div className="samples-filter-bar">
          {showSearch && (
            <div className="samples-search-wrapper">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search web samples, resorts, travel, AI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="samples-search-input"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>
          )}

          {showFilters && (
            <div className="samples-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                  {cat === "All" ? ` (${WEB_SAMPLES.length})` : ""}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {filteredSamples.length === 0 ? (
        <div className="samples-empty-state">
          <p>No web samples match your current filter query.</p>
          <button className="button button-small" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="samples-card-grid">
          {filteredSamples.map((sample: WebSample, index: number) => (
            <Reveal key={sample.id} delay={(index % 3) * 0.08}>
              <TiltCard className="sample-web-card glow-card">
                {/* Mock Browser Top Header Bar */}
                <div className="sample-browser-header">
                  <div className="browser-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="browser-url-bar">
                    <span className="lock-icon">🔒</span>
                    <span className="url-text">{sample.url.replace("https://", "")}</span>
                  </div>
                  <span className="sample-category-badge">{sample.category}</span>
                </div>

                {/* Thumbnail Image Container */}
                <div className="sample-image-container">
                  <img
                    src={sample.thumbnail}
                    alt={sample.title}
                    className="sample-thumbnail-img"
                    loading="lazy"
                  />
                  <div className="sample-image-overlay">
                    <a
                      href={sample.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-hover-btn"
                    >
                      Open Live Site ↗
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="sample-card-body">
                  <div className="sample-card-title-row">
                    <h3 className="sample-card-title">{sample.title}</h3>
                    <span className="sample-status-live">
                      <i className="status-dot-green" /> LIVE
                    </span>
                  </div>

                  <p className="sample-card-desc">{sample.description}</p>

                  <div className="sample-tags-row">
                    {sample.tags.map((tag) => (
                      <span key={tag} className="sample-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="sample-card-footer">
                    <a
                      href={sample.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sample-visit-link button button-small"
                    >
                      Launch Live Website <span>↗</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
