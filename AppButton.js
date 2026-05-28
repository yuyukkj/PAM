import React from 'react-native';
import {TouchableOpacity, StyleSheet, View, Text, } from 'react-native';

  export default function AppButton({onPress}){
    return(
      <TouchableOpacity style={styles.botao} onPress={onPress}> 
        <Text style={styles.textoBotao}> VERIFICAR VANTAGEM </Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create ({
    botao: {
    backgroundColor: '#002347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
    margin: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  });
