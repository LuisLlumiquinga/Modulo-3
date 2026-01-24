import { Button, StyleSheet, Text, View } from 'react-native';

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>HOME</Text>
        <View style={styles.botones}>
            <Button
                title='CONTACTOS'
                onPress={() => {
                    navigation.navigate('ContactsNav');
                }}
            />

            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductsNav');
                }}
            />

            
        </View>

        

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fffdfd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
