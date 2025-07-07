import React, { useState } from "react";

// PUBLIC_INTERFACE
// Blood search & blood request form page
function SearchRequest({ user }) {
  const [query, setQuery] = useState({
    bloodType: "",
    city: "",
  });
  const [results, setResults] = useState([]);
  const [requesting, setRequesting] = useState(false);
  const [request, setRequest] = useState({
    name: "",
    phone: "",
    bloodType: "",
    city: "",
    reason: "",
  });
  const [requestSuccess, setRequestSuccess] = useState(false);

  // PUBLIC_INTERFACE
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };
  // Simulate search -- in real app, use API call
  const handleSearch = (e) => {
    e.preventDefault();
    // Fake results
    setResults([
      {
        name: "Priya S.",
        bloodType: query.bloodType || "A+",
        city: query.city || "Delhi",
        contact: "9876543210",
      },
      {
        name: "Amit K.",
        bloodType: query.bloodType || "A+",
        city: query.city || "Delhi",
        contact: "9876501234",
      },
    ]);
  };

  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate making a request
  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSuccess(true);
    setTimeout(() => {
      setRequestSuccess(false);
      setRequesting(false);
    }, 1500);
  };

  return (
    <section className="card form-card">
      <h2>Find a Blood Donor</h2>
      <form className="main-form" onSubmit={handleSearch}>
        <div className="form-row">
          <div className="form-group">
            <label>Blood Type</label>
            <select
              name="bloodType"
              value={query.bloodType}
              onChange={handleSearchChange}
            >
              <option value="">Any</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              value={query.city}
              onChange={handleSearchChange}
              type="text"
              placeholder="E.g., Mumbai"
            />
          </div>
        </div>
        <div>
          <button className="form-btn primary" type="submit">
            Search
          </button>
        </div>
      </form>
      {results.length > 0 && (
        <div className="search-results">
          <h3>Possible Donors</h3>
          <ul>
            {results.map((donor, idx) => (
              <li key={idx} className="card donor-result">
                <div>
                  <b>{donor.name}</b> • {donor.bloodType} • {donor.city}
                </div>
                <div>
                  <span className="donor-contact">📞 {donor.contact}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div style={{ marginTop: 24 }}>
        {!requesting ? (
          <button
            className="form-btn secondary"
            type="button"
            onClick={() => setRequesting(true)}
          >
            Request Blood
          </button>
        ) : (
          <form className="main-form" onSubmit={handleRequestSubmit}>
            <h3>Request Blood</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={request.name}
                onChange={handleRequestChange}
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={request.phone}
                onChange={handleRequestChange}
                type="text"
                required
                pattern="[0-9]*"
                minLength="10"
                maxLength="13"
              />
            </div>
            <div className="form-group">
              <label>Blood Type</label>
              <select
                name="bloodType"
                value={request.bloodType}
                onChange={handleRequestChange}
                required
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                name="city"
                value={request.city}
                onChange={handleRequestChange}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Reason for Request</label>
              <textarea
                name="reason"
                value={request.reason}
                onChange={handleRequestChange}
                rows={2}
                required
              />
            </div>
            <button className="form-btn primary" type="submit">
              Submit Request
            </button>
            <button
              className="form-btn"
              type="button"
              onClick={() => setRequesting(false)}
            >
              Cancel
            </button>
            {requestSuccess && (
              <div className="form-success">Request submitted!</div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

export default SearchRequest;
