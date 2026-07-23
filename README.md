# News Explorer — Backend

REST API backend for the News Explorer application, featuring user authentication, article saving, and secure routes.

## Live API

https://newsexplorerapizanetti.mooo.com

## Tech Stack

- **Backend:** Node.js, Express.js, MVC architecture
- **Database:** MongoDB, Mongoose
- **Auth:** JWT, bcrypt password hashing, auth middleware
- **Code Quality:** ESLint, Prettier

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Save and delete news articles per user
- Protected routes via auth middleware
- Centralized error handling

## Environment Variables

Create a `.env` file in the project root:

PORT=3000
NODE_ENV=production
JWT_SECRET=your_secret_here
MONGO_URI=your_mongodb_connection_string

## Running Locally

```bash
git clone https://github.com/RodrigoMZanetti/news-explorer-backend
cd news-explorer-backend
npm install
npm run start
```

## Related Repository

- Frontend: [news-explorer-frontend](https://github.com/RodrigoMZanetti/news-explorer-frontend)

## Author

Rodrigo Zanetti — [LinkedIn](https://linkedin.com/in/rodrigomaturanozanetti) · [GitHub](https://github.com/RodrigoMZanetti)
