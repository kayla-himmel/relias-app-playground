import React, { useState, useEffect } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppNavigator} from './navigation/AppNavigator';
import { firebaseAuth, FirebaseUser, AuthStateChangeHandler } from './config/firebase';

export function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const onAuthStateChanged: AuthStateChangeHandler = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebaseAuth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}
