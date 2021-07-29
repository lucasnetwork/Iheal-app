import Tabs from './routes/Tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (
    <>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
