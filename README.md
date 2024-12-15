Campus Event Management System
# Campus-Event-Website
This is a campus event website

Project Overview

Campus Event Management System is a web application designed to streamline the management of campus events for students, staff, and administrators. The system allows users to view, register (RSVP), and manage campus events such as workshops, seminars, and club activities. Admins can create and manage events, while students can personalize their event preferences and registrations.

The project features a responsive and intuitive frontend and a robust backend to handle authentication, event creation, and RSVP functionalities.

Deployment Link

Campus Event Management System - Deployed Frontend 

Login Details

For testing the login functionality, use the following test credentials:

- Username: user@example.com

Password: password123

For admin functionality, use:

- Username: admin@example.com

Password: adminpassword

Feature Checklist

Feature

Status

Homepage with Navigation and Hero Section

✅ Completed

User Registration and Login

✅ Completed

Event Listings with Details (Name, Date, Time, etc.)

✅ Completed

RSVP Functionality

✅ Completed

Admin Event Creation

✅ Completed

Calendar View with Filters

✅ Completed

Responsive Design

✅ Completed

Frontend-Backend Integration

✅ Completed

API Endpoints

✅ Completed

Installation Instructions

Prerequisites

Node.js and npm installed on your machine.

MongoDB installed or access to a MongoDB Atlas instance.

Step 1: Clone the Repository

git clone https://github.com/yourusername/campus-event-management.git
cd campus-event-management

Step 2: Install Backend Dependencies

Navigate to the backend folder and install the dependencies:

cd backend
npm install

Step 3: Setup Environment Variables

Create a .env file in the backend folder with the following content:

PORT=3000
MONGODB_URI=mongodb+srv://frankkofi:rHWqz8cdWKiLL@cluster0.lj0rv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=CL1Q!nba#xP2

Step 4: Start the Backend Server

npm run dev

The backend will run on http://localhost:3000.

Step 5: Serve the Frontend

Navigate to the frontend folder and open homepage.html in your browser or use Live Server (if using VSCode):

cd ../Campus

Alternatively, you can deploy the frontend using GitHub Pages.

API Documentation

API Endpoints

Endpoint

Method

Description

/api/auth/register

POST

User Registration

/api/auth/login

POST

User Login

/api/events

GET

Get All Events

/api/events

POST

Create a New Event (Admin Only)

/api/events/:id/rsvp

POST

RSVP for an Event

Postman API Test Screenshot


Technologies Used

Frontend

- HTML5

- CSS3 (with Roboto and Montserrat fonts)

- JavaScript

Backend

- Node.js with Express.js

- MongoDB with Mongoose

- JWT Authentication

Other Tools

- Postman for API Testing

- Git and GitHub for Version Control




