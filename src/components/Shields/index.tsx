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

interface ShieldData {
  name: string;
  category: string;
  image: string;
}

interface Props {
  data: ShieldData;
}

export function Shields({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>Shield</Brand>
        <Name numberOfLines={2}>{data?.name}</Name>

        <About>
          <Rent>
            <Period>Category</Period>
            <Price>{data?.category}</Price>
          </Rent>


        </About>
      </Details>

      <CarImage source={{ uri: data?.image }} resizeMode="contain" />
    </Container>
  )
}