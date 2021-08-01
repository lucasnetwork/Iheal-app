import styles from './styles';
import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';

interface buttonProps extends TouchableOpacityProps {
  small?: boolean;
}

const Button: React.FC<buttonProps> = ({
  children,
  small = false,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    style={small ? { ...styles.small, ...styles.container } : styles.container}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

export default Button;
