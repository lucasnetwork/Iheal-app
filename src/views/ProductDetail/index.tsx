import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
import Header from '../../components/Header';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Header buttonBack title="product" />
      <ScrollView style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2R4CcSUU5-3EZs1N_sr0kc8bHrSQFEJ0iA&usqp=CAU',
          }}
        />
        <View style={styles.containerPriceAndQuantity}>
          <Text style={styles.price}>$100.00</Text>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>

        <Text style={styles.title}>Acetato de Gosserrelina</Text>
        <View style={styles.stripe} />
        <Text style={styles.detail}>Detalhes</Text>

        <Text style={styles.description}>
          Zoladex LA 10,8mg, caixa com 1 seringa carregada com depot de
          liberação prolongada de uso subcutâneo 20 itens
        </Text>
        <View style={styles.containerNameStore}>
          <MaterialIcons name="store" size={24} color="#01579B" />
          <Text style={styles.nameStore}> jopoejfwopfjkwopfkowpfkop</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetail;
