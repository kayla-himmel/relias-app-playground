import React from 'react';
import {View} from 'react-native';
import {styles} from './Footer.styles';
import {TEST_IDS} from '../../constants/testIds';

export const Footer = () => {
  return <View style={styles.footer} testID={TEST_IDS.FOOTER} />;
};
