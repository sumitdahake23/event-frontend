import React from "react";

const EventCard = ({ event }) => {

  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const handleEdit = (eventId) => {
    console.log("Editing event with ID:", eventId);
  };
  
  const handleDelete = (eventId) => {
    console.log("Deleting event with ID:", eventId);
  };
  
  return (
    <div className="col-md-4 mb-4">
    <div className="card border border-light border-5 rounded">
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.description}</p>
        <p className="card-text">Date: {new Date(event.date).toLocaleDateString()}</p>
        <p className="card-text">Location: {event.location}</p>
  
        {/* Conditionally render Edit and Delete buttons */}
        {isLoggedIn && (
          <div className="d-flex justify-content-between mt-3">
            {/* Edit Button */}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleEdit(event._id)}
            >
              <i className="bi bi-pencil-square"></i> Edit
            </button>
  
            {/* Delete Button */}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(event._id)}
            >
              <i className="bi bi-trash"></i> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default EventCard;