import React from 'react';
import {ProfileScreen} from '../../screens/Profile/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

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
