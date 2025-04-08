import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {WebViewContent} from '../../components/WebViewContent/WebViewContent';
import {courseDetails} from '../../content/CourseDetails.content';
import {styles} from './CourseScreen.styles';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {TEST_IDS} from '../../constants/testIds';

type CourseScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

export const CourseScreen = () => {
  const route = useRoute<CourseScreenRouteProp>();
  const {courseId} = route.params;
  const [showContent, setShowContent] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const course = courseDetails.find(c => c.id === courseId);

  if (!course) {
    return (
      <View style={styles.container} testID={TEST_IDS.COURSE_SCREEN}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Course not found</Text>
        </View>
        <Footer />
      </View>
    );
  }

  const handleStartCourse = () => {
    setShowContent(true);
  };

  const handleTimeout = () => {
    // Navigate back to course details
    setShowContent(false);
    
    // Scroll to the bottom of the screen where the Start Course button is
    setTimeout(() => {
      if (scrollViewRef.current) {
        // Scroll to the end of the content
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };

  return (
    <View style={styles.container} testID={TEST_IDS.COURSE_SCREEN}>
      <Header showBackButton />
      <ScrollView 
        ref={scrollViewRef}
        style={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title} testID={TEST_IDS.COURSE_TITLE}>{course.title}</Text>
          <Text style={styles.shortDescription} testID={TEST_IDS.COURSE_SHORT_DESCRIPTION}>{course.shortDescription}</Text>

          <View style={styles.courseInfo}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>CE Credits:</Text>
              <Text style={styles.infoValue}>{course.ceCredits}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Duration:</Text>
              <Text style={styles.infoValue}>{course.duration}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Level:</Text>
              <Text style={styles.infoValue}>{course.level}</Text>
            </View>
          </View>
        </View>

        {showContent && course.contentUrl ? (
          <View style={styles.webviewContainer}>
            <WebViewContent 
              url={course.contentUrl} 
              title={course.title}
            />
          </View>
        ) : (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Course Description</Text>
              <Text style={styles.listItem} testID={TEST_IDS.COURSE_DESCRIPTION}>{course.description}</Text>
            </View>

            <View style={styles.section} testID={TEST_IDS.COURSE_OBJECTIVES}>
              <Text style={styles.sectionTitle}>Learning Objectives</Text>
              {course.objectives.map((objective, index) => (
                <Text key={index} style={styles.listItem}>
                  • {objective}
                </Text>
              ))}
            </View>

            <View style={styles.section} testID={TEST_IDS.COURSE_TOPICS}>
              <Text style={styles.sectionTitle}>Topics Covered</Text>
              {course.topics.map((topic, index) => (
                <Text key={index} style={styles.listItem}>
                  • {topic}
                </Text>
              ))}
            </View>

            <View style={styles.authorCard} testID={TEST_IDS.COURSE_AUTHOR}>
              <Text style={styles.sectionTitle}>About the Author</Text>
              <Text style={styles.authorName}>{course.author.name}</Text>
              <Text style={styles.authorCredentials}>
                {course.author.credentials}
              </Text>
              <Text style={styles.authorBio}>{course.author.bio}</Text>
            </View>

            <View style={styles.section} testID={TEST_IDS.COURSE_TARGET_AUDIENCE}>
              <Text style={styles.sectionTitle}>Target Audience</Text>
              {course.targetAudience.map((audience, index) => (
                <Text key={index} style={styles.listItem}>
                  • {audience}
                </Text>
              ))}
            </View>

            <View style={styles.section} testID={TEST_IDS.COURSE_PREREQUISITES}>
              <Text style={styles.sectionTitle}>Prerequisites</Text>
              {course.prerequisites.map((prerequisite, index) => (
                <Text key={index} style={styles.listItem}>
                  • {prerequisite}
                </Text>
              ))}
            </View>

            <View style={styles.accreditationCard} testID={TEST_IDS.COURSE_ACCREDITATION}>
              <Text style={styles.accreditationProvider}>
                {course.accreditation.provider}
              </Text>
              <Text style={styles.accreditationStatement}>
                {course.accreditation.statement}&nbsp;
                {course.accreditation.moreInfo}&nbsp;
                <TouchableOpacity onPress={() => Linking.openURL(course.accreditation.moreInfoLinkURL)}>
                  <Text style={styles.accreditationLink}>
                    {course.accreditation.moreInfoLinkText}
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>

            <Text style={styles.additionalInfo} testID={TEST_IDS.COURSE_ADDITIONAL_INFO}>{course.additionalInfo}</Text>
            
            {course.contentUrl && (
              <TouchableOpacity 
                style={styles.startButton} 
                onPress={handleStartCourse}
                testID={TEST_IDS.START_COURSE_BUTTON}
              >
                <Text style={styles.startButtonText}>Start Course</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
};
