import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Logo from '@assets/logo-elder.svg';
import { Avatar } from '../Avatar';
import { styles } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile() {
  const [user, setUser] = useState<any>(null);
  async function loadUserStorageData() {

    const storedUser = await AsyncStorage.getItem('userName');

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

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

          <Text numberOfLines={1} style={styles.username}>
            {user}
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