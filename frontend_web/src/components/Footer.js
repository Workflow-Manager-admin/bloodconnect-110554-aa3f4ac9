import React from "react";

// PUBLIC_INTERFACE: Footer component with contact/help links.

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <span>BloodConnect © {new Date().getFullYear()}</span>
        <span>
          Contact: <a href="mailto:help@bloodconnect.org">help@bloodconnect.org</a>
        </span>
      </div>
      <div className="footer-links">
        <a href="/contact" className="footer-link">
          Contact
        </a>
        <a href="/help" className="footer-link">
          Help
        </a>
      </div>
    </footer>
  );
}
export default Footer;
