import { styles } from './styles';
import BackScreen from '../../components/BackScreen';
import logo from '../../assets/logo.png';
import React, { useState } from 'react';

import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpStore() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');

  const onCheckout = () => {
    if (!name || !email || !password || !cnpj) {
      Alert.alert('Por favor preencha todos os campos');
    }
  };
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
              Junte-se a nos nessa missão, faça parte {'\n'}
              do IHeal!
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Nome da loja"
            onChangeText={setName}
            value={name}
          />
          <TextInput style={styles.input} placeholder="CNPJ" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput secureTextEntry style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastra-se</Text>
          </TouchableOpacity>
          <View style={styles.containerSignin}>
            <Text style={styles.textCad}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={handleGoBack}>
              <Text style={styles.textSignin}>Acessar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
