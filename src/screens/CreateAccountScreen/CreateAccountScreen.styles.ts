import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.brand.tealDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.base.grayDark,
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.base.grayMedium,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.base.grayDark,
  },
  button: {
    height: 48,
    backgroundColor: colors.brand.teal,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: colors.base.white,
    fontSize: 20,
    fontWeight: '600',
  },
  errorText: {
    color: colors.alerts.warning,
    fontSize: 16,
    marginTop: 8,
  },
}); 