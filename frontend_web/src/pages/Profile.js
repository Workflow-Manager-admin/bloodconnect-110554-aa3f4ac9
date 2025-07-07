import React, { useState } from "react";

// PUBLIC_INTERFACE
// Donor profile management (view and edit)
function Profile({ user, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...user });
  const [success, setSuccess] = useState(false);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Would call the backend here
    onUpdate({ ...form });
    setEditing(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card profile-card">
      <h2>My Donor Profile</h2>
      {!editing ? (
        <>
          <ul className="profile-list">
            <li>
              <b>Name:</b> {form.name}
            </li>
            <li>
              <b>Email:</b> {form.email}
            </li>
            <li>
              <b>Blood Type:</b> {form.bloodType}
            </li>
            <li>
              <b>Phone:</b> {form.phone || <span className="empty-field">Not Provided</span>}
            </li>
            <li>
              <b>City:</b> {form.city || <span className="empty-field">Not Provided</span>}
            </li>
          </ul>
          <button className="form-btn secondary" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        </>
      ) : (
        <form className="main-form" onSubmit={handleSave}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name || ""} onChange={handleChange} type="text" />
          </div>
          <div className="form-group">
            <label>Blood Type</label>
            <select name="bloodType" value={form.bloodType} onChange={handleChange}>
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
            <input name="city" value={form.city || ""} onChange={handleChange} type="text" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" value={form.phone || ""} onChange={handleChange} type="tel" />
          </div>
          <div>
            <button className="form-btn primary" type="submit">
              Save
            </button>
            <button
              className="form-btn"
              type="button"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      {success && <div className="form-success">Profile updated!</div>}
    </div>
  );
}

export default Profile;
