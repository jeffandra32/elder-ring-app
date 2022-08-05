import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { api } from '@services/api';

import { ArmorDTO } from '@src/dtos/ArmorDTO';

import { BackButton } from '@components/BackButton';
import { Accessory } from '@components/Accessory';

import {
  Container,
  Header,
  SliderContent,
  Details,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessorys,
  Image,
  Description,
  DescriptionText
} from './styles';
import { View } from 'react-native';
import theme from '../../../styles/theme';

interface Params {
  data: ArmorDTO;
}

export const ArmorDetails: React.FC = () => {
  const { navigate, goBack } = useNavigation<any>();
  const { params } = useRoute();
  const { data } = params as Params;
  const [armorUpdated, setArmorUpdated] = useState<ArmorDTO>({} as ArmorDTO);

  function handleBack() {
    goBack();
  }

  useEffect(() => {
    async function fetchCarUpdated() {
      const response = await api.get(`/armors/${data.id}`);
      setArmorUpdated(response.data.data);
    }
    fetchCarUpdated();
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View >
        <Header>
          <BackButton onPress={handleBack} color={theme.colors.main_light} />
        </Header>
      </View>


      <SliderContent>
        <Image source={{ uri: data.image }} />
      </SliderContent>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        // onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>Armor</Brand>
            <Name numberOfLines={1}>{data.name}</Name>
          </Description>

          <Rent>
            <Period>Category</Period>
            <Price>{data.category}</Price>
          </Rent>
        </Details>

        <DescriptionText>Damage Negation</DescriptionText>

        {!!armorUpdated.dmgNegation && (
          <Accessorys>
            {armorUpdated.dmgNegation.map(item => (
              <Accessory
                key={item.name}
                title={item.name}
                name={item.amount}
              />
            ))}
          </Accessorys>
        )}

        <DescriptionText>Resistance</DescriptionText>

        {!!armorUpdated.resistance && (
          <Accessorys>
            {armorUpdated.resistance.map(item => (
              <Accessory
                key={item.name}
                title={item.name}
                name={item.amount}
              />
            ))}
          </Accessorys>
        )}


        <DescriptionText>Weight</DescriptionText>
        <About>
          {data.weight}
        </About>

        <DescriptionText>Description</DescriptionText>
        <About>
          {data.description}
        </About>
      </ScrollView>
    </Container>
  );
};