import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { ArmorsScreen } from '../Armor';
import { AshesScreen } from '../Ashes';



export function Home() {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <AshesScreen />

    </Container>
  )
}

