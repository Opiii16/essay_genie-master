import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookMeeting = () => {
  const location = useLocation();
  const { tutor } = location.state || {};
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [meetingType, setMeetingType] = useState('zoom');
  const [bookingType, setBookingType] = useState('meeting'); // 'meeting' or 'session'
  const [isBooked, setIsBooked] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({
    duration: '30',
    topic: '',
    description: ''
  });

  const handleBook = (e) => {
    e.preventDefault();
    if (bookingType === 'meeting') {
      alert(`Meeting booked with ${tutor.name} on ${date} at ${time}`);
    } else {
      alert(`Session booked with ${tutor.name} on ${date} at ${time} for ${sessionDetails.duration} minutes`);
    }
    setIsBooked(true);
  };

  const launchMeeting = () => {
    if (meetingType === 'zoom') {
      window.open('https://zoom.us/j/1234567890', '_blank');
    } else {
      window.open('https://meet.google.com/abc-defg-hij', '_blank');
    }
  };

  const handleSessionChange = (e) => {
    const { name, value } = e.target;
    setSessionDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const zoomTutorialVideoId = "9isp3qPeQ0E";
  const googleMeetTutorialVideoId = "KFAoXhUjyyo";

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">
        {bookingType === 'meeting' ? '📅 Book a Meeting' : '📚 Book a Session'} with {tutor?.name}
      </h2>
      
      {/* Booking Type Toggle */}
      <div className="mb-4 text-center">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${bookingType === 'meeting' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setBookingType('meeting')}
          >
            Book a Meeting
          </button>
          <button
            type="button"
            className={`btn ${bookingType === 'session' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setBookingType('session')}
          >
            Book a Session
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleBook}>
            {/* Common fields for both meeting and session */}
            <div className="mb-3">
              <label className="form-label">Select Date:</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
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

            {bookingType === 'meeting' ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Meeting Platform:</label>
                  <select 
                    className="form-select"
                    value={meetingType}
                    onChange={(e) => setMeetingType(e.target.value)}
                  >
                    <option value="zoom">Zoom</option>
                    <option value="google-meet">Google Meet</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="mb-3">
                  <label className="form-label">Session Duration (minutes):</label>
                  <select
                    className="form-select"
                    name="duration"
                    value={sessionDetails.duration}
                    onChange={handleSessionChange}
                  >
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Session Topic:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="topic"
                    value={sessionDetails.topic}
                    onChange={handleSessionChange}
                    placeholder="What will you be working on?"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Session Description:</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={sessionDetails.description}
                    onChange={handleSessionChange}
                    rows="3"
                    placeholder="Any specific areas you'd like to focus on?"
                  />
                </div>
              </>
            )}

            <button className="btn btn-success mt-2">
              {isBooked ? '✅ Booking Confirmed!' : '✅ Confirm Booking'}
            </button>
            
            {isBooked && bookingType === 'meeting' && (
              <button 
                type="button" 
                className="btn btn-primary mt-3 w-100"
                onClick={launchMeeting}
              >
                🚀 Join {meetingType === 'zoom' ? 'Zoom' : 'Google Meet'} Meeting
              </button>
            )}
          </form>
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${
                bookingType === 'meeting' 
                  ? (meetingType === 'zoom' ? zoomTutorialVideoId : googleMeetTutorialVideoId)
                  : 's4D9FhQpBOU' // General tutoring session video
              }`}
              title={
                bookingType === 'meeting' 
                  ? `${meetingType === 'zoom' ? 'Zoom' : 'Google Meet'} Meeting Guide`
                  : 'Tutoring Session Guide'
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <p className="mt-2 text-muted text-center">
            🎥 Watch: How to {bookingType === 'meeting' 
              ? `Join a ${meetingType === 'zoom' ? 'Zoom' : 'Google Meet'} Meeting`
              : 'Prepare for Your Tutoring Session'}
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