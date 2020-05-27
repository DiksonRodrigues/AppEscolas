import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/services/firebaseConnections'

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';

console.disableYellowBox=true;

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
         <StatusBar backgroundColor="#ffef52" barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>

  );
}
