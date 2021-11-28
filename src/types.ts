import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

// export type RootStackParamList = {
//   Home: {post: string} | undefined;
//   Profile: {userId: number} | undefined;
//   CreatePost: undefined;
// };
export type RootStackParamList = HomeStackParamList & ProfileStackParamList;

export type HomeStackParamList = {
  Home: {post: string} | undefined;
  CreatePost: undefined;
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

export type CreatePostScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;
export type CreatePostScreenRouteProp = RouteProp<
  HomeStackParamList,
  'CreatePost'
>;

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};
