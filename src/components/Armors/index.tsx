import { View, Text } from 'react-native'
import React from 'react'
import GasolineSvg from '@assets/gasoline.svg'

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from './style';

interface ArmorData {
  name: string;
  category: string;
  image: string;
}

interface Props {
  data: ArmorData;
}

export function Armors({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>Equipamento</Brand>
        <Name numberOfLines={1}>{data?.name}</Name>

        <About>
          <Rent>
            <Period>Categoria</Period>
            <Price>{data?.category}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data?.image }} resizeMode="contain" />
    </Container>
  )
}