import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookMeeting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tutor } = location.state || {};
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBook = (e) => {
    e.preventDefault();
    alert(`Meeting booked with ${tutor.name} on ${date} at ${time}`);
    navigate('/');
  };

  // Using an official Zoom tutorial video that's more likely to stay available
  const zoomTutorialVideoId = "9isp3qPeQ0E"; // Official Zoom joining meeting tutorial

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">📅 Book a Zoom Meeting with {tutor?.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleBook}>
            <div className="mb-3">
              <label className="form-label">Select Date:</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]} // Prevent past dates
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Time:</label>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-success mt-2">✅ Confirm Booking</button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${zoomTutorialVideoId}?rel=0`}
              title="Zoom Meeting Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <p className="mt-2 text-muted text-center">
            🎥 Watch: How to Join a Zoom Meeting (Official Tutorial)
          </p>
          {!tutor && (
            <div className="alert alert-warning mt-3">
              No tutor information found. Please go back and select a tutor first.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;