import React from 'react';
import { View, Image, StyleSheet, StatusBar, Text } from 'react-native';

const usuarios = {
    31584847:{
      nombre: 'DEYANIRA ZULUAGA',
      cargo: 'JEFE DE PRODUCCION',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/qrs/31584847.png')
    },
    1107530950:{
      nombre: 'JHON ESTEBAN QUEVEDO ELVIRA',
      cargo: 'SUPERNUMERARIO',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/qrs/1107530950.png')
    },
    51924840:{
      nombre: 'MARISOL SERNA DIAZ',
      cargo: 'ADMINISTRADORA',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/qrs/51924840.png')
    },
    6228419:{
      nombre: 'OSCAR EDUARDO MUÑOZ',
      cargo: 'INGENIERO SOPORTE TECNICO',
      rh: 'A+',
      arl: 'SURA',
      image: require('../assets/qrs/6228419.png')
    },
    1143971845:{
      nombre: 'MAYRA ALEJANDRA MORERA',
      cargo: 'ASISTENTE ADMINISTRATIVO',
      rh: 'O+',
      arl: 'SURA',
      image: require('../assets/qrs/1143971845.png')
    },
    79419367:{
      nombre: 'OSCAR FERNANDO SOTO MARIN',
      cargo: 'GERENTE',
      rh: 'B+',
      arl: 'SURA',
      image: require('../assets/qrs/79419367.png')
    }
}

export default function QRScreen({ route }) {
    const { cedula } = route.params;
    const user = usuarios[cedula];
  
    if (!user) {
      return (
        <View style={styles.container}>
          <Text>Cédula no encontrada</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginLeft: 10 }}>
          <Image source={require('../assets/images/IMG7.jpg')} style={styles.imageSuperior1} />
          <Image source={require('../assets/images/IMG5.jpg')} style={styles.imageSuperior2} />
        </View>
        <Image source={require('../assets/images/arr.png')} style={styles.imageFondo2} />
        <Image source={user.image} style={styles.imagen} />

        <View style={styles.nombreContainer}>
            <Text style={styles.nombreTexto}>Este documento es personal e intransferible. En caso de perdida favor devolver a IDencol, Av 2n # 3n-66 o comunicarse al 311 703 3491</Text>
        </View>

        <Image source={require('../assets/images/abj.png')} style={styles.imageFondo} />
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
      width: 200,
      height: 200,
      resizeMode: 'contain',
      position: 'absolute',
      left: 60,
      top: 280,
    },
    imageFondo: {
      width: 230,
      height: 180,
      resizeMode: 'left',
      bottom: -135,
      left: -110,
    },
    imageFondo2: {
      width: 200,
      height: 180,
      resizeMode: 'right',
      top: -260,
      right: -145,

    },
    imageSuperior1: {
      height: 80,
      resizeMode: 'center',
      top: 20,
      width: 407,
    },
    imageSuperior2: {
      height: 50,
      resizeMode: 'center',
      top: 20,
      width: 509,
    },
    nombreContainer: {
        position: 'absolute',
        bottom: 20,
        left: 100,
        top: 500,
        // backgroundColor: '#0059a9',
        padding: 10,
      },
      nombreTexto: {
        color: 'black',
        fontSize: 15,
      },
  });