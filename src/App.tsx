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
import {ProfileScreen} from './screens/Profile/ProfileScreen';
import {HomeScreen} from './screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {CreatePostScreen} from './screens/CreatePost/CreatePostScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <View style={appStyles.container}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={'Home'}>
          <RootStack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <RootStack.Screen
            name={'Profile'}
            component={ProfileScreen}
            options={{title: 'My Profile'}}
            initialParams={{userId: 1}}
          />
          <RootStack.Screen name={'CreatePost'} component={CreatePostScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
