import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Cart = () => (
  <View style={styles.container}>
    <Text>carrinho</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cart;
