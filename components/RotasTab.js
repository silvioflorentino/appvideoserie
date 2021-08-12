import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import RotasBotaoFilmes from './RotasBotaoFilmes';
import RotasBotaoSeries from './RotasBotaoSeries';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor:"#836FFF" }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="RotasBotaoFilmes"
        component={RotasBotaoFilmes}
      />

      <Tab.Screen
        name="RotasBotaoSeries"
        component={RotasBotaoSeries}
        options={{
          tabBarLabel: "Series",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
