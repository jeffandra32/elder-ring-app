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

interface AsheData {
  name: string;
  affinity: string;
  image: string;
}

interface Props {
  data: AsheData;
}

export function Ashes({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>Cinza de Guerra</Brand>
        <Name numberOfLines={2}>{data?.name}</Name>

        <About>
          <Rent>
            <Period>Afinidade</Period>
            <Price>{data?.affinity}</Price>
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