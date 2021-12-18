import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './HomeScreenStyles';
import {HomeScreenNavigationProp, HomeScreenRouteProp} from '../../types';

// type PropsType = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type PropsType = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen: React.FC<PropsType> = ({route, navigation}) => {
  const name = route.params?.heroName;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate({name: 'SearchHero', params: undefined})
          }>
          <Text style={styles.buttonText}>Search hero</Text>
        </TouchableOpacity>
      </View>
      {name ? <Text>My post: {name}</Text> : null}
    </View>
  );
};
