import React from 'react';
import {Text, View} from 'react-native';
import {headerStyles} from './HeaderStyles';

type PropsType = {
  title: string;
};
export const Header: React.FC<PropsType> = ({title}) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};
