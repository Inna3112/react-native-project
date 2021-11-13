import React from 'react';
import {Text, View} from 'react-native';
import {footerStyles} from './FooterStyles';

type PropsType = {
  title: string;
};
export const Footer: React.FC<PropsType> = ({title}) => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.title}>{title}</Text>
    </View>
  );
};
