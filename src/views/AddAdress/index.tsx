import styles from './styles';
import Button from '../../components/Button';
import cart from '../../assets/cart.png';
import Header from '../../components/Header';
import maskCep from '../../utils/maskCep';
import addressSchema from '../../validations/addressSchema';
import { useContextProviderAuth } from '../../services/contextAuth';
import api from '../../config/api';
import { useContextProvider } from '../../services/context';
import { View, ScrollView, TextInput, Image, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFormik, validateYupSchema } from 'formik';

const initialValues = {
  name: '',
  number: '',
  street: '',
  cep: '',
  complement: '',
  state: '',
  district: '',
  city: '',
};
const AddAdress = () => {
  const { userData, setUserData } = useContextProviderAuth();
  const [loading, setLoading] = useState(false);
  const { createNotification } = useContextProvider();
  console.log(userData.user);
  const payment = async (value: {
    name: string;
    number: string;
    street: string;
    cep: string;
    complement: string;
    state: string;
    district: string;
    city: string;
  }) => {
    try {
      const res = await api.put(`/users/${userData.user.id}`, {
        numberHouse: value.number,
        uf: value.state,
        complement: value.complement,
        district: value.district,
        cep: value.cep,
      });

      setUserData({
        ...userData,
        user: res.data,
      });
      setLoading(false);
    } catch (err) {
      createNotification('Ocorreu um erro ao carregar');
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: userData.user.username || '',
      number: '',
      street: userData.user.address || '',
      cep: userData.user.cep || '',
      complement: '',
      state: '',
      district: '',
      city: '',
    },

    validationSchema: addressSchema,

    onSubmit(values) {
      if (loading) {
        return;
      }
      payment(values).then(() => {
        setLoading(true);

        setLoading(false);
        navigate.navigate('finishedBuy');
      });
    },
  });
  const navigate = useNavigation();
  return (
    <>
      <Header buttonBack />
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={cart} width={47} height={47} resizeMode="contain" />
          <Text style={styles.title}>Pagamento em dinheiro</Text>
        </View>
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={formik.values.name}
            onChangeText={e =>
              formik.setFieldValue('name', userData.user.username || e)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="CEP"
            value={formik.values.cep}
            onChangeText={e =>
              maskCep(e, text => {
                formik.setFieldValue('cep', userData.user.cep || text);
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Rua"
            value={formik.values.street}
            onChangeText={e =>
              formik.setFieldValue('street', userData.user.address || e)
            }
          />
          <View style={styles.row}>
            <TextInput
              style={{ ...styles.input, flex: 3, marginRight: 16 }}
              placeholder="Bairro"
              value={formik.values.district}
              onChangeText={e => formik.setFieldValue('district', e)}
            />
            <TextInput
              style={styles.input}
              placeholder="N°"
              value={formik.values.number}
              onChangeText={e => formik.setFieldValue('number', e)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Complemento"
            value={formik.values.complement}
            onChangeText={e => formik.setFieldValue('complement', e)}
          />
          <View style={styles.row}>
            <TextInput
              style={{ ...styles.input, flex: 3, marginRight: 16 }}
              placeholder="Cidade"
              value={formik.values.city}
              onChangeText={e => formik.setFieldValue('city', e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Estado"
              value={formik.values.state}
              onChangeText={e => formik.setFieldValue('state', e)}
            />
          </View>
        </View>
        <Button onPress={() => formik.handleSubmit()}>Confirmar</Button>
      </ScrollView>
    </>
  );
};

export default AddAdress;
