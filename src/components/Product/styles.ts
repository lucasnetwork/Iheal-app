import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 88,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: '#E5E5E5',
    borderWidth: 2,
    paddingTop: 14,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 16,
  },

  image: {
    width: 36,
    height: 56,
  },
  content: {
    flex: 1,
    marginLeft: 24,
  },

  title: {
    fontSize: 10,
    fontWeight: '500',
  },
  description: {
    fontSize: 10,
    opacity: 0.6,
  },
  price: {
    fontSize: 12,
    fontWeight: '500',
    color: '#01579B',
  },
});
