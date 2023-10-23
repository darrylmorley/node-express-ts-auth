# Node.js Express TypeScript Authentication Starter

This is a starter template for building a Node.js, Express.js, TypeScript web application with user authentication. It uses Mongoose as the database for user management and provides a foundation for building secure and scalable web applications.

## Features

- Node.js and Express.js for the backend server.
- TypeScript for type safety and improved development experience.
- Mongoose for MongoDB integration and user data storage.
- Authentication system with user registration, login, and JWT-based authentication.
- Secure password hashing using bcrypt.
- CORS support for cross-origin requests.
- Compression middleware for optimizing response size.
- Cookie parsing for session management.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- MongoDB instance (local or remote) and connection string.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/darrylmorley/node-express-ts-auth.git
```

2. Install the project dependencies:

```bash
cd node-express-ts-auth
npm install
```

3. Create a .env file in the project root directory and set the following environment variables:

```bash
PORT=8080
MONGO_DB_STRING=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Customise and Create!

---

## API Endpoints

- /api/register - User registration endpoint.
- /api/login - User login endpoint.
- /api/logout - User logout endpoint.
- /api/user - Get the current user's profile (requires authentication).

---

## Acknowledgments

- [Express.js](https://expressjs.com/): Web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Password hashing library.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): JSON Web Token (JWT) library.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this starter template.
