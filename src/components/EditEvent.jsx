import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize formData with default values to prevent undefined
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const token = localStorage.getItem("token");  // Get token from localStorage
        const response = await axios.get(`https://event-backend-5fv4.onrender.com/api/events/${id}`, {
          headers: { Authorization: `Bearer ${token}` },  // Add token to headers
        });

        // Check if the response contains data and update formData
        if (response.data) {
          const updatedFormData = {
            name:  response.data.event.name || "",  
            description:  response.data.event.description || "",
            date:  response.data.event.date ?  response.data.event.date.split("T")[0] : "",
            location:  response.data.event.location || "",
          };
          setFormData(updatedFormData);
          // console.log("Updated formData:", name);  // Log the updated formData here
        }
      } catch (error) {
        console.error("Error fetching event:", error.response?.data || error.message);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`https://event-backend-5fv4.onrender.com/api/events/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Event updated successfully!");
      navigate("/"); // Redirect to home or event list
    } catch (error) {
      console.error("Error updating event:", error.response?.data || error.message);
    }
  };

  // Log formData in the render phase to track changes
  console.log("FormData state during render:", formData);

  return (
    <div className="container mt-4">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
