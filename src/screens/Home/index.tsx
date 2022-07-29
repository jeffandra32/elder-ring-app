import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { styles } from './styles';
import { CategorySelect } from '@components/CategorySelect';
import { Background } from '@components/Background';
import { Profile } from '@components/Profile';



export function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <Background>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Profile />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
    </Background>
  )
}

