// La adición del plugin 'react-native-reanimated/plugin' en tu archivo babel.config.js es una configuración necesaria para que React Native Reanimated funcione correctamente.

//El error que mencionaste con el cache de Metro es común en el desarrollo de React Native. A veces, los problemas de cache pueden causar problemas en la construcción y recarga de la aplicación. La solución que proporcionaste de reiniciar el Metro con el cache borrado (npm -> npm start -- --reset-cache) o (yarn -> yarn start --reset-cache) es una solución válida para resolver problemas relacionados con el cache. Iniciar el proyecto limpiando la cache:

//Es normal que la primera vez que instalas una aplicación en un dispositivo físico a través de Metro (la herramienta de desarrollo de React Native) pueda llevar tiempo, ya que se están generando y transfiriendo los archivos necesarios al dispositivo. Sin embargo, el tiempo de instalación puede variar dependiendo de varios factores, como el tamaño de la aplicación, la velocidad de tu conexión USB, la potencia de tu computadora, etc. Es por eso que experimentaste tiempos de instalación más largos la primera vez y tiempos más cortos en las siguientes instalaciones.

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();



export const MenuLateralBasico = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
        // screenOptions={{
        //     drawerPosition:'right',
        // }}

        screenOptions={{
          drawerType={ width >= 768 ? 'permanent' : 'front'}
        }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}