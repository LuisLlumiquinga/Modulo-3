import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [num1, setNum1]=useState("num1");
  const [num2, setNum2]=useState("num2");
  const [resultado, setResultado]=useState("0");

  return (
    <View style={styles.container}>
      <Text>Reto 22 - Ejercicio Calculadora</Text>

      <TextInput
        style={styles.cajaTexto}
        value={num1}
        onChangeText={(txt)=>{
          setNum1(txt);
        }}
      />

      <TextInput
        style={styles.cajaTexto}
        value={num2}
        onChangeText={(txt)=>{
          setNum2(txt);
        }}
      />

      <Button
        title='SUMAR'
        onPress={()=>{
          let resultadoSuma=parseInt(num1)+parseInt(num2);
          setResultado(resultadoSuma);
        }}
      />

      <Button
        title='RESTAR'
        onPress={()=>{
          let resultadoResta=parseInt(num1)-parseInt(num2);
          setResultado(resultadoResta);
        }}
      />

      <Button
        title='MULTIPLICAR'
        onPress={()=>{
          let resultadoMul=parseInt(num1)*parseInt(num2);
          setResultado(resultadoMul);
        }}
      />

      <Button
        title='DIVIDIR'
        onPress={()=>{
          let resultadoDiv=parseFloat(num1)/parseFloat(num2);
          setResultado(resultadoDiv);
        }}
      />

      <Text>Resultado: {resultado}</Text>

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
