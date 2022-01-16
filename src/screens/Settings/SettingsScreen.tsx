import React, {useRef} from 'react';
import {styles} from './SettingsScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import {SuperText} from '../../components/SuperText/SuperText';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {ThemeType} from '../../store/appReducers';
import {CustomLightTheme} from '../../constants';

export const SettingsScreen = () => {
  const theme = useSelector<AppRootStateType, ThemeType>(
    state => state.appReducer.theme,
  );
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
      <SuperText text="My map" superStyle={styles.text} />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 47.99696,
          longitude: 33.4713,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        ref={mapRef}
        onMarkerPress={onMarkerClick}
        userInterfaceStyle={theme === CustomLightTheme ? 'light' : 'dark'}
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
