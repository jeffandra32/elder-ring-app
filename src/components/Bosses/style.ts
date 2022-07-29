import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';

export const Container = styled<any>(LinearGradient).attrs(() => ({
  colors: theme.colors.gradiente,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  width: 100%;
  height: ${RFValue(126)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Details = styled.View`
  width: 60%;
`;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(14)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  justify-content: center;
  align-items: center;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`;
