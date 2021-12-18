import React from 'react';
import {Text, View} from 'react-native';
import {HeroType} from '../../api/api';
import {heroStyles} from './HeroStyles';

type PropsType = {
  hero: HeroType | undefined;
};
export const Hero: React.FC<PropsType> = React.memo(({hero}) => {
  return (
    <View style={heroStyles.container}>
      <View style={heroStyles.itemsContainer}>
        <Text style={heroStyles.item}>{hero?.name}</Text>
      </View>
    </View>
  );
});
