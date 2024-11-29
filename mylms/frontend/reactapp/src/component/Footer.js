import React from 'react';

function Footer() {
    return (
        <footer className="bg-secondary text-white py-4">
            <div className="container d-flex flex-wrap justify-content-between align-items-start">
                {/* Left Section: Logo and Info */}
                <div className="d-flex align-items-center mb-3">
                    <img 
                        src="/logo.png" 
                        alt="Online Learning Logo" 
                        style={{ height: '80px', marginRight: '10px' }} 
                    />
                    <div>
                        <h5 className="mb-0">Online Learning</h5>
                        <p className="mb-0" style={{ fontSize: '14px' }}>
                            Empowering learning worldwide.
                        </p>
                    </div>
                </div>

                {/* Center Section: Main Menu */}
                <div className="text-center">
                    <h5>Main Menu</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/about" className="text-white text-decoration-none">About Us</a>
                        </li>
                        <li>
                            <a href="/courses" className="text-white text-decoration-none">Courses</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Contact Info */}
                <div>
                    <h5>Contact Info</h5>
                    <ul className="list-unstyled">
                        <li>Address: 123 Learning St., City, Country</li>
                        <li>Phone: +123 456 7890</li>
                        <li><a href="mailto:contact@onlinelearning.com." style={{color: 'yellow'}}>contact@onlinelearning.com.</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-3">
                <p>&copy; {new Date().getFullYear()} Online Learning. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
