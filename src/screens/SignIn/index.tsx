import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';

import IllustrationImg from '@assets/illustration.png';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootNavigator } from '../../utils/RootNavigator';
import { useAuth } from '../../hooks/auth';



export function SignIn() {
  const [userName, setUserName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn(userName);
    } catch (error: any) {
      Alert.alert(error);
    }
  }

  function handleChange(event: string) {
    if (event) {
      setIsDisabled(false);
      setUserName(event)
    } else {
      setIsDisabled(true);
      setUserName(event)
    }
  }

  return (
    <>
      <View style={styles.container}>

        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Guia {'\n'}
            definitivo {'\n'}
            Elder Ring
          </Text>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <TextInput
              style={styles.input}
              placeholder={'Digite seu nome'}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange}
              value={userName}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={isDisabled ? styles.buttonContentDisabled : styles.buttonContentEnabled}
            onPress={handleSignIn}
            disabled={isDisabled}
          >
            <Text style={styles.titleButton}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </>
  );
}