import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackNavigator} from './StackNavigator';
import {BottomTabNavigator} from './TabNavigator';
import {DrawerParamList} from '../types';
import {CustomDrawerContent} from '../components/CustomDrawerContent/CustomDrawerContent';

// type FeedPropsType = {
//   navigation: DrawerNavigationProp<any>;
// };

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name={'Home'} component={HomeStackNavigator} />
      <Drawer.Screen
        name={'Profile'}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
