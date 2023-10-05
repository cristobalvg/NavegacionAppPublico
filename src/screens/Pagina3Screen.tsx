import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ( { navigation }: Props ) => {
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Pagina3Screen </Text>

    <Button 
      title='Regresar'
      onPress={ () => navigation.goBack() }//<= Podemos usar el pop o el goBack
    />

    <Button 
      title='Ir al Home'
      onPress={ () => navigation.popToTop() }//<= Podemos usar el popToTop para volver a la pantalla principal o la primera que creamos.
    />

  </View>

  )
};
