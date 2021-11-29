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
// import {MyDrawer} from './navigation/DrawerNavigator';
// import {BottomTabNavigator} from './navigation/TabNavigator';

const App = () => {
  return (
    <View style={appStyles.container}>
      <NavigationContainer>
        {/*<BottomTabNavigator />*/}
        <DrawerNavigator />
        {/*<MyDrawer />*/}
      </NavigationContainer>
    </View>
  );
};

export default App;
