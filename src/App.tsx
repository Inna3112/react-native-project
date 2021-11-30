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

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={appStyles.container}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
