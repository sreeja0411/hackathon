import React, { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm({ theme }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    alert("Thanks for your feedback!");
    setFeedback("");
  };

  return (
    <div className={`feedback-box ${theme}`}>
      <h2>Feedback Form</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your feedback here..."
        rows="5"
        className="feedback-textarea"
      />
      <button className="send-button" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </div>
  );
}

export default FeedbackForm;