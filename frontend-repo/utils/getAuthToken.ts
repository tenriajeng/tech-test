"use server";

import { cookies } from "next/headers";

export async function getAuthToken() {
	const cookiesList = cookies();
	const hasCookie = cookiesList.has("authToken");

	try {
		if (hasCookie) {
			const token = cookies().get("authToken");
			if (token) {
				return token.value;
			}
		} else {
			return false;
		}
	} catch (error) {
		console.log("hasCookie", hasCookie);
		console.error("Error while getting the authentication token:", error);
		return false;
	}
}

export async function setAuthToken(token: string) {
	try {
		const tokenToStore = typeof token === "object" ? JSON.stringify(token) : token;

		cookies().set("authToken", tokenToStore, {
			path: "/",
			httpOnly: true,
			secure: true, // Set to true if your application uses HTTPS
		});
	} catch (error) {
		console.error("Error while setting the authentication token:", error);
	}
}

export async function removeAuthToken() {
	try {
		cookies().delete({
			name: "authToken",
			path: "/",
			httpOnly: true,
			secure: true, // Set to true if your application uses HTTPS
		});
	} catch (error) {
		console.error("Error while removing the authentication token:", error);
	}
}
