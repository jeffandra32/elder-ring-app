import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { CarList, Header, HeaderContent, TotalCars } from './styles';
import Logo from '@assets/logo-elder.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '@services/api';
import { Load } from '@components/Load';
import theme from '../../styles/theme';
import { ShieldDTO } from '@src/dtos/ShiledsDTO';
import { Shields } from '@components/Shields';



export function ShieldsScreen() {
  const [shields, setShields] = useState<ShieldDTO[]>([]);
  const [countShields, setCountShields] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShields() {
      try {
        const response = await api.get('/shields?limit=100');
        setShields(response.data.data);
        setCountShields(response.data.count)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchShields();
  }, []);
  return (
    <>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(30)} />

          <TotalCars>{`Total: ${countShields}`}</TotalCars>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: theme.fonts.primary_400 }}>{`Shields`}</Text>
        </HeaderContent>
      </Header>
      {
        loading ? <Load /> : <CarList
          data={shields}
          keyExtractor={(item: ShieldDTO) => item.id}
          renderItem={({ item }): JSX.Element =>
            <Shields data={item} />
          }
        />
      }
    </>
  )
}

