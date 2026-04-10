# Task Manager Application

## Overview

This is a simple full-stack Task Manager application built as part of a technical assignment. The application allows users to create, view, update, and delete tasks.

The focus of this project is on clean structure, working API integration, and core functionality rather than advanced UI design.

---

## Features

### Frontend

* Display list of tasks
* Add a new task
* Mark task as completed
* Delete a task
* Basic loading and error handling

### Backend

* REST API with CRUD operations
* Input validation (task title required)
* JSON responses
* Clean and organized structure

---

## Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Storage: In-memory (no database used)

---

## API Endpoints

GET /tasks → Get all tasks
POST /tasks → Create a new task
PATCH /tasks/:id → Update task status
DELETE /tasks/:id → Delete a task

---

## Project Structure

task-manager/
├── backend/
│   ├── server.js
├── frontend/
│   ├── src/
│   └── public/
└── README.md

---

## How to Run Locally

1. Clone the repository
   git clone [https://github.com/artikolhe3/task-manager.git](https://github.com/artikolhe3/task-manager.git)
   cd task-manager

2. Setup Backend
   cd backend
   npm install
   npm start

Backend runs on: [http://localhost:5000](http://localhost:5000)

3. Setup Frontend
   cd ../frontend
   npm install
   npm start

Frontend runs on: [http://localhost:3000](http://localhost:3000)

---

## Assumptions / Trade-offs

* Used in-memory storage for simplicity
* Focused on functionality over UI design
* No authentication implemented
* No database used

---

## Evaluation Coverage

* Frontend component structure and state handling
* Backend API design and routing
* API integration
* Validation and error handling
* Clean and readable code

---

## Future Improvements

* Add database (MongoDB / MySQL)
* Edit task feature
* Filter tasks
* Add authentication
* Deploy application

---

## Author

Arti Kolhe

---

## ✅ Final step (don’t forget)

Run this in terminal:

git add README.md
git commit -m "Added README"
git push
