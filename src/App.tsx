import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {appStyles} from './AppStyles';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './navigation/DrawerNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './store/store';
import {CustomDarkTheme, CustomLightTheme} from './constants';
import {EventRegister} from 'react-native-event-listeners';

const App = () => {
  const {store, persistor} = reduxStore();
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
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <View style={appStyles.container}>
            <NavigationContainer
              theme={appTheme}
              onReady={() => RNBootSplash.hide()}>
              <DrawerNavigator />
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
