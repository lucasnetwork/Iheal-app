import { styles } from './styles';
import BackScreen from '../../components/BackScreen';
import logo from '../../assets/logo.png';
import api from '../../config/api';
import { useContextProviderAuth } from '../../services/contextAuth';
import { useContextProvider } from '../../services/context';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpClient() {
  const { setUserData } = useContextProviderAuth();
  const [loading, setLoading] = useState(false);
  const { login } = useContextProvider();
  const navigation = useNavigation();
  const onSubmit = async () => {
    console.log('oio');
    if (loading) {
      return;
    }
    setLoading(true);
    await api
      .post('/auth/local/register', {
        username: formik.values.name,
        password: formik.values.password,
        email: formik.values.email,
        address: formik.values.address,
        cep: formik.values.cep,
        cpf: formik.values.cpf,
      })
      .then(async response => {
        setLoading(false);
        setUserData({
          token: response.data.jwt,
          user: response.data.user,
        });
        await AsyncStorage.setItem('token', response.data.jwt);
        login();
        navigation.navigate('clientTab');
      })
      .catch(e => {
        console.log(e.response);
        setLoading(false);
      });
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      password: '',
      cep: '',
      cpf: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(5, 'Nome deve ter no mínimo 5 caracteres')
        .required('Required'),
      email: Yup.string().email('E-mail inválido').required('Required'),
      address: Yup.string().required('Required'),
      cep: Yup.string().required('Required'),
      password: Yup.string()
        .min(6, 'Senha deve ter no mínimo 6 caracteres')
        .required('Required'),
      cpf: Yup.string()
        .min(11, 'CPF deve ter no mínimo 11 caracteres')
        .required('Required'),
    }),
    onSubmit,
  });
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
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            onChangeText={formik.handleChange('address')}
            value={formik.values.address}
          />
          <TextInput
            style={styles.input}
            placeholder="CEP"
            onChangeText={formik.handleChange('cep')}
            value={formik.values.cep}
          />
          <TextInputMask
            type="cpf"
            style={styles.input}
            placeholder="CPF"
            onChangeText={formik.handleChange('cpf')}
            value={formik.values.cpf}
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
