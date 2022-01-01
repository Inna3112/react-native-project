import React from 'react';
import {View} from 'react-native';
import {appStyles} from './AppStyles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './store/store';
import {Main} from './Main';

const App = () => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <View style={appStyles.container}>
            <Main />
          </View>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
