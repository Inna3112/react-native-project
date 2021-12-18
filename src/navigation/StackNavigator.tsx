import React from 'react';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {ProfileScreen} from '../screens/Profile/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList, ProfileStackParamList} from '../types';
import {SearchHeroScreen} from '../screens/SearchHero/SearchHeroScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9890C7',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <HomeStack.Screen name={'SearchHero'} component={SearchHeroScreen} />
    </HomeStack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9890C7',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <ProfileStack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{title: 'My Profile'}}
        initialParams={{userId: 1}}
      />
    </ProfileStack.Navigator>
  );
};
