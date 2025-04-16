import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [emailUsername, setEmailUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading('Please wait...');
        try {
            const data = new FormData();
            data.append('email', emailUsername); // assuming your backend handles both email or username
            data.append('password', password);

            const response = await axios.post('https://oprahjane16.pythonanywhere.com/api/signin', data);

            setLoading('');

            if (response.data.user) {
                setSuccess('Login Success');
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/');
            } else {
                setError('Login Failed');
            }
        } catch (error) {
            setLoading('');
            setError('Something went wrong!');
        }

        console.log({ emailUsername, password });
        setEmailUsername('');
        setPassword('');
    };

    return (
        <div className="signin-container">
            <div className="signin-form-container">
                <h2>Log in</h2>
                <form onSubmit={handleSubmit} className="signin-form">
                    {loading && <p className="text-info">{loading}</p>}
                    {success && <p className="text-success">{success}</p>}
                    {error && <p className="text-danger">{error}</p>}

                    <input
                        type="text"
                        placeholder="Email or username"
                        value={emailUsername}
                        onChange={(e) => setEmailUsername(e.target.value)}
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

                <p className="legal-text">
                    Protected by reCAPTCHA and subject to Google's <a href="https://policies.google.com/terms" className="legal-link">Terms</a> and <a href="https://policies.google.com/privacy" className="legal-link">Privacy</a>.
                </p>
            </div>
        </div>
    );
};

export default Signin;
