import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css'; // Create this CSS file for custom styles

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleExploreServices = () => {
    navigate('/services');
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2 className="orders-title">📋 My Order History</h2>
        <p className="orders-subtitle">View and manage all your past orders</p>
      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <div className="empty-orders-icon">🛒</div>
          <h3 className="empty-orders-title">Your Order List is Empty</h3>
          <p className="empty-orders-message">
            You haven't placed any orders yet. Discover our amazing services and find the perfect tutor for your needs!
          </p>
          <button 
            className="btn btn-primary explore-btn"
            onClick={handleExploreServices}
          >
            Explore Services
          </button>
        </div>
      ) : (
        <div className="orders-grid">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <div className="order-card-header">
                <h3 className="order-name">{order.name}</h3>
                <span className={`order-status ${order.status || 'completed'}`}>
                  {order.status || 'Completed'}
                </span>
              </div>
              
              <div className="order-details">
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{order.type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value price">KES {order.amount?.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Transaction ID:</span>
                  <span className="detail-value code">{order.transactionCode}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{order.date || new Date().toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="order-actions">
                <button className="btn btn-outline view-details">
                  View Details
                </button>
                <button className="btn btn-primary reorder">
                  Reorder
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;

