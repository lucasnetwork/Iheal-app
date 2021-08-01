import Header from '../../components/Header';
import Cart from '../../views/Cart';
import FinishedBuy from '../../views/FinishedBuy';
import AddAdress from '../../views/AddAdress';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const CartStack = () => (
  <Navigator
    screenOptions={{
      header: ({ scene }) => (
        <Header buttonBack={scene.route.name !== 'checkout'} />
      ),
    }}
  >
    <Screen name="checkout" component={Cart} />
    <Screen name="adress" component={AddAdress} />
    <Screen name="finishedBuy" component={FinishedBuy} />
  </Navigator>
);

export default CartStack;
