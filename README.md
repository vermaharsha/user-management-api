
# User Management API

## Project Summary
A backend service built with Node.js, Express, and MongoDB (using Mongoose). The service provides a robust RESTful API for managing users and products while ensuring secure authentication and role-based access control. A simple dashboard is also included to help manage data visually.

## Features
- **User & Product Management:**  
  - Full CRUD operations for users and products.
- **Secure Authentication:**  
  - Uses JSON Web Tokens (JWT) for authentication.
  - Passwords are securely hashed with bcrypt.
- **Role-Based Access Control:**  
  - Enforces different access levels (Admin, Seller, Customer) for various endpoints.
- **Clean and Modular Architecture:**  
  - Easy to extend and maintain.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** Ejs 
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt.js
- **Utilities:** dotenv, nodemon, morgan, cors

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/BlueMedix.git
   cd BlueMedix
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory with the following:
   ```dotenv
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/bluemedix
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   The server should now run on `http://localhost:3000` and connect to your MongoDB instance.

## API Endpoints

### Authentication
- **Register User:**  
  - **Method:** POST  
  - **URL:** `/api/auth/register`  
  - **Description:** Creates a new user.
  
- **Login User:**  
  - **Method:** POST  
  - **URL:** `/api/auth/login`  
  - **Description:** Authenticates a user and returns a JWT token.

### User Management (Admin & Authenticated Users)
- **Get All Users:**  
  - **Method:** GET  
  - **URL:** `/api/users`  
  - **Description:** Retrieves a list of all users (admin-only).
  
- **Get Single User:**  
  - **Method:** GET  
  - **URL:** `/api/users/:id`  
  - **Description:** Retrieves details of a specific user.
  
- **Update User:**  
  - **Method:** PUT  
  - **URL:** `/api/users/:id`  
  - **Description:** Updates user information.
  
- **Delete User:**  
  - **Method:** DELETE  
  - **URL:** `/api/users/:id`  
  - **Description:** Deletes a user (admin-only).

### Product Management
- **Get All Products:**  
  - **Method:** GET  
  - **URL:** `/api/products`  
  - **Description:** Retrieves all products.
  
- **Create Product:**  
  - **Method:** POST  
  - **URL:** `/api/products`  
  - **Description:** Creates a new product (accessible to sellers/admins).
  
- **Update Product:**  
  - **Method:** PUT  
  - **URL:** `/api/products/:id`  
  - **Description:** Updates product details.
  
- **Delete Product:**  
  - **Method:** DELETE  
  - **URL:** `/api/products/:id`  
  - **Description:** Deletes a product.

> **Note:** For protected routes, include the following header:
> ```
> Authorization: Bearer <your_jwt_token>
> ```

## Visual Overview

### User Register
![Register](https://github.com/user-attachments/assets/c56da892-76e3-4129-a503-6d7852bd2f5f)

### User Login
![Login](https://github.com/user-attachments/assets/838813fb-40fa-47cb-845f-2a4bf1def16f)

### MongoDB 
![Screenshot 2025-03-05 184019](https://github.com/user-attachments/assets/0755225d-509f-49d4-90bd-de563a6b3d02)


## Future Enhancements
- **Implement Caching:** Add Redis for caching frequent queries.
- **Automated Testing:** Integrate unit and integration tests.
- **Enhanced Error Handling:** Improve logging and error responses.

---

