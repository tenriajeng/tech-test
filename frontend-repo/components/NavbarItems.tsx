"use client";

import { Button } from "@mui/material";
import React, { useEffect } from "react";
import UserDropdown from "./UserDropdown";
import { useSelector } from "react-redux";
import { profileService } from "@/apis/authApi";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSclice";
import { useRouter } from "next/navigation";

const NavbarItems = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const user: any = useSelector((state) => state);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await profileService();
				if (!response.error) {
					console.log(response);

					dispatch(login(response));
				} else {
					router.push("/login");
				}
			} catch (error) {
				router.push("/login");
			}
		};

		fetchProfile();
	}, [dispatch, router]);

	return <>{!user.auth.isAuthenticated ? <Button color="inherit">Login</Button> : <UserDropdown user={user} />}</>;
};

export default NavbarItems;
