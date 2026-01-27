import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Importar las pantallas
import ProductosScreen from './screens/ProductosScreen';
import FinalizarSesionScreen from './screens/FinalizarSesionScreen';
import ContenidoA from './screens/ContenidoA';
import ContenidoB from './screens/ContenidoB';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: 'Configuración',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabContenidoB"
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: 'Acerca De',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlce" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Productos"
      >
        <Drawer.Screen
          name="Productos"
          component={ProductosScreen}
          options={{
            title: 'Productos',
            drawerLabel: 'Productos',
          }}
        />
        <Drawer.Screen
          name="EjemploTabs"
          component={TabNav}
          options={{
            title: 'Ejemplo Tabs',
            drawerLabel: 'Ejemplo Tabs',
          }}
        />
        <Drawer.Screen
          name="FinalizarSesion"
          component={FinalizarSesionScreen}
          options={{
            title: 'Finalizar Sesión',
            drawerLabel: 'Finalizar Sesión',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});