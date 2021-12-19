import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SectionList,
  Pressable,
} from 'react-native';
import {
  SearchHeroScreenNavigationProp,
  SearchHeroScreenRouteProp,
  ModeType,
} from '../../types';
import {styles} from './SearchHeroScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {ItemType} from '../../api/api';
import {Hero} from '../../components/Hero/Hero';
import {getHeroes} from '../../store/search-hero/reducers';
import {Starship} from '../../components/Starship/Starship';
import {getStarships} from '../../store/search-starships/reducers';
import {Item} from '../../components/Item/Item';

type PropsType = {
  navigation: SearchHeroScreenNavigationProp;
  route: SearchHeroScreenRouteProp;
};

export const SearchHeroScreen: React.FC<PropsType> = ({}) => {
  const dispatch = useDispatch();
  const [toggleMode, setToggleMode] = useState<ModeType>('');
  // const {colors} = useTheme();
  useEffect(() => {
    dispatch(getHeroes());
    dispatch(getStarships());
  }, [dispatch]);

  const heroes = useSelector<AppRootStateType, ItemType[] | null>(
    state => state.heroReducer.heroes,
  );
  const starships = useSelector<AppRootStateType, ItemType[] | null>(
    state => state.starshipsReducer.starships,
  );
  const isLoading = useSelector<AppRootStateType, boolean>(
    state => state.starshipsReducer.isLoading,
  );
  const data = [
    {
      title: 'Heroes',
      data: heroes?.map(hero => hero.name),
    },
    {
      title: 'Starships',
      data: starships?.map(starship => starship.name),
    },
  ];
  const searchHandler = () => {
    setToggleMode('');
    dispatch(getHeroes());
    dispatch(getStarships());
  };
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/*<TextInput*/}
      {/*  style={[styles.input, {color: colors.text}]}*/}
      {/*  multiline*/}
      {/*  placeholder="Enter hero's name"*/}
      {/*  value={name}*/}
      {/*  onChangeText={onChangeHandler}*/}
      {/*/>*/}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={searchHandler}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {!toggleMode && (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Pressable
              style={({pressed}) => [
                styles.sectionPressable,
                pressed && styles.sectionPressableActive,
              ]}
              onPress={() => {
                if (title === 'Heroes') {
                  setToggleMode('heroes');
                } else if (title === 'Starships') {
                  setToggleMode('starships');
                } else {
                  setToggleMode('');
                }
              }}>
              <Text style={styles.sectionHeader}>{title}</Text>
            </Pressable>
          )}
        />
      )}
      {toggleMode === 'heroes' && (
        <FlatList
          data={heroes}
          renderItem={({item}) => <Hero hero={item} />}
          keyExtractor={item => item.uid}
        />
      )}
      {toggleMode === 'starships' && (
        <FlatList
          data={starships}
          renderItem={({item}) => <Starship starship={item} />}
          keyExtractor={item => item.uid}
        />
      )}
    </View>
  );
};
