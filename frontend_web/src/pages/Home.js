import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
// Home/landing page with summary and key calls-to-action for BloodConnect
export default function Home() {
  return (
    <section className="card card-large home-card" aria-label="Homepage">
      <div className="home-header">
        <h1>
          Welcome to <span className="brand">BloodConnect</span>
        </h1>
        <p className="subtitle">
          Bridging the gap between blood donors and those in urgent need – join a lifesaving movement today.
        </p>
      </div>
      <div className="home-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
        <Link to="/register" className="cta-btn primary" aria-label="Become a donor">
          Become a Donor
        </Link>
        <Link to="/search" className="cta-btn secondary" aria-label="Find blood">
          Find Blood
        </Link>
        <Link to="/drives" className="cta-btn" aria-label="Upcoming donation drives">
          View Drives
        </Link>
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
          <b>Need blood urgently?</b> <Link to="/search" style={{ color: "var(--primary)", textDecoration: "underline" }}>Request Now</Link>
        </p>
      </div>
      <div style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "1rem", marginTop: 40 }}>
        <p>
          BloodConnect is India's largest youth-driven initiative dedicated to voluntary blood donation. <br />
          <span style={{ color: "var(--primary)", fontWeight: 600 }}>Donate blood. Save lives. Be a hero.</span>
        </p>
      </div>
    </section>
  );
}
