import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SearchRequest from "./pages/SearchRequest";
import Drives from "./pages/Drives";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import "./App.css";

/*
  PUBLIC_INTERFACE
  Main BloodConnect application component.
  Handles theme, routing, layout, and global context.
*/
function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // PUBLIC_INTERFACE
  // Handles context for the logged-in user (could add context provider if needed)
  const handleLogin = (userObj) => setUser(userObj);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <div className="app-root">
        <Header
          user={user}
          onLogout={handleLogout}
          onThemeToggle={toggleTheme}
          theme={theme}
        />
        <div className="main-layout">
          <Sidebar />
          <main className="main-content" tabIndex="-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={
                  user ? (
                    <Navigate to="/profile" />
                  ) : (
                    <Register onLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/login"
                element={
                  user ? (
                    <Navigate to="/profile" />
                  ) : (
                    <Login onLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  user ? <Profile user={user} onUpdate={setUser} /> : <Navigate to="/login" />
                }
              />
              <Route path="/search" element={<SearchRequest user={user} />} />
              <Route path="/drives" element={<Drives />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
