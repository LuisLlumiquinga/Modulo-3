import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}></View>
      <View style={styles.contenedor3}>
        <View style={styles.contenedor4}></View>
        <View style={styles.contenedor5}>
          <View style={styles.contenedor6}></View>
          <View style={styles.contenedor7}>
            <Button title='BOTON 1'/>
            <Button title='BOTON 2'/>
            <Button title='BOTON 3'/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection:'column'
  },
  contenedor2:{
    flex:1,
    backgroundColor:'blue',
    flexDirection:'column'
  },
  contenedor3:{
    flex:3,
    backgroundColor:'green',
    flexDirection:'column'
  },
  contenedor4:{
    flex:1,
    backgroundColor:'yellow',
    flexDirection:'column'
  },
  contenedor5:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'row'
  },
  contenedor6:{
    flex:1,
    backgroundColor:'orange',
    flexDirection:'column'  //column, valor por defecto
  },
  contenedor7:{
    flex:2,
    backgroundColor:'purple',
    flexDirection:'column',    //eje principal (VERTICAL)
    justifyContent:'space-around',   // centrado vertical (principal)
    alignItems:'stretch'       //ocupa todo el espacio horizontal (secundario)
  }
});
