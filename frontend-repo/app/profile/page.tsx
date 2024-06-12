import LoginForm from "@/components/LoginForm";
import ProfileForm from "@/components/ProfileForm";
import { Box } from "@mui/material";
import React from "react";

const Profile = () => {
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
				<ProfileForm />
			</Box>
		</Box>
	);
};

export default Profile;
