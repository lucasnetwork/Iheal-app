/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11BAFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    marginBottom: 132,
  },
  logoText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36,
    color: '#fff',
    paddingLeft: 30,
  },
  logo: {
    width: 120,
    height: 100,
  },
  content: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cliente: {
    width: '100%',
    height: 50,
    backgroundColor: '#BAEBFE',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    color: '#fff',
    borderRadius: 10,
  },
  clienteLogo: {
    width: '20%',
    paddingLeft: 17,
  },
  clienteText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loja: {
    width: '100%',
    height: 50,
    marginTop: 10,
    backgroundColor: '#BAEBFE',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    color: '#fff',
    borderRadius: 10,
  },
  lojaLogo: {
    width: '20%',
    paddingLeft: 17,
  },
  lojaText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listdivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#BAEBFE',
    marginVertical: 29,
    alignSelf: 'flex-end',
  },
  visitante: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  visitanteText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  visitanteImage: {
    paddingLeft: 8,
    paddingTop: 6,
  },
});
