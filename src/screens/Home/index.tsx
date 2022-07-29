import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { ArmorsScreen } from '../Armor';
import { AshesScreen } from '../Ashes';
import { BossesScreen } from '../Boss';
import { TalismansScreen } from '../Talisman';
import { ShieldsScreen } from '../Shields';



export function Home() {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ShieldsScreen />

    </Container>
  )
}

