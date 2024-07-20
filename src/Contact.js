import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>At Meals 4 U, we value our community and are always eager to hear from you.</h2>
        <p>Whether you have a question, feedback, or just want to share your cooking experiences, feel free to reach out to us.</p>
      </div>
      <div className="contact-card">
        <h2>We appreciate your feedback as it helps us improve and provide the best experience for our users.</h2>
        <p>Please let us know how we can serve you better.</p>
      </div>
      <div className="contact-card">
        <h2>Contact Information</h2>
        <p>Email: Mealsforu@gmail.com</p>
        <p>Phone Number: 000-000-0000</p>
      </div>
    </div>
  );
};

export default Contact;
