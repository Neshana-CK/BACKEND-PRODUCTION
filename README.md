🚀 Taskflow Backend (Day 1 – Day 6)

Node.js + Express + MongoDB backend with JWT authentication, centralized error handling, validation, task APIs with pagination, filtering, search, and production logging.

🛠 Tech Stack

Node.js • Express • MongoDB • Mongoose • JWT • bcryptjs • dotenv • Winston • Morgan • Thunder Client

📁 Project Structure
backend-production/
├── config/db.js
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
├── middleware/
│   ├── auth.middleware.js
│   ├── validation.middleware.js
│   └── error.middleware.js
├── models/
│   ├── user.model.js
│   └── task.model.js
├── routes/
│   ├── auth.routes.js
│   └── task.js
├── utils/appError.js
├── src/app.js
├── server.js
├── logger.js
└── README.md

⚙️ Environment Variables
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/Taskflow
JWT_SECRET=Taskflow_secret_key

▶️ Run Project
npm install
npm start


Server: http://localhost:5000

📅 DAY 1 – Authentication 🔐

APIs

POST /api/auth/register

POST /api/auth/login

Screenshots

Register Success
<img width="1638" height="569" alt="Screenshot 2026-02-05 102730" src="https://github.com/user-attachments/assets/9989462a-62a7-4252-a755-7effaba2dab5" />

Login Success
<img width="1650" height="562" alt="Screenshot 2026-02-05 103609" src="https://github.com/user-attachments/assets/772544c6-bc27-4fdb-a553-7a0ab0936e01" />

📅 DAY 2 – Centralized Error Handling ⚠️

Features

Custom AppError

Global error middleware

Clean controllers

Screenshots

Existing User Error
<img width="1660" height="655" alt="Screenshot 2026-02-08 174920" src="https://github.com/user-attachments/assets/cc44cfd7-c29e-410d-8e11-43eb5ecd7861" />

Invalid Password
<img width="1644" height="666" alt="Screenshot 2026-02-08 175748" src="https://github.com/user-attachments/assets/71e04988-eb66-440a-a17f-7eb446d7b905" />

Invalid Route
<img width="1658" height="657" alt="Screenshot 2026-02-08 180237" src="https://github.com/user-attachments/assets/7af8aac5-f1ca-4021-9a48-f79807aa217a" />

📅 DAY 3 – Validation 🛡

Validation Rules

Required fields

Valid email format

Password ≥ 6 characters

Screenshots

Missing Fields
<img width="1641" height="646" alt="Screenshot 2026-02-08 201933" src="https://github.com/user-attachments/assets/aba5c51e-6cc0-4dfd-93a4-515a841aa0f8" />

Invalid Email
<img width="1641" height="652" alt="Screenshot 2026-02-08 202130" src="https://github.com/user-attachments/assets/af418ada-4f41-43ee-8f2d-39905c3eb0e9" />

Short Password
<img width="1647" height="660" alt="Screenshot 2026-02-08 202204" src="https://github.com/user-attachments/assets/6f7f3a8c-cf8a-4dda-a493-fccb923b7962" />

Login Validation
<img width="1641" height="663" alt="Screenshot 2026-02-08 202304" src="https://github.com/user-attachments/assets/4301b2b7-ca56-4c3f-95ee-f416b39b9e8c" />


📅 DAY 4 – Pagination, Filtering & Search 📊

Task APIs

POST /api/tasks

GET /api/tasks

Features

JWT protected routes

User-specific tasks

Pagination (page, limit)

Filter by status

Search by title / description

API Examples

GET /api/tasks?page=1&limit=10

GET /api/tasks?status=completed

GET /api/tasks?search=login

Screenshots

Pagination (page & limit)
<img width="1666" height="671" alt="Screenshot 2026-02-09 193338" src="https://github.com/user-attachments/assets/65eac115-977f-4d5e-9cd2-984a362153ec" />

Filter by Status
<img width="1658" height="666" alt="Screenshot 2026-02-09 193437" src="https://github.com/user-attachments/assets/1250f6d1-6b6b-45bc-a99e-4e9f4891ff95" />

Search Tasks
<img width="1638" height="663" alt="Screenshot 2026-02-09 193514" src="https://github.com/user-attachments/assets/36e19198-e55a-4023-8eed-e76459749ff7" />

Create Task
<img width="1652" height="652" alt="Screenshot 2026-02-09 200416" src="https://github.com/user-attachments/assets/aba4ff86-fb25-4051-b940-0e84b780375a" />

Get Tasks
<img width="1647" height="666" alt="Screenshot 2026-02-09 200557" src="https://github.com/user-attachments/assets/ec286076-5803-414e-b936-6d2889a826ec" />

📅 DAY 5 – Logging & Production Debugging 📝

Objective: Debug without console.log by using proper logging tools.

Features Implemented

Winston configured for logging:

combined.log → logs all requests

error.log → logs all errors

Morgan integrated for request logging

Error middleware logs all errors automatically

Test routes added for logging:

GET /api/hello → test normal request

POST /api/users → test POST request

GET /api/error → trigger error logs

How to Test

Start server:

npm start


Thunder Client / Postman tests:

Route	Method	Purpose
/api/hello	GET	Test normal request (logs to combined.log)
/api/users	POST	Test POST request (logs to combined.log)
/api/error	GET	Trigger error logging (logs to error.log)

Check log files in logs/ folder:

combined.log → all requests

error.log → errors only

Screenshots

GET /api/hello

<img width="1657" height="652" alt="Screenshot 2026-02-09 222026" src="https://github.com/user-attachments/assets/70297cc1-fb8c-4bb7-88cd-4d9d679db465" />

POST /api/users

<img width="1647" height="657" alt="Screenshot 2026-02-09 222156" src="https://github.com/user-attachments/assets/28f7ee31-4db4-4da6-96fa-a0668eea6aa0" />

GET /api/error

<img width="1644" height="666" alt="Screenshot 2026-02-09 222048" src="https://github.com/user-attachments/assets/128ba827-104e-4cc6-95e2-600ad2611ac9" />

📅 DAY 6 – Security Hardening 🛡️🚦

🎯 Objective: Protect APIs from common security attacks.

Features Implemented

Helmet added for secure HTTP headers

Rate limiting added on authentication routes (login/register)

JWT middleware fully tested for protected task routes

🔐 Helmet (Security Headers)

Helmet secures Express apps by setting HTTP response headers.

Headers added automatically:

X-Content-Type-Options: nosniff

X-Frame-Options: SAMEORIGIN

X-DNS-Prefetch-Control: off

Content-Security-Policy

Strict-Transport-Security

🚦 Rate Limiting

Rate limiting prevents brute-force login attempts.

Limit configuration:

Maximum 5 login attempts

Per 15 minutes

Returns 429 Too Many Requests after limit exceeded

Expected response after limit:

{
  "message": "Too many login attempts, please try again later"
}

🔒 Protected Routes Testing

Without Token:

GET /api/tasks

Expected:

{
  "message": "No token provided"
}


With Valid Token:

Authorization: Bearer <your_token>

Expected:

Status: 200 OK
Task data returned successfully.

🧪 Testing Steps

Start server

npm start


Check Helmet headers in Postman → Response Headers

Hit login API multiple times → Should return 429

Access /api/tasks without token → 401 Unauthorized

Access /api/tasks with token → 200 OK

📷 Screenshots

Helmet Headers Visible

<img width="1644" height="702" alt="Screenshot 2026-02-15 130922" src="https://github.com/user-attachments/assets/96ffeb75-5ea6-41a5-8087-d7f242adba9c" />

Rate Limit (429 Too Many Requests)
<img width="1635" height="666" alt="Screenshot 2026-02-15 145548" src="https://github.com/user-attachments/assets/338be3c8-8491-4eb2-a5c5-5ad528bcfe35" />


Protected Route Without Token

<img width="1652" height="652" alt="Screenshot 2026-02-15 131317" src="https://github.com/user-attachments/assets/ccebe01c-56d2-4de9-ba94-0836c388373f" />

Protected Route With Token

<img width="1635" height="663" alt="Screenshot 2026-02-15 131734" src="https://github.com/user-attachments/assets/b6a2f8e8-b600-4b97-bbef-e6f866e547cb" />

























