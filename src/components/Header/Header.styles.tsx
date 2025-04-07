import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.base.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.base.grayShadow,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.brand.tealDark,
  },
});
