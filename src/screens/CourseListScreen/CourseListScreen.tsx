import React, {useState, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {CourseCard} from '../../components/CourseCard/CourseCard';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {courseDetails} from '../../content/CourseDetails.content';
import {filterCoursesByTitle} from '../../utils/search';
import {styles} from './CourseListScreen.styles';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {ScrollView, View} from 'react-native';
import {TEST_IDS} from '../../constants/testIds';

type CourseListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CourseList'
>;

export const CourseListScreen = () => {
  const navigation = useNavigation<CourseListScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => 
    filterCoursesByTitle(courseDetails, searchQuery),
    [searchQuery]
  );

  const onCoursePress = (courseId: string) => {
    navigation.navigate('CourseDetails', {courseId});
  };

  return (
    <View style={styles.container} testID={TEST_IDS.COURSE_LIST_SCREEN}>
      <Header showBackButton />
      <SearchInput
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView style={styles.content} testID={TEST_IDS.COURSE_LIST}>
        {filteredCourses.map(course => (
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
