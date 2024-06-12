"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";

interface UserDropdownProps {
	user: any;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				color="inherit"
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				{user.auth.user && user.auth.user.email}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default UserDropdown;
