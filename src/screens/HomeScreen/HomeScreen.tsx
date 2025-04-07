import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {styles} from './HomeScreen.styles';
import {RootStackParamList} from '../../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleExploreCourses = () => {
    navigation.navigate('CourseList');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Welcome to Nurse.com</Text>
          <Text style={styles.subtitle}>
            Your journey to excellence in nursing education starts here
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleExploreCourses}>
            <Text style={styles.buttonText}>Explore Courses</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};
