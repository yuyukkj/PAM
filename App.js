import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import ResultCard from './ResultCard';
import AppButton from './AppButton';

export default function App() {

  const [p_etanol, setP_etanol] = useState('');
  const [p_gasolina, setP_gasolina] = useState('');
  const [resultadoFinal, setResultadoFinal] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  function verificarVantagem() {

    setPorcentagem(((p_etanol / p_gasolina) * 100).toFixed(2)) 

    if (p_etanol / p_gasolina < 0.7) {
      return(
      setResultadoFinal('ETANOL')
      );
    } else {
      return(
      setResultadoFinal('GASOLINA')
      );
    };
  

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ETANOL OU GASOLINA</Text>
      <Image style={styles.imagem}
        source={require('./assets/posto_de_gasolina.jpg')}
      />


      <Text style={styles.textoInfo}>Preço do etanol (R$): {p_etanol} </Text>
      <TextInput
        placeholder='Exemplo: 3.67 (R$)'
        placeholderTextColor='gray'
        onChangeText={setP_etanol}
        keyboardType='number-pad'
        maxLength={4}
      />


      <Text style={styles.textoInfo}>Preço da gasolina (R$): {p_gasolina}</Text>
      <TextInput
        placeholder='Exemplo: 5.67 (R$)'
        placeholderTextColor='gray'
        onChangeText={setP_gasolina}
        keyboardType='number-pad'
        maxLength={4}
      />

      <AppButton
        onPress={verificarVantagem}
      />

      <ResultCard
        resultado={resultadoFinal}
        porcentagem={porcentagem}
      />



      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: '100%',
    height: 150,
    maxWidth: 500,
  },
  textoInfo: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,

  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2f3542',
    position: 'absolute',
    top: 50,
  },

});