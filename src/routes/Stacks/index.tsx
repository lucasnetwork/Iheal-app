import FinishedBuy from '../../views/FinishedBuy';
import Tabs from '../Tabs';
import ShoppingAdministration from '../Tabs/shopAdiministration';
import AddAdress from '../../views/AddAdress';
import AddProduct from '../../views/AddProduct';
import ChooseUserType from '../../views/ChooseUserType';
import SignUpClient from '../../views/SignUpClient';
import SignUpStore from '../../views/SignUpStore';
import SignInClient from '../../views/SignInClient';
import SignInStore from '../../views/SignInStore';
import ConfirmPayment from '../../views/ConfirmPayment';
import ProductDetail from '../../views/ProductDetail';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

const StackIndex = () => (
  <Navigator headerMode="none">
    <Screen name="ChooseUserType" component={ChooseUserType} />
    <Screen name="SignUpClient" component={SignUpClient} />
    <Screen name="SignUpStore" component={SignUpStore} />
    <Screen name="SignInClient" component={SignInClient} />
    <Screen name="SignInStore" component={SignInStore} />
    <Screen name="shoppingTabs" component={ShoppingAdministration} />
    <Screen name="clientTab" component={Tabs} />
    <Screen name="ProductDetails" component={ProductDetail} />

    <Screen name="adress" component={AddAdress} />
    <Screen name="finishedBuy" component={FinishedBuy} />
    <Screen name="confirmPayment" component={ConfirmPayment} />
    <Screen name="addProduct" component={AddProduct} />
  </Navigator>
);

export default StackIndex;
