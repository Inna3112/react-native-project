import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(5,55,164,0.96)',
    background: '#f1dddd',
    text: '#151511',
    card: '#9890C7',
  },
};
export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgba(5,55,164,0.96)',
    background: '#626161',
    text: 'rgba(57,57,136,0.56)',
    card: '#433e6b',
  },
};
