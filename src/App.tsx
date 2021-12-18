/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {appStyles} from './AppStyles';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './navigation/DrawerNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={appStyles.container}>
          <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <DrawerNavigator />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
