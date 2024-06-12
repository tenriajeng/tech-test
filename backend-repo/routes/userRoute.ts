import express from "express";
import { update, fetch, profile } from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";

export const userRouter = express.Router();

userRouter.use(authMiddleware);
userRouter.get("/fetch-user-data", fetch);
userRouter.put("/update-user-data", update);
userRouter.post("/user-profile", profile);
