import Cart from '../../views/Cart';
import Account from '../../views/Account';
import Home from '../../views/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

function MyTabs() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tab;
          if (route.name === 'cart') {
            tab = (
              <>
                <AntDesign
                  name="shoppingcart"
                  size={35}
                  color={focused ? '#FFD500' : '#fff'}
                />
                <Text
                  style={{
                    color: focused ? '#FFD500' : '#fff',
                    fontSize: 10,
                  }}
                >
                  Carrinho
                </Text>
              </>
            );
          }
          if (route.name === 'products') {
            tab = (
              <>
                <MaterialIcons
                  name="store"
                  size={35}
                  color={focused ? '#FFD500' : '#fff'}
                />

                <Text
                  style={{
                    color: focused ? '#FFD500' : '#fff',
                    fontSize: 10,
                  }}
                >
                  Produtos
                </Text>
              </>
            );
          }
          if (route.name === 'account') {
            tab = (
              <>
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={35}
                  color={focused ? '#FFD500' : '#fff'}
                />
                <Text
                  style={{
                    color: focused ? '#FFD500' : '#fff',
                    fontSize: 10,
                  }}
                >
                  Conta
                </Text>
              </>
            );
          }
          return tab;
        },
      })}
      tabBarOptions={{
        style: {
          height: 72,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabStyle: {
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
        showLabel: false,
        activeBackgroundColor: '#11BAFD',
        inactiveBackgroundColor: '#11BAFD',
      }}
    >
      <Screen name="products" component={Home} />
      <Screen name="cart" component={Cart} />
      <Screen name="account" component={Account} />
    </Navigator>
  );
}

export default MyTabs;
