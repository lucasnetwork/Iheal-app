import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { mapData } from '../../api/map-data-products';
import api from '../../config/api';
import { mapDataProduct } from '../../api/map-data-product';
import { useContextProvider } from '../../services/context';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

interface ProductDetailProps {
  description: string;
  image: string;
  name: string;
  price: number;
  priceFormat: string;
  stock: number;
  // eslint-disable-next-line camelcase
  user_creator: {
    address: string;
    email: string;
    idd: string;
    username: string;
  };
}

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductDetailProps>();
  const navigation = useNavigation();
  const { addItem, cart, createNotification } = useContextProvider();
  const route = useRoute();
  const { id }: any = route.params;

  const loadProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      const newResult = mapDataProduct(response.data);

      setProduct(newResult);
    } catch (error) {
      createNotification('Ocorreu um erro');
    }
  };
  useEffect(() => {
    if (!id) {
      return;
    }
    loadProduct();
  }, [id]);

  return (
    <>
      <Header buttonBack title="product" />
      <ScrollView style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: product?.image,
          }}
        />
        <View style={styles.containerPriceAndQuantity}>
          <Text style={styles.price}>R$ {product?.price},00</Text>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>

        <Text style={styles.title}>{product?.name}</Text>
        <View style={styles.stripe} />
        <Text style={styles.detail}>Detalhes</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.containerNameStore}>
          <MaterialIcons name="store" size={24} color="#01579B" />
          <Text style={styles.nameStore}>
            {' '}
            {product?.user_creator.username}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          containerStyle={{
            width: '100%',
            height: 50,
            borderRadius: 1,
            backgroundColor: '#fff',
          }}
          onPress={() =>
            addItem(
              {
                description: product?.description || '',
                id,
                image: product?.image || '',
                name: product?.name || '',
                price: product?.price || 0,
                priceFormat: product?.priceFormat || '',
              },
              quantity
            )
          }
        >
          Adicionar ao carrinho
        </Button>
      </View>
    </>
  );
};

export default ProductDetail;
