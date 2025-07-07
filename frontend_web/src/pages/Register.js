import React, { useState } from "react";

// PUBLIC_INTERFACE
// Registration (sign-up) form for new users
function Register({ onLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bloodType: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate registration
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.password || !form.bloodType) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      // Normally, call backend here; For now, "log in" the user
      onLogin({ ...form, id: Date.now() });
    }, 800);
  };

  if (submitted)
    return (
      <div className="card form-card">
        <h2>Registration successful!</h2>
        <p>Redirecting to your profile...</p>
      </div>
    );

  return (
    <div className="card form-card">
      <h2>Donor Registration</h2>
      <form className="main-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>
            Name<span className="req">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>
            Email<span className="req">*</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>
            Password<span className="req">*</span>
          </label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            type="password"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            pattern='[0-9]*'
            minLength="10"
          />
        </div>
        <div className="form-group">
          <label>
            Blood Type<span className="req">*</span>
          </label>
          <select
            name="bloodType"
            value={form.bloodType}
            onChange={handleChange}
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
            value={form.city}
            onChange={handleChange}
            type="text"
          />
        </div>
        {error && (
          <div className="form-error" role="alert">
            {error}
          </div>
        )}
        <div>
          <button className="form-btn primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
