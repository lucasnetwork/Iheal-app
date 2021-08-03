import { styles } from './styles';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
};

export default function BackScreen({ title }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
