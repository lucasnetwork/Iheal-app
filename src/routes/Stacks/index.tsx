import FinishedBuy from '../../views/FinishedBuy';
import Tabs from '../Tabs';
import ShoppingAdministration from '../Tabs/shopAdiministration';
import AddAdress from '../../views/AddAdress';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

const StackIndex = () => (
  <Navigator headerMode="none">
    <Screen name="clientTab" component={Tabs} />
    <Screen name="shoppingTabs" component={ShoppingAdministration} />
    <Screen name="adress" component={AddAdress} />
    <Screen name="finishedBuy" component={FinishedBuy} />
  </Navigator>
);

export default StackIndex;
