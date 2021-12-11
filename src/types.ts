import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

// export type RootStackParamList = {
//   Home: {post: string} | undefined;
//   Profile: {userId: number} | undefined;
//   CreatePost: undefined;
// };
export type RootStackParamList = HomeStackParamList & ProfileStackParamList;

export type HomeStackParamList = {
  Home: {heroName: string} | undefined;
  SearchHero: undefined;
};
export type ProfileStackParamList = {
  Profile: {userId: number} | undefined;
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;
export type HomeScreenRouteProp = RouteProp<HomeStackParamList>;

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;
export type ProfileScreenRouteProp = RouteProp<ProfileStackParamList>;

export type SearchHeroScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;
export type SearchHeroScreenRouteProp = RouteProp<
  HomeStackParamList,
  'SearchHero'
>;

export type TabParamList = {
  Profile: NavigatorScreenParams<ProfileStackParamList>;
  Settings: undefined;
};

export type DrawerParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Profile: TabParamList;
};
