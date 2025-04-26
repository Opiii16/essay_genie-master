import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center">
          <p>You have no orders yet.</p>
          <p>Explore our services and tutors to make your first order!</p>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="list-group">
              {orders.map((order, index) => (
                <div key={index} className="list-group-item list-group-item-action mb-3 shadow-sm">
                  <h5 className="mb-2">{order.name}</h5>
                  <p className="mb-1"><strong>Type:</strong> {order.type}</p>
                  <p className="mb-1"><strong>Amount Paid:</strong> KES {order.amount?.toLocaleString()}</p>
                  <p className="mb-0"><strong>Transaction ID:</strong> {order.transactionCode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
