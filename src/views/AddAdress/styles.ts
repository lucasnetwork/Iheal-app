import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 51,
    paddingBottom: 32,
  },
  containerInputs: {
    marginVertical: 24,
    flex: 1,
  },
  titleContainer: {
    marginTop: 19,
    alignItems: 'center',
  },
  title: {
    color: '#C4C4C4',
    fontSize: 14,
    marginTop: 12,
  },
  input: {
    alignSelf: 'stretch',
    flex: 1,
    maxHeight: 40,
    minHeight: 40,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 8,
  },
  row: {
    flexDirection: 'row',
  },
});
