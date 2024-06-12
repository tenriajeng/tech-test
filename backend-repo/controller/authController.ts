import { Request, Response } from "express";
import { createUser, loginWithEmailAndPassword } from "../repository/authCollection";
import { apiError } from "../utils/ApiError";

export const signup = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const uid = await createUser(email, password);
		res.status(201).send({ uid });
	} catch (error) {
		return apiError(res, 400, error as Error);
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const userRecord = await loginWithEmailAndPassword(email, password);
		res.status(200).send(userRecord);
	} catch (error) {
		return apiError(res, 400, error as Error);
	}
};
