import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {
  const [valor, setValor]=useState("Ingrese el valor en dolares");
  const [resultado, setResultado]=useState();

  return (
    <View style={styles.container}>
      <Text>CONVERTIDOR</Text>

      <TextInput
        style={styles.cajaTexto}
        value={valor}
        onChangeText={(txt)=>{
          setValor(txt);
        }}
      />

      <Button
        title='PESOS MEXICANOS'
        onPress={()=>{
          let resPM=parseFloat(valor)*17;
          setResultado(resPM);
        }}
      />

      <Button
        title='PESOS COLOMBIANOS'
        onPress={()=>{
          let resPC=parseFloat(valor)*4000;
          setResultado(resPC);
        }}
      />

      <Button
        title='EUROS'
        onPress={()=>{
          let resE=parseFloat(valor)*0.92;
          setResultado(resE);
        }}
      />

      <Text>Conversion: {resultado}</Text>
      <StatusBar style="auto" />
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
    cajaTexto:{
    borderColor:'black',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:100
  }
});
