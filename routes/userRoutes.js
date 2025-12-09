import express from "express";
import  validateUser from "../middlewares/inputValidator.js";
const userRoutes = express.Router();
import { createUser, getAllUsers, getUserById, updateUser, deleteUserById } from "../controllers/userController.js"; 
// Define user routes

userRoutes.post("/users",validateUser ,createUser);
userRoutes.get("/users", getAllUsers);
userRoutes.get("/user/:id", getUserById);
userRoutes.put("/user/:id", validateUser, updateUser);
userRoutes.delete("/user/:id", deleteUserById);


export default userRoutes;