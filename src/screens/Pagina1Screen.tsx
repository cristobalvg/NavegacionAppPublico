import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

//Yo al estar en un Stack, puedo crearme una nueva interface. Además al extender una interfaz en TypeScript, es como si "heredaras" las propiedades y tipos de esa interfaz, lo que te permite definir tipos personalizados para tus componentes y aprovechar las propiedades y tipos proporcionados por otras bibliotecas o interfaces genéricas, como en el caso de StackScreenProps.
//Por eso usamos interface para este tipo de objetos, porque es más fácil extenderlo.
interface Props extends StackScreenProps<any, any> { }; //<= El StackScreenProps, nos va a pedir 2 argumentos, 1 un objeto, 2 las propiedades que puede tener ese objeto. Además No se trata de heredar propiedades de un objeto específico, sino de extender una interfaz con otra. En este caso, Props es una interfaz que extiende la interfaz StackScreenProps<any, any>. Lo que significa es que Props hereda todas las propiedades y tipos definidos en StackScreenProps<any, any> y también puede agregar o reemplazar propiedades según sea necesario.

// StackScreenProps es una interfaz genérica proporcionada por @react-navigation/stack que define las propiedades típicas que se pueden esperar en una pantalla de navegación dentro de un stack en React Navigation. Estas propiedades incluyen cosas como la ruta, la navegación, los parámetros de la pantalla, etc.

// Al extender Props con StackScreenProps<any, any>, estás diciendo que Props tendrá todas las propiedades definidas en StackScreenProps, y luego puedes usar Props como el tipo de propiedades para tu componente. Esto te permite acceder a las propiedades de navegación proporcionadas por React Navigation en tu componente.

// En resumen, extends en una interfaz se utiliza para extender y heredar propiedades y tipos de otra interfaz, en lugar de heredar propiedades de un objeto en tiempo de ejecución. Esto es útil para definir tipos que se utilizan en componentes React y aprovechar las propiedades proporcionadas por bibliotecas como React Navigation.

export const Pagina1Screen = ({ navigation }: Props) => {//<= ¿Cómo hago la navegación? A: Una vez que estamos implementando este Stack de páginas, si nosotros venimos de React.js de la web, debemos recordar que cuando usabamos la navegación propia de React Router DOM, en los props, vamos a tener toda la información de la ruta, aquí en React-Native con el Stack Navigation sucede exactamente igual.

  // console.log( navigation );//<= Nosotros no estamos mandando ningun argumento en los props(properties del componente Pagina1Screen), pero de forma automática y por defecto, las properties las está colocando en nuestro functional component, StackNavigator, del archivo StackNavigator.tsx.

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina1Screen </Text>

      <Button
        title='Ir a página 2'
        onPress={() => navigation.navigate('Pagina2Screen')}//<= Aquí necesito llamar a esa función navigate, para navegar entre las pantallas y le colocamos el valor del atributo name, que asignamos a esa Screen que queremos navegar.
      />

      <Text style={{ color: 'black' }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}//<= Para mandar argumentos a una navigation, se les pasa como 2 argumento en el navigation.navigate = onPress={ () => navigation.navigate('PersonaScreen', {2 argumento = objeto}) }
        >
          <Text style={ styles.botonGrandeTexto }> Pedro </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}//<= Para mandar argumentos a una navigation, se les pasa como 2 argumento en el navigation.navigate = onPress={ () => navigation.navigate('PersonaScreen', {2 argumento = objeto}) }
        >
          <Text style={ styles.botonGrandeTexto }> Maria </Text>
        </TouchableOpacity>

      </View>




    </View>
  )
};
