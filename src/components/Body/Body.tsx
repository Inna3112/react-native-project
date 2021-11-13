import React, {useState} from 'react';
import {
  Alert,
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

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
      addProfile();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.title}>Profile</Text>
        <Text>{profileText}</Text>
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profile: {
    height: 100,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '65%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inputBlock: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
