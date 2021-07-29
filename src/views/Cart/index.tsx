import styles from './styles';
import Header from '../../components/Header';
import { View, Text } from 'react-native';
import React from 'react';

const Cart = () => (
  <>
    <Header />
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Visitante</Text>
    </View>
  </>
);

export default Cart;
