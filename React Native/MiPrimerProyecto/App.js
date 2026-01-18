import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const despedirse=()=>{
    Alert.alert("MENSAJE", "Adiosito");
  }
  return (
    <View style={styles.container}>
      <Text>Bienvenido al curso de RN LM v3</Text>
      <StatusBar style="auto" />
      <Button
        title='HOLA'
        //funcion que no recibe parametros y no retorna nada
        onPress={()=>{
          Alert.alert("MENSAJE", "Hola desde el boton");
        }}
      />

      <Button
        title='ADIOS'
        onPress={
          despedirse
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
