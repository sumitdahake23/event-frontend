# Event Management App

## Overview
A full-stack **Event Management** app created in one day using the **MERN stack** (MongoDB, Express, React, Node.js) for managing events with authentication and role-based access. The app also uses **Postman** for API testing and **Netlify/Render** for deployment.

## Technologies Used:
- **Frontend**: React, Bootstrap, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **API Testing**: Postman
- **Deployment**: Netlify/Render

API Endpoints:
Authentication:
Login: POST /api/auth/login

Request: { "email": "user@example.com", "password": "password123" }
Response: { "message": "Login successful", "token": "jwt_token_here", "email": "user@example.com" }
Register: POST /api/auth/register

Request: { "name": "John Doe", "email": "user@example.com", "password": "password123" }
Response: { "message": "User registered successfully" }
Event Management:
Create Event: POST /api/events

Request: { "name": "Sample Event", "description": "Event description", "date": "2025-01-20", "location": "New York" }
Response: { "message": "Event created successfully", "event": { ... } }
Get All Events: GET /api/events

Response: [{ "_id": "event_id", "name": "Sample Event", "description": "Event description", "date": "2025-01-20", "location": "New York" }]
Get Event by ID: GET /api/events/:id

Response: { "_id": "event_id", "name": "Sample Event", "description": "Event description", "date": "2025-01-20", "location": "New York" }
Update Event: PUT /api/events/:id

Request: { "name": "Updated Event", "description": "Updated description", "date": "2025-02-20", "location": "Los Angeles" }
Response: { "message": "Event updated successfully", "event": { ... } }
Delete Event: DELETE /api/events/:id

Response: { "message": "Event deleted successfully" }
