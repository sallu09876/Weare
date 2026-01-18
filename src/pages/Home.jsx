import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page route-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-text">
            <span className="hero-badge">Premium Collection 2026</span>

            <h1>
              Elevate Your <br />
              <span>Everyday Style</span>
            </h1>

            <p>
              Discover modern, minimal and premium fashion crafted for
              confidence — for both men & women.
            </p>

            <div className="hero-actions">
              <Link to="/men" className="btn-primary">Shop Men</Link>
              <Link to="/women" className="btn-secondary">Shop Women</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img src="/assets/hero1.jpg" alt="Premium fashion" />
            </div>
          </div>

        </div>

        <div className="scroll-indicator">
          <span />
        </div>
      </section>

    </div>
  );
}
