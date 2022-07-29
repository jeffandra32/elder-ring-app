import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Logo from '@assets/logo-elder.svg';
import { Avatar } from '../Avatar';
import { styles } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function Profile() {

  return (
    <View style={styles.container}>

      <RectButton>
        <Avatar urlImage={'https://img.game8.co/3492852/3a8f3309c1e71d4aeb6c45da4bc3a411.png/show'} />
      </RectButton>

      <View style={{ marginRight: 10 }}>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            Jefferson
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

      <Logo width={RFValue(108)} height={RFValue(30)} />

    </View>
  )

}