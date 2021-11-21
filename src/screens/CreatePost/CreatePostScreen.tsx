import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {
  CreatePostScreenNavigationProp,
  CreatePostScreenRouteProp,
} from '../../types';
import {styles} from './styles';

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
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </View>
  );
};
