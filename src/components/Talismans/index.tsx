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

interface TalismanData {
  name: string;
  effect: string;
  image: string;
}

interface Props {
  data: TalismanData;
}

export function Talismans({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>Talisman</Brand>
        <Name numberOfLines={2}>{data?.name}</Name>

        <About>
          <Rent>
            <Period>Efeito</Period>
            <Price>{data?.effect}</Price>
          </Rent>


        </About>
      </Details>

      <CarImage source={{ uri: data?.image }} resizeMode="contain" />
    </Container>
  )
}