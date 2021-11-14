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
import {SafeAreaView} from 'react-native';
import {Header} from './src/components/Header/Header';
import {Body} from './src/components/Body/Body';
import {Footer} from './src/components/Footer/Footer';
import {appStyles} from './AppStyles';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <Header title={'MY APP'} />
      <Body />
      <Footer title={'Inna Fomichova 2021'} />
    </SafeAreaView>
  );
};

export default App;
