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

interface BossData {
  name: string;
  region: string;
  image: string;
}

interface Props {
  data: BossData;
}

export function Bosses({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>Boss</Brand>
        <Name numberOfLines={2}>{data?.name}</Name>

        <About>
          <Rent>
            <Period>Região</Period>
            <Price>{data?.region}</Price>
          </Rent>
        </About>
      </Details>

      <CarImage source={{ uri: data?.image }} resizeMode="contain" />
    </Container>
  )
}