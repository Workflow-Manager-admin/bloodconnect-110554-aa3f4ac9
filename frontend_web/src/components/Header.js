import React from "react";
import { Link, useNavigate } from "react-router-dom";

// BloodConnect site header and navigation bar
// PUBLIC_INTERFACE
function Header({ user, onLogout, onThemeToggle, theme }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="nav-content">
        <Link className="logo" to="/">
          <span role="img" aria-label="blood drop" style={{ marginRight: 6 }}>
            🩸
          </span>
          <span>BloodConnect</span>
        </Link>
        <nav className="navbar" aria-label="Main">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/drives">Drives</Link>
            </li>
            <li>
              <Link to="/search">Find Blood</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="header-btn header-primary">
                    Register
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <button className="header-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}

export default Header;
