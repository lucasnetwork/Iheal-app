import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native'

import { Entypo, MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';
import LogoSignIn from '../../assets/LogoSignIn.png';

import { style } from './styles'

export default function SignIn(){
    return(
        <View style={style.container}>
                <Image 
                    source={LogoSignIn}
                    style={style.logo}
                />
            <View style={style.content}>

                <TouchableOpacity style={style.cliente}>
                    <Entypo name="emoji-flirt" size={24} color="#fff" />
                    <Text>Sou cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.loja}>
                    <MaterialCommunityIcons name="store-outline" size={24} color="#fff" />
                    <Text>Sou loja</Text>
                </TouchableOpacity>

                <View >
                    
                </View>

                <View>
                    <Text>
                        Entrar como visitante
                        <AntDesign name="right" size={24} color="#fff" />
                    </Text>
                </View>
            </View>
        </View>
    );
}