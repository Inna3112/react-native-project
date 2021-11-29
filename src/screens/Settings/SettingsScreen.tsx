import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './SettingsScreenStyles';

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My settings</Text>
    </View>
  );
};
