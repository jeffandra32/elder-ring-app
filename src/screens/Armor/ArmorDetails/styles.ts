import theme from '../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary50};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  position: absolute;
  top: ${RFValue(60)}px;
  left: 24px;
`;

export const SliderContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${RFValue(72)}px;
  margin-bottom: 20px;
  background-color: ${theme.colors.secondary100};
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  background-color: ${theme.colors.secondary100};
  margin-bottom: 20px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_datail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  width: 170px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(20)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_datail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_datail};
  font-size: ${RFValue(14)}px;
  text-transform: uppercase;
  margin-top: 20px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${RFValue(20)}px;
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;

  text-align: justify;
  margin-top: 22px;
  margin-bottom: 22px;
  line-height: ${RFValue(25)}px;
`;

export const Accessorys = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
