import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary70,
  },
  image: {
    width: '100%',
    height: 500,
  },
  content: {
    marginTop: -180,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.primary_400,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.primary_400,
    lineHeight: 25,
  },
  input: {
    color: theme.colors.secondary100,
    backgroundColor: theme.colors.background_secondary,
    fontFamily: theme.fonts.primary_400,
    height: 56,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  buttonContentEnabled: {
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContentDisabled: {
    height: 56,
    backgroundColor: theme.colors.secondary80,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButton: {
    flex: 1,
    color: theme.colors.background_secondary,
    fontFamily: theme.fonts.primary_400,
    fontSize: 15,
    textAlign: 'center',
  },
});
