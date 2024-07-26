import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NameBadge } from "./NameBadge";
const usuarios = {
  31584847:{
    nombre: 'DEYANIRA ZULUAGA',
    cargo: 'JEFE DE PRODUCCION',
    rh: 'O+',
    arl: 'SURA',
    image: require('./assets/images/31584847.png')
  },
  1107530950:{
    nombre: 'JHON ESTEBAN QUEVEDO ELVIRA',
    cargo: 'SUPERNUMERARIO',
    rh: 'O+',
    arl: 'SURA',
    image: require('./assets/images/1107530950.png')
  },
  51924840:{
    nombre: 'MARISOL SERNA DIAZ',
    cargo: 'ADMINISTRADORA',
    rh: 'O+',
    arl: 'SURA',
    image: require('./assets/images/51924840.png')
  },
  6228419:{
    nombre: 'OSCAR EDUARDO MUÑOZ',
    cargo: 'INGENIERO SOPORTE TECNICO',
    rh: 'A+',
    arl: 'SURA',
    image: require('./assets/images/6228419.png')
  },
  1143971845:{
    nombre: 'MAYRA ALEJANDRA MORERA',
    cargo: 'ASISTENTE ADMINISTRATIVO',
    rh: 'O+',
    arl: 'SURA',
    image: require('./assets/images/1143971845.png')
  },
  79419367:{
    nombre: 'OSCAR FERNANDO SOTO MARIN',
    cargo: 'GERENTE',
    rh: 'B+',
    arl: 'SURA',
    image: require('./assets/images/79419367.png')
  }
}
const SearchParams = new URLSearchParams(window.location.search);

const cedula = SearchParams.get('cedula');
export default function App() {
  console.log(usuarios[cedula]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'end', marginLeft: 30}}>
        <Image source={require('./assets/images/IMG7.jpg')} style={styles.imageSuperior1} />
        <Image source={require('./assets/images/IMG5.jpg')} style={styles.imageSuperior2} />
      </View>
      <Image source={require('./assets/images/IMG6.jpg')} style={styles.imageFondo} />
      <ImageSource cedula={cedula} />
      {/* <SafeAreaView>
        <NameBadge name="Oscar Fernando Soto" position="Gerencia" />
      </SafeAreaView> */}
    </View>
  );
}

function ImageSource({cedula}){
  const image = usuarios[cedula].image;
  return <Image source={image} style={styles.image} />
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  imageFondo: {
    width: 350,
    height: 350,
    resizeMode: 'center',
  },
  imageSuperior1: {
    height: 80,
    resizeMode: 'center',
  },
  imageSuperior2: {
    height: 50,
    resizeMode: 'center',
  },
});
