import React from "react";

// PUBLIC_INTERFACE
// Contact page for support/emergencies
function Contact() {
  return (
    <section className="card contact-card">
      <h2>Contact Us</h2>
      <p>
        For urgent blood requests or general inquiries, reach out to us on:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:help@bloodconnect.org">help@bloodconnect.org</a>
        </li>
        <li>
          Emergency Helpline: <a href="tel:1800-400-1234">1800-400-1234</a>
        </li>
        <li>
          WhatsApp: <a href="https://wa.me/911234567890">+91 12345 67890</a>
        </li>
      </ul>
      <p>
        You can also follow us on <a href="https://twitter.com/">Twitter</a>,
        <a href="https://facebook.com/"> Facebook</a>,{' '}
        <a href="https://instagram.com/">Instagram</a> for latest updates.
      </p>
    </section>
  );
}
export default Contact;
