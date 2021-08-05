import Stacks from './routes/Stacks';
import ContextProvider from './services/context';
import Notification from './components/Notification';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
      <StatusBar style="light" backgroundColor="#11BAFD" />
      <Notification />
    </ContextProvider>
  );
}
