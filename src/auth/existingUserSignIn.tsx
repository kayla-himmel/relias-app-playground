import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface ExistingUserSignInProps {
  email: string;
  password: string;
}

export const existingUserSignIn = async ({email, password}: ExistingUserSignInProps) => {

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.warn('User signed in:', user);
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing in:', errorCode, errorMessage);
  });
}