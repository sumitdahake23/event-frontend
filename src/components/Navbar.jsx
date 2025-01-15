import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Check if a token exists in localStorage
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Navigate to the home page and reload the UI
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-1 p-3  rounded-3">
      <div className="container">
        {/* Logo/Brand Name */}
        <Link className="navbar-brand" to="/">
          Event Management
        </Link>
        <div>
          {/* Conditional Rendering */}
          {!isLoggedIn ? (
            <>

              {/* Show Login and Register buttons if the user is not logged in */}
              <Link className="btn btn-outline-primary me-2" to="/">
                Event
              </Link>
              <Link className="btn btn-outline-primary me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-primary" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>

              <Link className="btn btn-outline-primary me-2" to="/">
                Event
              </Link>
              <Link className="btn btn-outline-primary me-2" to="/create-event">
                Create Event
              </Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
