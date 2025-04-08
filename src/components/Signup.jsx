import React, { useState } from 'react';
// import { Await } from 'react-router-dom';
import axios from 'axios'
// import './Signup.css'; // Create a Signup.css file for styling
import {useNavigate} from 'react-router-dom';
const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]= useState("")
    const [success,setSuccess] = useState("")
    const [error,setError] =useState("")
    const [subscribe, setSubscribe] = useState(true); // Default to checked
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        letter: false,
        number: false,
    });
    

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Update password criteria
        setPasswordCriteria({
            length: newPassword.length >= 8,
            letter: /[a-zA-Z]/.test(newPassword),
            number: /[0-9]/.test(newPassword),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading("Please wait as we process your details")
        


        try{
            const data = new FormData()
            data.append("firstname",firstname)
            data.append("lastname",lastname)
            data.append("email",email)
            data.append("password",password)
      
            const response = await axios.post("https://oprahjane16.pythonanywhere.com/api/signup",data)
      
            setLoading("")
            setSuccess(response.data.Success)
      
            
            setUsername("")
            setEmail("")
            setPassword("")
            setPhone("")
      
          }catch(error){
            setSuccess("")
            setLoading("")
            setError("Ooops sth Happened")
      
          }
        // Here you would typically send the signup data to your backend
        console.log({ firstName, lastName, email, password, subscribe });
        // Reset the form if needed
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h2>Sign Up for Free</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="name-inputs">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <div className="password-criteria">
                        <p className={passwordCriteria.length ? 'valid' : 'invalid'}>Minimum 8 characters</p>
                        <p className={passwordCriteria.letter ? 'valid' : 'invalid'}>At least one letter</p>
                        <p className={passwordCriteria.number ? 'valid' : 'invalid'}>At least one number</p>
                    </div>
                    <label className="subscribe-label">
                        <input
                            type="checkbox"
                            checked={subscribe}
                            onChange={() => setSubscribe(!subscribe)}
                        />
                        Send me weekly emails with free resources, teaching tips, and more.
                    </label>
                    <button type="submit" onClick={() =>navigate('/Navbar', {state:{Signup}}}}Sign Up</button>
                    <p className="tos-text">
                        Protected by reCAPTCHA and subject to Google's <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a>.
                        By creating an account, you agree to our <a href="https://www.teacherspayteachers.com/Terms-of-Service">Terms of Service</a> and <a href="https://privacy.teacherspayteachers.com/policies">Privacy Policy</a>.
                    </p>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Sign in</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
