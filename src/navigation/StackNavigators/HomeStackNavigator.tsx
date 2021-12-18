import React from 'react';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types';
import {SearchHeroScreen} from '../../screens/SearchHero/SearchHeroScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

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
