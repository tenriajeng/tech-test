import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export const createUser = async (email: string, password: string) => {
	const auth = getAuth();
	const userRecord = await createUserWithEmailAndPassword(auth, email, password);

	const db = getFirestore();

	const userData = {
		email: userRecord.user.email,
		createdAt: new Date(),
		uid: userRecord.user.uid,
	};

	await setDoc(doc(db, "users", userRecord.user.uid), userData);

	return userRecord;
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
	try {
		const auth = getAuth();
		const userRecord = signInWithEmailAndPassword(auth, email, password);

		return userRecord;
	} catch (error) {
		throw error;
	}
};
