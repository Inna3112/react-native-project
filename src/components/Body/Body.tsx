import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {bodyStyles} from './BodyStyles';

export const Body = () => {
  const [inputValue, setInputValue] = useState('');
  const [profileText, setProfileText] = useState('Some profile data');

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
    <View style={bodyStyles.container}>
      <View style={bodyStyles.profile}>
        <Text style={bodyStyles.title}>Profile</Text>
        <Text style={bodyStyles.text}>{profileText}</Text>
      </View>
      <View style={bodyStyles.inputBlock}>
        <TextInput
          style={bodyStyles.input}
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
    </View>
  );
};
