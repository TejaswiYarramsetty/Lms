import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/teachers/';

function TR() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
        subject: '',
        experience: '',
    });
    const [passwordError, setPasswordError] = useState('');
    const [apiError, setApiError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === 'confirm_password' || name === 'password') {
            setPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPasswordError('');
        setApiError('');
        setIsRegistered(false);
    
        if (formData.password !== formData.confirm_password) {
            setPasswordError('Passwords do not match!');
            return;
        }
    
        const teacherFormData = new FormData();
        teacherFormData.append('full_name', formData.full_name);
        teacherFormData.append('email', formData.email);
        teacherFormData.append('password', formData.password);
        teacherFormData.append('confirm_password', formData.confirm_password); // Correct key
        teacherFormData.append('subject', formData.subject);
        teacherFormData.append('experience', formData.experience);
    
        console.log("Form data to be submitted:", Object.fromEntries(teacherFormData.entries()));
    
        try {
            const response = await axios.post(baseUrl, teacherFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
            setIsRegistered(true); // Mark as registered on success
        } catch (error) {
            if (error.response) {
                console.error("Error response:", error.response.data);
                setApiError(error.response.data.error || "An error occurred while registering.");
            } else {
                console.error("Error:", error.message);
                setApiError("An error occurred. Please try again later.");
            }
        }
    };
    
    useEffect(() => {
        document.title = 'Teacher Register - Online Learning';
    }, []);

    return (
        <div
            style={{
                backgroundImage: 'url(/tr.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <div className="container mt-5" style={{ maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center' }}>Teacher Registration</h2>

                {isRegistered ? (
                    <div className="alert alert-success text-center">
                        Successfully Registered!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="full_name" className="form-label">Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="full_name"
                                name="full_name"
                                placeholder="Enter full name"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="form-label">Confirm Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Confirm password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                required
                            />
                            {passwordError && (
                                <div className="text-danger mt-2">{passwordError}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject:</label>
                            <select
                                className="form-select"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="AI">AI</option>
                                <option value="CS">Cybersecurity</option>
                                <option value="ML">Machine Learning</option>
                                <option value="CC">Cloud Computing</option>
                                <option value="DS">Data Science</option>
                                <option value="frontend">Frontend</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="experience" className="form-label">Years of Experience:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="experience"
                                name="experience"
                                placeholder="Enter years of teaching experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {apiError && (
                            <div className="text-danger text-center mb-3">
                                {apiError}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                        >
                            Register
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default TR;
