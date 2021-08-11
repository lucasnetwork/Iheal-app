import styles from './styles';
import Button from '../../components/Button';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import api from '../../config/api';

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const FinishedBuy = () => {
  const { cart, createNotification } = useContextProvider();

  const navigate = useNavigation();
  const loadProductOrder = async (id: number) => {
    await api
      .post(`/orders`, {
        product: { id },
        total: cart.totalQuantity,
      })
      .then(response => {
        console.log(response.data);
        console.log('deucerto');
      })
      .catch(error => {
        console.log(error);
      });
  };
  // const CartOrder = async () => {
  //   await api.get('/orders', {}).then(response => {
  //     const newOrder = mapData(response.data);
  //   });
  // };

  const CreateOrder = () => {
    cart.products.map(product => {
      const { id } = product;
      return loadProductOrder(id);
    });
    createNotification('Compra realizada');
  };
  return (
    <>
      <Header buttonBack />
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={styles.addressContainer}>
            <View>
              <Text>Nome do usuário</Text>
              <Text style={styles.address}>Rua Nome da Rua, n° 000</Text>
              <Text style={styles.address}>Nome do Bairro,</Text>
              <Text style={styles.address}>Imperatriz - MA</Text>
              <Text style={styles.address}>00000-000</Text>
            </View>
            <TouchableOpacity onPress={() => navigate.navigate('adress')}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={24}
                color="#FDC500"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginTop: 9 }}>
              Resumo da compra({cart.totalQuantity})
            </Text>
            <View style={styles.containerProducts}>
              <FlatList
                keyExtractor={item => `${item.id}`}
                data={cart.products}
                renderItem={({ item }) => (
                  <View style={styles.containerProduct}>
                    <View>
                      <Text style={styles.titleProduct}>{item.name}</Text>
                      <Text style={styles.titleShop}>Nome da Loja</Text>
                    </View>
                    <View>
                      <Text style={styles.titleShop}>
                        Quant:{item.quantity}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.titleProduct}>
                        {item.priceFormatTotal}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerButtons}>
          <View>
            <Text style={{ ...styles.textButton, ...styles.textPrice }}>
              Total: {cart.totalPriceFormat}
            </Text>
            <Text style={styles.textButton}>*Pagamento em dinheiro</Text>
          </View>
          <View style={styles.containerButton}>
            <Button small onPress={() => CreateOrder()}>
              Confirmar
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default FinishedBuy;
