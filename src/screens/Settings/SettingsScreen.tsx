import React, {useRef} from 'react';
import {Text} from 'react-native';
import {styles} from './SettingsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';

export const SettingsScreen = () => {
  const mapRef = useRef<MapView>(null);
  const coordinates = [
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
  ];
  const region = {
    latitude: 47.99709,
    longitude: 33.47119,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const onMarkerClick = () => {
    mapRef.current?.animateToRegion(region);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>My map</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 47.99696,
          longitude: 33.4713,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        ref={mapRef}
        onMarkerPress={onMarkerClick}
        liteMode>
        <Marker
          coordinate={{
            latitude: 47.99709,
            longitude: 33.47119,
          }}
          title="My home)"
          description="7-i Zarichnyi 9"
          image={require('../../assets/icon2.png')}
        />
        <Polygon coordinates={coordinates} strokeColor={'red'} />
      </MapView>
    </SafeAreaView>
  );
};
