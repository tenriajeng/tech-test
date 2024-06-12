import express from "express";
import { login, signup } from "../controller/authController";

export const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
