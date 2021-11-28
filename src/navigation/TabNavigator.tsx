import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, ProfileStackNavigator} from './StackNavigator';
import {TabParamList} from '../types';

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Home'} component={HomeStackNavigator} />
      <Tab.Screen name={'Profile'} component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};
