import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/Student/';

function Register() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        select_course: '',
    });

    const [isRegistered, setIsRegistered] = useState(false); // Registration status
    const [passwordError, setPasswordError] = useState(''); // Password error
    const [apiError, setApiError] = useState(''); // API error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'password' || name === 'confirm_password') {
            setPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPasswordError('');
        setApiError('');
        setIsRegistered(false);

        // Password validation
        if (formData.password !== formData.confirm_password) {
            setPasswordError('Passwords do not match!');
            return;
        }

        const studentData = new FormData();
        studentData.append('first_name', formData.first_name);
        studentData.append('last_name', formData.last_name);
        studentData.append('email', formData.email);
        studentData.append('password', formData.password);
        studentData.append('confirm_password', formData.confirm_password);
        studentData.append('select_course', formData.select_course);

        console.log("Form data to be submitted:", Object.fromEntries(studentData.entries()));

        try {
            const response = await axios.post(baseUrl, studentData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Response:', response.data);
            setIsRegistered(true);
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                setApiError(error.response.data.error || 'An error occurred while registering.');
            } else {
                console.error('Error:', error.message);
                setApiError('An error occurred. Please try again later.');
            }
        }
    };

    useEffect(() => {
        document.title = 'Student Register - Online Learning';
    }, []);

    return (
        <div
            style={{
                backgroundImage: 'url(/bgr.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <div
                className="container mt-5"
                style={{
                    maxWidth: '400px',
                    padding: '20px',
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    background: 'rgba(0, 0, 0, 0.7)',
                }}
            >
                <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Registration</h4>

                {isRegistered ? (
                    <div className="alert alert-success text-center">
                        Successfully Registered!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="first_name" className="form-label">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first_name"
                                name="first_name"
                                placeholder="Enter first name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="last_name" className="form-label">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last_name"
                                name="last_name"
                                placeholder="Enter last name"
                                value={formData.last_name}
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
                            <label htmlFor="select_course" className="form-label">Select Course:</label>
                            <select
                                className="form-select"
                                id="select_course"
                                name="select_course"
                                value={formData.select_course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="Python Full Stack">Python Full Stack</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Cloud Computing">Cloud Computing</option>
                                <option value="Business Intelligence">Business Intelligence</option>
                                <option value="Devops">Devops</option>
                                <option value="Machine Learning">Machine Learning</option>
                            </select>
                        </div>

                        {apiError && (
                            <div className="text-danger text-center mb-3">{apiError}</div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-info"
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

export default Register;
