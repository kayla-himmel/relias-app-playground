import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface UserSignUpProps {
  email: string;
  password: string;
}

export const userSignUp = async ({email, password}: UserSignUpProps) => {

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.warn('User signed up:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing up:', errorCode, errorMessage);
  });
}