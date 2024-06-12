import { getAuthToken } from "@/utils/getAuthToken";
import { baseAPI } from "./baseApi";

async function loginService(formData: any) {
	try {
		const data = await baseAPI("login", {
			cache: "no-store",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		return data;
	} catch (error) {
		console.log(error);
	}
}

async function registerService(formData: any) {
	try {
		const data = await baseAPI("signup", {
			cache: "no-store",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		return data;
	} catch (error) {
		console.log(error);
	}
}

async function profileService() {
	try {
		const token = await getAuthToken();

		const data = await baseAPI("user-profile", {
			cache: "no-store",
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
}

async function updateProfileService(formData: any) {
	try {
		const token = await getAuthToken();

		const data = await baseAPI("update-user-data", {
			cache: "no-store",
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		return data;
	} catch (error) {
		console.log(error);
	}
}

export { registerService, loginService, profileService, updateProfileService };
