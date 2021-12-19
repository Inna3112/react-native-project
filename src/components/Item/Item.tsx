import React from 'react';
import {Text, View} from 'react-native';
import {itemStyles} from './ItemStyles';

type PropsType = {
  title: string;
};
export const Item: React.FC<PropsType> = ({title}) => {
  return (
    <View style={itemStyles.container}>
      <View style={itemStyles.itemsContainer}>
        <Text style={itemStyles.item}>{title}</Text>
      </View>
    </View>
  );
};
