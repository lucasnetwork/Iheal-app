import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 70,
  },
  input: {
    maxHeight: 40,
    minHeight: 40,
    alignSelf: 'stretch',
    borderColor: '#DADADA',
    borderWidth: 1,
    flex: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 8,
  },
  buttonImage: {
    backgroundColor: '#01579B',
    opacity: 0.78,
    width: 120,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 18,
  },
  textImage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});
