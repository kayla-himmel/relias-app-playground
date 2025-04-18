import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Alert.styles';
import { colors } from '../../theme/colors';

interface AlertProps {
  message: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  onClose?: () => void;
  testID?: string;
}

export const Alert = ({ message, type = 'info', onClose, testID }: AlertProps) => {

  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.text}>{message}</Text>
      {onClose && (
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          testID={`${testID}-close`}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};