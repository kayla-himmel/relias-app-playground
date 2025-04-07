import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './CourseCard.styles';

interface CourseCardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export const CourseCard = ({title, description, onPress}: CourseCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
