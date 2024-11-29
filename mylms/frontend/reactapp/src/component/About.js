import React from 'react';

import './About.css';

import { useEffect } from 'react';

function About() {

  
  useEffect(() => {
    document.title = 'About - Online Learning';
}, []);




const values = [
  {
    title: "Service Excellence",
    description:
      "We always emphasize delivering products and services of value. Towards that objective, we ensure excellence throughout all our endeavors and projects.",
    icon: "S",
  },
  {
    title: "Trustworthiness",
    description:
      "Integrity and trust are central to our business. We operate with honesty and transparency, and our motto is to always live up to the standards and quality we promise.",
    icon: "T",
  },
  {
    title: "Accountability",
    description:
      "We take ownership of our actions and ensure that we deliver on our promises. Accountability drives our performance and builds trust with our learners.",
    icon: "A",
  },
  {
    title: "Respect",
    description:
      "We treat everyone with respect, fostering an environment of inclusivity and collaboration. Mutual respect is the cornerstone of our community.",
    icon: "R",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to promoting sustainable learning practices that create a lasting impact on our learners, society, and the environment.",
    icon: "S",
  },
];










  return (
    
    
    <div className="container mt-4">
      <img src='bg.jpg' alt='no bg' style={{width:'100%',height:'500px',objectFit:'cover'}}></img>
        
      <h2>About Us</h2>
      <p>
        Welcome to our online learning platform! We are dedicated to providing high-quality courses in various fields to help you enhance your skills and advance your career.
      </p>
      <h4>Our Mission</h4>
      <p>
        Our mission is to empower learners through accessible education and training, enabling them to achieve their goals and succeed in their professional journeys.
      </p>
      <h4>Our Values</h4>
      <ul>
        <li>Excellence: We strive for the highest standards in our courses.</li>
        <li>Innovation: We continuously update our offerings to keep pace with industry trends.</li>
        <li>Community: We believe in fostering a supportive learning environment.</li>
      </ul>
      <h4>Contact Us</h4>
      <p>
        If you have any questions or suggestions, feel free to reach out to us at contact@onlinelearning.com.
      </p>
      <div>
      <div className="about-container d-flex align-items-center">
            <img 
                src="sideimg.jpeg" 
                alt="sideimg"
                className="about-image"
            />
            <div className="about-content">
                <h2>WHY CHOOSE US?</h2>
                <p>
                    We are dedicated to providing quality online learning experiences. 
                    Our platform offers a variety of courses to help you achieve your educational goals.
                    Join us on this journey of knowledge and growth!
                    Experience excellence with industry-leading training and support.
                    Our expert instructors, tailored curriculum, and hand-on approach ensure you gain the skills you need for success in the ever-evolving tech landscape.
                    Join a community dedicated to your growth and success!
                </p>
            </div>
        </div>
        {/* Second Image on Right, Content on Left */}
      <div className="about-container d-flex align-items-center mb-4">
        <div className="about-content">
          <h2>Our Approach</h2>
          <p>
            Our approach to learning is centered on interactive and practical training that empowers you to apply what you learn.
            We believe that education should be engaging and directly applicable to real-world scenarios.
          </p>
          <h2>Transform Your Career With Expert-Led IT training</h2>
          <p>Unlock your potential with our specialized courses designed to prepare you for the tech industry.Learn from experienced instructors through engaging video tutorials and hands-on projects,ensuring you gain practical skills for real-world applications.</p>
        </div>
        <img 
          src="rimg.jpeg" 
          alt="rimg"
          className="about-image" 
        />
      </div>
      </div>




        {/* "Our Values" Section */}
        <section className="our-values">
          <h4>Our Values</h4>
          <p>Our values have been built around the following principles:</p>
          <div className="values-list">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span>{value.icon}</span>
                </div>
                <div className="value-content">
                  <h5>{value.title}</h5>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>





        <div className="contact-us">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> Kapil Kavuri Hub, 2nd Floor, Financial District, Nanakramguda, Hyderabad, Telangana, INDIA – 500 032</p>
        <p><strong>Phone:</strong> +91 88850 30341 | +91 98898 86936</p>
        <p><strong>Email:</strong> <a href="mailto:"> contact@onlinelearning.com.</a></p>
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




      



    </div>
    
  );
}

export default About;
