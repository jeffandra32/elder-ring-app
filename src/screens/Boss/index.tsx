import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { CarList, Header, HeaderContent, TotalCars } from './styles';
import Logo from '@assets/logo-elder.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '@services/api';
import { Load } from '@components/Load';
import theme from '../../styles/theme';
import { BossDTO } from '@src/dtos/BossDTO';
import { Bosses } from '@components/Bosses';



export function BossesScreen() {
  const [bosses, setBosses] = useState<BossDTO[]>([]);
  const [countBosses, setCountBosses] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArmmors() {
      try {
        const response = await api.get('/bosses?limit=100');
        setBosses(response.data.data);
        setCountBosses(response.data.count)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArmmors();
  }, []);
  return (
    <>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(30)} />

          <TotalCars>{`Total: ${countBosses}`}</TotalCars>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: theme.fonts.primary_400 }}>{`Bosses`}</Text>
        </HeaderContent>
      </Header>
      {
        loading ? <Load /> : <CarList
          data={bosses}
          keyExtractor={(item: BossDTO) => item.id}
          renderItem={({ item }): JSX.Element =>
            <Bosses data={item} />
          }
        />
      }
    </>
  )
}

