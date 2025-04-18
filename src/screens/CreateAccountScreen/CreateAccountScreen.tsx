import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ActivityIndicator } from '../../components/ActivityIndicator/ActivityIndicator';
import { Error } from '../../components/Error/Error';
import { Alert } from '../../components/Alert/Alert';
import { styles } from './CreateAccountScreen.styles';
import { userSignUp } from '../../auth/userSignUp';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type CreateAccountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateAccount'
>;

export const CreateAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigation = useNavigation<CreateAccountScreenNavigationProp>();

  const handleAccountSetup = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,256}$/;
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be 12-256 characters and include at least 1 letter, 1 number, and 1 special character'
      );
      return;
    }

    // Validate all fields are present
    if (!email || !password || !confirmPassword) {
      setError('Please enter both email and password');
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      await userSignUp({email, password});
      setSuccessMessage('Account created successfully');
    } catch (err) {
      console.error('Signup error:', err);
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Create an Account</Text>
        {error && <Error message={error} />}
        {successMessage && (
          <Alert 
            message={successMessage} 
            type="success" 
            onClose={() => navigation.navigate('Login')}
          />
        )}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              testID="email-input"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password} 
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              testID="password-input"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              autoCapitalize="none"
              value={confirmPassword} 
              testID="confirm-password-input"
              onChangeText={(confirmPassword) => {
                if (confirmPassword !== password) {
                  setError('Passwords do not match');
                } else {
                  setError(null);
                }
                setConfirmPassword(confirmPassword);
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleAccountSetup}
              disabled={isLoading}
              testID="create-account-button"
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};