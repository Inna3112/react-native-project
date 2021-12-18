import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, FlatList} from 'react-native';
import {
  SearchHeroScreenNavigationProp,
  SearchHeroScreenRouteProp,
} from '../../types';
import {styles} from './SearchHeroScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {HeroType} from '../../api/api';
import {Hero} from '../../components/Hero/Hero';
import {getHeroes, setError} from '../../store/search-hero/reducers';
import {useTheme} from '@react-navigation/native';

type PropsType = {
  navigation: SearchHeroScreenNavigationProp;
  route: SearchHeroScreenRouteProp;
};

export const SearchHeroScreen: React.FC<PropsType> = ({navigation}) => {
  const dispatch = useDispatch();
  const heroes = useSelector<AppRootStateType, HeroType[] | null>(
    state => state.heroReducer.heroes,
  );
  const error = useSelector<AppRootStateType, string>(
    state => state.heroReducer.error,
  );
  const [name, setName] = useState('');
  const {colors} = useTheme();

  const onChangeHandler = (text: string) => {
    dispatch(setError({error: ''}));
    setName(text);
  };
  const searchHandler = () => {
    dispatch(getHeroes(name));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {color: colors.text}]}
        multiline
        placeholder="Enter hero's name"
        value={name}
        onChangeText={onChangeHandler}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={searchHandler}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {heroName: name},
            merge: true,
          });
        }}>
        <Text style={styles.buttonText}>Back to home</Text>
      </TouchableOpacity>
      <FlatList
        data={heroes}
        renderItem={({item}) => <Hero hero={item} />}
        keyExtractor={item => item.height}
      />
    </View>
  );
};
