import React from "react";
import { Link } from "react-router-dom";

// Home/landing page with summary and call-to-action
// PUBLIC_INTERFACE
export default function Home() {
  return (
    <section className="card card-large home-card">
      <div className="home-header">
        <h1>
          Welcome to <span className="brand">BloodConnect</span>
        </h1>
        <p className="subtitle">
          Bridging the gap between donors and those in need, one drop at a time.
        </p>
      </div>
      <div className="home-actions">
        <Link to="/register" className="cta-btn primary">
          Become a Donor
        </Link>
        <Link to="/search" className="cta-btn secondary">
          Find Blood
        </Link>
        <Link to="/drives" className="cta-btn">
          View Drives
        </Link>
      </div>
    </section>
  );
}
