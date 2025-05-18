import React, { useState } from "react";
import "./Home.css";
import AuthPage from "./AuthPage";
import FeedbackForm from "./FeedbackForm";
import LibraryPage from "./LibraryPage";
import ContactLawyerPage from "./ContactLawyerPage";
function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState("light");

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`home-container ${theme}`}>
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2 className="logo">💬 LegalGPT</h2>
        <nav className="nav-links">
          <a href="#" onClick={() => setActivePage("home")}>Home</a>
          <a href="#" onClick={() => setActivePage("messages")}>Libraries</a>
          <a href="#" onClick={() => setActivePage("contact")}>Contact Lawyer</a>
          <a href="#" onClick={() => setActivePage("profile")}>Profile</a>
          <a href="#" onClick={() => setActivePage("settings")}>Settings</a>
        </nav>
      </aside>

      <main className="main-area">
        <div className="top-bar">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {sidebarOpen ? "←" : "☰"}
          </button>
          <div className="top-bar-right">
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀ Light"}
            </button>
            <button className="login-btn" onClick={() => setActivePage("login")}>
              Login
            </button>
          </div>
        </div>

        {/* Conditional content rendering */}
        {activePage === "home" ? (
          <div className="welcome-box">
            <h1>Welcome to LegalGPT</h1>
            <p className="intro-text">
              Your ultimate AI-powered assistant for legal queries. Get instant answers, draft documents, and explore legal insights with ease.
            </p>
            <p>Type a message below to get started:</p>
            <div className="input-section">
              <input type="text" placeholder="Enter your message..." className="message-input" />
              <button className="send-button">Send</button>
            </div>
          </div>
        ) : activePage === "login" ? (
          <AuthPage theme={theme} />
        ) : activePage === "profile" ? (
          <FeedbackForm theme={theme} />
        ) : activePage === "messages" ? (
        <LibraryPage theme={theme} />
        ) : activePage === "contact" ? (
        <ContactLawyerPage />
        ) : null}
      </main>
    </div>
  );
}

export default Home;
