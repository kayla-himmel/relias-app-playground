import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {CourseListScreen} from '../screens/CourseListScreen/CourseListScreen';
import {CourseScreen} from '../screens/CourseScreen/CourseScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import { CreateAccountScreen } from '../screens/CreateAccountScreen/CreateAccountScreen';

export type RootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
  Home: undefined;
  CourseList: undefined;
  CourseDetails: {courseId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseList" component={CourseListScreen} />
        <Stack.Screen name="CourseDetails" component={CourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
