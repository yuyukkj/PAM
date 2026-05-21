import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [contador, setContador] = useState(0);

 const avisar = () => {
   Alert.alert("Alerta!!!!!!")
 };

 const [p_etanol, setP_etanol] = useState('');
 const [p_gasolina, setP_gasolina] = useState('');

 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ETANOL OU GASOLINA</Text>
      <Image style={styles.imagem}
      source= {require('./assets/posto_de_gasolina.jpg')}
      />
      
      <Text style={styles.textoInfo}>Preço do etanol (R$): {p_etanol} </Text> 
      <TextInput
      placeholder='Exemplo: 3.67 (R$)' 
      placeholderTextColor='gray'
      onChangeText={setP_etanol}
      keyboardType='number-pad'
      />
      <Text style={styles.textoInfo}>Preço da gasolina (R$): {p_gasolina}</Text>
      <TextInput
      placeholder='Exemplo: 5.67 (R$)' 
      placeholderTextColor='gray'
      onChangeText={setP_gasolina}
      keyboardType='number-pad'
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
    width : '100%',
    height : 150,
  },
  textoInfo: {
    fontSize: 20,
    
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2f3542',
    position: 'absolute',
    top: 75,
  },
  contador: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#2f3542',
  },
  botao: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});