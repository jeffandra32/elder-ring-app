import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { CarList, Header, HeaderContent, TotalCars } from './styles';
import Logo from '@assets/logo-elder.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '@services/api';
import { Load } from '@components/Load';
import theme from '../../styles/theme';
import { TalismanDTO } from '@src/dtos/TalismanDTO';
import { Talismans } from '@components/Talismans';



export function TalismansScreen() {
  const [talismans, setTalismans] = useState<TalismanDTO[]>([]);
  const [countTalismans, setCountTalismans] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTalismans() {
      try {
        const response = await api.get('/talismans?limit=100');
        setTalismans(response.data.data);
        setCountTalismans(response.data.count)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTalismans();
  }, []);
  return (
    <>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(30)} />

          <TotalCars>{`Total: ${countTalismans}`}</TotalCars>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: theme.fonts.primary_400 }}>{`Talismans`}</Text>
        </HeaderContent>
      </Header>
      {
        loading ? <Load /> : <CarList
          data={talismans}
          keyExtractor={(item: TalismanDTO) => item.id}
          renderItem={(item: TalismanDTO) =>
            <Talismans data={item} />
          }
        />
      }
    </>
  )
}

