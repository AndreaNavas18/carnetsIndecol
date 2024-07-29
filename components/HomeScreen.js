// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const usuarios = {
  31584847: {
    nombre: 'DEYANIRA ZULUAGA',
    cargo: 'JEFE DE PRODUCCION',
    rh: 'O+',
    arl: 'SURA',
    image: require('../assets/images/31584847.png'),
  },
  1107530950: {
    nombre: 'JHON ESTEBAN QUEVEDO ELVIRA',
    cargo: 'SUPERNUMERARIO',
    rh: 'O+',
    arl: 'SURA',
    image: require('../assets/images/1107530950.png'),
  },
  51924840: {
    nombre: 'MARISOL SERNA DIAZ',
    cargo: 'ADMINISTRADORA',
    rh: 'O+',
    arl: 'SURA',
    image: require('../assets/images/51924840.png'),
  },
  6228419: {
    nombre: 'OSCAR EDUARDO MUÑOZ',
    cargo: 'INGENIERO SOPORTE TECNICO',
    rh: 'A+',
    arl: 'SURA',
    image: require('../assets/images/6228419.png'),
  },
  1143971845: {
    nombre: 'MAYRA ALEJANDRA MORERA',
    cargo: 'ASISTENTE ADMINISTRATIVO',
    rh: 'O+',
    arl: 'SURA',
    image: require('../assets/images/1143971845.png'),
  },
  79419367: {
    nombre: 'OSCAR FERNANDO SOTO MARIN',
    cargo: 'GERENTE',
    rh: 'B+',
    arl: 'SURA',
    image: require('../assets/images/79419367.png'),
  },
};

export default function HomeScreen({ navigation }) {
    const [cedula, setCedula] = useState('');
  
    const handleSearch = () => {
      if (usuarios[cedula]) {
        navigation.navigate('CardTabs', { cedula });
      } else {
        alert('Cédula no encontrada');
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginLeft: 10 }}>
            <Image source={require('../assets/images/hue.png')} style={styles.imageSuperior1} />
            <Image source={require('../assets/images/hue2.png')} style={styles.imageSuperior2} />
        </View>
        <Text style={styles.title}>Ingrese su cédula:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={cedula}
          onChangeText={setCedula}
          placeholder="Ej. 12345678"
          placeholderTextColor="#aaa"
        />
        <View style={styles.buttonContainer}>
          <Button title="Buscar" onPress={handleSearch} color="#007BFF" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderColor: '#007BFF',
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 20,
      width: '100%',
      paddingHorizontal: 15,
      fontSize: 18,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    buttonContainer: {
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
    },
    imageSuperior1: {
      height: 80,
      resizeMode: 'center',
      top: -20,
      right: 90,
      width: 100
    },
    imageSuperior2: {
      height: 50,
      resizeMode: 'center',
      top: -20,
      right: 90,
      width: 200
    },
  });