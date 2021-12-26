import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {customDrawerContentStyles} from './CustomDrawerContentStyles';
import {Switch, View, Text} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  // const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);
  // const colorScheme = Appearance.getColorScheme();
  // const colorScheme = useColorScheme();
  // useEffect(() => {
  //   const onThemeChange = ({colorScheme}) => {
  //     colorScheme === 'light'
  //       ? dispatch(setTheme({theme: CustomLightTheme}))
  //       : dispatch(setTheme({theme: CustomDarkTheme}));
  //   };
  //   colorScheme === 'light'
  //     ? dispatch(setTheme({theme: CustomLightTheme}))
  //     : dispatch(setTheme({theme: CustomDarkTheme}));
  //   Appearance.addChangeListener(onThemeChange);
  //   return () => Appearance.removeChangeListener(onThemeChange);
  // }, [dispatch, colorScheme]);

  return (
    <DrawerContentScrollView
      style={customDrawerContentStyles.container}
      {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <View style={customDrawerContentStyles.switch}>
        <Text>Toggle theme</Text>
        <Switch
          value={darkMode}
          onValueChange={value => {
            setDarkMode(value);
            EventRegister.emit('changeThemeEvent', value);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};
