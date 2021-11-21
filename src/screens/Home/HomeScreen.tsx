import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type PropsType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<PropsType> = ({route, navigation}) => {
  const post = route.params?.post;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title={'Go to Profile'}
          onPress={() =>
            navigation.navigate({name: 'Profile', params: {userId: 11}})
          }
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title={'Create post'}
          onPress={() =>
            navigation.navigate({name: 'CreatePost', params: undefined})
          }
        />
      </View>
      {post ? <Text>My post: {post}</Text> : null}
    </View>
  );
};
