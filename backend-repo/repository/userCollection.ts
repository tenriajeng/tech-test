import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { User } from "../entities/User";
import { getAuth, updateProfile } from "firebase/auth";

export const getUsers = async () => {
	try {
		const users = await getDocs(collection(db, "users"));
		const userArray: User[] = [];

		if (users.empty) {
			return "No users found";
		} else {
			users.forEach((doc) => {
				const user = { id: doc.id, name: doc.data().name, email: doc.data().email } as User;
				userArray.push(user);
			});

			return userArray;
		}
	} catch (error) {
		if (error instanceof Error) {
			return error.message;
		}
		return "An unknown error occurred";
	}
};

export const getUser = async () => {
	try {
		const auth = getAuth();
		const user = auth.currentUser;
		if (user !== null) {
			return user;
		}
	} catch (error) {
		if (error instanceof Error) {
			return error.message;
		}
		return "An unknown error occurred";
	}
};

export const updateUser = async (displayName: string) => {
	try {
		const auth = getAuth();
		const currentUser = auth.currentUser;

		if (!currentUser) {
			throw new Error("No user is currently signed in.");
		}

		await updateProfile(auth.currentUser, {
			displayName: displayName,
		});

		const newAuth = getAuth();
		const user = newAuth.currentUser;
		return user;
	} catch (error) {
		throw error;
	}
};
