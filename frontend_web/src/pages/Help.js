import React from "react";

// PUBLIC_INTERFACE
// Help/FAQ page
function Help() {
  return (
    <section className="card help-card">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        <li>
          <strong>Who can donate blood?</strong> <br />
          Most healthy adults aged 18-65 can donate. Ensure you're well-rested and hydrated.
        </li>
        <li>
          <strong>Is my data safe?</strong> <br />
          Yes. BloodConnect never shares your contact or health data.
        </li>
        <li>
          <strong>How do I find compatible donors?</strong> <br />
          Use our search - filter by blood type, city, and contact donors directly (if they consent).
        </li>
        <li>
          <strong>What to do in emergencies?</strong> <br />
          Call our helpline or use the 'Request Blood' form for urgent help.
        </li>
      </ul>
      <h4>Can't find what you need?</h4>
      <p>
        Contact our help team at <a href="mailto:help@bloodconnect.org">help@bloodconnect.org</a>
      </p>
    </section>
  );
}
export default Help;
