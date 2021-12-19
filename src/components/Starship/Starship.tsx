import React from 'react';
import {Text, View} from 'react-native';
import {ItemType} from '../../api/api';
import {starshipStyles} from './StarshipStyles';

type PropsType = {
  starship: ItemType | undefined;
};
export const Starship: React.FC<PropsType> = React.memo(({starship}) => {
  return (
    <View style={starshipStyles.container}>
      <View style={starshipStyles.itemsContainer}>
        <Text style={starshipStyles.item}>{starship?.name}</Text>
      </View>
    </View>
  );
});
