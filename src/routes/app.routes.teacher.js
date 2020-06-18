/* eslint-disable react/prop-types */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import DrawerCustom from './components/drawer.custom';

import Home from '../pages/Home';
import Boletim from '~/pages/Boletim';
import Calendar from '~/pages/Calendario';
import Perfil from '../pages/perfil';
import Chamada from '../pages/Chamada';

const AppBottom = createBottomTabNavigator();

const AppRoutes = () => (
  <AppBottom.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let imgName = null;
        switch (route.name) {
          case 'Home':
            imgName = 'home';
            break;
          case 'Chamada':
            imgName = 'bullhorn';
            break;
          case 'Boletim':
            imgName = 'clipboard';
            break;
          case 'Calendario':
            imgName = 'calendar-alt';
            break;
          default:
            imgName = null;
        }

        return <Icon name={imgName} color={color} size={25} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FACC2E',
      labelStyle: { fontSize: 14 },
      style: { height: 55 },
    }}
  >
    <AppBottom.Screen name="Home" component={Home} />
    <AppBottom.Screen name="Chamada" component={Chamada} />
    <AppBottom.Screen name="Boletim" component={Boletim} />
    <AppBottom.Screen name="Calendario" component={Calendar} />
  </AppBottom.Navigator>
);

const AppDrawer = createDrawerNavigator();

const DrawerRoutes = () => (
  <AppDrawer.Navigator
    initialRouteName="Home"
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
    <AppBottom.Screen name="AppRoutes" component={AppRoutes} />
    <AppDrawer.Screen name="Chamada" component={Chamada} />
    <AppDrawer.Screen name="Perfil" component={Perfil} />
  </AppDrawer.Navigator>
);

export default DrawerRoutes;
