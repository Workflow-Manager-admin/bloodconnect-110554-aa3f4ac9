import React, { useState } from "react";

// PUBLIC_INTERFACE
// Login form for registered users

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate login
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    // Normally call backend here for real authentication
    setSubmitted(true);
    setTimeout(() => {
      // Fake login for demo
      onLogin({
        id: 123,
        name: "Blood Donor",
        email: form.email,
        bloodType: "A+",
        city: "DemoCity",
      });
    }, 800);
  };

  if (submitted)
    return (
      <div className="card form-card">
        <h2>Logging in...</h2>
      </div>
    );

  return (
    <div className="card form-card">
      <h2>Login</h2>
      <form className="main-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>
            Email<span className="req">*</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
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
            type="password"
            required
            autoComplete="off"
          />
        </div>
        {error && (
          <div className="form-error" role="alert">
            {error}
          </div>
        )}
        <div>
          <button className="form-btn primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
