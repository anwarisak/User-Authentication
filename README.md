User Authentication API (Node.js + Express + MongoDB)

A simple and secure user authentication system built with Node.js, Express, MongoDB, JWT, and Cookie-based sessions.
This project includes user login, protected routes, JWT token handling, password hashing, and middleware validation.

🚀 Features

User login with JWT

Secure password hashing (bcrypt)

Cookie-based authentication (httpOnly cookies)

Protected profile route

Clean folder structure

Environment-based configurations

MongoDB connection with Mongoose

🔧 Installation & Setup
1. Clone the project
git clone <repo-url>
cd userAuth

2. Install dependencies
npm install

3. Create a .env file
PORT=8000
MONGODB_URL=your_mongo_connection
JWT_SECRET=your_secret_key

4. Start the server
npm run dev

🔐 Authentication Flow
Login

User enters username + password

Server verifies credentials

If valid → server generates JWT token

Token is stored in an httpOnly cookie

Accessing Protected Routes

Middleware (checkLogin.js) checks cookie

Verifies JWT

Allows or blocks access

🧩 API Endpoints
POST /api/user/login

Login with username & password

Body:

{
  "username": "example",
  "password": "123456"
}


Response:

{
  "success": true,
  "token": "jwt-token",
  "user": { ... }
}

GET /api/user/profile

Protected route → requires login.

Response:

{
  "message": "Profile access granted",
  "userId": "64abc1234..."
}

🛡️ Middleware: checkLogin

Validates JWT token from cookies.

const token = req.cookies?.token;


If token is missing or invalid → response:

"Please login first"

🧪 Testing

You can use Postman, Insomnia, or Thunder Client to test the API.

Make sure cookies are enabled.

📌 Technologies Used

Node.js

Express.js

MongoDB + Mongoose

JSON Web Tokens (JWT)

bcrypt.js

cookie-parser

📄 License

This project is open-source and free to use.
