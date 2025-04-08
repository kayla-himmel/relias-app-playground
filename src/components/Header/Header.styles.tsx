import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.base.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.base.grayShadow,
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.brand.tealDark,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.brand.tealDark,
  },
});
