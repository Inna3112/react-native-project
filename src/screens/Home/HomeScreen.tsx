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
  const post = route.params?.post;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate({name: 'CreatePost', params: undefined})
          }>
          <Text style={styles.buttonText}>Create post</Text>
        </TouchableOpacity>
      </View>
      {post ? <Text>My post: {post}</Text> : null}
    </View>
  );
};
