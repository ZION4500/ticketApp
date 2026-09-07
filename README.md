# 🎬  Movie Ticket Booking Application

A full-stack web application that allows users to browse currently playing movies, select showtimes, choose seats in real-time, and securely book tickets online. 

This repository houses both the **React frontend** and the **Express backend**, organized as a monorepo for straightforward development.

---

## 🚀 Key Features

* **Interactive Seat Selector:** Real-time visual seat map showing available, selected, and reserved seating.
* **Booking History:** User dashboard to track upcoming movie tickets and past transactions.
* **Admin Dashboard:** Administrative controls to add new movies, schedule showtimes, and view revenue analytics.

---

## 🛠️ Tech Stack

### Frontend
* **Core:** React.js (built with Vite or Create React App)
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS

### Backend
* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Authentication:** JWT (JSON Web Tokens) & bcryptjs
* **Database:** MongoDB (with Mongoose) OR MySQL / PostgreSQL (with Sequelize) *[Change based on your choice]*

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org) (v16.x or higher)
* [npm](https://npmjs.com) or [Yarn](https://yarnpkg.com)
* A running instance of your chosen database (e.g., MongoDB Atlas or local MySQL instance)

### 1. Clone the Repository
```bash
git clone https://github.com
cd your-ticketApp


### 2. Backend Setup & Configuration
Navigate to the backend folder and install its dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the root of the `backend/` directory and populate it with your environment variables:
```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

Start the backend development server:
```bash
npm run dev
# or: node server.js
```
The server will typically spin up at `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend folder, and install the dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the root of the `frontend/` directory to configure your API endpoint link:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the React development server:
```bash
npm run dev
```
Open your browser and navigate to the local address provided by the terminal output (usually `http://localhost:5173` or `http://localhost:3000`).

---

## 📡 Key API Endpoints

---
