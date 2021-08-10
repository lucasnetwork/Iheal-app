import styles from './styles';
import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';

interface buttonProps extends TouchableOpacityProps {
  small?: boolean;
  containerStyle?: object;
  white?: boolean;
}

const Button: React.FC<buttonProps> = ({
  children,
  small = false,
  containerStyle,
  white = false,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    style={
      small
        ? [styles.container, styles.small, containerStyle]
        : [styles.container, containerStyle]
    }
  >
    <Text style={white ? { ...styles.text, color: 'white' } : styles.text}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
