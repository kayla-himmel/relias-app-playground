import auth from '@react-native-firebase/auth';

// Firebase User type
export type FirebaseUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
};

// Firebase Auth Error type
export type FirebaseAuthError = {
  code: string;
  message: string;
};

// Auth state change handler type
export type AuthStateChangeHandler = (user: FirebaseUser | null) => void;

// Export auth instance
export const firebaseAuth = auth(); 