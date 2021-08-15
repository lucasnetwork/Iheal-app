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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const { userData, setauthenticated, setUserData } = useContextProviderAuth();
  const { cart, createNotification } = useContextProvider();
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
    try {
      const response = await api.get(`/orders/store`);

      setOrders(response.data);
    } catch (error) {
      createNotification('Ocorreu um erro ao carregar');
    }
  }, [cart]);
  useEffect(() => {
    loadUserOrder();
  }, []);
  const logout = useCallback(async () => {
    setUserData({
      token: '',
      user: {
        id: '',
        username: '',
        email: '',
        address: '',
        cep: '',
        numberHouse: '',
        complement: '',
        district: '',
        uf: '',
      },
    });
    await AsyncStorage.removeItem('token');
    navigate.navigate('ChooseUserType');
    setauthenticated(false);
  }, []);
  return (
    <>
      <Header />
      <View style={styles.container}>
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
              <TouchableOpacity onPress={() => logout()}>
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
