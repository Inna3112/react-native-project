import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackNavigator} from './StackNavigators/HomeStackNavigator';
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
      <Drawer.Screen name={'MyHome'} component={HomeStackNavigator} />
      <Drawer.Screen name={'MyProfile'} component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
