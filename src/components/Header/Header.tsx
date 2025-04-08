import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Header.styles';
import {TEST_IDS} from '../../constants/testIds';

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header = ({showBackButton}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header} testID={TEST_IDS.HEADER}>
      {showBackButton && (
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          testID={TEST_IDS.HEADER_BACK_BUTTON}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.logo} testID={TEST_IDS.HEADER_LOGO}>Nurse.com</Text>
    </View>
  );
};
