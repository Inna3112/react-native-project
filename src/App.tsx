import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {appStyles} from './AppStyles';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {DrawerNavigator} from './navigation/DrawerNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {EventRegister} from 'react-native-event-listeners';

export const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(5,55,164,0.96)',
    background: '#f1dddd',
    text: '#151511',
    card: '#9890C7',
  },
};
export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgba(5,55,164,0.96)',
    background: '#626161',
    text: 'rgba(57,57,136,0.56)',
    card: '#433e6b',
  },
};

const App = () => {
  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? CustomDarkTheme : CustomLightTheme;
  useEffect(() => {
    let listener = EventRegister.addEventListener('changeThemeEvent', data => {
      setDarkApp(data);
    });
    return () => {
      if (typeof listener === 'string') {
        EventRegister.removeEventListener(listener);
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={appStyles.container}>
          <NavigationContainer
            theme={appTheme}
            onReady={() => RNBootSplash.hide()}>
            <DrawerNavigator />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
