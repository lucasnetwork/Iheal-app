import SignIn from '../../views/SignIn';
import Cart from '../../views/Cart';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export default function Stacks() {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator headerMode="none">
      <Screen name="signin" component={SignIn} />
      <Screen name="cart" component={Cart} />
    </Navigator>
  );
}
