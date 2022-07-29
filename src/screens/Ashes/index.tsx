import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { CarList, Header, HeaderContent, TotalCars } from './styles';
import Logo from '@assets/logo-elder.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ashes } from '@components/Ashes';
import { api } from '@services/api';
import { AshesDTO } from '@src/dtos/AshesDTO';
import { Load } from '@components/Load';
import theme from '../../styles/theme';



export function AshesScreen() {
  const [ashes, setAshes] = useState<AshesDTO[]>([]);
  const [countAshes, setCountAshes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAshes() {
      try {
        const response = await api.get('/ashes?limit=100');
        setAshes(response.data.data);
        setCountAshes(response.data.count)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAshes();
  }, []);
  return (
    <>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(30)} />

          <TotalCars>{`Total: ${countAshes}`}</TotalCars>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: theme.fonts.primary_400 }}>{`Cinzas Guerra`}</Text>
        </HeaderContent>
      </Header>
      {
        loading ? <Load /> : <CarList
          data={ashes}
          keyExtractor={(item: AshesDTO) => item.id}
          renderItem={({ item }): JSX.Element =>
            <Ashes data={item} />
          }
        />
      }
    </>
  )
}

