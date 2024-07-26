import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameBadge = ({ name, position }) => {
    console.log(name, position);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003b7f',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'flex-start',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    color: '#fff',
    fontSize: 14,
  },
});

export default NameBadge;