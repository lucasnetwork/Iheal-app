import styles from './styles';
import Header from '../../components/Header';
import { useContextProvider } from '../../services/context';
import Product from '../../components/Product';
import Button from '../../components/Button';
import emotionCry from '../../assets/emotionCry.png';
import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const { cart } = useContextProvider();
  const navigate = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Produtos no Carrinho({cart.totalQuantity})
        </Text>
        {cart.totalQuantity > 0 ? (
          <>
            <View style={styles.containerProducts}>
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                data={cart.products}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                  <View style={styles.productContainer}>
                    <Product
                      buttonRemove
                      product={{
                        name: item.name,
                        description: item.description,
                        priceFormat: item.priceFormat || '',
                        image: item.image,
                      }}
                    />
                  </View>
                )}
              />
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>
                Total: {cart.totalPriceFormat}
              </Text>
              <View style={styles.buttonContainer}>
                <Button onPress={() => navigate.navigate('adress')} small>
                  Comprar
                </Button>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.containerWithoutProducts}>
            <Image source={emotionCry} width={105} height={105} />
            <Text style={styles.textWithourProducts}>
              Nenhum produto adicionado no carinho
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Cart;
