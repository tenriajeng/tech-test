import express from "express";
import { userRouter } from "../routes/userRoute";
import { authRouter } from "../routes/authRoute";
import cors from "cors";

const app = express();

app.use(
	cors({
		origin: "http://localhost:3001", // Allow requests from this origin
		credentials: true, // Allow credentials (cookies, authorization headers, etc.)
	})
);

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to the root route!");
});

app.use("/", authRouter);
app.use("/", userRouter);

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000/");
});
