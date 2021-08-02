import styles from './styles';
import logo from '../../assets/logo.png';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC<{
  buttonBack?: boolean;
  title?: string;
  showCart?: boolean;
}> = ({ buttonBack, title = '', showCart = true }) => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {buttonBack && (
          <TouchableOpacity
            onPress={() => {
              if (!navigate.canGoBack()) {
                return;
              }
              navigate.goBack();
            }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        {!title && <Image source={logo} />}
        <Text style={styles.title}>{`${title || 'IHeal'}`}</Text>
      </View>
      {showCart && (
        <TouchableOpacity onPress={() => navigate.navigate('cart')}>
          <AntDesign name="shoppingcart" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
