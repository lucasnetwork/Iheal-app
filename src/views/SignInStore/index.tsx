import { styles } from './styles';
import BackScreen from '../../components/BackScreen';
import logo from '../../assets/logo.png';
import api from '../../config/api';
import { useContextProviderAuth } from '../../services/contextAuth';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignInStore() {
  const { setUserData } = useContextProviderAuth();
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    await api
      .post('/auth/local', {
        identifier: formik.values.email,
        password: formik.values.password,
      })
      .then(async response => {
        setLoading(false);
        if (response.data.IsStore === false) {
          Alert.alert(
            'Sua conta não possui autorização para fazer login como loja.'
          );
        }
        setUserData({
          token: response.data.jwt,
          user: response.data.user,
        });
        await AsyncStorage.setItem('token', response.data.jwt);
        navigate.navigate('shoppingTabs');
      })
      .catch(e => {
        setLoading(false);
        if (e.response.status === 400) {
          Alert.alert('Algo deu errado revise seu email e senha');
        }
      });
  };
  const formik = useFormik({
    initialValues: {
      email: '',

      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('E-mail inválido').required('Required'),

      password: Yup.string()
        .min(6, 'Senha deve ter no mínimo 6 caracteres')
        .required('Required'),
    }),
    onSubmit,
  });
  return (
    <>
      <BackScreen title="Sou Loja" />

      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.Textlogo}>IHeal</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textBack}>Bem vindo de Volta!</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Senha"
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => formik.handleSubmit()}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.containerSignin}>
            <Text style={styles.textCad}>Ainda não cadastrou sua loja? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('SignUpStore');
              }}
            >
              <Text style={styles.textSignin}>Cadastra-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.administrator}>
        <Text style={styles.textAdm}>CONTA ADMINISTRATIVA</Text>
      </View>
    </>
  );
}
