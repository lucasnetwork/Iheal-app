import { styles } from './styles';
import BackScreen from '../../components/BackScreen';
import logo from '../../assets/logo.png';
import api from '../../config/api';
import { masck } from '../../utils/masks';
import { useContextProvider } from '../../services/context';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpStore() {
  const [loading, setLoading] = useState(false);
  const { createNotification } = useContextProvider();
  const navigation = useNavigation();
  const onSubmit = async values => {
    setLoading(true);
    console.log(values);
    try {
      const response = await api.post('/auth/local/register', {
        username: formik.values.name,
        password: formik.values.password,
        email: formik.values.email,
        IsStore: true,
        address: formik.values.address,
        cep: formik.values.cep,
        cnpj: formik.values.cnpj,
<<<<<<< HEAD
      })
      .then(async response => {
        setLoading(false);

        await AsyncStorage.setItem('token', response.data.jwt);
        navigation.navigate('shoppingTabs');
      })
      .catch(() => {
        setLoading(false);
        Alert.alert('Revise seu email ou senha e tente novamente');
=======
>>>>>>> 3c49828c96890aa9bbdeddfacd1d6f01eb14cbd3
      });
      setLoading(false);
      console.log(response);

      await AsyncStorage.setItem('token', response.data.jwt);
      navigate.navigate('shoppingTabs');
    } catch {
      setLoading(false);
      createNotification('Revise seu email ou senha e tente novamente');
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      password: '',
      cep: '',
      cnpj: '',
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
      cnpj: Yup.string()
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
        .min(14, 'CNPJ deve ter no mínimo 14 caracteres')
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
              Junte-se a nos nessa missão, faça parte {'\n'}
              do IHeal!
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Nome da loja"
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
          />

          <TextInputMask
            type="cnpj"
            style={styles.input}
            value={formik.values.cnpj}
            onChangeText={formik.handleChange('cnpj')}
            placeholder="CNPJ"
          />

          <TextInput
            style={styles.input}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            placeholder="E-mail"
          />
          <TextInput
            style={styles.input}
            value={formik.values.address}
            onChangeText={formik.handleChange('address')}
            placeholder="endereço"
          />
          <TextInput
            style={styles.input}
            value={formik.values.cep}
            onChangeText={formik.handleChange('cep')}
            placeholder="cep"
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            placeholder="Senha"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => formik.handleSubmit()}
            disabled={loading}
          >
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
