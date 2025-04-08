import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './CourseCard.styles';
import {TEST_IDS} from '../../constants/testIds';

interface CourseCardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export const CourseCard = ({title, description, onPress}: CourseCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} testID={TEST_IDS.COURSE_CARD}>
      <View style={styles.card}>
        <Text style={styles.title} testID={TEST_IDS.COURSE_CARD_TITLE}>{title}</Text>
        <Text style={styles.description} testID={TEST_IDS.COURSE_CARD_DESCRIPTION}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
