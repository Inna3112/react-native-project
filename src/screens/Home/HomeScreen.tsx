import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './HomeScreenStyles';
import {HomeScreenNavigationProp, HomeScreenRouteProp} from '../../types';
import {SuperText} from '../../components/SuperText/SuperText';

// type PropsType = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type PropsType = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen: React.FC<PropsType> = ({route, navigation}) => {
  const name = route.params?.heroName;

  return (
    <View style={styles.container}>
      <SuperText text="Home" superStyle={styles.text} />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate({name: 'SearchHero', params: undefined})
          }>
          <SuperText text="Search hero" superStyle={styles.buttonText} />
        </TouchableOpacity>
      </View>
      {name ? <SuperText text={`My post: ${name}`} /> : null}
    </View>
  );
};
