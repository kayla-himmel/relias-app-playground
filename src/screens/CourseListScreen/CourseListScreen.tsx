import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {CourseCard} from '../../components/CourseCard/CourseCard';
import {courseDetails} from '../../content/CourseDetails.content';
import {styles} from './CourseListScreen.styles';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {ScrollView, View} from 'react-native';

type CourseListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CourseList'
>;

export const CourseListScreen = () => {
  const navigation = useNavigation<CourseListScreenNavigationProp>();

  const onCoursePress = (courseId: string) => {
    navigation.navigate('CourseDetails', {courseId});
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {courseDetails.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            onPress={() => onCoursePress(course.id)}
          />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
};
