import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/Profile/ProfileScreen';
import {Text, Button, View} from 'react-native';

type FeedPropsType = {
  navigation: DrawerNavigationProp<any>;
};
const FeedScreen: React.FC<FeedPropsType> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={FeedScreen}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{drawerLabel: 'Updates'}}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{drawerLabel: 'Profile'}}
      />
    </Drawer.Navigator>
  );
}

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={'Feed'} component={FeedScreen} />
      <Drawer.Screen name={'Notifications'} component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Open drawer"
        onPress={() => props.navigation.openDrawer()}
      />
    </DrawerContentScrollView>
  );
};
