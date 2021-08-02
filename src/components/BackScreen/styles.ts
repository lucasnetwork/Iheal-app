/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    backgroundColor: '#11BAFD',
    paddingHorizontal: 24,
    flexDirection: 'row',
    paddingTop: getStatusBarHeight(),
    alignItems: 'center',
  },
  title: {
    paddingLeft: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
