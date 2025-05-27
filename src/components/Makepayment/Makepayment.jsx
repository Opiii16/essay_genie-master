import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MakePayment = () => {
  const navigate = useNavigate();  
  const location = useLocation();

  console.log('Received state:', location.state);

  const { service, tutor } = location.state || {};

  const paymentItem = service || tutor || {
    name: 'Service/Tutor',
    price: 0,
    description: 'Payment for a selected service or tutor',
  };

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.match(/^07[0-9]{8}$/)) {  // 07 + 8 digits
      setMessage('Please enter a valid M-Pesa number starting with 07 (e.g., 0712345678)');
      return;
    }

    setIsProcessing(true);
    setMessage('Processing payment request...');

    try {
      const formattedPhone = phone.replace(/^0/, '254'); // Convert 0712345678 → 254712345678

      const paymentData = new FormData();
      paymentData.append("phone", formattedPhone);
      paymentData.append("amount", paymentItem.price);
      paymentData.append("service", paymentItem.name);
      paymentData.append("tutor", tutor?.name || 'N/A');

      const response = await axios.post(
        "https://oprahjane16.pythonanywhere.com/api/mpesa_payment",
        paymentData
      );

      setMessage(response.data.message || 'Payment request sent to your phone');

      // Save order to localStorage
      const newOrder = {
        name: paymentItem.name,
        type: tutor ? 'Tutor' : 'Essay Genie Service',
        amount: paymentItem.price,
        transactionCode: response.data.transactionCode || 'N/A',
      };

      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

      setTimeout(() => {
        navigate('/payment-success', { 
          state: { 
            service: paymentItem, 
            tutor,
            paymentDetails: response.data 
          }
        });
      }, 5000);

    } catch (error) {
      console.error('Payment error:', error);
      setMessage(error.response?.data?.message || 'Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">Essay Genie Payment</h2>
            </div>

            <div className="card-body">
              <div className="mb-4 p-3 border rounded">
                <h4 className="text-primary">{paymentItem.name}</h4>
                {paymentItem.description && <p className="mb-1">{paymentItem.description}</p>}
                {tutor && (
                  <p className="mb-1"><strong>Tutor:</strong> {tutor.name}</p>
                )}
                <h5 className="mt-2 text-success">
                  KES {paymentItem.price?.toLocaleString() || 0}
                </h5>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    M-Pesa Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="07XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <div className="form-text">
                    Enter your M-Pesa number starting with 07 (e.g., 0712345678)
                  </div>
                </div>

                {message && (
                  <div className={`alert ${isProcessing ? 'alert-info' : message.includes('failed') ? 'alert-danger' : 'alert-success'}`}>
                    {message}
                  </div>
                )}

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      'Pay with M-Pesa'
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-muted small">
              <p className="mb-1">
                <i className="bi bi-shield-lock me-2"></i>
                Your payment is secure and encrypted
              </p>
              <p className="mb-0">
                <i className="bi bi-headset me-2"></i>
                Need help? Contact support: +254735709392
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;