import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'; 

function Login({ show, onClose }) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }

    const loginnFormData = new FormData();
    loginnFormData.append('email', email);
    loginnFormData.append('password', password);

    try {
        axios.post(baseUrl+'/Login',loginnFormData).then((res)=>{

      if (res.data.bool === true) {
        alert('Login successful!');
        localStorage.setItem('loginStatus', 'true');
        window.location.href = '/dashboard';
      } 
    //   else {
        setError('Invalid credentials!');
      });
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 404) {
        setError('The requested endpoint does not exist. Please contact support.');
      } else {
        setError('An error occurred while logging in. Please try again.');
      }
    }
  };

  useEffect(() => {
    document.title = 'Login - Online Learning';
  }, []);

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name='email'
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" variant="primary">Login</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;