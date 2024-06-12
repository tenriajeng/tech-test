"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { updateProfileService } from "@/apis/authApi";
import { setAuthToken } from "@/utils/getAuthToken";
import { login } from "@/store/authSclice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProfileForm = () => {
	const user: any = useSelector((state) => state);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	async function onSubmit(formData: any) {
		setIsLoading(true);
		const response = await updateProfileService(formData);
		console.log(response);

		if (!response.error) {
			console.log(response);

			dispatch(login(response.user));
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={2}>
				<TextField
					id="outlined-required"
					label="Email"
					type="email"
					disabled
					defaultValue={user.auth.user && user.auth.user.email}
				/>
				<TextField
					id="outlined-password-input"
					label="name"
					type="text"
					defaultValue={user.auth.user && user.auth.user.displayName}
					{...register("name", { required: true })}
				/>
				<Button type="submit" variant="contained" size="large" color="primary" disabled={isSubmitting}>
					{isSubmitting ? "Update..." : "Update"}
				</Button>
			</Stack>
		</form>
	);
};

export default ProfileForm;
