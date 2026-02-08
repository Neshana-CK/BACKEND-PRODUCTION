🚀 Taskflow Backend (Day 1 & Day 2)

A Node.js + Express + MongoDB backend implementing JWT authentication with centralized error handling using industry best practices.

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT

bcryptjs

dotenv

📁 Project Structure
backend-production/
├── config/
│   └── db.js
├── controllers/
│   └── auth.controller.js
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
├── models/
│   └── user.model.js
├── routes/
│   └── auth.routes.js
├── utils/
│   └── appError.js
├── src/
│   └── app.js
├── .env
├── server.js
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/Taskflow
JWT_SECRET=Taskflow_secret_key

▶️ Installation & Run
npm install
npm start


Server runs at:

http://localhost:5000

📅 Day 1 – Authentication APIs
🔐 Features Implemented

User Registration

User Login

Password hashing using bcrypt

JWT token generation

🧪 Register User

POST /api/auth/register

{
  "name": "Nishana",
  "email": "nishana@gmail.com",
  "password": "123456"
}


✅ Success Response

{
  "status": "success",
  "message": "User registered successfully"
}

🧪 Login User

POST /api/auth/login

{
  "email": "nishana@gmail.com",
  "password": "123456"
}


✅ Success Response

{
  "status": "success",
  "message": "Login successful",
  "token": "JWT_TOKEN"
}

🖼 Day-1 Screenshots
Register – Success
<img width="1638" height="569" alt="Screenshot 2026-02-05 102730" src="https://github.com/user-attachments/assets/9989462a-62a7-4252-a755-7effaba2dab5" />

Login – Success
<img width="1650" height="562" alt="Screenshot 2026-02-05 103609" src="https://github.com/user-attachments/assets/772544c6-bc27-4fdb-a553-7a0ab0936e01" />

📅 Day 2 – Centralized Error Handling
🎯 Objective

Remove try–catch blocks from controllers and handle all errors centrally using a custom error class and global error middleware.

⚠️ Error Handling Implementation

Custom AppError class

Global error middleware

Controllers stay clean

Errors thrown using next(new AppError())

Error middleware placed last

🧪 Day-2 Test Scenarios
1️⃣ Register with Existing Email
{
  "status": "fail",
  "message": "User already exists"
}

2️⃣ Login with Wrong Password
{
  "status": "fail",
  "message": "Invalid email or password"
}

3️⃣ Invalid Route
{
  "status": "fail",
  "message": "Route /api/xyz not found"
}

🖼 Day-2 Screenshots
Existing Email Error
<img width="1920" height="1080" alt="Screenshot 2026-02-08 174920" src="https://github.com/user-attachments/assets/b574b07c-e1f1-40ae-94e5-844f3bec12ea" />

Invalid Password Error
<img width="1920" height="1080" alt="Screenshot 2026-02-08 175748" src="https://github.com/user-attachments/assets/fbd9ec0c-a2f7-4c47-8361-72d722350a5d" />

Invalid Route Error
<img width="1920" height="1080" alt="Screenshot 2026-02-08 180237" src="https://github.com/user-attachments/assets/89178dc6-5e1b-4730-b5ae-995c1f4d7442" />
