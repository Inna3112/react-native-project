import React, {useState} from 'react';
import {
  Alert,
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {styles} from './styles';
import {ProfileScreenNavigationProp, ProfileScreenRouteProp} from '../../types';

type PropsType = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen: React.FC<PropsType> = ({route, navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [profileText, setProfileText] = useState('Some profile data');

  const userId = route.params;

  const addProfileText = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    const text = e.nativeEvent.text;
    if (text.trim()) {
      setProfileText(text);
      setInputValue('');
    } else {
      Alert.alert('Enter profile data!');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>{profileText}</Text>
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={'Enter your text and press "Enter"'}
          placeholderTextColor={'blue'}
          autoCorrect={false}
          autoCapitalize={'characters'}
          multiline={false}
          onSubmitEditing={addProfileText}
        />
      </View>
      <Text style={styles.text}>userId: {JSON.stringify(userId)}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Profile... again"
          onPress={() => navigation.push('Profile')}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Go to back" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Go to Home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
