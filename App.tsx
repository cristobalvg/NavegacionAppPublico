import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (

    // La Ventaja de hacer usar el Navigation de esta manera con el NavigationContainer, es que es tipo de Navigation o este NavigationContainer, nos va a servir para todos los otros tipos de Navigation que nosotros vamos a ver en el curso.
    /* <= Este componente(NavigationContainer) perfectamente lo puedo colocar en remplazo del componente <View> */
      /* <StackNavigator /> */ /*<= Por defecto el Stack no crea una barra en la parte superior del header, por lo cual ya no necesitarios el componente <SafeAreaView> que lo utilizábamos para hacer un margen de separación por el nosh o como se escriba de los teléfonos ios, que quedaba el título muy pegado arriba */
      /* En tu caso, parece que tienes tanto un StackNavigator como un MenuLateralBasico dentro del mismo NavigationContainer, lo cual no es compatible. Debes decidir si deseas utilizar un StackNavigator o un MenuLateralBasico como el navegador principal para tu aplicación y asegurarte de que solo haya uno dentro del NavigationContainer. Si deseas tener un menú lateral junto con el StackNavigator, puedes anidar navegadores. Por ejemplo, puedes utilizar un DrawerNavigator como tu navegador principal y luego dentro de uno de los elementos del menú lateral, puedes tener un StackNavigator para gestionar las pantallas dentro de ese elemento del menú. */
    <NavigationContainer>
      

      {/* Si necesitamos anteponer el menú lateral, entonces no es el StackNavigator el que vamos a renderizar, si no que va a ser nuestro MenuLateralBasico */}
      <MenuLateralBasico />
    </NavigationContainer>
  );
};

export default App;