import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

let productos = [
  { nombre: "Doritos", categoría: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: "Manicho", categoría: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { nombre: "Papas", categoría: "Snacks", precioCompra: 0.30, precioVenta: 0.35, id: 102 },
  { nombre: "Colas", categoría: "Gaseosas", precioCompra: 0.50, precioVenta: 0.55, id: 103 },
  { nombre: "Pan", categoría: "Comida", precioCompra: 0.10, precioVenta: 0.15, id: 104 }

]

//esNuevo indica si se esta creando una nueva persona o se esta modificando una existente
let esNuevo = true;

//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;

export default function App() {
  const [txtCodigo, setTxtCodigo] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numElementos, setNumElementos] = useState(productos.length)

  let ItemProducto = (props) => {
    return (
      <View style={styles.itemProducto}>
        <View style={styles.itemIndice}>
          <Text>{props.producto.id}</Text>
        </View>

        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {props.producto.nombre}
          </Text>
          <Text style={styles.textoSecundario}>
            {props.producto.categoría}
          </Text>
        </View>

        <View style={styles.precio}>
          <Text style={styles.textoPrecio}>
            {props.producto.precioVenta}
          </Text>
        </View>

        <View style={styles.itemBotones}>
          <Button
            title=' E '
            color='green'
            onPress={() => {
              setTxtCodigo(props.producto.id.toString());
              setTxtNombre(props.producto.nombre);
              setTxtCategoria(props.producto.categoría);
              setTxtPrecioCompra(props.producto.precioCompra.toString());
              setTxtPrecioVenta(props.producto.precioVenta.toString());
              esNuevo = false;
              indiceSeleccionado = props.indice;
            }}
          />
          <Button
            title=' X '
            color='red'
            onPress={() => {
              indiceSeleccionado = props.indice;
              productos.splice(indiceSeleccionado, 1);
              setNumElementos(productos.length);
            }}
          />
        </View>
      </View>
    );
  }

  let limpiar = () => {
    setTxtCodigo(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    esNuevo = true;
  }

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == txtCodigo) {
        return true;
      }
    }
    return false;
  }

  let guardarProducto = () => {
    if (!txtCodigo || !txtNombre || !txtCategoria || !txtPrecioCompra || !txtPrecioVenta) {
      Alert.alert("ERROR", "Todos los campos son obligatorios");
      return;
    }

    if (esNuevo) {
      if (existeProducto()) {
        Alert.alert("INFO", "Ya existe un producto el codigo " + txtCodigo);
      } else {
        let producto = { nombre: txtNombre, categoría: txtCategoria, precioCompra: txtPrecioCompra, precioVenta: txtPrecioVenta, id: txtCodigo };
        productos.push(producto);
      }
    } else {
      productos[indiceSeleccionado].nombre = txtNombre;
      productos[indiceSeleccionado].categoría = txtCategoria;
      productos[indiceSeleccionado].precioCompra = parseFloat(txtPrecioCompra);
      productos[indiceSeleccionado].precioVenta = parseFloat(txtPrecioVenta);
      productos[indiceSeleccionado].id = parseFloat(txtCodigo);
    }
    limpiar();
    setNumElementos(productos.length);
  }

  let calcularPrecioVenta = (precioCompra) => {
    let precioNumerico = parseFloat(precioCompra);

    if (!isNaN(precioNumerico)) {
      let ganancia = precioNumerico * 0.2;
      let total = precioNumerico + ganancia;
      setTxtPrecioVenta(total.toFixed(2).toString());
    } else {
      setTxtPrecioVenta('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>PRODUCTOS</Text>

        <TextInput
          style={styles.txt}
          value={txtCodigo}
          placeholder='CODIGO'
          onChangeText={setTxtCodigo}
          keyboardType='numeric'
          editable={esNuevo}
        />

        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='NOMBRE'
          onChangeText={setTxtNombre}
        />

        <TextInput
          style={styles.txt}
          value={txtCategoria}
          placeholder='CATEGORIA'
          onChangeText={setTxtCategoria}
        />

        <TextInput
          style={styles.txt}
          value={txtPrecioCompra}
          placeholder='PRECIO DE COMPRA'
          onChangeText={(texto) => {
            const valorLimpio = texto.replace(',', '.');
            setTxtPrecioCompra(valorLimpio);

            setTxtPrecioCompra(valorLimpio);
            calcularPrecioVenta(valorLimpio);
          }}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.txt}
          value={txtPrecioVenta}
          placeholder='PRECIO DE VENTA'
          editable={false}

        />

        <View style={styles.areaBotones}>
          <Button
            title='NUEVO'
            onPress={() => {
              limpiar();
            }}
          />

          <Button
            title='GUARDAR'
            onPress={() => {
              guardarProducto();
            }}
          />

          <Text>Productos: {numElementos}</Text>
        </View>

      </View>

      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={productos}
          renderItem={(obj) => {
            return <ItemProducto indice={obj.index} producto={obj.item} />
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>

      <View style={styles.areaPie}>
        <Text>Autor: Luis Llumiquinga</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',   //eje principal vertical
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista: {
    //backgroundColor: 'lightpink'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemProducto: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5
  },
  textoPrincipal: {
    fontSize: 16
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16
  },
  areaCabecera: {
    flex: 4,
    //backgroundColor: 'chartreuse',
    justifyContent: 'center'
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral'
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemIndice: {
    //backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  },
  itemContenido: {
    //backgroundColor: 'darkorange',
    flex: 6,
    paddingLeft: 5
  },
  itemBotones: {
    //backgroundColor: 'darkorange',
    flex: 2,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  precio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPrecio: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});


/*
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
*/