import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {customDrawerContentStyles} from './CustomDrawerContentStyles';
import {Switch, View, Text, useColorScheme} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme, ThemeType} from '../../store/appReducers';
import {CustomDarkTheme, CustomLightTheme} from '../../constants';
import {AppRootStateType} from '../../store/store';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const theme = useSelector<AppRootStateType, ThemeType>(
    state => state.appReducer.theme,
  );
  const [darkMode, setDarkMode] = useState(() => theme !== CustomLightTheme);
  const [manuallyMode, setManuallyMode] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (!manuallyMode) {
      if (colorScheme === 'light') {
        dispatch(setTheme({theme: CustomLightTheme}));
      } else {
        dispatch(setTheme({theme: CustomDarkTheme}));
      }
    }
  }, []);
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
        {darkMode ? (
          <Text>Toggle dark mode</Text>
        ) : (
          <Text>Toggle light mode</Text>
        )}
        <Switch
          value={darkMode}
          disabled={!manuallyMode}
          onValueChange={value => {
            setDarkMode(value);
            EventRegister.emit('changeThemeEvent', value);
          }}
        />
      </View>
      <View style={customDrawerContentStyles.switch}>
        {manuallyMode ? (
          <Text>Toggle theme mode automatically</Text>
        ) : (
          <Text>Toggle theme mode manually</Text>
        )}
        <Switch
          value={manuallyMode}
          onValueChange={value => {
            setManuallyMode(value);
          }}
        />
      </View>
      {/*<Text>{JSON.stringify(manuallyMode)}</Text>*/}
    </DrawerContentScrollView>
  );
};
