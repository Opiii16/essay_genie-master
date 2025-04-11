    import React, { useState, useEffect } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import './Makepayment.css'; // Create this CSS file for custom styles

    const Makepayment = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [paymentDetails, setPaymentDetails] = useState({
        phone: '',
        amount: '',
        serviceType: 'tutor',
        tutorId: '',
        resourceId: '',
        description: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [tutors, setTutors] = useState([]);
    const [resources, setResources] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Fetch data when component mounts
    useEffect(() => {
        const fetchData = async () => {
        try {
            // Fetch available tutors (adjust endpoint to match your API)
            const tutorsRes = await axios.get('https://oprahjane16.pythonanywhere.com/api/tutors');
            setTutors(tutorsRes.data);
            
            // Fetch available resources (adjust endpoint)
            const resourcesRes = await axios.get('https://oprahjane16.pythonanywhere.com/api/resources');
            setResources(resourcesRes.data);
            
            // Set initial state if coming from order page
            if (state?.product) {
            setPaymentDetails(prev => ({
                ...prev,
                amount: state.product.product_cost,
                description: `Payment for ${state.product.product_name}`
            }));
            }
        } catch (err) {
            setError('Failed to load payment options. Please try again.');
        }
        };
        
        fetchData();
    }, [state]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('Please wait as we process your payment...');
        setError('');

        try {
        // Format phone number (matches your existing format)
        let formattedPhone = paymentDetails.phone.trim();
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '254' + formattedPhone.substring(1);
        } else if (!formattedPhone.startsWith('254')) {
            formattedPhone = '254' + formattedPhone;
        }

        // Prepare data matching your existing API expectations
        const paymentData = new FormData();
        paymentData.append("phone", formattedPhone);
        paymentData.append("amount", paymentDetails.amount);
        
        // Add additional fields if needed by your backend
        if (paymentDetails.tutorId) {
            paymentData.append("tutor_id", paymentDetails.tutorId);
        }
        if (paymentDetails.resourceId) {
            paymentData.append("resource_id", paymentDetails.resourceId);
        }

        // Use your existing MPesa endpoint
        const response = await axios.post(
            "https://oprahjane16.pythonanywhere.com/api/mpesa_payment",
            paymentData
        );

        setMessage(response.data.message || 'Payment initiated successfully!');
        
        // Redirect after delay (adjust as needed)
        setTimeout(() => {
            navigate('/orders');
        }, 3000);
        
        } catch (err) {
        setError(err.response?.data?.message || 'Payment failed. Please try again.');
        setIsLoading(false);
        }
    };

    return (
        <div className='row justify-content-center m-4'>
        <div className="col-md-8 col-lg-6 card shadow p-4 payment-card">
            <form onSubmit={handleSubmit}>
            <h2 className='text-success mb-4'>Make Payment</h2>
            
            {message && (
                <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-info'}`}>
                {message}
                </div>
            )}
            
            {error && (
                <div className="alert alert-danger">
                {error}
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">Payment For</label>
                <select
                className="form-select"
                name="serviceType"
                value={paymentDetails.serviceType}
                onChange={handleInputChange}
                >
                <option value="tutor">Tutor Session</option>
                <option value="resource">Study Resource</option>
                <option value="other">Other Service</option>
                </select>
            </div>

            {paymentDetails.serviceType === 'tutor' && (
                <div className="mb-3">
                <label className="form-label">Select Tutor</label>
                <select
                    className="form-select"
                    name="tutorId"
                    value={paymentDetails.tutorId}
                    onChange={handleInputChange}
                >
                    <option value="">-- Select Tutor --</option>
                    {tutors.map(tutor => (
                    <option key={tutor.id} value={tutor.id}>
                        {tutor.name} - KSh {tutor.hourly_rate}/hr
                    </option>
                    ))}
                </select>
                </div>
            )}

            {paymentDetails.serviceType === 'resource' && (
                <div className="mb-3">
                <label className="form-label">Select Resource</label>
                <select
                    className="form-select"
                    name="resourceId"
                    value={paymentDetails.resourceId}
                    onChange={handleInputChange}
                >
                    <option value="">-- Select Resource --</option>
                    {resources.map(resource => (
                    <option key={resource.id} value={resource.id}>
                        {resource.title} - KSh {resource.price}
                    </option>
                    ))}
                </select>
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">Amount (KSh)</label>
                <input
                type="number"
                className="form-control"
                name="amount"
                value={paymentDetails.amount}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">MPesa Phone Number</label>
                <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="254712345678"
                value={paymentDetails.phone}
                onChange={handleInputChange}
                required
                />
                <small className="text-muted">Format: 2547XXXXXXXX</small>
            </div>

            <div className="mb-3">
                <label className="form-label">Payment Description</label>
                <textarea
                className="form-control"
                name="description"
                rows="2"
                value={paymentDetails.description}
                onChange={handleInputChange}
                required
                />
            </div>

            <button 
                type="submit" 
                className="btn btn-success w-100 py-2"
                disabled={isLoading}
            >
                {isLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                </>
                ) : (
                `Pay KSh ${paymentDetails.amount || '0'}`
                )}
            </button>
            </form>
        </div>
        </div>
    );
    };

    export default Makepayment;