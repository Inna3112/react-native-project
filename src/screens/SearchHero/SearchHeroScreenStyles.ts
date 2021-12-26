import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E6D4DE',
  },
  loading: {
    color: 'green',
    fontSize: 24,
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#9890C7',
    borderRadius: 25,
    padding: 10,
    width: 150,
    margin: 5,
  },
  buttonText: {
    textTransform: 'uppercase',
  },
  sectionPressable: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  sectionPressableActive: {
    backgroundColor: '#9890C7',
  },
  sectionHeader: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },
});
