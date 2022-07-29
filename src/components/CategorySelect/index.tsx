import React from 'react';
import { ScrollView, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import Ashs from '@assets/ashs.svg';
import Talisman from '@assets/talisman-icon.svg';
import Shield from '@assets/shield.svg';
import Spirit from '@assets/spirit.svg';
import Armor from '@assets/armor.svg';
import Weapon from '@assets/weapon.svg';
import Incantation from '@assets/incantation.svg'
import NPC from '@assets/npc.svg'
import Sorceries from '@assets/sorceries.svg'
import Ammo from '@assets/ammo.svg'
import Item from '@assets/item.svg'
import Boss from '@assets/boss.svg'
import { Category } from '../Category';
import { RootNavigator } from '../../utils/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
  const { navigate } = useNavigation<any>();
  return (
    <>
      <ScrollView>
        <View style={styles.container} >
          <Category
            key={'1'}
            title={'Ashs of Wars'}
            icon={Ashs}
            hasCheckBox={hasCheckBox}
            onPress={() => navigate('AshesScreen')}
          />

          <Category
            key={'2'}
            title={'Shields'}
            icon={Shield}
            hasCheckBox={hasCheckBox}
            onPress={() => navigate('ShieldsScreen')}
          />

          <Category
            key={'3'}
            title={'Talismans'}
            icon={Talisman}
            hasCheckBox={hasCheckBox}
            onPress={() => navigate('TalismansScreen')}
          />
        </View>

        <View style={styles.container} >
          <Category
            key={'4'}
            title={'Spirits'}
            icon={Spirit}
            hasCheckBox={hasCheckBox}
            onPress={() => navigate('SpiritsScreen')}
          />

          <Category
            key={'5'}
            title={'Armors'}
            icon={Armor}
            hasCheckBox={hasCheckBox}
            onPress={() => navigate('ArmorsScreen')}
          />

          <Category
            key={'6'}
            title={'Weapons'}
            icon={Weapon}
            hasCheckBox={hasCheckBox}
            onPress={() => navigate('WeaponsScreen')}
          />
        </View>

        <View style={styles.container} >
          <Category
            key={'7'}
            title={'Incantations'}
            icon={Incantation}
            hasCheckBox={hasCheckBox}
          />

          <Category
            key={'8'}
            title={'NPCs'}
            icon={NPC}
            hasCheckBox={hasCheckBox}
          />

          <Category
            key={'9'}
            title={'Sorceries'}
            icon={Sorceries}
            hasCheckBox={hasCheckBox}
          />
        </View>

        <View style={styles.container} >
          <Category
            key={'13'}
            title={'Ammos'}
            icon={Ammo}
            hasCheckBox={hasCheckBox}
          />

          <Category
            key={'14'}
            title={'Items'}
            icon={Item}
            hasCheckBox={hasCheckBox}
          />

          <Category
            key={'15'}
            title={'Bosses'}
            icon={Boss}
            hasCheckBox={hasCheckBox}
          />
        </View>
      </ScrollView>
    </>
  );
}