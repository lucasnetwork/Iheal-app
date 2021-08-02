import styles from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AddProduct = () => (
  <>
    <Header buttonBack title="Adicionar produto" />
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonImage}>
        <MaterialCommunityIcons name="image-plus" size={24} color="#fff" />
        <Text style={styles.textImage}>Imagem</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Nome do produto" />
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={styles.input} placeholder="R$" />
        <TextInput style={styles.input} placeholder="Quantidade" />
      </View>
      <TextInput
        style={{
          ...styles.input,
          maxHeight: '100%',
          textAlignVertical: 'top',
          paddingTop: 8,
        }}
        placeholder="Descrição..."
        multiline
      />
      <View style={{ marginTop: 40 }}>
        <Button>Salvar</Button>
      </View>
    </View>
  </>
);

export default AddProduct;
