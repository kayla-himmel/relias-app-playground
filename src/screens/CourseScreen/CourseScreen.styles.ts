import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brand.tealLight,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.brand.purpleDark,
    marginBottom: 8,
  },
  shortDescription: {
    fontSize: 16,
    color: colors.base.grayDark,
    marginBottom: 16,
  },
  courseInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.brand.purpleDark,
    marginRight: 4,
  },
  infoValue: {
    fontSize: 14,
    color: colors.base.grayDark,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.brand.purpleDark,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    color: colors.base.grayDark,
    marginBottom: 8,
    lineHeight: 22,
  },
  authorCard: {
    backgroundColor: colors.base.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    shadowColor: colors.base.grayShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brand.purpleDark,
    marginBottom: 4,
  },
  authorCredentials: {
    fontSize: 14,
    color: colors.base.grayDark,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  authorBio: {
    fontSize: 14,
    color: colors.base.grayDark,
    lineHeight: 20,
  },
  accreditationCard: {
    backgroundColor: colors.brand.purpleLight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.base.grayShadow,
  },
  accreditationProvider: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.brand.purpleDark,
    marginBottom: 8,
  },
  accreditationStatement: {
    fontSize: 14,
    color: colors.base.grayDark,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  additionalInfo: {
    fontSize: 14,
    color: colors.base.grayDark,
    lineHeight: 20,
    fontStyle: 'italic',
    marginTop: 8,
  },
  accreditationLink: {
    color: colors.brand.purpleDark,
    textDecorationLine: 'underline',
  },
  webviewContainer: {
    marginBottom: 24,
    borderRadius: 8,
    overflow: 'hidden',
    height: 400,
    borderWidth: 1,
    borderColor: colors.base.grayShadow,
  },
  startButton: {
    backgroundColor: colors.brand.teal,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  startButtonText: {
    color: colors.base.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
