import styles from './styles';
import Product from '../../components/Product';
import Header from '../../components/Header';

import api from '../../config/api';
import { mapData } from '../../api/map-data-products';
import { useContextProviderAuth } from '../../services/contextAuth';
import { useContextProvider } from '../../services/context';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const { userData } = useContextProviderAuth();
  const { cart, createNotification } = useContextProvider();
  const [products, setProducts] = useState([{}]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([{}]);

  const loadProduct = async () => {
    try {
      const response = await api.get(`/products`);
      const newResponse = mapData(response.data);
      console.log('oii');
      setProducts(newResponse);
    } catch (error) {
      console.log(error);
      createNotification('ocorreu um erro');
    }
  };
  useEffect(() => {
    loadProduct();
  }, []);

  const searchProduct = (text: string) => {
    if (text) {
      const newData = products.filter((product: any) => {
        const itemData = product.name
          ? product.name.toLowerCase()
          : ''.toLowerCase();

        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
    } else {
      setSearchResults(products);
      setSearchText(text);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.name}>
          Olá, {userData ? userData?.user.username : 'visitante'}
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={{ height: 40, flex: 1 }}
            placeholder="Buscar produto..."
            value={searchText}
            onChangeText={text => searchProduct(text)}
          />
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <Text style={styles.title}>Produtos Disponivel</Text>
        <>
          <View style={styles.containerProducts}>
            {searchResults.length > 1 ? (
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                data={searchResults}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                  <View style={styles.productContainer}>
                    <Product
                      product={{
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        priceFormat: item.priceFormat || '',
                        image: item.image,
                      }}
                    />
                  </View>
                )}
              />
            ) : (
              <FlatList
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                data={products}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                  <View style={styles.productContainer}>
                    <Product
                      product={{
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        priceFormat: item.priceFormat || '',
                        image: item.image,
                      }}
                    />
                  </View>
                )}
              />
            )}
          </View>
        </>
      </View>
    </>
  );
};

export default Home;
