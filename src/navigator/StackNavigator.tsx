import { createStackNavigator } from '@react-navigation/stack';//<=Aquí lo que hace es una importación de una función llamada, createStackNavigator y se crea de esta manera, porque nosotros podemos tener múltiples stack(pilas), a pesar de que podamos decidir tener solo uno. Puede que nosotros necesitemos crear varios stacks y en nuestro caso vamos a crear varios eventualmente con la función const Stack = createStackNavigator();
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


//Esta es la forma limpia de pasar argumentos y aquí en la configuración de nuestro Stack, podemos decirle que páginas va a tener, que argumentos recibe una página y todo de una sola vez:
//Esto lo manejamos como un type(los type se le coloca un =, las interface no), porque no lo vamos a expandir, no le vamos a hacer algo, lo dejaremos plano.
export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: { id: number, nombre: string },//Aquí podemos colocar algún type que ya hayamos definido en otra parte, pero como no lo tenemos, lo podemos definir aquí mismo.
}

const Stack = createStackNavigator<RootStackParams>(); //<= Esta función lo que permite es crear 1 stack, como por así decirlo una nueva baraja de cartas. Este es el Stack que va a tener toda la configuración del type RootStackParams que definimos.

export const StackNavigator = () => {//<= Aquí más o menos es, un functional component(const Componente = () => {}) como cualquier otro que ya hayamos visto, solo que lo está haciendo con la palabra function, en lugar de con const. Pero queda a nuestra discreción y lo que retorna(regresa) es el uso de ese stack = const Stack = createStackNavigator(); o esta nueva baraja que estamos creando. Le pone el .Navigator y adentro de ese .Navigator, define todas las posible rutas de nuestra aplicación o por lo menos de este Stack = const Stack. Sin embargo debemos recordar que no hay límite de Stacks, que nosotros podamos tener, podemos tener cuantos sean necesarios.
  return (
    <Stack.Navigator
      // initialRouteName='Pagina2Screen'
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          //Para android:
          elevation: 0,
          //En IOS no respeta y no entiende la propiedad elevation, pero si entiende el shadowColor
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white',
        }
      }}
    >
      {/* El atributo name dentro de cada <Stack.Screen name="Home" component={ Pagina1Screen } <= en este caso el name es "Home", ese valor de name es "Home" y con ese nombre va a ser con el cual nosotros vamos a identificar o poder navegar a hacia esa ruta o componente. Además como recomendación el mismo nombre que le colocamos al componente, es mismo nombre le colocamos como valor al atributo name de ese componente y de esa forma no tener que memorizarnos el nombre hacia esa ruta/> */}
      <Stack.Screen name="Pagina1Screen" options={{ title: "Página 1" }} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{ title: "Página 2" }} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title: "Página 3" }} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}