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
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './src/components/Header/Header';
import {Body} from './src/components/Body/Body';
import {Footer} from './src/components/Footer/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'My app'} />
      <Body />
      <Footer title={'Inna Fomichova 2021'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
