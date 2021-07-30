import Tabs from './routes/Tabs';
import ContextProvider from './services/context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './views/SignIn';

export default function Main() {
   return (
  //   <ContextProvider>
  //     <NavigationContainer>
  //       <SignIn />
  //       <Tabs />
  //     </NavigationContainer>
  //     <StatusBar style="light" backgroundColor="#11BAFD" />
  //   </ContextProvider>
    <SignIn/>
  );
}
