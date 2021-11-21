import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profile: {
    height: 100,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: 'green',
    fontSize: 16,
    fontWeight: '400',
  },
  inputBlock: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  buttonWrapper: {
    margin: 10,
  },
});
