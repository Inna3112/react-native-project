import React, {useCallback, useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {styles} from './ProfileScreenStyles';
import {ProfileScreenNavigationProp, ProfileScreenRouteProp} from '../../types';
import {useDrawerStatus} from '@react-navigation/drawer';

type PropsType = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen: React.FC<PropsType> = ({route, navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [profileText, setProfileText] = useState('Some profile data');
  const drawerIsOpen = useDrawerStatus();

  const userId = route.params;

  const addProfileText = useCallback(
    (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      const text = e.nativeEvent.text;
      if (text.trim()) {
        setProfileText(text);
        setInputValue('');
      } else {
        Alert.alert('Enter profile data!');
      }
    },
    [],
  );
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
          showSoftInputOnFocus={drawerIsOpen !== 'open'}
        />
      </View>
      <Text style={styles.text}>userId: {JSON.stringify(userId)}</Text>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#E6D4DE' : '#9890C7'},
            styles.button,
          ]}
          onPress={() => navigation.push('Profile')}>
          <Text style={styles.buttonText}>Go to Profile... again</Text>
        </Pressable>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#E6D4DE' : '#9890C7'},
            styles.button,
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go to back</Text>
        </Pressable>
      </View>
    </View>
  );
};
