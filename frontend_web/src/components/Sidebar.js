import React from "react";
import { Link } from "react-router-dom";

// Sidebar for quick search/announcements
// PUBLIC_INTERFACE
function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar-section search-quick">
        <h3>Quick Search</h3>
        <Link to="/search" className="sidebar-btn">
          Search for Blood
        </Link>
      </div>
      <div className="sidebar-section announce">
        <h3>Announcements</h3>
        <ul>
          <li>
            🩸 <b>Next Big Drive: 15th July</b>
          </li>
          <li>Check your eligibility to donate!</li>
        </ul>
      </div>
      <div className="sidebar-section resources">
        <h3>Need Help?</h3>
        <Link to="/help" className="sidebar-link">
          FAQ & Emergency Info
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
