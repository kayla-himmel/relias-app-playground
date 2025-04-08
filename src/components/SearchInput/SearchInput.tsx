import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './SearchInput.styles';
import {TEST_IDS} from '../../constants/testIds';
import { colors } from '../../theme/colors';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChangeText,
  placeholder = 'Search courses...',
}: SearchInputProps) => {
  return (
    <View style={styles.container} testID={TEST_IDS.SEARCH_INPUT}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.base.grayDark}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
    </View>
  );
}; 
