import ProductsAdministration from '../../views/ProductsAdministration';
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
          if (route.name === 'orders') {
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
                  Pedidos
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
      <Screen name="products" component={ProductsAdministration} />
      <Screen name="orders" component={ProductsAdministration} />
      <Screen name="account" component={ProductsAdministration} />
    </Navigator>
  );
}

export default MyTabs;
