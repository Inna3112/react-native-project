import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './navigation/DrawerNavigator';
import RNBootSplash from 'react-native-bootsplash';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';
import {setTheme, ThemeType} from './store/appReducers';
import {EventRegister} from 'react-native-event-listeners';
import {CustomDarkTheme, CustomLightTheme} from './constants';

export const Main = () => {
  const [darkApp, setDarkApp] = useState(false);
  const appTheme = useSelector<AppRootStateType, ThemeType>(
    state => state.appReducer.theme,
  );
  const dispatch = useDispatch();
  const newTheme = darkApp ? CustomDarkTheme : CustomLightTheme;
  useEffect(() => {
    let listener = EventRegister.addEventListener('changeThemeEvent', data => {
      setDarkApp(data);
      dispatch(setTheme({theme: newTheme}));
    });
    return () => {
      if (typeof listener === 'string') {
        EventRegister.removeEventListener(listener);
      }
    };
  }, [dispatch, newTheme]);
  return (
    <NavigationContainer theme={appTheme} onReady={() => RNBootSplash.hide()}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
