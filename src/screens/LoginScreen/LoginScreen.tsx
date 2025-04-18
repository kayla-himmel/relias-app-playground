import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../../theme/colors';
import { ActivityIndicator } from '../../components/ActivityIndicator/ActivityIndicator';
import { Error } from '../../components/Error/Error';
import { styles } from './LoginScreen.styles';
import { existingUserSignIn } from '../../auth/existingUserSignIn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    existingUserSignIn({email, password});
    setIsLoading(true);
    setError(null);
  };

  const handleCreateAccountLink = async () => {
    navigation.navigate('CreateAccount');
  };

  // const getErrorMessage = (code: string): string => {
  //   switch (code) {
  //     case 'auth/invalid-email':
  //       return 'Invalid email address';
  //     case 'auth/user-disabled':
  //       return 'This account has been disabled';
  //     case 'auth/user-not-found':
  //       return 'No account found with this email';
  //     case 'auth/wrong-password':
  //       return 'Incorrect password';
  //     default:
  //       return 'An error occurred. Please try again.';
  //   }
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
            placeholderTextColor={colors.base.grayMedium}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
            placeholderTextColor={colors.base.grayMedium}
          />

          {error && <Error message={error} testID="login-error" />}

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCreateAccountLink}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
