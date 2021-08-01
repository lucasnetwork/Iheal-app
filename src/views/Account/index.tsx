import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import React from 'react';
import { View, Text } from 'react-native';

const Account = () => (
  <>
    <Header />
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Visitante</Text>
      <Text style={styles.text}>
        Acesse sua conta para comprar online nas farmacias mais proximas de
        você!
      </Text>
      <View style={styles.Containerbuttons}>
        <View style={{ ...styles.Containerbutton, marginRight: 8 }}>
          <Button small>Entrar</Button>
        </View>
        <View style={styles.Containerbutton}>
          <Button small>Cadastrar-se</Button>
        </View>
      </View>
    </View>
  </>
);

export default Account;
