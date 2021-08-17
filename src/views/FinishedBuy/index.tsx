import styles from './styles';
import Button from '../../components/Button';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import api from '../../config/api';

import { useContextProviderAuth } from '../../services/contextAuth';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const FinishedBuy = () => {
  const { cart, createNotification } = useContextProvider();
  const { userData } = useContextProviderAuth();
  const navigate = useNavigation();
  const loadProductOrder = async (id: number) => {
    try {
      const response = await api.post(`/orders`, {
        product: { id },
        total: cart.total,
        quantity: cart.totalQuantity,
        status: 'unpaid',
      });

      createNotification('Pagamento finalizado "_"');
    } catch (error) {
      createNotification('Aconteu algo inesperado');
    }
  };

  const CreateOrder = () => {
    const promises = cart.products.map(product => {
      const { id } = product;
      return loadProductOrder(id);
    });
    Promise.all(promises)
      .then(() => {
        createNotification('Compra realizada');
        navigate.navigate('clientTab');
      })
      .catch(() => createNotification('Aconteu algo inesperado'));
  };
  return (
    <>
      <Header buttonBack />
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={styles.addressContainer}>
            <View>
              <Text>{userData.user.username}</Text>
              <Text style={styles.address}>
                Rua {userData.user.address}, n° {userData.user.numberHouse}
              </Text>
              <Text style={styles.address}>{userData.user.district}</Text>
              <Text style={styles.address}>Imperatriz - MA</Text>
              <Text style={styles.address}>{userData.user.cep}</Text>
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
