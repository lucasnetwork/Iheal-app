/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11BAFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    padding: 40,
  },
  containerImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flexDirection: 'row',
    marginBottom: 13.5,
  },
  logo: {
    width: 38,
    height: 38,
  },
  Textlogo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 7,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAgradecimento: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  textMain: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    marginTop: 19,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 13,
    marginTop: 7,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    height: 50,
    marginTop: 14,
    backgroundColor: '#FDC500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#01579B',
    fontSize: 14,
  },
  containerSignin: {
    width: '100%',
    marginTop: 14,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textCad: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textSignin: {
    width: '100%',
    color: '#01579B',
    fontSize: 14,
  },
});
