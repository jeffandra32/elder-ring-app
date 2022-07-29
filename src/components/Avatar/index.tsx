import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import theme from '../../styles/theme';


type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary100, secondary90 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary90]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )

}