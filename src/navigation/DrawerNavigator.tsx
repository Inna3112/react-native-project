import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HomeStackNavigator} from './StackNavigator';
import {BottomTabNavigator} from './TabNavigator';
import {DrawerParamList} from '../types';

// type FeedPropsType = {
//   navigation: DrawerNavigationProp<any>;
// };

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9890C7',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen name={'Home'} component={HomeStackNavigator} />
      <Drawer.Screen name={'Profile'} component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: '#E6D4DE',
        shadowOpacity: 0.5,
      }}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};
