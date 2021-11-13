import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PropsType = {
  title: string;
};
export const Footer: React.FC<PropsType> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },
});
