import styles from './styles';
import ordersMock from './ordersMock.json';
import Header from '../../components/Header';
import emotionCry from '../../assets/emotionCry.png';
import Order from '../../components/Order';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Orders = () => {
  const [orders, setOrders] = useState<
    Array<{
      id: number;
      total: string;
      date: string;
      clientName: string;
      products: Array<{
        name: string;
        quantity: number;
        price: string;
      }>;
    }>
  >([]);
  const navigate = useNavigation();

  useEffect(() => {
    setOrders(ordersMock);
  }, []);
  return (
    <>
      <Header showCart={false} />
      <View style={styles.container}>
        <Text style={styles.title}>Pedidos({orders.length})</Text>
        {orders.length > 0 ? (
          <>
            <View style={styles.containerOrders}>
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                data={orders}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                  <View style={styles.orderContainer}>
                    <Order
                      clientName={item.clientName}
                      date={item.date}
                      name={item.products[0].name}
                      price={item.products[0].price}
                      quant={item.products[0].quantity}
                      total={item.total}
                    />
                    <TouchableOpacity
                      onPress={() => navigate.navigate('confirmPayment')}
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
