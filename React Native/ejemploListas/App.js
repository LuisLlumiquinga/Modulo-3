import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '1478520369' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '1254587890' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '1014254587' }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PERSONAS</Text>
      <FlatList
        style={styles.lista}
        data={personas}
        renderItem={(obj) => {
          return (
            <View style={styles.itemPersona}>
              <Text style={styles.textoPrincipal}>{obj.index} {obj.item.nombre} {obj.item.apellido}</Text>
              <Text style={styles.textoSecundario}>{obj.item.cedula}</Text>
            </View>
          );
        }}
        keyExtractor={(item)=>{
          return item.cedula
        }}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'column',   //eje principal vertical
    justifyContent:'flex-start',
    alignItems:'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista:{
    backgroundColor:'lightpink'
  },
  itemPersona:{
    backgroundColor:'lemonchiffon',
    marginBottom:10,
    padding:10
  },
  textoPrincipal:{
    fontSize:20
  },
  textoSecundario:{
    fontStyle:'italic',
    fontSize:16
  }
});
