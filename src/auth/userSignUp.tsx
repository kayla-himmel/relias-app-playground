import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface UserSignUpProps {
  email: string;
  password: string;
}

export const userSignUp = async ({email, password}: UserSignUpProps) => {
  const auth = getAuth();
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error('Error signing up:', error.code, error.message);
    throw error;
  }
}