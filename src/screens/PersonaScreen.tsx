import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';

//Clase seccion 7:Diferentes formas de colocar el tipo de dato de los argumentos.
// interface RouterParams {
//     id: number;
//     nombre: string;
// }


//Esta es la forma para obtener los params, que no se recomienda, pero puede ayudarnos bastante:
//Nuestro ParamListBase es nuestro type RootStackParams que definimos en StackNavigator.tsx
//Esto es lo que recomienda la gente de React Navigator.
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};//<= El 1 argumento es el type que creamos y el 2 argumento es la ruta en donde nos encontramos.

export const PersonaScreen = ( { route, navigation }: Props ) => {

    // console.log(JSON.stringify(props, null, 3));

    //El problema con esto es que no sabemos de que type es y si vienen o no las propiedades que destructuring
    // const { id, nombre } = route.params;
    // const params = route.params as RouterParams;//<=Esto es una forma de colocarle el type rápido a cualquier cosa en caso que necesitemos colocar el type rápido. Pero no es la forma correcta y la forma limpia la haremos en el archivo StackNavigator.tsx

    const params = route.params;
    
    useEffect( () => {
        
        navigation.setOptions({
            title: params.nombre//<= El signo ! = decirle a typescript que sabemos lo que estamos haciendo.
        })
    
    }, [])
    
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            {
                JSON.stringify( params, null, 3 )
            }
        </Text>
    </View>
  )
}
