import styles from './styles';
import Button from '../../components/Button';
import Product from '../../components/Product';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import api from '../../config/api';
import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

interface ProductDetailProps {
  username: string;
  product: {
    description: string;
    image: string;
    name: string;
    price: number;
    priceFormat: string;
    stock: number;
  };
  paid: boolean;
  total: number;
  totalFormat: string;
}

const ConfirmPayment = () => {
  const { cart, createNotification } = useContextProvider();
  const route = useRoute();
  const { id }: any = route.params;
  const [Order, setOrder] = useState({
    user_order: {
      username: '',
      address: '',
      numberHouse: '',
      cep: '',
    },
    product: {
      name: '',
      Description: '',
      price: 0,
    },
    total: 0,
    quantity: 0,
    status: '',
  });
  const navigate = useNavigation();
  const loadUserOrder = useCallback(async () => {
    try {
      const response = await api.get(`/orders/${id}`);

      setOrder(response.data);
    } catch (error) {
      createNotification('Ocorreu um erro tente novamente mais tarde');
    }
  }, [id]);
  const confirmPaymentOfOrder = async () => {
    try {
      await api.put(`/orders/${id}`, {
        status: 'paid',
      });
      createNotification('Pagamento do pedido confirmado');
    } catch (error) {
      createNotification(
        'Não foi possivel confirmar o pedido, tente Novamente'
      );
    }
  };
  useEffect(() => {
    loadUserOrder();
  }, []);

  return (
    <>
      <Header buttonBack showCart={false} title="Confirmar pagamento" />
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={styles.addressContainer}>
            <View>
              <Text>{Order?.user_order?.username}</Text>
              <Text style={styles.address}>
                Rua {Order?.user_order?.address}, n°{' '}
                {Order?.user_order?.numberHouse}
              </Text>

              <Text style={styles.address}>Imperatriz - MA</Text>
              <Text style={styles.address}>{Order?.user_order?.cep}</Text>
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
            <Text style={{ marginTop: 9, marginHorizontal: 51 }}>
              Resumo da compra({Order?.quantity})
            </Text>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: 'rgba(0, 0, 0, 0.2)',
                marginTop: 12,

                marginHorizontal: 51,
              }}
            />
            <View style={styles.containerProducts}>
              <Product
                buttonRemove
                product={{
                  name: Order?.product?.name,
                  description: Order?.product?.Description,
                  priceFormat: `R$ ${Order?.product?.price},00`,
                  image: Order?.product?.image?.url,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerButtons}>
          <View>
            <Text style={{ ...styles.textButton, ...styles.textPrice }}>
              Total: {`R$${Order?.total},00`}
            </Text>
            <Text style={styles.textButton}>*Pagamento em dinheiro</Text>
          </View>
          <View style={styles.containerButton}>
            <Button small onPress={confirmPaymentOfOrder}>
              Confirmar Pagamento
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default ConfirmPayment;
