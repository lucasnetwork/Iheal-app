import styles from './styles';
import productImageTest from '../../assets/productImageTest.png';
import trash from '../../assets/trash.png';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

interface ProductProps extends TouchableOpacityProps {
  product: {
    name: string;
    description: string;
    priceFormat?: string;
  };
  onPressDelete?: () => void;
  buttonRemove?: boolean;
}

const Product: React.FC<ProductProps> = ({
  product,
  onPressDelete = () => {},
  buttonRemove = false,
  ...props
}) => (
  <TouchableOpacity style={styles.container} {...props}>
    <Image style={styles.image} source={productImageTest} />
    <View style={styles.content}>
      <Text style={styles.title}>{product.name}</Text>
      <Text numberOfLines={3} lineBreakMode="clip" style={styles.description}>
        {product.description}
      </Text>
      <Text style={styles.price}>{product.priceFormat}</Text>
    </View>
    {buttonRemove && (
      <TouchableOpacity onPress={() => onPressDelete()}>
        <Image source={trash} />
      </TouchableOpacity>
    )}
  </TouchableOpacity>
);

export default Product;
