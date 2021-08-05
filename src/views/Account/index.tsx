import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ordersMock from '../Orders/ordersMock.json';
import Order from '../../components/Order';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigate = useNavigation();
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

  useEffect(() => {
    setOrders(ordersMock);
  }, []);
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
            <Text style={styles.titleShop}>Olá, Drogaria Melo </Text>
            <Text style={styles.email}>drogariameno@gmail.com </Text>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text style={styles.historyTitle}>Histórico de vendas</Text>
            <FlatList
              contentContainerStyle={{
                paddingHorizontal: 39,
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
