# ZipTrip Todo Application

## Overview

This project is a full-stack Todo application built for the ZipTrip Frontend & Backend Challenge.

The application allows users to create, view, update, delete, and manage todos using a React frontend and an Express.js backend.

---

## Features

* View all todos
* Search todos
* Add new todo
* Edit existing todo
* Delete todo
* Mark todo as completed or pending
* View individual todo details
* Responsive user interface
* RESTful CRUD APIs
* Data stored in a JSON file

---

## Technologies Used

### Frontend

* React
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* CORS
* File System (JSON)

---

## Project Structure

```
ziptrip-todo-app
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── data
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── README.md
├── API.md
└── FEATURES.md
```

---

## Installation

### Backend

```bash
cd backend
npm install
node app.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Author

Developed as part of the ZipTrip Technical Assessment.
