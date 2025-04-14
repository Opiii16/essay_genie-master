import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
                setSuccess("Login Success");
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate('/');
            } else {
                setError("Login Failed");
            }
        } catch (error) {
            setLoading("");
            setError("Something went wrong!");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form-container">
                <h2>Log in</h2>
                {loading && <p className="loading">{loading}</p>}
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <form onSubmit={handleSubmit} className="signin-form">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Log in</button>
                    <p className="signup-link">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                    <p className="forgot-links">
                        <a href="/forgot-username">Forgot username?</a> | <a href="/forgot-password">Forgot password?</a>
                    </p>
                    <p className="tos-text">
                        Protected by reCAPTCHA and subject to Google's <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signin;