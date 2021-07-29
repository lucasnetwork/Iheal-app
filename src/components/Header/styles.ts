import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    height: 70 - Constants.statusBarHeight,
    marginTop: Constants.statusBarHeight,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#11BAFD',
    justifyContent: 'space-between',
  },

  titleContainer: {
    flexDirection: 'row',
  },

  title: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
});
