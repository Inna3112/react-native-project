import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: {post: string} | undefined;
  Profile: {userId: number} | undefined;
  CreatePost: undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;
export type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'CreatePost'
>;

export type CreatePostScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;
export type CreatePostScreenRouteProp = RouteProp<
  RootStackParamList,
  'CreatePost'
>;
