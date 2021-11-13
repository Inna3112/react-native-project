import React, {useState} from 'react';
import {
  Alert,
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import {bodyStyles} from './BodyStyles';

export const Body = () => {
  const [inputValue, setInputValue] = useState('');
  const [profileText, setProfileText] = useState('Some profile data');

  const addProfile = () => {
    if (inputValue.trim()) {
      setProfileText(inputValue);
      setInputValue('');
    } else {
      Alert.alert('Enter profile data!');
    }
  };
  const addProfileByClick = () => {
    addProfile();
  };
  const addProfileByEnter = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (e.nativeEvent.key === 'Enter') {
      e.preventDefault();
      addProfile();
    }
  };
  return (
    <View style={bodyStyles.container}>
      <View style={bodyStyles.profile}>
        <Text style={bodyStyles.title}>Profile</Text>
        <Text>{profileText}</Text>
      </View>
      <View style={bodyStyles.inputBlock}>
        <TextInput
          style={bodyStyles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={'Enter your text'}
          placeholderTextColor={'blue'}
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize={'characters'}
          onKeyPress={addProfileByEnter}
        />
        <Button title={'Change profile'} onPress={addProfileByClick} />
      </View>
    </View>
  );
};
