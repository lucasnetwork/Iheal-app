import { style } from './styles';
import LogoSignIn from '../../assets/LogoSignIn.png';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.banner}>
        <Image style={style.logo} source={LogoSignIn} />
        <Text style={style.logoText}>IHeal</Text>
      </View>
      <View style={style.content}>
        <TouchableOpacity style={style.cliente}>
          <View style={style.clienteLogo}>
            <Entypo name="emoji-flirt" size={35} color="#fff" />
          </View>
          <Text style={style.clienteText}>Sou cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.loja}>
          <View style={style.lojaLogo}>
            <MaterialCommunityIcons
              name="store-outline"
              size={35}
              color="#fff"
            />
          </View>
          <Text style={style.lojaText}>Sou loja</Text>
        </TouchableOpacity>
        <View style={style.listdivider} />

        <TouchableOpacity
          onPress={() => navigation.navigate('clientTab')}
          style={style.visitante}
        >
          <Text style={style.visitanteText}>Entrar como visitante</Text>
          <View style={style.visitanteImage}>
            <AntDesign name="right" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
