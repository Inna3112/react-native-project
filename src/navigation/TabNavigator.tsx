import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileStackNavigator} from './StackNavigator';
import {TabParamList} from '../types';
import {SettingsScreen} from '../screens/Settings/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Profile'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'ios-list';

          if (route.name === 'Profile') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
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
