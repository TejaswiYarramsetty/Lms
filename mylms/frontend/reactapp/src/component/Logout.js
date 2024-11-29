import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Clear user session or authentication token
        localStorage.removeItem("userLoginStatus"); // Example for clearing teacher login session
        alert("You have been logged out.");

        // Redirect to the login page
        navigate("/Login"); 
    };

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "50px auto",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Logout</h2>
            <form onSubmit={handleLogout}>
                <p style={{ textAlign: "center" }}>Are you sure you want to log out?</p>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#FF4C4C",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Logout;
