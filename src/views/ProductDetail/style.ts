import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  detail: {
    marginTop: 35,
    marginLeft: 20,

    fontWeight: 'bold',
    fontSize: 13.8,

    bottom: 3,
    lineHeight: 16,
    color: '#000000',
  },
  containerPriceAndQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  price: {
    fontWeight: '500',
    color: '#01579B',
    fontSize: 18,
    lineHeight: 21,
  },
  containerNameStore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  stripe: {
    top: 15,
    flex: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 0.5,
    width: '90%',
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 20,
    bottom: 3,
    lineHeight: 16,
    color: '#000000',
  },
  description: {
    marginHorizontal: 20,
    marginVertical: 6,
  },
  nameStore: {
    marginHorizontal: 20,
    fontSize: 12,
    fontWeight: '400',
    color: '#01579B',
    lineHeight: 13,
    right: 8,
  },
});
