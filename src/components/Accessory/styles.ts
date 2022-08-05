import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradiente,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  width: 31.5%;
  height: ${RFValue(92)}px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(13)}px;
  margin-top: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${RFValue(12)}px;
  margin-top: 12px;
`;
