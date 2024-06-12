"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginService } from "@/apis/authApi";
import { setAuthToken } from "@/utils/getAuthToken";
import { login } from "@/store/authSclice";
import { useDispatch } from "react-redux";
import { redirect, useRouter } from "next/navigation";

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	async function onSubmit(formData: any) {
		setIsLoading(true);
		const response = await loginService(formData);

		if (!response.error) {
			console.log(response);

			setAuthToken(response.user.stsTokenManager.accessToken);
			dispatch(login(response.user));
			router.push("/profile");
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={2}>
				<TextField
					required
					id="outlined-required"
					label="Email"
					type="email"
					defaultValue={"ilham@mail.com"}
					{...register("email", { required: true })}
				/>
				<TextField
					id="outlined-password-input"
					label="Password"
					type="password"
					defaultValue={"ilham123"}
					{...register("password", { required: true })}
				/>
				<Button type="submit" variant="contained" size="large" color="primary" disabled={isSubmitting}>
					{isSubmitting ? "Logging in..." : "Login"}
				</Button>
			</Stack>
		</form>
	);
};

export default LoginForm;
