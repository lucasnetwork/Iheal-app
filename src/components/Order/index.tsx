import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';

interface orderProps {
  total: string;
  date: string;
  name: string;
  quant: number;
  clientName: string;
  price: string;
}

const Order: React.FC<orderProps> = ({
  date,
  name,
  price,
  quant,
  total,
  clientName,
}) => (
  <View style={{ flex: 1, padding: 8 }}>
    <View style={styles.containerProduct}>
      <Text style={{ ...styles.orderSize, ...styles.orderTitle }}>
        Total:{total}
      </Text>
      <Text style={{ ...styles.orderSize, fontWeight: '300' }}>{date}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <View style={styles.containerProduct}>
        <Text style={styles.orderSize}>{name}</Text>
        <Text style={{ ...styles.orderSize, color: '#A8A8B3' }}>
          quant:{quant}
        </Text>
        <Text style={styles.orderSize}>{price}</Text>
      </View>
    </View>
    <Text style={styles.clientName}>{clientName}</Text>
  </View>
);

export default Order;
