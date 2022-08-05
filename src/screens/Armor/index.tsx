import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { CarList, Header, HeaderContent, TotalCars } from './styles';
import Logo from '@assets/logo-elder.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Armors } from '@components/Armors';
import { api } from '@services/api';
import { ArmorDTO } from '@src/dtos/ArmorDTO';
import { Load } from '@components/Load';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';



export function ArmorsScreen() {
  const [armors, setArmors] = useState<ArmorDTO[]>([]);
  const [countArmors, setCountArmors] = useState(0);
  const { navigate } = useNavigation<any>();

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  function handleCarDatails(data: any) {
    navigate('ArmorDetails', { data });
  }


  useEffect(() => {
    async function fetchArmmors() {
      try {
        const response = await api.get('/armors?limit=100');
        setArmors(response.data.data);
        setCountArmors(response.data.count)
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

          <TotalCars>{`Total: ${countArmors}`}</TotalCars>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: theme.fonts.primary_400 }}>{`Armaduras`}</Text>
        </HeaderContent>
      </Header>
      {
        loading ? <Load /> : <CarList
          data={armors}
          keyExtractor={(item: ArmorDTO) => item.id}
          renderItem={({ item }): JSX.Element =>
            <Armors data={item} onPress={() => handleCarDatails(item)} />
          }
        />
      }
    </>
  )
}

