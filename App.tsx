import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (

    // La Ventaja de hacer usar el Navigation de esta manera con el NavigationContainer, es que es tipo de Navigation o este NavigationContainer, nos va a servir para todos los otros tipos de Navigation que nosotros vamos a ver en el curso.
    <NavigationContainer>{/* <= Este componente(NavigationContainer) perfectamente lo puedo colocar en remplazo del componente <View> */}
        <StackNavigator />{/* Por defecto el Stack no crea una barra en la parte superior del header, por lo cual ya no necesitarios el componente <SafeAreaView> que lo utilizábamos para hacer un margen de separación por el nosh o como se escriba de los teléfonos ios, que quedaba el título muy pegado arriba */}
    </NavigationContainer>
  );
};

export default App;