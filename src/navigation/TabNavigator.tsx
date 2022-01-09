import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../types';
import {SettingsScreen} from '../screens/Settings/SettingsScreen';
import {Text} from 'react-native';
import {ProfileStackNavigator} from './StackNavigators/ProfileStackNavigator';

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'TabProfile'}
      screenOptions={({route}) => ({
        tabBarIcon: ({}) => {
          if (route.name === 'TabProfile') {
            return <Text>📘</Text>;
          } else if (route.name === 'TabSettings') {
            return <Text>⚙</Text>;
          }
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        headerShown: false,
      })}>
      <Tab.Screen name={'TabProfile'} component={ProfileStackNavigator} />
      <Tab.Screen name={'TabSettings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
