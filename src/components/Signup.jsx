import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: true
    });
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        letter: false,
        number: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'password') {
            setPasswordCriteria({
                length: value.length >= 8,
                letter: /[a-zA-Z]/.test(value),
                number: /[0-9]/.test(value),
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading("Please wait as we process your details");
        setSuccess("");
        setError("");

        try {
            const data = new FormData();
            data.append("firstname", formData.firstName);
            data.append("lastname", formData.lastName);
            data.append("email", formData.email);
            data.append("password", formData.password);

            const response = await axios.post(
                "https://oprahjane16.pythonanywhere.com/api/signup", 
                data
            );

            setLoading("");
            setSuccess(response.data.Success || "Signup successful!");
            
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                subscribe: true
            });
        } catch (error) {
            setLoading("");
            setError(error.response?.data?.message || "Oops, something happened. Please try again.");
        }
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <h2 className="form-title">Create Your Account</h2>
                <p className="form-subtitle">Join us to get started</p>
                
                {loading && <p className="status-message loading">{loading}</p>}
                {error && <p className="status-message error">{error}</p>}
                {success && <p className="status-message success">{success}</p>}

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="name-inputs">
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <div className="password-criteria">
                            <p className={passwordCriteria.length ? 'valid' : 'invalid'}>
                                ✓ Minimum 8 characters
                            </p>
                            <p className={passwordCriteria.letter ? 'valid' : 'invalid'}>
                                ✓ At least one letter
                            </p>
                            <p className={passwordCriteria.number ? 'valid' : 'invalid'}>
                                ✓ At least one number
                            </p>
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}
                            />
                            <span>Send me weekly emails with free resources</span>
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button" 
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>

                    <p className="login-link">
                        Already have an account? <a href="/login">Sign in</a>
                    </p>

                    <p className="legal-text">
                        Protected by reCAPTCHA and subject to Google's <a href="https://policies.google.com/terms" className="legal-link">Terms</a> and <a href="https://policies.google.com/privacy" className="legal-link">Privacy</a>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
