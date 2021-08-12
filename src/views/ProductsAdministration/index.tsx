import styles from './styles';
import Button from '../../components/Button';
import Product from '../../components/Product';
import { useContextProvider } from '../../services/context';
import Header from '../../components/Header';
import { useContextProviderAuth } from '../../services/contextAuth';
import api from '../../config/api';
import { mapData } from '../../api/map-data-products';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type productStore = {
  id: string;
  name: string;
  description: string;
  priceFormat: string;
  price: number;
  image: string;
};
export const newProducts = (productsStore = [{}] as any) => {
  productsStore?.map(
    (product: {
      image: {
        url: string;
      };
      id: string;
      name: string;
      Description: string;
      price: number;
    }) => {
      const { url } = product.image || { url: '' };
      const { id, name, Description, price } = product;

      return {
        id,
        name,
        description: Description,

        price,
        image: url,
      };
    }
  );
};

const ProductsAdministration = () => {
  const { cart } = useContextProvider();
  const [productstore, setproductstore] = useState([{}]);
  const navigate = useNavigation();
  const { userData } = useContextProviderAuth();
  const loadProduct = async () => {
    await api
      .get(`/products`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(response => {
        const newResponse = mapData(response.data);
        setproductstore(newResponse);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <Header showCart={false} />
      <View style={styles.container}>
        <Text style={styles.name}>
          Olá, {userData ? userData?.user.username : 'visitante'}
        </Text>
        <View style={styles.containerButton}>
          <Button onPress={() => navigate.navigate('addProduct')}>
            + Adicionar Produto
          </Button>
        </View>

        <Text style={styles.title}>
          Produtos Cadastrados({productstore.length})
        </Text>

        <FlatList
          style={{ flex: 1 }}
          data={productstore}
          keyExtractor={(item: any) => `${item.id}`}
          renderItem={({ item }: any) => (
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
