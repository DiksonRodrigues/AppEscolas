import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

const AuthStack = createStackNavigator();

export default () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ffef52',
          borderBottomWidth: 1,
          borderBottomColor: '#ffef52',
        },
        headerTintColor: '#000',
        headerBackTitleVisible: false,
      }}
    >
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: 'Cadastre-se',
        }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTitle: 'Recupere sua senha',
        }}
      />
    </AuthStack.Navigator>
  );
};
