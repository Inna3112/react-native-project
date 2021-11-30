import React from 'react';
import {Text} from 'react-native';
import {styles} from './SettingsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>My settings</Text>
    </SafeAreaView>
  );
};
