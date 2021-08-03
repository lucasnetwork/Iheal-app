import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import React from 'react';
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
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
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

    console.log(result);

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
