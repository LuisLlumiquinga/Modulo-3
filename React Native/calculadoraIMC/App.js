import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [estatura, setEstatura]=useState();
  const [peso, setPeso]=useState();
  const [IMC, setIMC]=useState(0);
  const [res, setRes]=useState();

  const calcularIMC = () => {
    let estaturaM = parseFloat(estatura) / 100;
    let imcCalculado = parseFloat(peso) / (estaturaM * estaturaM);
    
    setIMC(imcCalculado);

    if (imcCalculado < 18.5) {
      setRes('Su peso es inferior al normal');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setRes('Su peso es normal');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setRes('Su peso es superior al normal');
    } else if (imcCalculado >= 30) {
      setRes('Tiene obesidad');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <TextInput
        style={styles.caja}
        value={estatura}
        onChangeText={setEstatura}
        placeholder='Ingrese su estatura en cm'
      />

      <TextInput
        style={styles.caja}
        value={peso}
        onChangeText={setPeso}
         placeholder='Ingrese su peso en kg'
      />

      <Button
        title='Calcular IMC'
        onPress={calcularIMC}
      />

      <Text style={styles.titulo}>Su IMC es: {IMC.toFixed(2)}</Text>
      <Text style={styles.titulo}>{res}</Text>
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',     //eje principal (vertical)
    justifyContent:'center',
    alignItems:'stretch',
    paddingHorizontal: 10
  },
  caja:{
    borderColor:'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
    marginBottom:10
  },
  titulo:{
    fontSize:16,
    marginBottom:10,
    fontWeight:'bold'
  }
});
