import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerOrders: {
    flex: 1,
  },
  containerProduct: {
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  buttonOrder: {
    flex: 1,
    maxWidth: 23,
    alignSelf: 'stretch',
    borderLeftColor: '#DADADA',
    borderLeftWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 24,
    marginTop: 16,
    color: '#A8A8B3',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
  },
  orderSize: {
    fontSize: 10,
  },
  orderTitle: {
    fontWeight: '700',
  },
  clientName: {
    color: '#11BAFD',
    fontSize: 10,
    fontWeight: '700',
  },
  orderContainer: {
    marginBottom: 10,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 8,
    height: 107,
    flexDirection: 'row',
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
