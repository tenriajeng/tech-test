"use client";

import React from "react";
import Box from "@mui/material/Box";

import LoginForm from "@/components/LoginForm";

const Login = () => {
	return (
		<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
			<Box
				sx={{
					width: {
						xs: "100%",
						sm: "75%",
						md: "50%",
						lg: "25%",
					},
				}}
			>
				<LoginForm />
			</Box>
		</Box>
	);
};

export default Login;
