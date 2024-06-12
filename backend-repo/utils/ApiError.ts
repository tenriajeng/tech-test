import { Response } from "express";

export function apiError(res: Response, statusCode: number, error: Error) {
	return res.status(statusCode).send({ error: error.message });
}
