# Taskflow Backend

A Node.js + Express + MongoDB backend with JWT authentication for user registration and login.

---

## 🚀 Features
- User Registration & Login
- Password hashing (bcryptjs)
- JWT Authentication
- Protected routes
- MongoDB with Mongoose
- Environment variables

---

## 🛠 Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

---

## 📁 Project Structure

backend-production/
├── config/
│ └── db.js
├── controllers/
│ └── auth.controller.js
├── middleware/
│ └── auth.middleware.js
├── models/
│ └── user.model.js
├── routes/
│ └── auth.routes.js
├── src/
│ └── app.js
├── screenshots/
│ └── server-running.png
├── .env
├── server.js
├── package.json
└── package-lock.json

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/Taskflow
JWT_SECRET=Taskflow_secret_key


---

## 📦 Installation & Run

npm install
npm start


Server runs at:
http://localhost:5000


---

## 🔐 Authentication APIs

### Register
**POST** `/api/auth/register`

{
"name": "Nishana",
"email": "nishana@gmail.com",
"password": "123456"
}


### Login
**POST** `/api/auth/login`

{
"email": "nishana@gmail.com",
"password": "123456"
}


---

## 🔒 Protected Routes

Authorization: Bearer <JWT_TOKEN>


---

## 🧪 Testing
- Postman
- Thunder Client
- Insomnia

---
## 🖼 Screenshot

Register api success
<img width="1638" height="569" alt="Screenshot 2026-02-05 102730" src="https://github.com/user-attachments/assets/2ba2f1d3-e818-47b8-bc5b-cf8a6d5c37e3" />

Login api success
<img width="1650" height="562" alt="Screenshot 2026-02-05 103609" src="https://github.com/user-attachments/assets/336ffee3-0673-4794-9ad1-b66361fb068a" />


