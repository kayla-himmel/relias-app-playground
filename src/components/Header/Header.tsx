import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Header.styles';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Nurse.com</Text>
    </View>
  );
};
