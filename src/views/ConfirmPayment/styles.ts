import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressContainer: {
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
    paddingBottom: 16,
    flexDirection: 'row',
    paddingTop: 32,
    justifyContent: 'space-between',
    marginHorizontal: 51,
  },
  containerProducts: {
    flex: 1,
    marginTop: 9,
    paddingTop: 12,
  },
  containerProduct: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  productContainer: {
    marginBottom: 12,
  },
  titleProducts: {
    fontSize: 12,
  },
  titleProduct: {
    fontSize: 10,
  },
  titleShop: {
    fontSize: 10,
    color: '#A8A8B3',
  },
  address: {
    color: '#d3d3d3',
    fontSize: 12,
  },
  containerInfo: {
    flex: 1,
  },
  containerButtons: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderTopColor: 'rgba(0, 0, 0, 0.25)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textButton: {
    color: '#01579B',
    fontSize: 12,
  },
  textPrice: {
    fontSize: 14,
    marginBottom: 8,
  },
  containerButton: {
    width: 162,
  },
});
