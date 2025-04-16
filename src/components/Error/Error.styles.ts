import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.alerts.warning + '10', // 10% opacity
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.alerts.warning,
    marginVertical: 8,
  },
  text: {
    color: colors.alerts.warning,
    fontSize: 14,
    lineHeight: 20,
  },
});
