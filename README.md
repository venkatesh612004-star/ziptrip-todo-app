# 📝 ZipTrip Todo Application

## Overview

The ZipTrip Todo Application is a full-stack web application developed as part of the ZipTrip Technical Assessment.

The application enables users to manage their daily tasks efficiently through a simple and responsive interface. It follows a client-server architecture with a React frontend and an Express.js backend, providing complete CRUD (Create, Read, Update, Delete) functionality.

---

# Features

## Frontend

- Display all todos
- Search todos by title
- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as Completed or Pending
- View detailed information about a single todo
- Responsive user interface
- React Router based multi-page navigation

## Backend

- RESTful API using Express.js
- Create Todo
- Read All Todos
- Read Single Todo
- Update Todo
- Delete Todo
- Data stored in a local JSON file
- CORS enabled for frontend communication

---

# Technologies Used

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js
- CORS
- File System (fs)

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Thunder Client

---

# Project Structure

```
ziptrip-todo-app
│
├── Backend
│   ├── controllers
│   │      todoController.js
│   │
│   ├── routes
│   │      todoRoutes.js
│   │
│   ├── data
│   │      todos.json
│   │
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── public
│   ├── src
│   │
│   ├── components
│   │      Navbar.jsx
│   │      TodoCard.jsx
│   │      TodoForm.jsx
│   │      SearchBar.jsx
│   │      EmptyState.jsx
│   │      Loading.jsx
│   │
│   ├── pages
│   │      TodoList.jsx
│   │      TodoDetails.jsx
│   │
│   ├── services
│   │      todoService.js
│   │
│   ├── styles
│   │      app.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
├── API.md
├── FEATURES.md
└── .gitignore
```

---

# Installation Guide

## Clone the Repository

```bash
git clone https://github.com/venkatesh612004-star/ziptrip-todo-app.git
```

Move into the project folder.

```bash
cd ziptrip-todo-app
```

---

# Backend Setup

Move into the backend folder.

```bash
cd Backend
```

Install dependencies.

```bash
npm install
```

Start the backend server.

```bash
node app.js
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal.

Move into the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /todos | Get all todos |
| GET | /todos/:id | Get a todo by ID |
| POST | /todos | Create a new todo |
| PUT | /todos/:id | Update an existing todo |
| DELETE | /todos/:id | Delete a todo |

---

# Application Workflow

1. User opens the React application.
2. React fetches all todos from the Express backend.
3. Backend reads data from `todos.json`.
4. User can:
   - Add a todo
   - Edit a todo
   - Delete a todo
   - Search todos
   - Mark todos as completed
   - View todo details
5. Every update is saved back into `todos.json`.
6. The UI refreshes automatically to display the latest data.

---

# Screens Included

The application contains:

- Todo List Page
- Add Todo Form
- Search Functionality
- Todo Details Page
- Edit Todo Feature
- Delete Todo Feature
- Complete/Pending Toggle
- Responsive Design

---

# Assignment Requirements Covered

- Multi-page React application
- Todo List page
- Todo Details page using query parameters
- Express.js backend
- CRUD APIs
- File-based data storage
- Git repository
- Project documentation

---

# Future Improvements

- User Authentication
- Database Integration (MongoDB/MySQL)
- Due Dates
- Categories
- Dark Mode
- Drag and Drop Todo Sorting
- Notifications
- Pagination

---

# Author

**Venkatesh**

GitHub Repository:

https://github.com/venkatesh612004-star/ziptrip-todo-app

---

# License

This project was developed solely for the ZipTrip Technical Assessment and learning purposes.
