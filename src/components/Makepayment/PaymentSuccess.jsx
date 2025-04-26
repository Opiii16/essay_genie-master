import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const { service, tutor, paymentDetails } = location.state || {};

  // Determine what to display: tutor or service
  const paymentItem = service || tutor || {
    name: 'Service/Tutor',
    price: 0
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h2 className="text-center mb-0">Payment Successful!</h2>
            </div>
            
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
              </div>

              <h4 className="text-success mb-3">Thank you for your payment!</h4>

              <div className="mb-4 p-3 border rounded bg-light">
                <h5>{paymentItem.name}</h5>
                {tutor && (
                  <p className="mb-1">
                    <strong>Tutor:</strong> {tutor.name}
                  </p>
                )}
                <p className="mb-1">
                  <strong>Amount:</strong> KES {paymentItem.price?.toLocaleString() || '0'}
                </p>
                {paymentDetails?.transactionCode && (
                  <p className="mb-0">
                    <strong>Transaction ID:</strong> {paymentDetails.transactionCode}
                  </p>
                )}
              </div>

              <p className="mb-4">
                {tutor ? (
                  <>Your tutor will contact you soon to start your session.</>
                ) : (
                  <>Your service request has been received and is being processed.</>
                )}
              </p>

              <div className="d-grid gap-3">
                <Link to="/" className="btn btn-primary">
                  Back to Home
                </Link>
                <Link to="/my-orders" className="btn btn-outline-secondary">
                  View My Orders
                </Link>
              </div>
            </div>

            <div className="card-footer text-center text-muted small">
              <p className="mb-0">
                Need help? Contact support at essaygenie@gmail.com or +254735709392
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
