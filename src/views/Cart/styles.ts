import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerProducts: {
    flex: 1,
  },
  title: {
    marginLeft: 24,
    marginTop: 16,
    color: '#A8A8B3',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
  },
  productContainer: {
    marginBottom: 12,
  },
  containerWithoutProducts: {
    flex: 1,
    alignItems: 'center',
  },
  textWithourProducts: {
    color: '#A8A8B3',
    fontSize: 12,
    marginTop: 24,
  },
  totalContainer: {
    borderTopColor: 'rgba(0,0,0,.25)',
    borderTopWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    color: '#01579B',
    fontSize: 10,
  },
  buttonContainer: {
    width: 123,
    height: '100%',
  },
});
