import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerCustom from './components/drawer.custom';

import Home from '../pages/Home';
import Boletim from '~/pages/Boletim';
import Calendario from '~/pages/Calendario';
import Perfil from '../pages/perfil';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      initialRouteName="Perfil"
      drawerStyle={{
        backgroundColor: '#FACC2E',
      }}
      drawerContent={(props) => <DrawerCustom {...props} />}
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
      <AppDrawer.Screen name="Boletim" component={Boletim} />
      <AppDrawer.Screen name="Calendario" component={Calendario} />
      <AppDrawer.Screen name="Perfil" component={Perfil} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
