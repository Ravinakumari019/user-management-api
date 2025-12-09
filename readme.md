# User Management API
🎉 This is a simple RESTful API built with 
**Node.js**, **Express**, and **PostgreSQL**.  
It lets you manage users — create, read, update, and delete — all with proper validation and error handling.

---

## 🚀 Features
- Add new users with a name and email
- Fetch all users or a specific user by ID
- Update user details
- Delete users
- Input validation with **Joi**
- Clean JSON responses
- Easy setup with PostgreSQL in Docker

---

## 🛠 Tech Stack
- Node.js & Express.js  
- PostgreSQL (Docker-friendly)  
- pg (PostgreSQL client)  
- Joi for validating user input  
- dotenv for environment variables  
- CORS for handling cross-origin requests

---

## 🐳 Setting up PostgreSQL with Docker

You don’t need to install PostgreSQL locally. Just run:

```bash
docker run --name my-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=express-crud \
  -p 5432:5432 \
  -d postgres
