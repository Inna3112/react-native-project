import {StyleSheet} from 'react-native';

export const bodyStyles = StyleSheet.create({
  container: {
    flex: 9,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
