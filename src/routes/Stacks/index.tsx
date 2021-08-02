import FinishedBuy from '../../views/FinishedBuy';
import Tabs from '../Tabs';
import ShoppingAdministration from '../Tabs/shopAdiministration';
import AddAdress from '../../views/AddAdress';
import AddProduct from '../../views/AddProduct';
import SignIn from '../../views/SignIn';
import ConfirmPayment from '../../views/ConfirmPayment';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

const StackIndex = () => (
  <Navigator headerMode="none">
    <Screen name="signIn" component={SignIn} />
    <Screen name="shoppingTabs" component={ShoppingAdministration} />
    <Screen name="clientTab" component={Tabs} />
    <Screen name="adress" component={AddAdress} />
    <Screen name="finishedBuy" component={FinishedBuy} />
    <Screen name="confirmPayment" component={ConfirmPayment} />
    <Screen name="addProduct" component={AddProduct} />
  </Navigator>
);

export default StackIndex;
