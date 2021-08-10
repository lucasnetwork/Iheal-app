import Stacks from './routes/Stacks';
import ContextProvider from './services/context';
import Notification from './components/Notification';

import AuthProvider from './services/contextAuth';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (
    <ContextProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="#11BAFD" />
        <Notification />
      </AuthProvider>
    </ContextProvider>
  );
}
