import styles from './styles';
import logo from '../../assets/logo.png';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={logo} />
        <Text style={styles.title}>IHeal</Text>
      </View>
      <TouchableOpacity onPress={() => navigate.navigate('cart')}>
        <AntDesign name="shoppingcart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
