import React, {useState} from 'react';
import {
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

  const addProfileText = () => {
    if (inputValue.trim()) {
      setProfileText(inputValue);
      setInputValue('');
    }
  };
  const addProfile = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === 'Enter') {
      setProfileText(inputValue);
      setInputValue('');
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
          autoFocus={true}
          onKeyPress={addProfile}
        />
        <Button title={'Change profile'} onPress={addProfileText} />
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
