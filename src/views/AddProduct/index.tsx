import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../config/api';
import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormik } from 'formik';
import * as ImagePicker from 'expo-image-picker';

const initialValues = {
  name: '',
  price: '',
  quantity: '',
  image: null,
  description: '',
};

const AddProduct = () => {
  const onSubmit = async () => {
    const convertPrice = parseFloat(formik.values.price);
    await api
      .post(
        '/products',
        {
          name: formik.values.name,
          price: convertPrice,
          stock: formik.values.quantity,
          Description: formik.values.description,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDk0MjlmZjA3MDhlMDE3NDExNWQ4MiIsImlhdCI6MTYyNzk5NjgzMiwiZXhwIjoxNjMwNTg4ODMyfQ.bH6EFQ94VZbssTVvr4OyCUetSB2qGDCr0Qp_bUz_LXA`,
          },
        }
      )
      .then(async response => {
        api
          .post(
            '/upload',
            {
              files: formik.values.image,
              refId: response.data.id,
              ref: 'product',
              field: 'image',
            },
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDk0MjlmZjA3MDhlMDE3NDExNWQ4MiIsImlhdCI6MTYyNzk5NjgzMiwiZXhwIjoxNjMwNTg4ODMyfQ.bH6EFQ94VZbssTVvr4OyCUetSB2qGDCr0Qp_bUz_LXA`,
              },
            }
          )
          .then(async res => {
            console.log(res);
          })
          .catch(error => {
            console.log(`${error}`);
          });
      })
      .catch(e => {
        console.log(e);
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  async function handleImage() {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      formik.setFieldValue('image', result);
    }
  }

  return (
    <>
      <Header buttonBack showCart={false} title="Adicionar produto" />
      <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => handleImage()}
          style={styles.buttonImage}
        >
          <MaterialCommunityIcons name="image-plus" size={24} color="#fff" />
          <Text style={styles.textImage}>Imagem</Text>
        </TouchableOpacity>
        <TextInput
          onChangeText={e => formik.setFieldValue('name', e)}
          value={formik.values.name}
          style={styles.input}
          placeholder="Nome do produto"
        />
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input}
            placeholder="R$"
            onChangeText={e => formik.setFieldValue('price', e)}
            value={formik.values.price}
          />
          <TextInput
            style={styles.input}
            onChangeText={e => formik.setFieldValue('quantity', e)}
            value={formik.values.quantity}
            placeholder="Quantidade"
          />
        </View>
        <TextInput
          style={{
            ...styles.input,
            maxHeight: '100%',
            minHeight: 210,
            textAlignVertical: 'top',
            paddingTop: 8,
          }}
          onChangeText={e => formik.setFieldValue('description', e)}
          value={formik.values.description}
          placeholder="Descrição..."
          multiline
        />
        <View style={{ marginTop: 40 }}>
          <Button onPress={() => formik.handleSubmit()}>Salvar</Button>
        </View>
      </ScrollView>
    </>
  );
};

export default AddProduct;
