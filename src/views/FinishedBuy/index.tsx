import styles from './styles';
import Button from '../../components/Button';
import { useContextProvider } from '../../services/context';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FinishedBuy = () => {
  const { cart } = useContextProvider();
  const navigate = useNavigation();
  return (
    <>
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
              <View style={styles.containerProduct}>
                <View>
                  <Text style={styles.titleProduct}>Nome do Produto 1</Text>
                  <Text style={styles.titleShop}>Nome da Loja</Text>
                </View>
                <View>
                  <Text style={styles.titleShop}>Quant:1</Text>
                </View>
                <View>
                  <Text style={styles.titleProduct}>R$ 00,00</Text>
                </View>
              </View>
              <View style={styles.containerProduct}>
                <View>
                  <Text style={styles.titleProduct}>Nome do Produto 1</Text>
                  <Text style={styles.titleShop}>Nome da Loja</Text>
                </View>
                <View>
                  <Text style={styles.titleShop}>Quant:1</Text>
                </View>
                <View>
                  <Text style={styles.titleProduct}>R$ 00,00</Text>
                </View>
              </View>
              <View style={styles.containerProduct}>
                <View>
                  <Text style={styles.titleProduct}>Nome do Produto 1</Text>
                  <Text style={styles.titleShop}>Nome da Loja</Text>
                </View>
                <View>
                  <Text style={styles.titleShop}>Quant:1</Text>
                </View>
                <View>
                  <Text style={styles.titleProduct}>R$ 00,00</Text>
                </View>
              </View>
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
            <Button small>Confirmar</Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default FinishedBuy;
