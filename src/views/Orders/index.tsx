import styles from './styles';
import ordersMock from './ordersMock.json';
import Header from '../../components/Header';
import emotionCry from '../../assets/emotionCry.png';
import Order from '../../components/Order';
import api from '../../config/api';
import { useContextProviderAuth } from '../../services/contextAuth';
import { useContextProvider } from '../../services/context';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Orders = () => {
  const { userData } = useContextProviderAuth();
  const { cart } = useContextProvider();
  const [ordersOwner, setOrdersOwner] = useState<
    Array<{
      id: string;
      product: {
        Description: string;
        name: string;
        price: number;
        image: {
          url: string;
        };
      };
      // eslint-disable-next-line camelcase
      user_order: {
        id: string;
        username: string;
        address: string;
      };
      total: number;
      date: string;
      quantity: number;
    }>
  >([]);

  const navigate = useNavigation();
  const loadUserOrders = useCallback(async () => {
    await api
      .get(`/orders/store`)
      .then(response => {
        setOrdersOwner(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cart]);
  useEffect(() => {
    loadUserOrders();
  }, []);

  return (
    <>
      <Header showCart={false} />
      <View style={styles.container}>
        <Text style={styles.title}>Pedidos({ordersOwner.length})</Text>
        {ordersOwner.length > 0 ? (
          <>
            <View style={styles.containerOrders}>
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                data={ordersOwner}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                  <View style={styles.orderContainer}>
                    <Order
                      clientName={item?.user_order.username}
                      date={item?.date}
                      name={item?.product.name}
                      price={`${item?.product.price}`}
                      quant={item.quantity}
                      total={`${item?.total}`}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        navigate.navigate('confirmPayment', { id: item.id })
                      }
                      style={styles.buttonOrder}
                    >
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={24}
                        color="#11BAFD"
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </>
        ) : (
          <View style={styles.containerWithoutProducts}>
            <Image source={emotionCry} width={105} height={105} />
            <Text style={styles.textWithourProducts}>Nenhum Pedido Ainda</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Orders;
