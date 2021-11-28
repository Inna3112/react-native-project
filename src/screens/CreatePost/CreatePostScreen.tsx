import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  CreatePostScreenNavigationProp,
  CreatePostScreenRouteProp,
} from '../../types';
import {styles} from './CreatePostScreenStyles';

type PropsType = {
  navigation: CreatePostScreenNavigationProp;
  route: CreatePostScreenRouteProp;
};

export const CreatePostScreen: React.FC<PropsType> = ({navigation}) => {
  const [postText, setPostText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
