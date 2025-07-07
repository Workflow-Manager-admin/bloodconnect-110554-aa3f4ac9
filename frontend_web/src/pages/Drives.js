import React from "react";

// PUBLIC_INTERFACE
// Donation Drives Listing page
function Drives() {
  // Simulate data
  const drives = [
    {
      name: "Red Fest 2024",
      when: "15 July 2024, 10 AM - 4 PM",
      where: "City Hall, Chennai",
      spots: 120,
      url: "#"
    },
    {
      name: "Campus LifeBlood",
      when: "2 August 2024, 9 AM - 3 PM",
      where: "IIT Delhi Auditorium",
      spots: 80,
      url: "#"
    }
  ];
  return (
    <section className="card drive-card">
      <h2>Upcoming Blood Donation Drives</h2>
      <ul>
        {drives.map((drive, idx) => (
          <li className="drive-list-item" key={idx}>
            <div className="drive-main">
              <div className="drive-name">{drive.name}</div>
              <div>
                <span className="drive-date">{drive.when}</span>
                <span className="drive-place">{drive.where}</span>
              </div>
            </div>
            <div>
              <span className="drive-spots">{drive.spots} donor spots</span>
              <a className="drive-link" href={drive.url}>
                Details/Signup
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Drives;
