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
      initialRouteName={'Profile'}
      screenOptions={({route}) => ({
        tabBarIcon: ({}) => {
          if (route.name === 'Profile') {
            return <Text>📘</Text>;
          } else if (route.name === 'Settings') {
            return <Text>⚙</Text>;
          }
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        headerShown: false,
      })}>
      <Tab.Screen name={'Profile'} component={ProfileStackNavigator} />
      <Tab.Screen name={'Settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
