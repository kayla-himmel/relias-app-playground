import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    height: 400,
  },
  webview: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: colors.alerts.warning,
    textAlign: 'center',
  },
  debugContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  debugText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
}); 