import { Home } from '@screens/Home';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import {
  Merriweather_400Regular,
  Merriweather_700Bold
} from '@expo-google-fonts/merriweather';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Merriweather_400Regular,
    Merriweather_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (

    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  );
}

