import styles from './styles';
import { useContextProvider } from '../../services/context';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';

const Notification = () => {
  const { showNotification } = useContextProvider();
  return (
    <>
      {showNotification.show && (
        <View style={styles.container}>
          <Text style={styles.text}>{showNotification.text}</Text>
        </View>
      )}
    </>
  );
};

export default Notification;
