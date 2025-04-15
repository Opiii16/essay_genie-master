import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading("Please wait...");
        setError("");
        setSuccess("");

        try {
            const data = new FormData();
            data.append("email", email);
            data.append("password", password);

            const response = await axios.post(
                "https://oprahjane16.pythonanywhere.com/api/signin",
                data
            );

            setLoading("");

            if (response.data.user) {
                setSuccess("Login successful! Redirecting...");
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setTimeout(() => navigate('/'), 1500);
            } else {
                setError("Invalid credentials");
            }
        } catch (error) {
            setLoading("");
            setError(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <h2 className="form-title">Welcome Back</h2>
                <p className="form-subtitle">Please enter your details</p>
                
                {loading && <p className="status-message loading">{loading}</p>}
                {error && <p className="status-message error">{error}</p>}
                {success && <p className="status-message success">{success}</p>}

                <form onSubmit={handleSubmit} className="signin-form">
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <div className="links-container">
                        <p className="link-item">
                            Don't have an account? <a href="/signup" className="link">Sign up</a>
                        </p>
                        <p className="link-item">
                            <a href="/forgot-password" className="link">Forgot password?</a>
                        </p>
                    </div>
                </form>

                <p className="legal-text">
                    Protected by reCAPTCHA and subject to Google's <a href="https://policies.google.com/terms" className="legal-link">Terms</a> and <a href="https://policies.google.com/privacy" className="legal-link">Privacy</a>.
                </p>
            </div>
        </div>
    );
};

export default Signin;
