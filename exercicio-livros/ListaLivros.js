import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Button, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';

const livros = [
  { id: '1', nome: 'Berserk Vol. 28: Edição de Luxo', autor: 'Kentaro Miura', imagem: 'https://m.media-amazon.com/images/I/71PcaR33H2S._SY466_.jpg' },
  { id: '2', nome: 'Neon Genesis Evangelion Collectors Edition Vol. 01', autor: 'Yoshiyuki Sadamoto', imagem: 'https://m.media-amazon.com/images/I/81mPLnHnLWL._SY342_.jpg' },
  { id: '3', nome: 'It - A Coisa', autor: 'Stephen King ', imagem: 'https://m.media-amazon.com/images/I/91g9Dvtf+jL._SY342_.jpg' }
];

export default function ListaLivros({ navigation }) {
  return (
    <ScrollView>
    <View style={{backgroundColor:'#666666' }}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.autor}>Autor: {item.autor}</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Detalhes', { livro: item })}
            >
            <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    padding: 20,
    paddingBottom: 15,         
    backgroundColor: 'grey',
    marginBottom: 10,
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 5

  },
  titulo: {
    fontSize: '150%',
    fontWeight: 'bold',
    marginBottom: 5
  },
  autor: {
    fontSize: '100%',
    color: '#555',
    fontWeight:'bold'
  },
botao: {
    backgroundColor:'black',
    alignItems:'center',
    padding: 10,
    alignSelf:'flex-end',
    borderRadius: 10,
    marginTop: 15
},
textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
}
});

