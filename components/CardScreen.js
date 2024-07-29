import React from 'react';
import { View, Image, StyleSheet, StatusBar, Text } from 'react-native';

const usuarios = {
    31584847:{
      nombre: 'DEYANIRA ZULUAGA',
      cargo: 'JEFE DE PRODUCCION',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/images/31584847.png')
    },
    1107530950:{
      nombre: 'JHON ESTEBAN QUEVEDO ELVIRA',
      cargo: 'SUPERNUMERARIO',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/images/1107530950.png')
    },
    51924840:{
      nombre: 'MARISOL SERNA DIAZ',
      cargo: 'ADMINISTRADORA',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/images/51924840.png')
    },
    6228419:{
      nombre: 'OSCAR EDUARDO MUÑOZ',
      cargo: 'INGENIERO SOPORTE TECNICO',
      rh: 'A+',
      arl: 'SURA',
      image: require('../assets/images/6228419.png')
    },
    1143971845:{
      nombre: 'MAYRA ALEJANDRA MORERA',
      cargo: 'ASISTENTE ADMINISTRATIVO',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/images/1143971845.png')
    },
    79419367:{
      nombre: 'OSCAR FERNANDO SOTO MARIN',
      cargo: 'GERENTE',
      rh: 'B+',
      arl: 'SURA',
      image: require('../assets/images/79419367.png')
    }
}

export default function CardScreen({ route }) {
    const { cedula } = route.params;
    const user = usuarios[cedula];
  
    if (!user) {
      return (
        <View style={styles.container}>
          <Text>Cédula no encontrada</Text>
        </View>
      );
    }

    const userStyles = cedula === '51924840' ? styles.imageMarisol : styles.imagen;
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginLeft: 10 }}>
          <Image source={require('../assets/images/IMG7.jpg')} style={styles.imageSuperior1} />
          <Image source={require('../assets/images/IMG5.jpg')} style={styles.imageSuperior2} />
        </View>
        <Image source={require('../assets/images/IMG6.jpg')} style={styles.imageFondo} />
        <Image source={user.image} style={userStyles} />

        <View style={styles.nombreContainer}>
            <Text style={styles.nombreTexto}>{user.nombre}</Text>
            <Text style={styles.nombreTexto2}>{user.cargo}</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      position: 'relative',
    },
    imagen: {
      width: 500,
      height: 500,
      resizeMode: 'contain',
      position: 'absolute',
      left: -100,
      bottom: -5
    },
    imageMarisol: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
        position: 'absolute',
        left: -50,
        bottom: -5,
    },
    imageFondo: {
      width: 350,
      height: 350,
      resizeMode: 'center',
      top: -120,
    },
    imageSuperior1: {
      height: 80,
      resizeMode: 'center',
      top: -110,
    },
    imageSuperior2: {
      height: 50,
      resizeMode: 'center',
      top: -110,
    },
    nombreContainer: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 640,
        backgroundColor: '#0059a9',
        padding: 10,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
      },
      nombreTexto: {
        color: 'white',
        fontSize: 25,
      },
      nombreTexto2: {
        color: 'white',
        fontSize: 18,
        textAlign: 'end',
      },
  });