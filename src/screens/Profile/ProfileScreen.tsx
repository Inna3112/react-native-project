import React, {useCallback, useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {styles} from './ProfileScreenStyles';
import {ProfileScreenNavigationProp, ProfileScreenRouteProp} from '../../types';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {SuperText} from '../../components/SuperText/SuperText';

type PropsType = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen: React.FC<PropsType> = ({route, navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [profileText, setProfileText] = useState('Some profile data');
  const drawerIsOpen = useDrawerStatus();
  const {colors} = useTheme();

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
        <SuperText text="Prifile" superStyle={styles.title} />
        <SuperText text={profileText} superStyle={styles.text} />
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={[styles.input, {color: colors.text}]}
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
      <SuperText
        text={`userId: ${JSON.stringify(userId)}`}
        superStyle={styles.text}
      />
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({pressed}) => [styles.button, pressed && styles.buttonActive]}
          onPress={() => navigation.push('Profile')}>
          <SuperText
            text="Go to Profile... again"
            superStyle={styles.buttonText}
          />
        </Pressable>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({pressed}) => [styles.button, pressed && styles.buttonActive]}
          onPress={() => navigation.goBack()}>
          <SuperText text="Go to back" superStyle={styles.buttonText} />
        </Pressable>
      </View>
    </View>
  );
};
