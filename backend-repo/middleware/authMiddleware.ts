import { Request, Response, NextFunction } from "express";
import { admin } from "../config/firebaseConfig";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const authorizationHeader = req.headers.authorization;
	if (!authorizationHeader) {
		return res.status(401).json({ error: "Unauthorized: Missing token" });
	}

	const idToken = authorizationHeader.split("Bearer ")[1];
	if (!idToken) {
		return res.status(401).json({ error: "Unauthorized: Invalid token format" });
	}

	try {
		const result = await admin.auth().verifyIdToken(idToken);
	} catch (error) {
		return res.status(403).json({ error: "Unauthorized: Invalid token" });
	}

	next();
};
