import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.primary_400,
    fontSize: 18,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.primary_400,
    fontSize: 18,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.primary_400,
    color: theme.colors.highlight,
  },
});
