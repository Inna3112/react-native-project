import React, {useEffect} from 'react';
import {View} from 'react-native';
import {appStyles} from './AppStyles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './store/store';
import {Main} from './Main';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import RemoteMessage = FirebaseMessagingTypes.RemoteMessage;

const App = () => {
  const {store, persistor} = reduxStore();
  //прослуховує пуші коли додаток відкритий
  const getPushData = (message: RemoteMessage) => {
    console.log('message: ', message);
  };
  messaging().onMessage(getPushData);
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };
  useEffect(() => {
    getToken();
  }, []);
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
