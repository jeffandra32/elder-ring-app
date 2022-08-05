import React, { useState } from 'react'

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  CarImage
} from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ArmorData {
  name: string;
  category: string;
  image: string;
}

type Props = RectButtonProps & {
  data: ArmorData;
}

export function Armors({ data, ...rest }: Props) {

  return (
    <RectButton {...rest}>
      <Container>
        <Details>
          <Brand>Equipamento</Brand>
          <Name numberOfLines={1}>{data?.name}</Name>

          <About>
            <Rent>
              <Period>Categoria</Period>
              <Price>{data?.category}</Price>
            </Rent>
          </About>
        </Details>

        <CarImage source={{ uri: data?.image }} resizeMode="contain" />
      </Container>
    </RectButton>
  )
}