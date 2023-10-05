import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {
  
  //El problema de usar un hook, es que el navigation ya nos lo está mandando el parámetro en el props, ya lo tenemos cargado en el props cargado, aunque no lo utilicemos y el uso del hook que se está implementando, ya esta cargando más nuestro componente. Por lo que usar el props, sería más eficiente que mandar a llamar a una función, como en este caso al hook useNavigation. Pero igual los hooks de react son muy muy muy rápidos y eficientes.
  const navigator = useNavigation();//<= Si estamos en un componente y no le mandamos el navigation, podemos obtener el acceso al navigation, con el mismo hook de React Navigation nos ofrece, el useNavigation()

  //Esto sobreescribe lo que está mandando al padre, esto tiene más peso que el que está establecido de manera global en el StackNavigator
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras'//<= Para solo la flecha de atras de ios/ si mandamos un '', lo va a interpretar con el nombre que tenga el botón de regreso, en el idioma que tenga el teléfono
    })
  }, [])
  
  
  return (

    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Pagina2Screen </Text>

        <Button 
          title='Ir página 3'
          onPress={ () => navigator.navigate('Pagina3Screen' as never) }//<= El error que estás viendo se debe a un problema de inferencia de tipos. El tipo de la función navigator.navigate no está siendo inferido correctamente en este caso. Para solucionar este error, puedes especificar explícitamente el tipo de ruta que estás pasando a navigate. Aquí tienes una forma de hacerlo: onPress={ () => navigator.navigate('Pagina3Screen' as never) } Al agregar as never estás indicando que el tipo de 'Pagina3Screen' es never, lo que resolverá el error de inferencia de tipos. Ten en cuenta que esta solución es un poco "hacky" y puede no ser la más limpia, pero debería funcionar en este caso. Si sigues teniendo problemas o si prefieres una solución más elegante, déjame saber y exploraremos otras opciones.
          
          
          
          
          
          
        />
    </View>
  )
};