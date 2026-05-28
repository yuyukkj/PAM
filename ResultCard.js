import { StyleSheet, Text, View } from 'react-native';
import React from 'react-native';

export default function ResultCard({ resultado, porcentagem}) {
    if (!resultado) {
        return (
        <Text>Escreva um valor!</Text>
        );
    
    };
    return(
    <View style={styles.card}>
        <Text style={styles.texto}> Resultado: </Text>
        <Text style={styles.texto}> {resultado} </Text>
        <Text style={styles.texto}> O etanol está custando {porcentagem}% da gasolina. </Text>
    </View>
    );
    
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 5
    },
    texto: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '600'
    },

});