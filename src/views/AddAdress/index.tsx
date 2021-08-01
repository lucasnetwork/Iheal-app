import styles from './styles';
import Button from '../../components/Button';
import cart from '../../assets/cart.png';
import { View, TextInput, Image, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AddAdress = () => {
  const navigate = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={cart} width={47} height={47} resizeMode="contain" />
          <Text style={styles.title}>Pagamento em dinheiro</Text>
        </View>
        <View style={styles.containerInputs}>
          <TextInput style={styles.input} placeholder="Nome Completo" />
          <TextInput style={styles.input} placeholder="CEP" />
          <TextInput style={styles.input} placeholder="Rua" />
          <View style={styles.row}>
            <TextInput
              style={{ ...styles.input, flex: 3, marginRight: 16 }}
              placeholder="Bairro"
            />
            <TextInput style={styles.input} placeholder="N°" />
          </View>
          <TextInput style={styles.input} placeholder="Complemento" />
          <View style={styles.row}>
            <TextInput
              style={{ ...styles.input, flex: 3, marginRight: 16 }}
              placeholder="Cidade"
            />
            <TextInput style={styles.input} placeholder="Estado" />
          </View>
        </View>
        <Button onPress={() => navigate.navigate('finishedBuy')}>
          Confirmar
        </Button>
      </View>
    </>
  );
};

export default AddAdress;
