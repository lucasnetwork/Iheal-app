import { styles } from './styles';
import BackScreen from '../../components/BackScreen';
import logo from '../../assets/logo.png';
import React from 'react';

import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignInClient() {
  const navigate = useNavigation();
  return (
    <>
      <BackScreen title="Sou Cliente" />

      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.Textlogo}>IHeal</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textBack}>Bem vindo de Volta!</Text>
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput secureTextEntry style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.containerSignin}>
            <Text style={styles.textCad}>Nao tem uma conta? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('SignUpClient');
              }}
            >
              <Text style={styles.textSignin}>Cadastra-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
