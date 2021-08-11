import styles from './styles';
import { useContextProviderAuth } from ';;/;;/services/contextAuth';
import Button from '../../components/Button';
import Product from '../../components/Product';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const ConfirmPayment = () => {
  const { cart } = useContextProvider();

  const navigate = useNavigation();
  return (
    <>
      <Header buttonBack showCart={false} title="Confirmar pagamento" />
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
            <Text style={{ marginTop: 9, marginHorizontal: 51 }}>
              Resumo da compra({cart.totalQuantity})
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
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 51,
                }}
                keyExtractor={item => `${item.id}`}
                data={cart.products}
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
            <Button small>Confirmar Pagamento</Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default ConfirmPayment;
