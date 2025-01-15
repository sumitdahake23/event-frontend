import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  // Fetch all events from the API
  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://event-backend-5fv4.onrender.com/api/events");
      setEvents(response.data.events);
    } catch (error) {
      console.error("Error fetching events:", error.response?.data || error.message);
    }
  };

  // Delete an event
  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`https://event-backend-5fv4.onrender.com/api/events/${eventId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Event deleted successfully!");
      fetchEvents(); // Refresh the events list after deletion
    } catch (error) {
      console.error("Error deleting event:", error.response?.data || error.message);
    }
  };

  // Navigate to the edit event page
  const handleEdit = (eventId) => {
    navigate(`/edit-events/${eventId}`);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event._id} className="col-md-4 mb-4">
            <div className="card border border-light border-5 rounded">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">Date: {new Date(event.date).toLocaleDateString()}</p>
                <p className="card-text">Location: {event.location}</p>
                {isLoggedIn && (
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(event._id)}
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(event._id)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
