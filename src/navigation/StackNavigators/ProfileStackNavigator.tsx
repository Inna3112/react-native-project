import React from 'react';
import {ProfileScreen} from '../../screens/Profile/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../types';
import {useTheme} from '@react-navigation/native';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStackNavigator = () => {
  const {colors} = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
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
