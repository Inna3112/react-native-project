import React from 'react';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {CreatePostScreen} from '../../screens/CreatePost/CreatePostScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types';

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
      <HomeStack.Screen name={'CreatePost'} component={CreatePostScreen} />
    </HomeStack.Navigator>
  );
};
