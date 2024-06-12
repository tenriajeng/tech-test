import { login, logout, updateUser } from "./authSclice";
import { getAuthToken } from "@/utils/getAuthToken";
import { baseAPI } from "@/apis/baseApi";
import { useDispatch } from "react-redux";

export const fetchUserData = () => async () => {
	const dispatch = useDispatch();

	try {
		const token = await getAuthToken();

		if (token) {
			const headers: { [key: string]: string } = {};

			headers.Authorization = `Bearer ${token}`;

			const response = await baseAPI("/user-profile", {
				method: "POST",
				headers,
			});
			console.log(response);

			if (!response.error) {
				dispatch(login(response));
			} else {
				dispatch(logout());
			}
		}
	} catch (error) {
		console.error("Error fetching user data", error);
	}
};
