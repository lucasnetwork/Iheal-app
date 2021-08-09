import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const QuantitySelector = ({ quantity, setQuantity }) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'transparent',
    width: 110,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  butonText: {
    fontSize: 18,
    color: '#11BAFD',
  },
  quantity: {
    color: '#007eb9',
  },
});

export default QuantitySelector;
