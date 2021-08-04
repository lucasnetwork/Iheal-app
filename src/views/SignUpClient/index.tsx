import { styles } from './styles';
import BackScreen from '../../components/BackScreen';
import logo from '../../assets/logo.png';
import React from 'react';

import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpClient() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <>
      <BackScreen title="Sou Cliente" />

      <View style={styles.container}>
        <View style={styles.containerImage}>
          <View style={styles.image}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.Textlogo}>IHeal</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textAgradecimento}>Seja bem vindo!</Text>
            <Text style={styles.textMain}>
              Compre online na farmacia mais próxima{'\n'}
              de você
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput secureTextEntry style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastra-se</Text>
          </TouchableOpacity>
          <View style={styles.containerSignin}>
            <Text style={styles.textCad}>Nao tem uma conta? </Text>
            <TouchableOpacity onPress={handleGoBack}>
              <Text style={styles.textSignin}>Acessar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
