import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onLoginClick }) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src='/logo.png' alt="Online Learning Logo" style={{ height: '40px', marginRight: '10px' }} />
                    ONLINE LEARNING
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/courses">Courses</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                    </div>

                    <div className="dropdown">
                        <button 
                            className="btn btn-secondary dropdown-toggle" 
                            type="button" 
                            id="dropdownMenuButton" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            Teacher
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/TLogin">Login</Link></li>
                            <li><Link className="dropdown-item" to="/TR">Register</Link></li>
                            <li><Link className="dropdown-item" to="/TDB">Dashboard</Link></li>
                            <li><Link className="dropdown-item" to="/TLogout">Logout</Link></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button 
                            className="btn btn-secondary dropdown-toggle" 
                            type="button" 
                            id="dropdownMenuButton" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            User
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/login" onClick={onLoginClick}>Login</Link></li>
                            <li><Link className="dropdown-item" to="/register">Register</Link></li>
                            <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
