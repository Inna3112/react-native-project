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
        <Text style={heroStyles.item}>name: {hero?.name}</Text>
        <Text style={heroStyles.item}>height: {hero?.height}</Text>
        <Text style={heroStyles.item}>mass: {hero?.mass}</Text>
        <Text style={heroStyles.item}>hair-color: {hero?.hair_color}</Text>
        <Text style={heroStyles.item}>skin-color: {hero?.skin_color}</Text>
        <Text style={heroStyles.item}>eye-color: {hero?.eye_color}</Text>
        <Text style={heroStyles.item}>birth-year: {hero?.birth_year}</Text>
        <Text style={heroStyles.item}>gender: {hero?.gender}</Text>
      </View>
    </View>
  );
});
