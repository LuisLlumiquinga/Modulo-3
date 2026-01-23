import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '1478520369' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '1254587890' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '1014254587' }
]

//esNuevo indica si se esta creando una nueva persona o se esta modificando una existente
let esNuevo = true;

//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;

export default function App() {
  const [txtCedula, setTxtCedula] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtApellido, setTxtApellido] = useState();
  const [numElementos, setNumElementos] = useState(personas.length)

  let ItemPersona = ({indice, persona}) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text>{indice}</Text>
        </View>

        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {persona.nombre} {persona.apellido}
          </Text>
          <Text style={styles.textoSecundario}>
            {persona.cedula}
          </Text>
        </View>

        <View style={styles.itemBotones}>
          <Button
            title=' E '
            color='green'
            onPress={() => {
              console.log("Datos:", persona)
              setTxtCedula(persona.cedula);
              setTxtNombre(persona.nombre);
              setTxtApellido(persona.apellido);
              esNuevo = false;
              indiceSeleccionado = indice;
            }}
          />
          <Button
            title=' X '
            color='red'
            onPress={() => {
              indiceSeleccionado = indice;
              personas.splice(indiceSeleccionado, 1);
              setNumElementos(personas.length);
            }}
          />
        </View>
      </View>
    );
  }

  let limpiar = () => {
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  }

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  }

  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("INFO", "Ya existe una persona con la cedula " + txtCedula);
      } else {
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula };
        personas.push(persona);
      }
    } else {
      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }
    limpiar();
    setNumElementos(personas.length);
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>

        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cedula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />

        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtNombre}
        />

        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtApellido}
        />

        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={() => {
              guardarPersona();
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>

      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({index, item}) => {
            return (
              <ItemPersona indice={index} persona={item} />
            );
          }}
          keyExtractor={item => item.cedula}
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
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row'
  },
  textoPrincipal: {
    fontSize: 20
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
    alignItems: 'center'
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
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
