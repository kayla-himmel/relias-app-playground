import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Error.styles';

interface ErrorProps {
  message: string;
  testID?: string;
}

export const Error = ({ message, testID }: ErrorProps) => {
  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};
