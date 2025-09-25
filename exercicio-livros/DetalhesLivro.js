import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function DetalhesLivro({ navigation, route }) {
    const { livro } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor:'#666666' }}>
            <View style={styles.container}>
                <Text style={styles.titulo}>{livro.nome}</Text>
                <Text style={styles.autor}>{livro.autor}</Text>
                <View style={styles.containerImagem}>
                <Image source={{ uri: livro.imagem }} style={styles.imagem} />
                </View>

            </View>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
        paddingBottom: 15,
        backgroundColor: 'grey',
        marginBottom: 10,
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: 3,
        borderRadius: 5

    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5
    },
    autor: {
        fontSize: 19,
        color: '#D3D3D3',
    },

    botao: {
        backgroundColor: 'black',
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        alignItems: 'center',
        padding:12,
        borderRadius:5
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold'
    },
    imagem:{
        width: 180, 
        height: 275,
        resizeMode: 'contain', 
        marginTop: 10,
    },
    containerImagem:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});