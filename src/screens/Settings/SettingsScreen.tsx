import React from 'react';
import {Text} from 'react-native';
import {styles} from './SettingsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Marker, Polygon} from 'react-native-maps';
// import customMarker from '../../assets/markerIcon.svg';

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>My map</Text>
      <MapView
        style={styles.map}
        provider="google"
        region={{
          latitude: 47.99696,
          longitude: 33.4713,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        liteMode>
        <Marker
          coordinate={{
            latitude: 47.99709,
            longitude: 33.47119,
          }}
          title="My home)"
          description="Welcome to my home!"
          image={require('../../assets/icon2.png')}
        />
        <Polygon
          coordinates={[
            {
              latitude: 47.9967,
              longitude: 33.47094,
            },
            {
              latitude: 47.99669,
              longitude: 33.4711,
            },
            {
              latitude: 47.99709,
              longitude: 33.47119,
            },
            {
              latitude: 47.99712,
              longitude: 33.47102,
            },
          ]}
          strokeColor={'red'}
        />
      </MapView>
    </SafeAreaView>
  );
};
