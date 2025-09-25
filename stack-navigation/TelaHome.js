import { Button, View } from "react-native-web";

export default function HomeScreen({navigation}){
    return(
        <View>
            <Text>🏠 Home</Text>
            <Button 
            title='ir para Detalhes'
            onPress={() => navigation.navigate('Detalhes', {produtoId:101})}
            />
        </View>
    )
}