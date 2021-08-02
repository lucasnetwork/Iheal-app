import styles from './styles';
import ordersMock from './ordersMock.json';
import Header from '../../components/Header';
import emotionCry from '../../assets/emotionCry.png';
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
      <Header />
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
                    <View style={{ flex: 1, padding: 8 }}>
                      <View style={styles.containerProduct}>
                        <Text
                          style={{ ...styles.orderSize, ...styles.orderTitle }}
                        >
                          Total:R$ 000,00
                        </Text>
                        <Text
                          style={{ ...styles.orderSize, fontWeight: '300' }}
                        >
                          00/00/0000
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <View style={styles.containerProduct}>
                          <Text style={styles.orderSize}>Nome Do Produto</Text>
                          <Text
                            style={{ ...styles.orderSize, color: '#A8A8B3' }}
                          >
                            quant:1
                          </Text>
                          <Text style={styles.orderSize}>R$ 00,00</Text>
                        </View>
                      </View>
                      <Text style={styles.clientName}>Nome do cliente</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonOrder}>
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
