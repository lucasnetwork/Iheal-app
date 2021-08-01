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
