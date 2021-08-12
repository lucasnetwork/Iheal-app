import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ordersMock from '../Orders/ordersMock.json';
import Order from '../../components/Order';
import { useContextProviderAuth } from '../../services/contextAuth';
import api from '../../config/api';
import { useContextProvider } from '../../services/context';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const { userData } = useContextProviderAuth();
  const { cart } = useContextProvider();
  const navigate = useNavigation();
  const [orders, setOrders] = useState<
    Array<{
      id?: string | number | null;
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
      quantity: number;
      date: string;
    }>
  >([]);
  const loadUserOrder = useCallback(async () => {
    await api
      .get(`/orders/store`)
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cart]);
  useEffect(() => {
    loadUserOrder();
  }, []);
  console.log(orders);
  console.log('pedido do cliente');
  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* <Text style={styles.title}>Olá, Visitante</Text>
        <Text style={styles.text}>
          Acesse sua conta para comprar online nas farmacias mais proximas de
          você!
        </Text>
        <View style={styles.Containerbuttons}>
          <View style={{ ...styles.Containerbutton, marginRight: 8 }}>
            <Button small onPress={() => navigate.navigate('SignInClient')}>
              Entrar
            </Button>
          </View>
          <View style={styles.Containerbutton}>
            <Button small onPress={() => navigate.navigate('SignUpClient')}>
              Cadastrar-se
            </Button>
          </View>
        </View> */}
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <View style={styles.containerTitle}>
            <Text style={styles.titleShop}>
              Olá, {userData ? userData?.user.username : 'visitante'}
            </Text>
            <Text style={styles.email}>
              {userData ? userData?.user.email : ''}
            </Text>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text style={styles.historyTitle}>Histórico de vendas</Text>
            <FlatList
              contentContainerStyle={{
                paddingHorizontal: 39,
              }}
              data={orders}
              keyExtractor={item => `${item?.id}`}
              renderItem={({ item }) => (
                <View style={styles.orderContainer}>
                  <Order
                    clientName={item.user_order.username}
                    date={item.date}
                    name={item.product.name}
                    price={`${item.product.price}`}
                    quant={item.quantity}
                    total={`${item.total}`}
                  />
                </View>
              )}
            />
            <View style={styles.loggoutContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigate.navigate('signIn');
                }}
              >
                <Text style={styles.loggoutText}>Sair</Text>
              </TouchableOpacity>
              <View style={styles.appInfo}>
                <Text style={styles.appInfoText}>IHEAL</Text>
                <Text style={styles.appInfoText}>VERSÃO 1.0</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Account;
