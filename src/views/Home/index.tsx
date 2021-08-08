import styles from './styles';
import Product from '../../components/Product';
import Header from '../../components/Header';
import { loadProduct } from '../../api/load-products';
import api from '../../config/api';
import { mapData } from '../../api/map-data-products';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const [products, setProducts] = useState([{}]);
  const [searchText, setSearchText] = useState('');
  const loadProductt = async (slug = '') => {
    await api
      .get(`/products`)
      .then(response => {
        const newResponse = mapData(response.data);
        setProducts(newResponse);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadProductt();
  }, []);

  const searchProduct = text => {
    if (text) {
      const newData = products.filter(product => {
        const itemData = product.name
          ? product.name.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setProducts(newData);
      setSearchText(text);
    }else{
      setProducts(products);
      setSearchText(text);
    }
    }
  };
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.name}>Olá, Drogaria Melo</Text>
        <View style={styles.searchContainer}>
          <TextInput style={{ height: 40 }} placeholder="Buscar produto..." />
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <Text style={styles.title}>Produtos Disponivel</Text>
        <>
          <View style={styles.containerProducts}>
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
                      name: item.name,
                      description: item.description,
                      priceFormat: item.priceFormat || '',
                      image: item.image,
                    }}
                  />
                </View>
              )}
            />
          </View>
        </>
      </View>
    </>
  );
};

export default Home;
