import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Perfil from '../pages/perfil';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerStyle={{
        backgroundColor: '#FACC2E',
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#000',
        activeBackgroundColor: '#f0f0f0',
        inactiveBackgroundColor: '#FACC2E',
        inactiveTintColor: '#000',
        itemStyle: {
          marginVertical: 10,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Avisos" component={New} />
      <AppDrawer.Screen name="Perfil" component={Perfil} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
