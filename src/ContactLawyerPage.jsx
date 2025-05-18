import React, { useState } from "react";
import "./ContactLawyerPage.css";

export default function ContactLawyerPage() {
  const [showOptions, setShowOptions] = useState(false);

  const handleContactClick = () => {
    setShowOptions(true);
  };

  return (
    <div className="contact-lawyer-container">
      <h1 className="title">Get in Touch with a Lawyer</h1>
      <div className="lawyer-card">
        <h2 className="lawyer-name">Adv. ABC</h2>
        <p className="lawyer-specialty">Specialized in Cyber, Civil & Family Law</p>
        <button className="contact-btn" onClick={handleContactClick}>
          Contact
        </button>

        {showOptions && (
          <div className="contact-options">
            <p>📞 Call: <a href="tel:+918897355600">+91 88973 55600</a></p>
            <p>📧 Mail: <a href="mailto:pragathivanamala@gmail.com">pragathivanamala@gmail.com</a></p>
          </div>
        )}
      </div>
    </div>
  );
}
