import { Request, Response } from "express";
import { getUser, getUsers, updateUser } from "../repository/userCollection";

export const fetch = async (req: Request, res: Response) => {
	try {
		const data = await getUsers();
		res.status(200).send(data);
	} catch (error) {
		res.status(500).send({ message: "Error retrieving data" });
	}
};

export const update = async (req: Request, res: Response) => {
	try {
		const userData = req.body;
		console.log(userData);

		const result = await updateUser(userData.name);

		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const profile = async (req: Request, res: Response) => {
	try {
		const result = await getUser();

		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};
