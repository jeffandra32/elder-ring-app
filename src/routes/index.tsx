import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './app.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './../hooks/auth';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}