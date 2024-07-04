# Task Manager

A Task Manager application for basic tasks management.


## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [npm scripts](#npm-scripts)

## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features

- Token based Authentication
- Use of 404 page for wrong urls
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies


- Node.js
- Express.js
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon
- concurrently

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application

   ```sh
   npm run dev
   ```

4. Go to http://localhost:5000

## Backend API

<pre>
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile
</pre>



## npm scripts

At root:

- `npm run dev`: Starts backend
- `npm run dev-server`: Starts backend
- `npm run dev-client`: Starts only frontend
- `npm run install`: Installs all dependencies and dev-dependencies required at backend.


Inside backend folder:

- `npm run dev`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

