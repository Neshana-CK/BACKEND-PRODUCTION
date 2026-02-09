🚀 Taskflow Backend (Day 1 – Day 4)

Node.js + Express + MongoDB backend with JWT authentication, centralized error handling, validation, and task APIs with pagination, filtering & search.

🛠 Tech Stack

Node.js • Express • MongoDB • Mongoose • JWT • bcryptjs • dotenv • Thunder Client

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


### 🧪 API Examples

GET /api/tasks?page=1&limit=10  
GET /api/tasks?status=completed  
GET /api/tasks?search=login  

---

### 🖼 Day 4 Screenshots

**Pagination (page & limit)**

<img width="1920" height="1080" alt="Screenshot 2026-02-09 193338" src="https://github.com/user-attachments/assets/555a21bd-d87f-4668-9fe0-939b0d20f42b" />

**Filter by Status**

<img width="1920" height="1080" alt="Screenshot 2026-02-09 193437" src="https://github.com/user-attachments/assets/e5cd9c8b-8ac6-400d-b0b9-fba7865e9ec7" />

**Search Tasks**

<img width="1920" height="1080" alt="Screenshot 2026-02-09 193514" src="https://github.com/user-attachments/assets/2f2066a2-a1c2-41ab-896e-dcfe0b32ba46" />

Create Task 

<img width="1652" height="652" alt="Screenshot 2026-02-09 200416" src="https://github.com/user-attachments/assets/aba4ff86-fb25-4051-b940-0e84b780375a" />

Get Tasks 

<img width="1647" height="666" alt="Screenshot 2026-02-09 200557" src="https://github.com/user-attachments/assets/ec286076-5803-414e-b936-6d2889a826ec" />

🏁 Project Status

✅ Authentication
✅ Error Handling
✅ Validation
✅ Pagination & Search


