import React from 'react'
import { Link } from 'react-router-dom'
import hero1 from '/assets/hero1.jpg'
import hero2 from '/assets/hero2.jpg'
import hero3 from '/assets/hero3.jpg'

export default function Home() {
  return (
    <>
      <div className="home-container route-page">
        
        <section className="hero-section hero-premium border-gradient glass-card">

          <div className="hero-content">
            <h1 className="hero-title">Elevate Your Style</h1>
            <p className="hero-sub">Premium Fashion for Men & Women</p>

            <div className="hero-buttons">
              <Link to="/men" className="btn-gold">Shop Men</Link>
              <Link to="/women" className="btn-outline-lux">Shop Women</Link>
            </div>
          </div>

          {/* <div className="hero-images">
            <img src={hero1} className="float-img f1" alt="" />
            <img src={hero2} className="float-img f2" alt="" />
            <img src={hero3} className="float-img f3" alt="" />
          </div> */}

        </section>

      </div>
    </>
  )
}

