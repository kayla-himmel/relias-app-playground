import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {courseDetails} from '../../content/CourseDetails.content';
import {styles} from './CourseScreen.styles';
import {RootStackParamList} from '../../navigation/AppNavigator';

type CourseScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

export const CourseScreen = () => {
  const route = useRoute<CourseScreenRouteProp>();
  const {courseId} = route.params;

  const course = courseDetails.find(c => c.id === courseId);

  if (!course) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Course not found</Text>
        </View>
        <Footer />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.shortDescription}>{course.shortDescription}</Text>

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Description</Text>
          <Text style={styles.listItem}>{course.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning Objectives</Text>
          {course.objectives.map((objective, index) => (
            <Text key={index} style={styles.listItem}>
              • {objective}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Topics Covered</Text>
          {course.topics.map((topic, index) => (
            <Text key={index} style={styles.listItem}>
              • {topic}
            </Text>
          ))}
        </View>

        <View style={styles.authorCard}>
          <Text style={styles.sectionTitle}>About the Author</Text>
          <Text style={styles.authorName}>{course.author.name}</Text>
          <Text style={styles.authorCredentials}>
            {course.author.credentials}
          </Text>
          <Text style={styles.authorBio}>{course.author.bio}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Target Audience</Text>
          {course.targetAudience.map((audience, index) => (
            <Text key={index} style={styles.listItem}>
              • {audience}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prerequisites</Text>
          {course.prerequisites.map((prerequisite, index) => (
            <Text key={index} style={styles.listItem}>
              • {prerequisite}
            </Text>
          ))}
        </View>

        <View style={styles.accreditationCard}>
          <Text style={styles.accreditationProvider}>
            {course.accreditation.provider}
          </Text>
          <Text style={styles.accreditationStatement}>
            {course.accreditation.statement}
          </Text>
        </View>

        <Text style={styles.additionalInfo}>{course.additionalInfo}</Text>
      </ScrollView>
      <Footer />
    </View>
  );
};
