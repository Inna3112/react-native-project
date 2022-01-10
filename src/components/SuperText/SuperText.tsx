import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

type PropsType = {
  text: string;
  superStyle?: {};
};
export const SuperText: React.FC<PropsType> = ({text, superStyle}) => {
  const {colors} = useTheme();
  return <Text style={[superStyle, {color: colors.text}]}>{text}</Text>;
};
