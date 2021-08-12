import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../config/api';
import { useContextProvider } from '../../services/context';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
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
  // eslint-disable-next-line no-underscore-dangle
  let _id: string | null = null;
  const { createNotification } = useContextProvider();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: async values => {
      if (loading) {
        return;
      }
      setLoading(true);
      let imageUrl = '';

      try {
        const response = await api.post('/products', {
          name: values.name,
          price: values.price,
          stock: values.quantity,
          Description: values.description,
        });
        createNotification('Produto Cadastrado!');
        _id = response.data.id;
      } catch (e) {
        createNotification('Produto não cadastrado, tente novamente');
      }
      try {
        // eslint-disable-next-line no-undef
        const formData = new FormData();

        formData.append('files', {
          uri: values.image,
          name: 'image434324.jpg',
          type: 'image/jpeg',
        });
        formData.append('refId', `${_id}`);
        formData.append('ref', 'product');
        formData.append('field', 'image');
        const uploadresponse = await api.post('/upload', formData);
        imageUrl = uploadresponse.data[0].url;
      } catch (e) {
        createNotification('Imagem não enviada, tente novamente');
        setLoading(false);
        return;
      }
      setLoading(false);
    },
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

    if (!result.cancelled) {
      formik.setFieldValue('image', result.uri);
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
