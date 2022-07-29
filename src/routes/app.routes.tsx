import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../styles/theme';

import { Home } from '@screens/Home';
import { ArmorsScreen } from '@screens/Armor';
import { ShieldsScreen } from '@screens/Shields';
import { AshesScreen } from '@screens/Ashes';
import { TalismansScreen } from '@screens/Talisman';
import { BossesScreen } from '@screens/Boss';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={
        {
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.colors.secondary100
          }
        }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="ArmorsScreen"
        component={ArmorsScreen}
      />
      <Screen
        name="ShieldsScreen"
        component={ShieldsScreen}
      />
      <Screen
        name="AshesScreen"
        component={AshesScreen}
      />
      <Screen
        name="TalismansScreen"
        component={TalismansScreen}
      />
      <Screen
        name="BossesScreen"
        component={BossesScreen}
      />
    </Navigator>
  )
}