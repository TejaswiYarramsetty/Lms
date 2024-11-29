import React from 'react';
import './Contact.css'; // Add styles here

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> Kapil Kavuri Hub, 2nd Floor, Financial District, Nanakramguda, Hyderabad, Telangana, INDIA – 500 032</p>
        <p><strong>Phone:</strong> +91 1234567890 | +91 1047852963</p>
        <p><strong>Email:</strong> <a href="mailto:contact@onlinelearning.com.">contact@onlinelearning.com.</a></p>
      </div>
      <div className="contact-form">
        <h3>Send a Message</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Course" />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
