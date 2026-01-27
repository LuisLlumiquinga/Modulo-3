import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProductosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Productos</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 1</Text>
          <Text style={styles.productDescription}>
            Descripción del producto 1
          </Text>
        </View>
        <View style={styles.productCard}>
          <Text style={styles.productTitle}>Producto 2</Text>
          <Text style={styles.productDescription}>
            Descripción del producto 2
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000000',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
});