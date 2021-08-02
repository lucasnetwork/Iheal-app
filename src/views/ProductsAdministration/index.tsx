import styles from './styles';
import Button from '../../components/Button';
import Product from '../../components/Product';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductsAdministration = () => {
  const { cart } = useContextProvider();
  const navigate = useNavigation();

  return (
    <>
      <Header showCart={false} />
      <View style={styles.container}>
        <Text style={styles.name}>Olá, Drogaria Melo</Text>
        <View style={styles.containerButton}>
          <Button onPress={() => navigate.navigate('addProduct')}>
            + Adicionar Produto
          </Button>
        </View>

        <Text style={styles.title}>Produtos Cadastrados(5)</Text>

        <FlatList
          style={{ flex: 1 }}
          data={cart.products}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 12, paddingHorizontal: 32 }}>
              <Product
                product={{
                  description: item.description,
                  image: item.image,
                  name: item.name,
                  priceFormat: item.priceFormat || '',
                }}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default ProductsAdministration;
