
This repository contains code examples and projects to learn Node.js. It covers various concepts, modules, and frameworks related to Node.js development.

## Project Description

The Learn Node.js repository is a collection of practical examples and projects that demonstrate different aspects of Node.js development. It aims to provide hands-on experience and guide you through the process of building Node.js applications.

## Libraries and Dependencies

The projects in this repository utilize the following libraries and dependencies:

- Node.js: A JavaScript runtime environment that allows you to run JavaScript code on the server-side.
- Express.js: A fast and minimalist web framework for Node.js that simplifies the process of building web applications and APIs.
- MongoDB: A NoSQL database that provides a flexible and scalable solution for storing and retrieving data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a higher-level abstraction for interacting with the database.
- bcrypt: A library for hashing and comparing passwords securely.
- jsonwebtoken (JWT): A library for generating and verifying JSON Web Tokens, which are used for authentication and authorization.
- dotenv: A module for loading environment variables from a `.env` file into the application's process environment.
- express-async-handler: A utility function for handling asynchronous errors in Express middleware and route handlers.

## Schema Relations

The projects in this repository use MongoDB with Mongoose as the ODM. The schema relations are as follows:

- User Schema: Represents user data and has a one-to-many relationship with the Contact schema.

- Contact Schema: Represents contact data and has a many-to-one relationship with the User schema.

## Schema Fields

### User Schema

- `username` (String): The username of the user.
- `email` (String): The email address of the user.
- `password` (String): The hashed password of the user.
- `createdAt` (Date): The timestamp indicating when the user was created.

### Contact Schema

- `name` (String): The name of the contact.
- `email` (String): The email address of the contact.
- `phone` (String): The phone number of the contact.
- `user` (ObjectId): The reference to the User schema, indicating the user who owns the contact.
- `createdAt` (Date): The timestamp indicating when the contact was created.

Please refer to the individual schema files in the `models` directory for more details on each schema, including additional fields, validation rules, and methods.

## Routes

The repository includes the following routes:

### User Routes

- `POST /api/user/register`: Allows users to register by providing a username, email, and password. Returns the user's ID and email.
- `POST /api/user/login`: Handles user authentication by validating the email and password. Returns a JSON Web Token (JWT) for authentication.

### Contact Routes

- `GET /api/contacts`: Retrieves all contacts. Returns an array of contact objects.
- `GET /api/contacts/:id`: Retrieves a specific contact by ID. Returns a single contact object.
- `POST /api/contacts`: Creates a new contact by providing the necessary details. Returns the newly created contact object.
- `PUT /api/contacts/:id`: Updates an existing contact by ID. Returns the updated contact object.
- `DELETE /api/contacts/:id`: Deletes a contact by ID. Returns a success message.
