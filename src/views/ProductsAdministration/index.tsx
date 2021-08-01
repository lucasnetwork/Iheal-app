import styles from './styles';
import Button from '../../components/Button';
import Product from '../../components/Product';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ProductsAdministration = () => {
  const { cart } = useContextProvider();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.name}>Olá, Drogaria Melo</Text>
        <View style={styles.containerButton}>
          <Button>+ Adicionar Produto</Button>
        </View>

        <Text style={styles.title}>Produtos Cadastrados(5)</Text>

        <FlatList
          style={{ flex: 1 }}
          data={cart.products}
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
