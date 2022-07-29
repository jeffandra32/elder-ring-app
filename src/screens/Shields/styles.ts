import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { ShieldDTO } from '@src/dtos/ShiledsDTO';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.title};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 ${RFValue(24)}px;
  padding-bottom: ${RFValue(28)}px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.background_primary};
  text-align: center;
  line-height: ${RFValue(24)}px;
  margin-top: 40px;
`;

export const MyCarsButton = styled<any>(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 14px;
  right: 22px;
`;

export const CarList = styled<any>(
  FlatList as new () => FlatList<ShieldDTO>
).attrs({
  contentContainerStyle: {
    padding: 20,
    paddingBottom: 8,
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
