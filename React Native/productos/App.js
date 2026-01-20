import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

let productos = [
  {nombre:"Doritos", categoría:"Snacks", precioCompra:0.40, precioVenta:0.45, id:100},
  {nombre:"Manicho", categoría:"Golosinas", precioCompra:0.20, precioVenta:0.25, id:101},
  {nombre:"Papas", categoría:"Snacks", precioCompra:0.30, precioVenta:0.35, id:102},
  {nombre:"Colas", categoría:"Gaseosas", precioCompra:0.50, precioVenta:0.55, id:103},
  {nombre:"Pan", categoría:"Comida", precioCompra:0.10, precioVenta:0.15, id:104}

]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.titulo}>PRODUCTOS</Text>
      </View>
      
      <FlatList
        data={productos}
        renderItem={(obj) => {
          return (
            <View style={styles.itemPersona}>
              <Text style={styles.textoPrincipal}>{obj.item.nombre} ({obj.item.categoría})</Text>
              <Text style={styles.textoSecundario}>{obj.item.precioVenta}</Text>
            </View>
          );
        }}
        keyExtractor={(item)=>{
          return item.id
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',   //eje principal vertical
    justifyContent:'flex-start',
    alignItems:'stretch',
    paddingTop: 70,
    paddingHorizontal: 10
  },
  titulo:{
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  itemPersona:{
    backgroundColor:'#78c6ed',
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderRadius:10
  },
  textoPrincipal:{
    fontSize:20
  },
  textoSecundario:{
    fontSize:16,
    fontWeight:'bold'
  }
});
