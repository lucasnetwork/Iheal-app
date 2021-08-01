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
    justifyContent: 'space-between',
  },
  address: {
    color: '#d3d3d3',
    fontSize: 12,
  },
  containerInfo: {
    marginVertical: 24,
    flex: 1,
    paddingHorizontal: 51,
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
    width: 123,
  },
});
