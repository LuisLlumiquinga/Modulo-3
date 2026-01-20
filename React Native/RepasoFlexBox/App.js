import { Button, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}>
        <Button title='X'/>
        <Button title='Y'/>
        <Button title='Z'/>
      </View>
      <View style={styles.contenedor3}>
        <View style={styles.contenedor5}>
          <View style={styles.contenedor7}>
            <Button title='BOTON 1'/>
            <Button title='BOTON 2'/>
          </View>
          <View style={styles.contenedor8}>
            <Button title='OPERACION 1'/>
            <Button title='OPERACION 2'/>
            <Button title='OPERACION 3'/>
          </View>
        </View>
        <View style={styles.contenedor6}>
          <Button title='ACCION 1'/>
          <Button title='ACCION 2'/>
        </View>
      </View>
      <View style={styles.contenedor4}>
        <Button title='BOTON FINAL'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa2a2',
    justifyContent: 'center',
  },
  contenedor2:{
    flex:1,
    backgroundColor:'#4bd1f2',
    flexDirection:'row',        //eje principal (horizontal)
    justifyContent:'flex-end',  //eje principal (horizontal)
    alignItems:'center'         //eje secundario (vertical)
  },
  contenedor3:{
    flex:6,
    backgroundColor:'#67f24b'
  },
  contenedor4:{
    flex:1,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  contenedor5:{
    flex:4,
    backgroundColor:'#f24bb2',
    flexDirection:'row'
  },
  contenedor6:{
    flex:1,
    backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  contenedor7:{
    flex:1,
    backgroundColor:'yellow',
    justifyContent:'space-around'
  },
  contenedor8:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'flex-start'
  }
});
